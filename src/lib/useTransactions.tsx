"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

import { Transaction } from "../app/transactions/TransactionsTable";

type TransactionsContextValue = {
  transactions: Transaction[];
  setTransactions: (txs: Transaction[]) => void;
};

const TransactionsContext = createContext<TransactionsContextValue | null>(
  null,
);

export function TransactionsProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    async function loadTransactions() {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

        if (!baseUrl) {
          throw new Error("NEXT_PUBLIC_API_BASE_URL is not set");
        }

        const res = await fetch(`${baseUrl}/api/v2/transactions`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch transactions");
        }

        const data: Transaction[] = await res.json();
        setTransactions(data);
      } catch (err: unknown) {
        console.error("Failed to load transactions", err);
      }
    }

    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const ctx = useContext(TransactionsContext);
  if (!ctx) {
    throw new Error(
      "useTransactions must be used within a TransactionsProvider",
    );
  }
  return ctx;
}
