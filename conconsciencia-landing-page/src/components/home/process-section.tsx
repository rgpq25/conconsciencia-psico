import type { ReactNode } from "react";
import {
  BotanicalSpray,
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
        <div className="relative hidden min-h-[32rem] items-center justify-center lg:flex">
          <div className="absolute h-[28rem] w-[31rem] rounded-[45%_55%_52%_48%] bg-[#e3f0f8] opacity-85" aria-hidden="true" />
          <div className="absolute right-16 top-10 h-56 w-56 rounded-full bg-[#f7fbfe] opacity-80" aria-hidden="true" />
          <BotanicalSpray className="relative z-10 w-[35rem]" />
        </div>
      </div>
    </section>
  );
}
