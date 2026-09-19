/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║                                                                  ║
 * ║   ███╗   ██╗███████╗██╗  ██╗████████╗██████╗ ███████╗██╗   ██╗   ║
 * ║   ████╗  ██║██╔════╝╚██╗██╔╝╚══██╔══╝██╔══██╗██╔════╝██║   ██║   ║
 * ║   ██╔██╗ ██║█████╗   ╚███╔╝    ██║   ██║  ██║█████╗  ██║   ██║   ║
 * ║                                                                  ║
 * ║            © 2026 NextDev — All Rights Reserved                  ║
 * ║                                                                  ║
 * ║   discord    ──  https://discord.gg/mxkke6dP8n                   ║
 * ║   developer  ──  ShadowPlayzYT                                   ║
 * ║                                                                  ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

"use client";

import { SessionProvider } from "next-auth/react";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
