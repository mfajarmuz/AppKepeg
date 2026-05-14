import "dotenv/config";
import { defineConfig } from "prisma/config";

// Default: use DATABASE_URL for runtime (pooler).
// For migrations/DDL, run with DATABASE_URL_DIRECT, e.g.:
//   DATABASE_URL="$DATABASE_URL_DIRECT" npx prisma migrate deploy

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
