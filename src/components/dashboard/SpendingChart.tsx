import React from "react";
import { Transaction } from "../../app/transactions/TransactionsTable";
import { formatCurrency } from "@/lib/format";

type SpendingChartProps = {
  transactions: Transaction[];
};

function getSpendingStats(transactions: Transaction[]) {
  // Only look at expenses (amount < 0)
  const byDate = new Map<string, number>();

  for (const tx of transactions) {
    if (tx.amount >= 0) continue; // skip income / transfers
    const current = byDate.get(tx.date) ?? 0;
    byDate.set(tx.date, current + tx.amount);
  }

  const entries = Array.from(byDate.entries());
  const totalSpent = entries.reduce((sum, [, value]) => sum + value, 0);
  const daysWithSpending = entries.length || 1;
  const averagePerDay = totalSpent / daysWithSpending;

  // Sort descending by amount, take top 5 days
  const topDays = entries
    .sort((a, b) => a[1] - b[1])
    .slice(0, 5)
    .map(([date, value]) => ({ date, amount: value }));

  return { totalSpent, averagePerDay, topDays };
}

export default function SpendingChart({ transactions }: SpendingChartProps) {
  const { totalSpent, averagePerDay, topDays } = getSpendingStats(transactions);

  return (
    <div className="h-full">
      <div className="mb-4">
        <h2 className="text-sm font-medium text-zinc-100">
          Spending This Month
        </h2>
        <p className="text-xs text-zinc-400">
          Overview of how much you&apos;ve spent and your biggest days.
        </p>
      </div>

      {/* Summary numbers */}
      <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-xs text-zinc-400">Total spent</p>
          <p className="mt-1 text-base font-semibold text-zinc-100">
            {formatCurrency(totalSpent)}
          </p>
        </div>
        <div>
          <p className="text-xs text-zinc-400">
            Avg per day (spend days)
          </p>
          <p className="mt-1 text-base font-semibold text-zinc-100">
            {formatCurrency(averagePerDay)}
          </p>
        </div>
      </div>

      {/* Simple "top days" list as a stand-in for a chart */}
      <div className="mt-2 rounded-lg border border-zinc-800 bg-zinc-900/60 p-3">
        <p className="mb-2 text-xs font-medium text-zinc-300">
          Top spending days
        </p>
        {topDays.length === 0 ? (
          <p className="text-xs text-zinc-500 italic">
            No spending yet this month.
          </p>
        ) : (
          <ul className="space-y-1 text-xs">
            {topDays.map((day) => (
              <li
                key={day.date}
                className="flex items-center justify-between text-zinc-300"
              >
                <span>{day.date}</span>
                <span className="font-medium">
                  {formatCurrency(day.amount)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Placeholder area where a real chart could go later */}
      {/* <div className="mt-4 flex h-28 items-center justify-center rounded-lg border border-dashed border-zinc-800 text-[11px] text-zinc-500">
        Chart coming soon
      </div> */}
    </div>
  );
}
