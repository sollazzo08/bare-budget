type SidebarItemProps = {
  label: string;
  href: string;
};

export function SidebarItem({ label, href }: SidebarItemProps) {
  return (
    <a
      href={href}
      className="flex items-center px-4 py-2 text-zinc-300 hover:bg-zinc-800"
    >
      {label}
    </a>
  );
}
