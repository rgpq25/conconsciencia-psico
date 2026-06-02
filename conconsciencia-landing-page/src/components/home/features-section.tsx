import type { ReactNode } from "react";
import { IconCard } from "./icon-card";
import {
  BloomIcon,
  GrowthIcon,
  PaleLeafSpray,
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
    icon: <PeopleCareIcon className="size-14" />,
  },
  {
    title: "Bienestar emocional",
    description: "Trabajamos en tu equilibrio interior para que vivas con más calma y plenitud.",
    icon: <BloomIcon className="size-16" />,
    tone: "peach",
  },
  {
    title: "Desarrollo personal",
    description: "Te ayudamos a descubrir tu potencial y a construir relaciones más sanas contigo y con los demás.",
    icon: <GrowthIcon className="size-[3.75rem]" />,
  },
];

export function FeaturesSection() {
  return (
    <section className="relative bg-[#fbfdff] px-5 pb-[4.5rem] pt-6 sm:px-8 lg:px-10 lg:pb-24">
      <PaleLeafSpray className="absolute -left-12 top-16 hidden w-72 text-[#9cc7e4] md:block" />
      <PaleLeafSpray className="absolute -right-12 top-20 hidden w-72 scale-x-[-1] text-[#9cc7e4] md:block" />
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
