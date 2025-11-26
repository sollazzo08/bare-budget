"use client";

import React, { useState } from "react";
import TransactionsTable from "./TransactionsTable";
import { Filters } from "./Filters";
import { useTransactions } from "@/lib/useTransactions";

export default function TransactionsPage() {
  const { transactions } = useTransactions();

  const [account, setAccount] = useState("all");
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filteredTransactions = transactions.filter((tx) => {
    const matchesAccount =
      account === "all" || tx.account.toLowerCase() === account.toLowerCase();

    const matchesCategory =
      category === "all" ||
      tx.category.toLowerCase() === category.toLowerCase();

    const matchesSearch =
      search.trim() === "" ||
      tx.merchant.toLowerCase().includes(search.toLowerCase());

    return matchesAccount && matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col p-8">
      <h1 className="text-2xl font-bold text-zinc-100">Transactions</h1>
      <p className="text-sm text-zinc-400">Your transactions at a glance.</p>
      <div className="mt-4">
        <Filters
          selectedAccount={account}
          selectedCategory={category}
          searchTerm={search}
          onAccountChange={setAccount}
          onCategoryChange={setCategory}
          onSearchChange={setSearch}
        />
      </div>
      <TransactionsTable transactions={filteredTransactions} />
    </div>
  );
}
