import { NextRequest } from "next/server";

// Same-origin proxy: browser -> /bot-api/* (HTTPS, this site) -> bot API (plain HTTP).
// Needed because an HTTPS page can't call http://host:port directly (mixed content).
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

async function proxy(req: NextRequest, { params }: { params: { path: string[] } }) {
  const origin = (process.env.BOT_API_URL || "").replace(/\/+$/, "");
  if (!origin) {
    return Response.json({ detail: "BOT_API_URL is not set on the server." }, { status: 500 });
  }

  const target = `${origin}/${(params.path || []).join("/")}${req.nextUrl.search}`;

  const headers = new Headers();
  const auth = req.headers.get("authorization");
  if (auth) headers.set("authorization", auth);
  const contentType = req.headers.get("content-type");
  if (contentType) headers.set("content-type", contentType);

  const hasBody = req.method !== "GET" && req.method !== "HEAD";

  try {
    const res = await fetch(target, {
      method: req.method,
      headers,
      body: hasBody ? await req.arrayBuffer() : undefined,
      cache: "no-store",
      redirect: "follow",
    });

    const out = new Headers();
    const resType = res.headers.get("content-type");
    if (resType) out.set("content-type", resType);

    return new Response(res.body, { status: res.status, headers: out });
  } catch (err) {
    console.error("[bot-api proxy] failed to reach bot:", target, err);
    return Response.json({ detail: "Bot API is unreachable." }, { status: 502 });
  }
}

export { proxy as GET, proxy as POST, proxy as PUT, proxy as PATCH, proxy as DELETE };
