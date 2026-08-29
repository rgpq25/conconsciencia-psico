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
    <article className="soft-card-shadow group flex flex-row items-center gap-5 rounded-[1.7rem] border border-white/80 bg-white/86 px-5 py-5 text-left backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(46,86,125,0.14)] md:min-h-[17rem] md:flex-col md:items-center md:gap-0 md:px-8 md:py-8 md:text-center">
      <div
        className={`grid size-14 shrink-0 place-items-center rounded-full ${toneClasses} transition duration-500 group-hover:scale-105 md:mb-6 md:size-24`}
      >
        {icon}
      </div>
      <div>
        <h3 className="font-[family-name:var(--font-display)] text-[1.15rem] font-bold leading-tight text-[#0454a6] md:text-[1.45rem]">
          {title}
        </h3>
        <p className="mt-1.5 text-[0.92rem] leading-6 text-[#315a82] md:mt-4 md:text-[0.98rem] md:leading-7">
          {description}
        </p>
      </div>
    </article>
  );
}
