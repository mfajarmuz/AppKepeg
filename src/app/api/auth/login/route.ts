import { NextResponse } from "next/server";
import { createSessionToken, AUTH_COOKIE } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const email = (body?.email ?? "").toString().trim().toLowerCase();
  const password = (body?.password ?? "").toString();

  if (!email || !password) {
    return NextResponse.json({ error: "Email dan password wajib." }, { status: 400 });
  }

  // MVP fallback: because DB/docker isn't available on this VPS yet.
  // Default admin credentials (dev only): admin@local / admin
  if (process.env.NODE_ENV !== "production") {
    if (email === "admin@local" && password === "admin") {
      const token = createSessionToken({ id: "dev-admin", email, name: "Admin", role: "ADMIN" });
      const res = NextResponse.json({ ok: true });
      res.cookies.set(AUTH_COOKIE, token, {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
      return res;
    }

    return NextResponse.json(
      { error: "Dev login: gunakan admin@local / admin (DB belum aktif)." },
      { status: 401 }
    );
  }

  return NextResponse.json({ error: "Login production belum dikonfigurasi." }, { status: 501 });
}
