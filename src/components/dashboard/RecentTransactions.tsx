import React from "react";
import Link from "next/link";
import { Transaction } from "../../app/transactions/TransactionsTable";
import { formatCurrency } from "@/lib/format";

type RecentTransactionsProps = {
  transactions: Transaction[];
};

function getRecentTransactions(
  transactions: Transaction[],
  limit: number = 5
): Transaction[] {
  // clone so we don't mutate original
  const copy = [...transactions];

  // assuming ISO-style dates like "2025-11-20"
  copy.sort(
    (a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return copy.slice(0, limit);
}

export default function RecentTransactions({
  transactions,
}: RecentTransactionsProps) {
  const recent = getRecentTransactions(transactions);

  return (
    <div>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-medium text-zinc-100">
            Recent Transactions
          </h2>
          <p className="text-xs text-zinc-400">
            Latest activity across all accounts.
          </p>
        </div>

        <Link
          href="/transactions"
          className="text-xs font-medium text-emerald-400 hover:underline"
        >
          View all
        </Link>
      </div>

      {/* Content */}
      {recent.length === 0 ? (
        <p className="text-xs text-zinc-500 italic">
          No transactions yet.
        </p>
      ) : (
        <ul className="divide-y divide-zinc-900 text-sm">
          {recent.map((tx) => (
            <li
              key={tx.id}
              className="flex items-center justify-between py-2"
            >
              <div>
                <p className="text-zinc-100">{tx.merchant}</p>
                <p className="text-xs text-zinc-500">
                  {tx.category} • {tx.account}
                </p>
              </div>

              <div className="text-right">
                <p
                  className={`tabular-nums ${
                    tx.amount < 0 ? "text-red-400" : "text-emerald-400"
                  }`}
                >
                  {formatCurrency(tx.amount)}
                </p>
                <p className="text-xs text-zinc-500">
                  {tx.date}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
