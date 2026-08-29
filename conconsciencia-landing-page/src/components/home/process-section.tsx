import type { ReactNode } from "react";
import {
  ChatIcon,
  ClipboardIcon,
  PersonIcon,
  SproutLineIcon,
  TargetIcon,
} from "./home-illustrations";
import { ProcessTimeline } from "./process-timeline";
import { SectionHeading } from "./section-heading";

type ProcessStep = {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
};

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Primer contacto",
    description: "Escríbenos o llámanos. Cuéntanos brevemente tu situación y te orientaremos sobre el proceso.",
    icon: <ChatIcon className="size-8" />,
  },
  {
    number: 2,
    title: "Evaluación inicial",
    description: "Agendamos una primera sesión para conocerte y comprender tus necesidades.",
    icon: <ClipboardIcon className="size-8" />,
  },
  {
    number: 3,
    title: "Plan de trabajo",
    description: "Diseñamos juntos un plan terapéutico personalizado y con objetivos claros.",
    icon: <TargetIcon className="size-8" />,
  },
  {
    number: 4,
    title: "Sesiones terapéuticas",
    description: "Te acompañamos en un proceso profesional, seguro y respetuoso de tu ritmo.",
    icon: <PersonIcon className="size-8" />,
  },
  {
    number: 5,
    title: "Seguimiento y crecimiento",
    description: "Evaluamos avances y ajustamos el proceso para seguir impulsando tu bienestar.",
    icon: <SproutLineIcon className="size-8" />,
  },
];

export function ProcessSection() {
  return (
    <section id="recursos" className="relative bg-[#fbfdff] px-5 py-12 sm:px-8 lg:px-10 lg:py-[4.5rem]">
      <SectionHeading title="¿Cómo conectar con nosotros?" />
      <div className="mx-auto mt-9 grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative z-10 lg:pl-32">
          <ProcessTimeline steps={processSteps} />
        </div>
        <div className="relative flex min-h-[16rem] items-center justify-center lg:min-h-[32rem]">
          <div className="absolute h-[15rem] w-[17rem] rounded-[45%_55%_52%_48%] bg-[#e3f0f8] opacity-85 lg:h-[28rem] lg:w-[31rem]" aria-hidden="true" />
          <div className="absolute right-10 top-4 h-28 w-28 rounded-full bg-[#f7fbfe] opacity-80 lg:right-16 lg:top-10 lg:h-56 lg:w-56" aria-hidden="true" />
          <img
            src="/illustrations/botanical-branch.svg"
            alt=""
            aria-hidden="true"
            className="relative z-10 w-[16rem] object-contain lg:w-[30rem]"
            width="310"
            height="310"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
