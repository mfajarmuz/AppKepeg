import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../src/lib/password";

const prisma = new PrismaClient();

async function main() {
  const email = "admin@local";
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log("Admin already exists:", email);
    return;
  }

  await prisma.user.create({
    data: {
      email,
      name: "Admin",
      passwordHash: hashPassword("admin"),
      role: "ADMIN",
    },
  });

  console.log("Seeded admin:", email, "password=admin");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
