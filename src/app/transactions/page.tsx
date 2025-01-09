import React from 'react';

interface Transaction {
  id: number;
  amount: number;
  description: string;
  date: string;
}
//TODO Figure out how to get onClick working inside this severside componenot. There is an issue with onClick since it is a client facing component
async function fetchTransactions(): Promise<Transaction[]> {
  const res = await fetch('http://localhost:5050/api/v2/transactions');
  if (!res.ok) {
    throw new Error('Failed to fetch transactions');
  }
  return res.json();
}

export default async function TransactionsPage() {
  const transactions = await fetchTransactions();

  return (
<div className="flex flex-col items-center justify-center min-h-screen p-4">
  <h1 className="text-2xl font-bold text-center text-blue-500 mb-4">Transactions Page</h1>

  {/* Add Transaction Button */}
  <button
    className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
  >
    Add Transaction
  </button>

  {/* Transaction List */}
  <ul className="w-full max-w-md">
    {transactions.map((transaction) => (
      <li key={transaction.id} className="border-b border-gray-300 py-2">
        <p className="text-lg">{transaction.description}</p>
        <p className="text-sm text-gray-600">Amount: ${transaction.amount}</p>
        <p className="text-sm text-gray-600">Date: {new Date(transaction.date).toLocaleDateString()}</p>
      </li>
    ))}
  </ul>
</div>
  );
}
