import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create a user
  const user = await prisma.user.create({
    data: {
      username: "mike",
      email: "mike@example.com",
      passwordHash: "test-password", // replace when auth added
    },
  });

  // Create accounts for the user
  const checking = await prisma.account.create({
    data: {
      userId: user.id,
      name: "TD Checking",
      type: "checking",
      balance: 500, // optional; I might compute this later
    },
  });

  const savings = await prisma.account.create({
    data: {
      userId: user.id,
      name: "TD High Yield Savings",
      type: "savings",
      balance: 1500,
    },
  });

  // Create some categories
  const groceries = await prisma.category.create({
    data: {
      userId: user.id,
      name: "Groceries",
    },
  });

  const dining = await prisma.category.create({
    data: {
      userId: user.id,
      name: "Dining",
    },
  });

  const utilities = await prisma.category.create({
    data: {
      userId: user.id,
      name: "Utilities",
    },
  });

  // Create a budget for the month
  const novemberBudget = await prisma.budget.create({
    data: {
      userId: user.id,
      name: "Groceries Budget",
      month: new Date("2025-11-01"),
      amount: 400,
    },
  });

  // Seed some transactions
  await prisma.transaction.createMany({
    data: [
      {
        userId: user.id,
        accountId: checking.id,
        categoryId: groceries.id,
        amount: -62.45,
        description: "Walmart",
        date: new Date("2025-11-25"),
      },
      {
        userId: user.id,
        accountId: checking.id,
        categoryId: dining.id,
        amount: -18.99,
        description: "Chipotle",
        date: new Date("2025-11-28"),
      },
      {
        userId: user.id,
        accountId: savings.id,
        categoryId: utilities.id,
        amount: -75.0,
        description: "Electric Bill",
        date: new Date("2025-11-15"),
      },
      {
        userId: user.id,
        accountId: checking.id,
        amount: 1500.0,
        description: "Paycheck",
        date: new Date("2025-11-01"),
      },
    ],
  });

  console.log("🌱 Seed complete!");
}

main()
  .catch((err) => {
    console.error("Seed failed:");
    console.error(err);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
