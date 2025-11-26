import { Transaction } from "../transactions/TransactionsTable";
import { mockTransactions } from "../../lib/mock-data/mock-transactions";
import { formatCurrency } from "@/lib/format";

type AccountBalance = {
  name: string;
  balance: number;
};

function getAccountBalances(transactions: Transaction[]): AccountBalance[] {
  const map = new Map<string, number>();

  for (const tx of transactions) {
    const current = map.get(tx.account) ?? 0;
    map.set(tx.account, current + tx.amount);
  }

  const accounts: AccountBalance[] = Array.from(map.entries()).map(
    ([name, balance]) => ({ name, balance })
  );

  // Sort: highest balance first
  accounts.sort((a, b) => b.balance - a.balance);

  return accounts;
}

export default function AccountsPage() {
  const transactions = mockTransactions;
  const accounts = getAccountBalances(transactions);

  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);

  return (
    <div className="p-8 text-zinc-100">
      <h1 className="text-2xl font-semibold">Accounts</h1>
      <p className="text-sm text-zinc-400">
        Balances across your checking, savings, and credit accounts.
      </p>

      {/* Summary row */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
          <p className="text-xs text-zinc-400">Total balance</p>
          <p className="mt-2 text-lg font-semibold">
            {formatCurrency(totalBalance)}
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
          <p className="text-xs text-zinc-400">Accounts</p>
          <p className="mt-2 text-lg font-semibold">{accounts.length}</p>
          <p className="text-xs text-zinc-500">
            Checking, savings, credit, and more.
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
          <p className="text-xs text-zinc-400">Highest balance</p>
          <p className="mt-2 text-lg font-semibold">
            {accounts.length > 0
              ? formatCurrency(accounts[0].balance)
              : formatCurrency(0)}
          </p>
          <p className="text-xs text-zinc-500">
            Top account by current balance.
          </p>
        </div>
      </div>

      {/* Accounts table */}
      <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        <h2 className="mb-4 text-sm font-medium text-zinc-100">
          Account balances
        </h2>

        {accounts.length === 0 ? (
          <p className="text-xs text-zinc-500 italic">
            No accounts found. Add transactions with account info to see
            balances here.
          </p>
        ) : (
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-zinc-800 text-xs text-zinc-400">
              <tr>
                <th className="py-2 pr-4 font-normal">Account</th>
                <th className="py-2 pr-4 font-normal text-right">Balance</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((acc) => (
                <tr
                  key={acc.name}
                  className="border-b border-zinc-900/70 last:border-b-0 hover:bg-zinc-800/40"
                >
                  <td className="py-2 pr-4 align-middle text-zinc-100">
                    {acc.name}
                  </td>
                  <td
                    className={`py-2 pr-4 text-right align-middle tabular-nums ${
                      acc.balance < 0 ? "text-red-400" : "text-emerald-400"
                    }`}
                  >
                    {formatCurrency(acc.balance)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
