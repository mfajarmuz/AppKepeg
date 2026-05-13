import crypto from "node:crypto";

const AUTH_COOKIE = "kp_session";

export type SessionUser = {
  id: string;
  email: string;
  name?: string | null;
  role: "ADMIN";
};

function base64url(input: Buffer | string) {
  const b = Buffer.isBuffer(input) ? input : Buffer.from(input);
  return b
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function sign(payloadB64: string) {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error("AUTH_SECRET is not set");
  const sig = crypto.createHmac("sha256", secret).update(payloadB64).digest();
  return base64url(sig);
}

export function createSessionToken(user: SessionUser) {
  const payload = {
    ...user,
    iat: Date.now(),
  };
  const payloadB64 = base64url(JSON.stringify(payload));
  const sig = sign(payloadB64);
  return `${payloadB64}.${sig}`;
}

export function verifySessionToken(token: string | undefined | null): SessionUser | null {
  if (!token) return null;
  const [payloadB64, sig] = token.split(".");
  if (!payloadB64 || !sig) return null;
  const expected = sign(payloadB64);
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
  try {
    const payload = JSON.parse(Buffer.from(payloadB64.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString());
    return {
      id: payload.id,
      email: payload.email,
      name: payload.name ?? null,
      role: "ADMIN",
    };
  } catch {
    return null;
  }
}

export { AUTH_COOKIE };
