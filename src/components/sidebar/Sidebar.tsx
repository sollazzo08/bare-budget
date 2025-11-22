import { SidebarItem } from "./SidebarItem";

const navItems = [
  { label: "Overview", href: "/" },
  { label: "Transactions", href: "/transactions" },
  { label: "Budgets", href: "/budgets" },
];

export function Sidebar() {
  return (
    <div className="w-60 border-r border-zinc-800">
      {navItems.map(item => (
        <SidebarItem key={item.href} label={item.label} href={item.href} />
      ))}
    </div>
  );
}

