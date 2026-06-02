import type { ReactNode } from "react";

type IconCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  tone?: "blue" | "peach";
};

export function IconCard({ title, description, icon, tone = "blue" }: IconCardProps) {
  const toneClasses =
    tone === "peach"
      ? "bg-[#fff4ed] text-[#ff5a1f]"
      : "bg-[#e9f3fa] text-[#6fa3cf]";

  return (
    <article className="soft-card-shadow group flex min-h-[17rem] flex-col items-center rounded-[1.7rem] border border-white/80 bg-white/86 px-8 py-8 text-center backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(46,86,125,0.14)]">
      <div
        className={`mb-6 grid size-24 place-items-center rounded-full ${toneClasses} transition duration-500 group-hover:scale-105`}
      >
        {icon}
      </div>
      <h3 className="font-[family-name:var(--font-display)] text-[1.45rem] font-bold leading-tight text-[#0454a6]">
        {title}
      </h3>
      <p className="mt-4 text-[0.98rem] leading-7 text-[#315a82]">{description}</p>
    </article>
  );
}
