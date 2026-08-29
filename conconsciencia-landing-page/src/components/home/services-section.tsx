import type { ReactNode } from "react";
import {
  CouchIcon,
  CoupleIcon,
  FamilyIcon,
  HeadHeartIcon,
  LotusIcon,
} from "./home-illustrations";
import { SectionHeading } from "./section-heading";
import { ServiceCard } from "./service-card";

type Service = {
  title: string;
  description: string;
  icon: ReactNode;
  tone: "blue" | "peach";
};

const services: Service[] = [
  {
    title: "Terapia individual",
    description: "Espacio personalizado para explorar, comprender y transformar lo que vives.",
    icon: <CouchIcon className="size-9 md:size-20" />,
    tone: "blue",
  },
  {
    title: "Terapia de pareja",
    description: "Fortalecemos la comunicación y el vínculo desde el respeto y la empatía.",
    icon: <CoupleIcon className="size-9 md:size-20" />,
    tone: "peach",
  },
  {
    title: "Terapia familiar",
    description: "Acompañamos a tu familia hacia relaciones más saludables y conscientes.",
    icon: <FamilyIcon className="size-9 md:size-20" />,
    tone: "blue",
  },
  {
    title: "Manejo emocional",
    description: "Herramientas prácticas para gestionar el estrés, la ansiedad y las emociones difíciles.",
    icon: <LotusIcon className="size-9 md:size-20" />,
    tone: "peach",
  },
  {
    title: "Orientación vocacional",
    description: "Descubre tu propósito y toma decisiones alineadas con tu esencia.",
    icon: <HeadHeartIcon className="size-9 md:size-20" />,
    tone: "blue",
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="relative bg-[#f8fbff] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <SectionHeading title="Nuestros servicios" />
      <div className="relative z-10 mx-auto mt-9 grid max-w-7xl gap-3 sm:grid-cols-2 md:gap-6 lg:grid-cols-5">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
