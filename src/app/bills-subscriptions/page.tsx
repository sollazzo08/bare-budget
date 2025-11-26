import { formatCurrency } from "@/lib/format";
import { recurringExpenses, RecurringExpense } from "@/lib/mock-data/mock-recurring-expenses";

function getSummary(expenses: RecurringExpense[]) {
  const totalMonthly = expenses.reduce((sum, item) => sum + item.amount, 0);
  const billsCount = expenses.filter((e) => e.type === "Bill").length;
  const subsCount = expenses.filter((e) => e.type === "Subscription").length;
  const autoPayCount = expenses.filter((e) => e.autoPay).length;

  return { totalMonthly, billsCount, subsCount, autoPayCount };
}

export default function BillsSubscriptionsPage() {
  const { totalMonthly, billsCount, subsCount, autoPayCount } =
    getSummary(recurringExpenses);

  return (
    <div className="p-8 text-zinc-100">
      <h1 className="text-2xl font-semibold">Bills & Subscriptions</h1>
      <p className="text-sm text-zinc-400">
        Track your recurring monthly expenses and subscriptions.
      </p>

      {/* Summary row */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
          <p className="text-xs text-zinc-400">Total monthly cost</p>
          <p className="mt-2 text-lg font-semibold">
            {formatCurrency(totalMonthly)}
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
          <p className="text-xs text-zinc-400">Bills</p>
          <p className="mt-2 text-lg font-semibold">{billsCount}</p>
          <p className="text-xs text-zinc-500">Rent, utilities, phone, etc.</p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
          <p className="text-xs text-zinc-400">Subscriptions</p>
          <p className="mt-2 text-lg font-semibold">{subsCount}</p>
          <p className="text-xs text-zinc-500">
            Streaming, apps, memberships.
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
          <p className="text-xs text-zinc-400">On autopay</p>
          <p className="mt-2 text-lg font-semibold">{autoPayCount}</p>
          <p className="text-xs text-zinc-500">
            Recurring charges paid automatically.
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-medium text-zinc-100">
              Recurring expenses
            </h2>
            <p className="text-xs text-zinc-400">
              Bills and subscriptions you&apos;re committed to each month.
            </p>
          </div>

          {/* Placeholder action for future */}
          <button
            type="button"
            className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-100 hover:bg-zinc-800"
          >
            + Add recurring
          </button>
        </div>

        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-zinc-800 text-xs text-zinc-400">
            <tr>
              <th className="py-2 pr-4 font-normal">Name</th>
              <th className="py-2 pr-4 font-normal">Type</th>
              <th className="py-2 pr-4 font-normal">Account</th>
              <th className="py-2 pr-4 font-normal">Due</th>
              <th className="py-2 pr-4 font-normal text-right">Amount</th>
              <th className="py-2 pl-4 font-normal text-right">Autopay</th>
            </tr>
          </thead>
          <tbody>
            {recurringExpenses.map((item) => (
              <tr
                key={item.id}
                className="border-b border-zinc-900/70 last:border-b-0 hover:bg-zinc-800/40"
              >
                <td className="py-2 pr-4 align-middle text-zinc-100">
                  {item.name}
                </td>
                <td className="py-2 pr-4 align-middle text-xs text-zinc-400">
                  {item.type}
                </td>
                <td className="py-2 pr-4 align-middle text-xs text-zinc-400">
                  {item.account}
                </td>
                <td className="py-2 pr-4 align-middle text-xs text-zinc-400">
                  {item.dueDay}
                </td>
                <td className="py-2 pr-4 text-right align-middle tabular-nums text-zinc-100">
                  {formatCurrency(item.amount)}
                </td>
                <td className="py-2 pl-4 text-right align-middle text-xs">
                  {item.autoPay ? (
                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-400">
                      On
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full bg-zinc-700/40 px-2 py-0.5 text-[11px] font-medium text-zinc-400">
                      Off
                    </span>
                  )}
                </td>
              </tr>
            ))}

            {recurringExpenses.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="py-8 text-center text-xs text-zinc-500 italic"
                >
                  No recurring expenses yet. Add your first bill or subscription
                  to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
