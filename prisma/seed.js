import { PrismaClient } from  "@prisma/client";
import fs from "fs";

const prisma = new PrismaClient();

async function main() {
  // Leer el archivo JSON
  const rawData = fs.readFileSync("prisma/data.json", "utf-8");
  const data = JSON.parse(rawData);

  if (!data.products || !Array.isArray(data.products)) {
    throw new Error("El archivo data.json no contiene un array de 'products'");
  }

  await prisma.product.createMany({
    data: data.products.map((product) => ({
      name: product.name,
      description: product.description ?? null,
      price: product.price,
      oldPrice: product.oldPrice ?? null,
      discount: product.discount ?? null,
      image: product.image,
      category: product.category,
    })),
    skipDuplicates: true, // evita error si ya existen productos con el mismo id único
  });
}

main()
  .then(() => console.log("✅ Seed ejecutado correctamente"))
  .catch((e) => {
    console.error("❌ Error ejecutando seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
