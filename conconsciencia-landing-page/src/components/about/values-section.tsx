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
    icon: <HeartFilledIcon className="size-7 text-[#ff5a1f] md:size-9" />,
  },
  {
    title: "Confidencialidad",
    description: "Respetamos tu historia con total discreción.",
    icon: <ShieldIcon className="size-7 text-[#0454a6] md:size-9" />,
  },
  {
    title: "Profesionalismo",
    description: "Trabajamos con ética, formación y compromiso.",
    icon: <MedalIcon className="size-7 text-[#0454a6] md:size-9" />,
  },
  {
    title: "Respeto",
    description: "Valoramos tu proceso, tus tiempos y decisiones.",
    icon: <SproutLineIcon className="size-7 text-[#0454a6] md:size-9" />,
  },
  {
    title: "Cercanía",
    description: "Creamos un vínculo cálido y humano.",
    icon: <TwoPeopleIcon className="size-7 text-[#0454a6] md:size-9" />,
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

      <div className="relative z-10 mx-auto mt-10 flex max-w-6xl flex-col md:grid md:grid-cols-5">
        {values.map((value, index) => (
          <div
            key={value.title}
            className={`flex items-center gap-4 border-b border-[#e3ebf3] py-5 text-left last:border-b-0 md:flex-col md:items-center md:gap-0 md:border-b-0 md:px-6 md:py-0 md:text-center ${
              index === 0 ? "" : "md:border-l md:border-[#dbe7f2]"
            }`}
          >
            <div className="grid size-14 shrink-0 place-items-center rounded-full bg-[#eef3f8] md:size-20">
              {value.icon}
            </div>
            <div className="md:contents">
              <h3 className="font-(family-name:--font-display) text-[1.05rem] font-bold leading-tight text-[#0454a6] md:mt-5 md:text-[1.35rem]">
                {value.title}
              </h3>
              <p className="mt-1 text-[0.88rem] leading-6 text-[#315a82] md:mt-2 md:text-[1rem] md:leading-7">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
