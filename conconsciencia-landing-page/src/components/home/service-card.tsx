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
      className={`group flex min-h-[17rem] flex-col items-center rounded-[1.25rem] border border-white/80 bg-gradient-to-b ${toneClasses} px-5 py-7 text-center shadow-[0_18px_42px_rgba(43,79,118,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_26px_52px_rgba(43,79,118,0.13)]`}
    >
      <div className="mb-5 grid size-20 place-items-center transition duration-500 group-hover:scale-105">
        {icon}
      </div>
      <h3 className="font-[family-name:var(--font-display)] text-[1.25rem] font-bold leading-tight text-[#0454a6]">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-[0.86rem] font-semibold leading-6 text-[#315a82]">
        {description}
      </p>
      <a
        href="#contacto"
        className="mt-5 inline-flex items-center gap-2 rounded-full px-2 py-1 text-[0.86rem] font-extrabold text-[#0454a6] transition duration-300 hover:text-[#ff5a1f]"
      >
        Ver más <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}
