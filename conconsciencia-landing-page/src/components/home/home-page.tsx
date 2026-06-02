import type { ReactNode } from "react";
import { IconCard } from "./icon-card";
import {
  BloomIcon,
  BotanicalSpray,
  BranchAccent,
  CalendarIcon,
  ChatIcon,
  ClipboardIcon,
  CoupleIcon,
  CouchIcon,
  DottedCluster,
  FamilyIcon,
  GrowthIcon,
  HeadHeartIcon,
  HeartTinyIcon,
  LotusIcon,
  PaleLeafSpray,
  PeopleCareIcon,
  PersonIcon,
  SproutLineIcon,
  TargetIcon,
  TeamIllustration,
} from "./home-illustrations";
import { ProcessTimeline } from "./process-timeline";
import { SectionHeading } from "./section-heading";
import { ServiceCard } from "./service-card";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
  tone?: "blue" | "peach";
};

type Service = {
  title: string;
  description: string;
  icon: ReactNode;
  tone: "blue" | "peach";
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

const services: Service[] = [
  {
    title: "Terapia individual",
    description: "Espacio personalizado para explorar, comprender y transformar lo que vives.",
    icon: <CouchIcon className="size-20" />,
    tone: "blue",
  },
  {
    title: "Terapia de pareja",
    description: "Fortalecemos la comunicación y el vínculo desde el respeto y la empatía.",
    icon: <CoupleIcon className="size-20" />,
    tone: "peach",
  },
  {
    title: "Terapia familiar",
    description: "Acompañamos a tu familia hacia relaciones más saludables y conscientes.",
    icon: <FamilyIcon className="size-20" />,
    tone: "blue",
  },
  {
    title: "Manejo emocional",
    description: "Herramientas prácticas para gestionar el estrés, la ansiedad y las emociones difíciles.",
    icon: <LotusIcon className="size-20" />,
    tone: "peach",
  },
  {
    title: "Orientación vocacional",
    description: "Descubre tu propósito y toma decisiones alineadas con tu esencia.",
    icon: <HeadHeartIcon className="size-20" />,
    tone: "blue",
  },
];

const processSteps = [
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

function AppointmentButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#contacto"
      className={`inline-flex items-center justify-center gap-3 rounded-full bg-[#ff5a1f] px-7 py-4 text-base font-extrabold text-white shadow-[0_18px_34px_rgba(255,90,31,0.3)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff6c36] ${className}`}
    >
      <CalendarIcon className="size-5" />
      Agenda tu sesión
    </a>
  );
}

