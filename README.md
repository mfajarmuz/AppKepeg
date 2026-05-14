This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy to Vercel (recommended)

1) Import GitHub repo in Vercel
- Vercel Dashboard → **Add New → Project** → Import `mfajarmuz/AppKepeg`

2) Set Environment Variables (Project → Settings → Environment Variables)
- `DATABASE_URL` = **Supabase Transaction Pooler (6543)** (recommended for runtime on serverless)

Optional (recommended for migrations):
- `DATABASE_URL_DIRECT` = **Supabase Direct (5432)** (DDL/migrations)

Security:
- **Do not commit** `.env` or secrets.
- Never expose `SUPABASE_SERVICE_ROLE_KEY` to the browser.

3) Prisma migrations (important)
- Do **NOT** run `prisma migrate dev` during Vercel build.
- Run migrations separately using `prisma migrate deploy`, e.g.:
  - manually from your machine, or
  - via GitHub Actions before/after deploy.

## Setup (Supabase Postgres)


1) Copy env

```bash
cp .env.example .env
```

2) Set env

- `DATABASE_URL` = Supabase Transaction Pooler (6543) for runtime
- `DATABASE_URL_DIRECT` = Supabase Direct (5432) for Prisma migrate/DDL

Password in URL must be URL-encoded if it contains special chars.

3) Run migrations

```bash
DATABASE_URL="$DATABASE_URL_DIRECT" npx prisma migrate deploy
```

4) Seed default admin

```bash
npm run db:seed
```

5) Run app

```bash
npm run dev
```

Default admin:
- email: `admin`
- password: `admin`
