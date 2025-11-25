import CategoryBreakdown from "@/components/dashboard/CategoryBreakdown";
import SummaryCard from "@/components/dashboard/SummaryCard";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import SpendingChart from "@/components/dashboard/SpendingChart";

import { getOverviewSummary } from "@/lib/overview";
import { mockTransactions } from "@/lib/mock-transactions";
import { formatCurrency } from "@/lib/format";


export default function Overview() {

  const { income, expenses, net } = getOverviewSummary(mockTransactions);

  return (
    <div className="p-8 text-zinc-100">
      <h1 className="text-2xl font-semibold">Overview</h1>
      <p className="text-sm text-zinc-400">
        Your financial summary at a glance
      </p>

      {/* Summary cards (4-col grid) */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SummaryCard title="Income" value={formatCurrency(income)}/>
        <SummaryCard title="Expenses" value={formatCurrency(expenses)} />
        <SummaryCard title="Net" value={formatCurrency(net)} />
        <SummaryCard title="Remaining" value="$1,240" />
      </div>

      {/* Middle row: Chart + Category breakdown */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Spending Chart */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 lg:col-span-2">
          <SpendingChart transactions={mockTransactions}/>
        </div>

        {/* Category Breakdown */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <CategoryBreakdown transactions={mockTransactions}/>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        <RecentTransactions transactions={mockTransactions}/>
      </div>
    </div>
  );
}
