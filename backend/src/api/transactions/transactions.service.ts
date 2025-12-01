import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export type FrontendTransaction = {
  id: number;
  date: string; // "2025-11-30"
  merchant: string; // description in DB
  account: string; // Account.name
  category: string; // Category.name or "Uncategorized"
  amount: number; // signed: negative = expense, positive = income
};

export const getAllTransactions = async (
  userId: number,
): Promise<FrontendTransaction[]> => {
  const rows = await prisma.transaction.findMany({
    where: { userId },
    include: {
      account: true,
      category: true,
    },
    orderBy: { date: "desc" },
  });

  return rows.map((tx) => ({
    id: tx.id,
    date: tx.date.toISOString().slice(0, 10),
    merchant: tx.description,
    account: tx.account.name,
    category: tx.category?.name ?? "Uncategorized",
    amount: Number(tx.amount),
  }));
};

export type CreateTransactionInput = {
  userId: number;
  accountId: number;
  categoryId?: number;
  budgetId?: number;
  amount: number;
  description: string;
  date: string | Date;
  note?: string;
};

export const addTransaction = async (input: CreateTransactionInput) => {
  const {
    userId,
    accountId,
    categoryId,
    budgetId,
    amount,
    description,
    date,
    note,
  } = input;

  return prisma.transaction.create({
    data: {
      userId,
      accountId,
      categoryId: categoryId ?? null,
      budgetId: budgetId ?? null,
      amount,
      description,
      note,
      date: date instanceof Date ? date : new Date(date),
    },
  });
};
