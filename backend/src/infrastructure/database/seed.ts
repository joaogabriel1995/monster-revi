// backend/prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.monster.deleteMany();

  const monsters = await prisma.monster.createMany({
    data: [
      {
        name: 'Goblin',
        attack: 10,
        defense: 5,
        hp: 30,
        speed: 12,
        image_url: 'https://as1.ftcdn.net/v2/jpg/00/42/19/70/1000_F_42197066_aigiZf1P60VUB9YKfrttLq4GxCa1iYT9.jpg',
      },
      {
        name: 'Orc',
        attack: 15,
        defense: 10,
        hp: 45,
        speed: 8,
        image_url: 'https://as1.ftcdn.net/v2/jpg/10/26/71/84/1000_F_1026718440_wRuoOlBTpBVlZAtmdcNwvAG103Q82kEr.jpg',
      },
      {
        name: 'Dragão',
        attack: 25,
        defense: 20,
        hp: 100,
        speed: 15,
        image_url: 'https://as1.ftcdn.net/v2/jpg/10/26/69/94/1000_F_1026699469_V2gxONAXJNsWtgfkCI3HQCYMdpexHB4m.jpg',
      },
      // adicione quantos quiser...
    ],
  });

  console.log(`🌱 Seed dos monstros criada (${monsters.count} registros).`);
}

main()
  .catch((e) => {
    console.error('Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
