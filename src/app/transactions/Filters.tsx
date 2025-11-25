import React from "react";

export type FiltersProps = {
  selectedAccount: string;
  selectedCategory: string;
  searchTerm: string;
  onAccountChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onSearchChange: (value: string) => void;
};

export function Filters({
  selectedAccount,
  selectedCategory,
  searchTerm,
  onAccountChange,
  onCategoryChange,
  onSearchChange,
}: FiltersProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 md:flex-row md:items-center md:justify-between">

      {/* Account Filter */}
      <div className="flex flex-col">
        <label className="text-xs text-zinc-400">Account</label>
        <select
          value={selectedAccount}
          onChange={(e) => onAccountChange(e.target.value)}
          className="mt-1 rounded-md bg-zinc-800 p-2 text-sm text-zinc-100"
        >
          <option value="all">All Accounts</option>
          <option value="checking">Checking</option>
          <option value="savings">Savings</option>
          <option value="credit">Credit Card</option>
        </select>
      </div>

      {/* Category Filter */}
      <div className="flex flex-col">
        <label className="text-xs text-zinc-400">Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="mt-1 rounded-md bg-zinc-800 p-2 text-sm text-zinc-100"
        >
          <option value="all">All Categories</option>
          <option value="groceries">Groceries</option>
          <option value="shopping">Shopping</option>
          <option value="bills">Bills</option>
        </select>
      </div>

      {/* Search Filter */}
      <div className="flex flex-col flex-1">
        <label className="text-xs text-zinc-400">Search</label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search merchant…"
          className="mt-1 rounded-md bg-zinc-800 p-2 text-sm text-zinc-100 placeholder-zinc-500"
        />
      </div>
    </div>
  );
}
