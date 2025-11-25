"use client";

import React from "react";
import TransactionsTable from "./TransactionsTable";
import { useState, useEffect } from "react";
import { Filters } from "./Filters";


const transactions = [
    {
      id: "1",
      date: "Nov 20",
      account: "Checking",
      merchant: "Trader Joe's",
      category: "Groceries",
      amount: -82.45,
    },
    {
      id: "2",
      date: "Nov 19",
      account: "Checking",
      merchant: "Rent",
      category: "Housing",
      amount: -1200,
    },
    {
      id: "3",
      date: "Nov 17",
      account: "Checking",
      merchant: "Paycheck",
      category: "Income",
      amount: 2100,
    },
  ];


export default function TransactionsPage() {

  const [account, setAccount] = useState("all");
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");


    const filteredTransactions = transactions.filter((tx) => {
    // account filter (only if your tx has an "account" field)
    const matchesAccount =
      account === "all" || tx.account.toLowerCase() === account.toLowerCase(); // adjust field name

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
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold text-blue-500 mb-4">Transactions</h1>
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
