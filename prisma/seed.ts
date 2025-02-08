import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  //delete before seeding
  await prisma.elventy.deleteMany();
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      name: 'admin',
      email: 'admin@example.com',
      password: 'admin123',
      type: 'ADMIN',
    },
  });

  await prisma.elventy.create({
    data: {
      name: 'Event 1',
      description: 'This is the first event',
      date: new Date('2022-12-15T10:00:00'),
      userId: user.id,
    },
  });
};

void main().then(async () => {
  await prisma.$disconnect();
});
