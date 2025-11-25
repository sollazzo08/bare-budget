import { Transaction } from "../app/transactions/TransactionsTable";

export function getOverviewSummary(transactions: Transaction[]) {
  let income = 0;
  let expenses = 0;

  for (const tx of transactions) {
    if (tx.amount > 0) {
      income += tx.amount;
    } else {
      expenses += tx.amount;
    }
  }

  const net = income + expenses;

  return {
    income,
    expenses: Math.abs(expenses),
    net,
  };
}