export function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f8fbff]">
      <SiteHeader />
      <main>
        <section id="inicio" className="bg-grain relative isolate overflow-hidden bg-[#fbfdff]">
          <div className="absolute -left-24 top-8 h-96 w-96 rounded-full bg-[#dcebf6]/70 blur-3xl" aria-hidden="true" />
          <div className="absolute right-0 top-20 h-[31rem] w-[31rem] rounded-full bg-[#fde8db]/70 blur-3xl" aria-hidden="true" />
          <div className="absolute left-[44%] top-0 h-52 w-52 rounded-b-full bg-white/70" aria-hidden="true" />
          <DottedCluster className="absolute right-10 top-52 hidden w-24 text-[#9cc7e4] md:block" />

          <div className="relative z-10 mx-auto grid min-h-[41rem] max-w-7xl items-center gap-10 px-5 pb-24 pt-14 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:pb-20 lg:pt-10">
            <div className="reveal-soft max-w-[46rem]">
              <h1 className="font-(family-name:--font-display) text-[clamp(3.5rem,5vw,4.65rem)] leading-[0.98] tracking-[-0.04em] text-[#0454a6]">
                Acompañamos tu
                <br />
                <span className="text-[#ff5a1f]">bienestar emocional</span>
                <br />
                con presencia y empatía
              </h1>
              <p className="mt-9 max-w-[34rem] text-[1.07rem] font-semibold leading-8 text-[#244c78] sm:text-lg">
                En ConConsciencia te escuchamos sin juicio, te orientamos con profesionalismo y caminamos contigo hacia una vida más plena y consciente.
              </p>
              <div className="mt-9">
                <AppointmentButton />
              </div>
              <p className="mt-8 flex items-center gap-2 text-sm font-bold text-[#315a82]">
                <HeartTinyIcon className="size-5 text-[#5f93be]" />
                Atención cálida, confidencial y personalizada
              </p>
            </div>

            <div className="reveal-soft reveal-delay-1 relative mx-auto flex min-h-[28rem] w-full max-w-[36rem] items-center justify-center lg:min-h-[33rem]">
              <div className="breathe-soft absolute left-4 top-16 h-[15rem] w-[15rem] rounded-[45%_55%_55%_45%] bg-[#dcebf6]/85" aria-hidden="true" />
              <div className="breathe-soft absolute bottom-10 right-4 h-[16rem] w-[18rem] rounded-[55%_45%_50%_50%] bg-[#fde2d5]/90 [animation-delay:1.5s]" aria-hidden="true" />
              <BranchAccent className="absolute bottom-12 right-2 w-44 rotate-[-10deg] text-[#9bbfda] opacity-70 sm:w-52" />
              <img
                src="/branding/logo-icon.png"
                alt="Ilustración de acompañamiento emocional"
                className="relative z-10 w-[min(78vw,33.5rem)] object-contain drop-shadow-[0_28px_42px_rgba(22,72,116,0.12)]"
                width="928"
                height="928"
                loading="eager"
              />
            </div>
          </div>

          <div className="absolute -bottom-12 left-1/2 h-28 w-[130vw] -translate-x-1/2 rounded-[50%] bg-[#fbfdff]" aria-hidden="true" />
        </section>

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

        <section id="servicios" className="relative bg-[#f8fbff] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <SectionHeading title="Nuestros servicios" />
          <div className="relative z-10 mx-auto mt-9 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>

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

        <section id="quienes-somos" className="bg-[#f8fbff] px-5 py-10 sm:px-8 lg:px-10">
          <div className="soft-section-shadow mx-auto grid max-w-7xl items-center gap-8 rounded-[2.3rem] bg-white/72 px-6 py-8 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-14 lg:py-10">
            <div className="order-2 lg:order-1">
              <TeamIllustration className="mx-auto w-full max-w-[36rem]" />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading title="Conoce más sobre nosotros" align="left" className="max-w-xl" />
              <div className="mt-7 max-w-[40rem] space-y-5 text-[1rem] font-semibold leading-8 text-[#315a82]">
                <p>
                  Somos un equipo de profesionales apasionados por acompañar procesos humanos con empatía, respeto y profesionalismo.
                </p>
                <p>
                  Creemos en el poder de la escucha, el vínculo terapéutico y el crecimiento consciente.
                </p>
                <p>
                  Nuestro propósito es caminar a tu lado, brindándote un espacio seguro para que puedas comprenderte, sanar y avanzar hacia la vida que deseas.
                </p>
              </div>
              <AppointmentButton className="mt-8 px-8" />
            </div>
          </div>
        </section>

        <section className="bg-[#f8fbff] px-5 py-5 sm:px-8 lg:px-10">
          <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#fff1e6] via-[#fff8f3] to-[#ffe7d6] px-7 py-8 sm:px-12 lg:flex-row lg:items-center lg:px-20">
            <div className="absolute -left-14 -top-12 h-56 w-56 rounded-full border border-white/80 opacity-80" aria-hidden="true" />
            <BranchAccent className="absolute bottom-2 right-8 hidden w-64 text-[#ff7a3d] opacity-75 md:block" />
            <div className="relative z-10">
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.3rem,4vw,3.45rem)] font-semibold leading-none tracking-[-0.03em] text-[#0454a6]">
                Dar el primer paso puede
                <br />
                <span className="text-[#ff5a1f]">transformar tu vida.</span>
              </h2>
              <p className="mt-4 text-xl font-semibold text-[#315a82]">Estamos aquí para acompañarte.</p>
            </div>
            <AppointmentButton className="relative z-10 shrink-0" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
