const fs = require("fs");
const path = require("path");

const structure = [
  "src/app/(public)/login",
  "src/app/(protected)/dashboard",
  "src/app/api/v1/auth/login",
  "src/app/api/v1/auth/logout",
  "src/app/api/v1/auth/me",

  "src/modules/identity/domain",
  "src/modules/identity/application",
  "src/modules/identity/infrastructure",
  "src/modules/identity/presentation/components",
  "src/modules/identity/presentation/schemas",

  "src/modules/master-data/domain",
  "src/modules/master-data/application",
  "src/modules/master-data/infrastructure",
  "src/modules/master-data/presentation",

  "src/modules/inventory/domain",
  "src/modules/inventory/application",
  "src/modules/inventory/infrastructure",
  "src/modules/inventory/presentation",

  "src/modules/orders/domain",
  "src/modules/orders/application",
  "src/modules/orders/infrastructure",
  "src/modules/orders/presentation",

  "src/modules/delivery/domain",
  "src/modules/delivery/application",
  "src/modules/delivery/infrastructure",
  "src/modules/delivery/presentation",

  "src/modules/incidents/domain",
  "src/modules/incidents/application",
  "src/modules/incidents/infrastructure",
  "src/modules/incidents/presentation",

  "src/modules/tracking/domain",
  "src/modules/tracking/application",
  "src/modules/tracking/infrastructure",
  "src/modules/tracking/presentation",

  "src/lib/auth",
  "src/lib/prisma",
  "src/lib/logger",
  "src/tests/unit",
  "src/tests/integration",
  "src/tests/e2e",
  "docs/decisions",
];

structure.forEach((dir) => {
  fs.mkdirSync(path.join(__dirname, dir), { recursive: true });
});

console.log("✅ Estructura generada correctamente.");
