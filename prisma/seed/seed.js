const bcryptjs = require("bcryptjs");
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient();

async function main() {
  const email = "admin@kareon.com";
  const password = "Admin123!";
  const passwordHash = await bcryptjs.hash(password, 10);

  await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      passwordHash,
      role: "ADMIN", 
    },
  });

  console.log("✅ Seed listo: admin@kareon.com / Admin123!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
