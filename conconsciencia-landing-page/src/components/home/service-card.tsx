import type { ReactNode } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  tone: "blue" | "peach";
};

export function ServiceCard({ title, description, icon, tone }: ServiceCardProps) {
  const toneClasses =
    tone === "peach"
      ? "from-[#fff0e7] via-[#fff8f4] to-[#fff3eb] text-[#ff5a1f]"
      : "from-[#eaf3f8] via-[#f7fbfe] to-[#eaf3f8] text-[#4d91c8]";

  return (
    <article
      className={`group flex flex-row items-center gap-4 rounded-[1.25rem] border border-white/80 bg-gradient-to-b ${toneClasses} px-5 py-4 text-left shadow-[0_18px_42px_rgba(43,79,118,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_26px_52px_rgba(43,79,118,0.13)] md:min-h-[17rem] md:flex-col md:items-center md:gap-0 md:py-7 md:text-center`}
    >
      <div className="grid size-11 shrink-0 place-items-center transition duration-500 group-hover:scale-105 md:mb-5 md:size-20">
        {icon}
      </div>
      <h3 className="flex-1 font-[family-name:var(--font-display)] text-[1.05rem] font-bold leading-tight text-[#0454a6] md:flex-none md:text-[1.25rem]">
        {title}
      </h3>
      <p className="hidden md:mt-3 md:block md:flex-1 md:text-[0.86rem] md:font-semibold md:leading-6 md:text-[#315a82]">
        {description}
      </p>
      <a
        href="#contacto"
        aria-label={`Ver más sobre ${title}`}
        className="shrink-0 rounded-full p-1 text-[#0454a6] transition duration-300 hover:text-[#ff5a1f] md:mt-5 md:inline-flex md:items-center md:gap-2 md:px-2 md:py-1 md:text-[0.86rem] md:font-extrabold"
      >
        <span className="hidden md:inline">Ver más</span> <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}
