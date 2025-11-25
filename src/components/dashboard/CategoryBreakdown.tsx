import React from "react";
import { Transaction } from "../../app/transactions/TransactionsTable";
import { formatCurrency } from "@/lib/format";

type CategoryBreakdownProps = {
  transactions: Transaction[];
};

type CategoryTotal = {
  category: string;
  total: number;
};

function getCategoryTotals(transactions: Transaction[]): CategoryTotal[] {
  const map = new Map<string, number>();

  for (const tx of transactions) {
    // Only count expenses
    if (tx.amount >= 0) continue;

    const current = map.get(tx.category) ?? 0;
    // store as positive number for easier display
    map.set(tx.category, current + Math.abs(tx.amount));
  }

  const entries: CategoryTotal[] = Array.from(map.entries()).map(
    ([category, total]) => ({ category, total })
  );

  // Sort descending by total spent
  entries.sort((a, b) => b.total - a.total);

  return entries;
}

export default function CategoryBreakdown({
  transactions,
}: CategoryBreakdownProps) {
  const totals = getCategoryTotals(transactions);
  const max = totals.length ? totals[0].total : 0;

  return (
    <div className="h-full">
      <div className="mb-4">
        <h2 className="text-sm font-medium text-zinc-100">
          Spending by Category
        </h2>
        <p className="text-xs text-zinc-400">
          Where your money is going this month.
        </p>
      </div>

      {totals.length === 0 ? (
        <p className="text-xs text-zinc-500 italic">
          No expenses yet this month.
        </p>
      ) : (
        <div className="space-y-3">
          {totals.map((row) => {
            const pct = max > 0 ? Math.round((row.total / max) * 100) : 0;

            return (
              <div key={row.category}>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-300">{row.category}</span>
                  <span className="tabular-nums text-zinc-400">
                    {formatCurrency(row.total)}
                  </span>
                </div>

                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                  <div
                    className="h-full rounded-full bg-emerald-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
