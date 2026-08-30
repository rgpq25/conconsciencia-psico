import type { ReactNode } from "react";
import { SproutLineIcon } from "../home/home-illustrations";
import { SectionHeading } from "../home/section-heading";
import { HeartFilledIcon, MedalIcon, ShieldIcon, TwoPeopleIcon } from "./about-illustrations";

type Value = {
  title: string;
  description: string;
  icon: ReactNode;
};

const values: Value[] = [
  {
    title: "Empatía",
    description: "Escuchamos con el corazón.",
    icon: <HeartFilledIcon className="size-9 text-[#ff5a1f]" />,
  },
  {
    title: "Confidencialidad",
    description: "Respetamos tu historia con total discreción.",
    icon: <ShieldIcon className="size-9 text-[#0454a6]" />,
  },
  {
    title: "Profesionalismo",
    description: "Trabajamos con ética, formación y compromiso.",
    icon: <MedalIcon className="size-9 text-[#0454a6]" />,
  },
  {
    title: "Respeto",
    description: "Valoramos tu proceso, tus tiempos y decisiones.",
    icon: <SproutLineIcon className="size-9 text-[#0454a6]" />,
  },
  {
    title: "Cercanía",
    description: "Creamos un vínculo cálido y humano.",
    icon: <TwoPeopleIcon className="size-9 text-[#0454a6]" />,
  },
];

export function ValuesSection() {
  return (
    <section className="relative bg-[#fbfdff] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <img
        src="/illustrations/pale-leaf-spray-left.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 bottom-0 hidden w-72 max-w-none md:block"
      />
      <img
        src="/illustrations/pale-leaf-spray-right.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden w-72 max-w-none md:block"
      />
      <SectionHeading title="Lo que nos guía" />

      <div className="relative z-10 mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-5 md:gap-x-0">
        {values.map((value, index) => (
          <div
            key={value.title}
            className={`flex flex-col items-center px-2 text-center md:px-6 ${
              index === 0 ? "" : "md:border-l md:border-[#dbe7f2]"
            }`}
          >
            <div className="grid size-20 place-items-center rounded-full bg-[#eef3f8]">{value.icon}</div>
            <h3 className="mt-5 font-(family-name:--font-display) text-[1.35rem] font-bold leading-tight text-[#0454a6]">
              {value.title}
            </h3>
            <p className="mt-2 text-[1rem] leading-7 text-[#315a82]">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
