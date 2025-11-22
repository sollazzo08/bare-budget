import "../styles/globals.css";
import { Sidebar } from "../components/sidebar/Sidebar";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
