type SummaryCardProps = {
  title: string;
  value: string;
};

export default function SummaryCard({title, value}: SummaryCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
      <div>{title}</div>
      <div>{value}</div>
    </div>
  )
}
