import { NextResponse } from "next/server";
import { createSessionToken, AUTH_COOKIE } from "@/lib/auth";
import { verifyPassword } from "@/lib/password";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const email = (body?.email ?? "").toString().trim().toLowerCase();
  const password = (body?.password ?? "").toString();

  if (!email || !password) {
    return NextResponse.json({ error: "Email dan password wajib." }, { status: 400 });
  }

  const { prisma } = await import("@/lib/db");

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !verifyPassword(password, user.passwordHash)) {
    return NextResponse.json({ error: "Email atau password salah." }, { status: 401 });
  }

  const token = createSessionToken({ id: user.id, email: user.email, name: user.name, role: "ADMIN" });
  const res = NextResponse.json({ ok: true });
  res.cookies.set(AUTH_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}
