import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create dummy account types
  const accountType1 = await prisma.accountType.create({
    data: {
      name: 'Checking',
    },
  });

  const accountType2 = await prisma.accountType.create({
    data: {
      name: 'Savings',
    },
  });

  // Create dummy users
  const user1 = await prisma.user.create({
    data: {
      username: 'john_doe',
      email: 'john@example.com',
      password: 'password123',
      last_login: new Date(),
      deleted_at: new Date()
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: 'jane_doe',
      email: 'jane@example.com',
      password: 'password123',
      last_login: new Date(),
      deleted_at: new Date(),
    },
  });

  // Create dummy accounts
  const account1 = await prisma.account.create({
    data: {
      name: 'John\'s Checking Account',
      balance: 1000,
      user_id: user1.id,
      account_type_id: accountType1.id,
    },
  });

  const account2 = await prisma.account.create({
    data: {
      name: 'Jane\'s Savings Account',
      balance: 5000,
      user_id: user2.id,
      account_type_id: accountType2.id,
    },
  });

  // Create dummy categories
  const category1 = await prisma.category.create({
    data: {
      name: 'Groceries',
    },
  });

  const category2 = await prisma.category.create({
    data: {
      name: 'Entertainment',
    },
  });

// Create dummy transaction types
  const transactionType1 = await prisma.transactionType.create({
    data: {
      name: 'Income',
    },
  });

  const transactionType2 = await prisma.transactionType.create({
    data: {
      name: 'Expense',
    },
  });

  // Create dummy budgets
  const budget1 = await prisma.budget.create({
    data: {
      name: 'Monthly Groceries',
      amount: 500,
      user_id: user1.id,
    },
  });

  const budget2 = await prisma.budget.create({
    data: {
      name: 'Monthly Entertainment',
      amount: 200,
      user_id: user2.id,
    },
  });

  // Create dummy transactions
  await prisma.transaction.create({
    data: {
      amount: 50,
      description: 'Grocery shopping',
      date: new Date(),
      user_id: user1.id,
      category_id: category1.id,
      account_id: account1.id,
      budget_id: budget1.id,
      transaction_type_id: transactionType1.id, // Add appropriate transaction type id
    },
  });

  await prisma.transaction.create({
    data: {
      amount: 30,
      description: 'Movie night',
      date: new Date(),
      user_id: user2.id,
      category_id: category2.id,
      account_id: account2.id,
      budget_id: budget2.id,
      transaction_type_id: transactionType2.id, // Add appropriate transaction type id
      deleted_at: new Date(),
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });