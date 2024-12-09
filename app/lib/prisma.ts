import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getCustomers() {
  const customers = await prisma.customer.findMany();
  console.log(customers);
}

getCustomers();
