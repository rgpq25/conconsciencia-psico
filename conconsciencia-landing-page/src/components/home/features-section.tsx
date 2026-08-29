import type { ReactNode } from "react";
import { IconCard } from "./icon-card";
import {
  BloomIcon,
  GrowthIcon,
  PeopleCareIcon,
} from "./home-illustrations";
import { SectionHeading } from "./section-heading";

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
  tone?: "blue" | "peach";
};

const features: Feature[] = [
  {
    title: "Acompañamiento psicológico",
    description: "Escucha profesional y contención emocional en cada etapa de tu vida.",
    icon: <PeopleCareIcon className="size-8 md:size-14" />,
  },
  {
    title: "Bienestar emocional",
    description: "Trabajamos en tu equilibrio interior para que vivas con más calma y plenitud.",
    icon: <BloomIcon className="size-9 md:size-16" />,
    tone: "peach",
  },
  {
    title: "Desarrollo personal",
    description: "Te ayudamos a descubrir tu potencial y a construir relaciones más sanas contigo y con los demás.",
    icon: <GrowthIcon className="size-8 md:size-[3.75rem]" />,
  },
];

export function FeaturesSection() {
  return (
    <section className="relative bg-[#fbfdff] px-5 pb-[4.5rem] pt-6 sm:px-8 lg:px-10 lg:pb-24">
      <img
        src="/illustrations/pale-leaf-spray-left.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 hidden w-72 max-w-none md:block"
      />
      <img
        src="/illustrations/pale-leaf-spray-right.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden w-72 max-w-none md:block"
      />
      <SectionHeading
        title="¿Qué hacemos?"
        subtitle="Somos un centro psicológico comprometido con tu bienestar integral. Ofrecemos un espacio seguro para escucharte, acompañarte y brindarte herramientas que impulsen tu crecimiento personal."
        className="max-w-3xl"
      />
      <div className="relative z-10 mx-auto mt-10 grid max-w-5xl gap-7 md:grid-cols-3">
        {features.map((feature) => (
          <IconCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
