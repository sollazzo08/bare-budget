import { Transaction } from "../transactions/TransactionsTable";
import { mockTransactions } from "../../lib/mock-data/mock-transactions";
import { formatCurrency } from "@/lib/format";

type BudgetCategory = {
  id: string;
  category: string;
  budget: number;
};

type BudgetRow = {
  id: string;
  category: string;
  budget: number;
  spent: number;
  remaining: number;
};

const budgetCategories: BudgetCategory[] = [
  { id: "1", category: "Groceries", budget: 400 },
  { id: "2", category: "Dining", budget: 150 },
  { id: "3", category: "Shopping", budget: 200 },
  { id: "4", category: "Transport", budget: 120 },
  { id: "5", category: "Housing", budget: 1500 },
];

function getBudgetRows(transactions: Transaction[]): BudgetRow[] {
  // Sum expenses per category
  const spentByCategory = new Map<string, number>();

  for (const tx of transactions) {
    if (tx.amount >= 0) continue; // only count expenses

    const current = spentByCategory.get(tx.category) ?? 0;
    spentByCategory.set(tx.category, current + Math.abs(tx.amount));
  }

  // Build rows from budget categories
  return budgetCategories.map((b) => {
    const spent = spentByCategory.get(b.category) ?? 0;
    const remaining = b.budget - spent;

    return {
      id: b.id,
      category: b.category,
      budget: b.budget,
      spent,
      remaining,
    };
  });
}

function getBudgetSummary(rows: BudgetRow[]) {
  const totalBudgeted = rows.reduce((sum, r) => sum + r.budget, 0);
  const totalSpent = rows.reduce((sum, r) => sum + r.spent, 0);
  const totalRemaining = totalBudgeted - totalSpent;

  return { totalBudgeted, totalSpent, totalRemaining };
}

export default function BudgetsPage() {
  const transactions = mockTransactions;
  const rows = getBudgetRows(transactions);
  const { totalBudgeted, totalSpent, totalRemaining } = getBudgetSummary(rows);

  return (
    <div className="p-8 text-zinc-100">
      <h1 className="text-2xl font-semibold">Budgets</h1>
      <p className="text-sm text-zinc-400">
        Plan your spending and see how much you have left in each category.
      </p>

      {/* Summary row */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
          <p className="text-xs text-zinc-400">Total budgeted</p>
          <p className="mt-2 text-lg font-semibold">
            {formatCurrency(totalBudgeted)}
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
          <p className="text-xs text-zinc-400">Total spent (budgeted)</p>
          <p className="mt-2 text-lg font-semibold">
            {formatCurrency(totalSpent)}
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
          <p className="text-xs text-zinc-400">Remaining</p>
          <p
            className={`mt-2 text-lg font-semibold ${
              totalRemaining < 0 ? "text-red-400" : "text-emerald-400"
            }`}
          >
            {formatCurrency(totalRemaining)}
          </p>
        </div>
      </div>

      {/* Budgets table */}
      <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-medium text-zinc-100">
              Category budgets
            </h2>
            <p className="text-xs text-zinc-400">
              Compare your planned spending to what you&apos;ve actually spent.
            </p>
          </div>

          {/* Placeholder for future add/edit */}
          <button
            type="button"
            className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-100 hover:bg-zinc-800"
          >
            Edit budgets
          </button>
        </div>

        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-zinc-800 text-xs text-zinc-400">
            <tr>
              <th className="py-2 pr-4 font-normal">Category</th>
              <th className="py-2 pr-4 font-normal text-right">Budget</th>
              <th className="py-2 pr-4 font-normal text-right">Spent</th>
              <th className="py-2 pr-4 font-normal text-right">Remaining</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const pctUsed =
                row.budget > 0 ? Math.min(100, (row.spent / row.budget) * 100) : 0;

              return (
                <tr
                  key={row.id}
                  className="border-b border-zinc-900/70 last:border-b-0 hover:bg-zinc-800/40"
                >
                  <td className="py-3 pr-4 align-middle text-zinc-100">
                    {row.category}
                  </td>

                  <td className="py-3 pr-4 text-right align-middle tabular-nums text-zinc-400">
                    {formatCurrency(row.budget)}
                  </td>

                  <td className="py-3 pr-4 text-right align-middle tabular-nums text-zinc-100">
                    {formatCurrency(row.spent)}
                  </td>

                  <td className="py-3 pr-4 text-right align-middle tabular-nums">
                    <span
                      className={
                        row.remaining < 0 ? "text-red-400" : "text-emerald-400"
                      }
                    >
                      {formatCurrency(row.remaining)}
                    </span>

                    {/* Progress bar */}
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                      <div
                        className={`h-full rounded-full ${
                          row.remaining < 0 ? "bg-red-500" : "bg-emerald-500"
                        }`}
                        style={{ width: `${pctUsed}%` }}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}

            {rows.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="py-8 text-center text-xs text-zinc-500 italic"
                >
                  No budgets defined yet. Add some categories to start planning
                  your spending.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
