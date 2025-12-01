"use client";

import CategoryBreakdown from "@/components/dashboard/CategoryBreakdown";
import SummaryCard from "@/components/dashboard/SummaryCard";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import SpendingChart from "@/components/dashboard/SpendingChart";
import UploadCsvButton, {
  type UploadCsvResult,
} from "./transactions/UploadCsvFile";

import { getOverviewSummary } from "@/lib/overview";
import { formatCurrency } from "@/lib/format";
import { useTransactions } from "@/lib/useTransactions";
import { Transaction } from "./transactions/TransactionsTable";

export default function Overview() {
  const { transactions, setTransactions } = useTransactions();

  const handleUpload = (data: UploadCsvResult) => {
    console.log("Upload result:", data);

    if (!data.normalized.length) {
      console.warn(
        "No normalized transactions returned; keeping existing data.",
      );
      return;
    }

    const mapped: Transaction[] = data.normalized.map((tx) => ({
      id: tx.id,
      date: tx.date,
      amount: tx.amount,
      account: tx.source,
      merchant:
        typeof tx.merchantName === "string" && tx.merchantName
          ? tx.merchantName
          : tx.rawDescription,
      category: tx.categoryId ?? "Uncategorized",
    }));

    console.log("NORMALIZED SAMPLE:", data.normalized[0]);
    console.log("MAPPED SAMPLE:", mapped[0]);

    setTransactions(mapped);
  };

  const { income, expenses, net } = getOverviewSummary(transactions);

  return (
    <div className="p-8 text-zinc-100">
      {/* Header + upload button */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Overview</h1>
          <p className="text-sm text-zinc-400">
            Keep your data fresh by uploading a new bank CSV every week or at
            month-end.
          </p>
        </div>

        <UploadCsvButton onUpload={handleUpload} />
      </div>

      {/* Summary cards (4-col grid) */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SummaryCard title="Income" value={formatCurrency(income)} />
        <SummaryCard title="Expenses" value={formatCurrency(expenses)} />
        <SummaryCard title="Net" value={formatCurrency(net)} />
        {/* <SummaryCard title="Remaining" value="$1,240" /> */}
      </div>

      {/* Middle row: Chart + Category breakdown */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Spending Chart */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 lg:col-span-2">
          <SpendingChart transactions={transactions} />
        </div>

        {/* Category Breakdown */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <CategoryBreakdown transactions={transactions} />
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        <RecentTransactions transactions={transactions} />
      </div>
    </div>
  );
}
