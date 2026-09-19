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

import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}
