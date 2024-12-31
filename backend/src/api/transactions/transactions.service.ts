import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllTransactions = async () => {
  return prisma.transaction.findMany();
}