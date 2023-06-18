const logger = require('../../src/lib/logger');
import bcrypt from 'bcrypt';
import crypto from 'crypto';

/**
 * @param {import('knex')} knex
 */
exports.seed = async (knex) => {

  const password = `A${crypto.randomBytes(15).toString('hex')}?`;


  const user = {
    username: 'testuser',
    email: 'testemail@gmail.com',
    password: await bcrypt.hash(password,10)
  };

  const [createdUser] = await knex('user').insert(user).returning('*');

  logger.info(
    'User created:',
    {
      password,
    },
    createdUser
  );

  await knex('transaction_type').insert([
    {
      name: 'Expense',
    },
    {
      name: 'Income',
    },
    {
      name: 'Transfer',
    },
    {
      name: 'Withdrawal',
    },
    {
      name: 'Deposit',
    },
    {
      name: 'Loan',
    },
    {
      name: 'Refund',
    },
    {
      name: 'Reimbursement',
    },
    {
      name: 'Savings',
    },
    {
      name: 'Investment',
    },
    {
      name: 'Bill Payment',
    },
    {
      name: 'Purchase',
    },
    {
      name: 'Rental',
    },
    {
      name: 'Salary',
    },
  ]);
  
  await knex('tag').insert([
    {
      name: 'Food',
    },
    {
      name: 'Transportation',
    },
    {
      name: 'Utilities',
    },
    {
      name: 'Rent',
    },
    {
      name: 'Mortgage',
    },
    {
      name: 'Entertainment',
    },
    {
      name: 'Travel',
    },
    {
      name: 'Education',
    },
    {
      name: 'Health',
    },
    {
      name: 'Insurance',
    },
    {
      name: 'Shopping',
    },
    {
      name: 'Gifts',
    },
    {
      name: 'Donations',
    },
    {
      name: 'Taxes',
    },
    {
      name: 'Subscriptions',
    },
    {
      name: 'Loans',
    },
    {
      name: 'Investments',
    },
    {
      name: 'Business',
    },
    {
      name: 'Personal',
    },
    {
      name: 'Savings',
    },
  ]);
  
  await knex('account_type').insert([
    {
      name: 'Checking Account',
    },
    {
      name: 'Savings Account',
    },
    {
      name: 'Credit Card',
    },
    {
      name: 'Cash',
    },
    {
      name: 'Investment Account',
    },
    {
      name: 'Loan Account',
    },
    {
      name: 'Retirement Account',
    },
    {
      name: 'Expense Account',
    },
    {
      name: 'Income Account',
    },
    {
      name: 'Virtual Wallet',
    },
    {
      name: 'Money Market Account',
    },
    {
      name: 'Certificate of Deposit (CD)',
    },
    {
      name: 'Trust Account',
    },
    {
      name: 'Joint Account',
    },
    {
      name: 'Business Account',
    },
  ]);
  await knex('category').insert([
    {
      name: 'Groceries',
    },
    {
      name: 'Transportation',
    },
    {
      name: 'Utilities',
    },
    {
      name: 'Housing',
    },
    {
      name: 'Entertainment',
    },
    {
      name: 'Travel',
    },
    {
      name: 'Education',
    },
    {
      name: 'Healthcare',
    },
    {
      name: 'Insurance',
    },
    {
      name: 'Shopping',
    },
    {
      name: 'Gifts',
    },
    {
      name: 'Donations',
    },
    {
      name: 'Taxes',
    },
    {
      name: 'Debt Repayment',
    },
    {
      name: 'Investments',
    },
    {
      name: 'Business Expenses',
    },
    {
      name: 'Personal Care',
    },
    {
      name: 'Pets',
    },
    {
      name: 'Miscellaneous',
    },
  ]);
    // Inserting an Account
const account = {

  name: 'My Checking Account',
  balance: 5000,
  user_id: 1, // Assuming user_id 1 exists in the 'user' table
  account_type_id: 1, // Assuming account_type_id 1 corresponds to 'Checking Account' in the 'account_type' table
};

await knex('account').insert(account);

// Inserting a Transaction
const transaction = {
  amount: -100,
  date: '2023-06-01',
  note: 'Grocery shopping',
  category_id: 1, // Assuming category_id 1 corresponds to 'Groceries' in the 'category' table
  transaction_type_id: 1, // Assuming transaction_type_id 1 corresponds to 'Expense' in the 'transaction_type' table
  account_id: 1,
  user_id: 1, // Assuming user_id 1 exists in the 'user' table
};

await knex('transaction').insert(transaction);
};
