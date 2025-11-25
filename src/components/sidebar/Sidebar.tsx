import { SidebarItem } from "./SidebarItem";

const navItems = [
  { label: "Overview", href: "/" },
  { label: "Accounts", href: "/accounts" },
  { label: "Transactions", href: "/transactions" },
  { label: "Budgets", href: "/budgets" },
  { label: "Bills & Subscriptions", href: "/bills-subscriptions"},
];

export function Sidebar() {
  return (
    <aside className="w-60 border-r border-zinc-800 bg-zinc-950/40 backdrop-blur-sm">
      {/* Logo / Header section */}
      <div className="px-6 py-6 border-b border-zinc-800">
        <h2 className="text-lg font-semibold text-zinc-100 tracking-tight">
          Bare Budget
        </h2>
        <p className="text-xs text-zinc-500 mt-1">Dashboard</p>
      </div>

      {/* Nav items */}
      <nav className="px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <SidebarItem
            key={item.href}
            label={item.label}
            href={item.href}
          />
        ))}
      </nav>
    </aside>
  );
}
