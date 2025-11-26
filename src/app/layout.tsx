import "../styles/globals.css";
import { Sidebar } from "../components/sidebar/Sidebar";
import { TransactionsProvider } from "@/lib/useTransactions";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body className="flex">
        <TransactionsProvider>
          <Sidebar />
          <main className="flex-1 p-8">{children}</main>
        </TransactionsProvider>
      </body>
    </html>
  );
}
