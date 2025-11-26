"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { mockTransactions } from "@/lib/mock-data/mock-transactions";

export type Transaction = (typeof mockTransactions)[number];

type TransactionsContextValue = {
  transactions: Transaction[];
  setTransactions: (txs: Transaction[]) => void;
};

const TransactionsContext = createContext<TransactionsContextValue | null>(null);

export function TransactionsProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>(mockTransactions);

  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const ctx = useContext(TransactionsContext);
  if (!ctx) {
    throw new Error("useTransactions must be used within a TransactionsProvider");
  }
  return ctx;
}
