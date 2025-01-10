import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllTransactions = async () => {
  return prisma.transaction.findMany();
}

export const addTransaction = async (data: Prisma.TransactionCreateInput) => {
  return prisma.transaction.create({data});
}
