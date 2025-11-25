"use client";

import React from "react";
import TransactionsTable from "./TransactionsTable";
import { useState} from "react";
import { Filters } from "./Filters";

import { mockTransactions } from "@/lib/mock-transactions";

export default function TransactionsPage() {

  const [account, setAccount] = useState("all");
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");


    const filteredTransactions = mockTransactions.filter((tx) => {
    // account filter
    const matchesAccount =
      account === "all" || tx.account.toLowerCase() === account.toLowerCase();

    // category filter
    const matchesCategory =
      category === "all" || tx.category.toLowerCase() === category.toLowerCase();

    // search by merchant text
    const matchesSearch =
      search.trim() === "" ||
      tx.merchant.toLowerCase().includes(search.toLowerCase());

    return matchesAccount && matchesCategory && matchesSearch;
  });


  return (
    <div className="flex flex-col p-8">
      <h1 className="text-2xl font-bold  text-zinc-100">Transactions</h1>
      <p className="text-sm text-zinc-400">
        Your transactions at a glance
      </p>
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
      <TransactionsTable transactions={filteredTransactions}/>
    </div>
  );
}
