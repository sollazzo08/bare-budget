import React from "react";

export type Transaction = {
  id: string;
  date: string;
  account: string,
  merchant: string;
  category: string;
  amount: number;
};

type TransactionsTableProps = {
  transactions: Transaction[];
};

export default function TransactionsTable({ transactions }: TransactionsTableProps) {
  return (
    <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">

      <table className="min-w-full text-left text-sm">
        {/* Header */}
        <thead className="border-b border-zinc-800 text-zinc-400">
          <tr>
            <th className="py-2 pr-4 font-normal">Date</th>
            <th className="py-2 pr-4 font-normal">Merchant</th>
            <th className="py-2 pr-4 font-normal">Category</th>
            <th className="py-2 text-right font-normal">Amount</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {transactions.map((tx) => (
            <tr
              key={tx.id}
              className="border-b border-zinc-900/80 last:border-b-0 hover:bg-zinc-800/30"
            >
              <td className="py-2 pr-4 align-middle text-zinc-300">{tx.date}</td>
              <td className="py-2 pr-4 align-middle text-zinc-200">{tx.merchant}</td>
              <td className="py-2 pr-4 align-middle text-zinc-400">{tx.category}</td>

              <td
                className={`py-2 pr-2 text-right align-middle tabular-nums ${
                  tx.amount < 0 ? "text-red-400" : "text-emerald-400"
                }`}
              >
                {tx.amount < 0 ? "-" : "+"}${Math.abs(tx.amount).toFixed(2)}
              </td>
            </tr>
          ))}

          {/* Empty state */}
          {transactions.length === 0 && (
            <tr>
              <td
                colSpan={4}
                className="py-8 text-center text-zinc-500 italic"
              >
                No transactions found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
