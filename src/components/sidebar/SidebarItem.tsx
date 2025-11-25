"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarItemProps = {
  label: string;
  href: string;
};

export function SidebarItem({ label, href }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        flex items-center px-4 py-2 text-sm rounded-md transition-colors
        ${
          isActive
            ? "bg-zinc-800 text-zinc-100 font-medium"
            : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
        }
      `}
    >
      {label}
    </Link>
  );
}
