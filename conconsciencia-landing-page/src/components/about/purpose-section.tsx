import { BloomIcon } from "../home/home-illustrations";
import { SectionHeading } from "../home/section-heading";
import { EyeIcon, MountainsDecor } from "./about-illustrations";

export function PurposeSection() {
  return (
    <section className="relative bg-[#f8fbff] px-5 pb-16 pt-6 sm:px-8 lg:px-10 lg:pb-20">
      <SectionHeading
        title="Nuestro propósito"
        subtitle="Guiamos nuestros pasos por un propósito claro que orienta todo lo que hacemos."
      />

      <div className="relative z-10 mx-auto mt-10 grid max-w-5xl gap-7 md:grid-cols-2">
        <article className="soft-card-shadow relative flex min-h-[19rem] flex-col items-center overflow-hidden rounded-[2rem] border border-white/80 bg-white/86 px-8 py-9 text-center backdrop-blur">
          <div className="grid size-24 place-items-center rounded-full bg-[#fff4ed] text-[#ff5a1f]">
            <BloomIcon className="size-16" />
          </div>
          <h3 className="mt-6 font-(family-name:--font-display) text-[1.55rem] font-bold leading-tight text-[#0454a6]">
            Misión
          </h3>
          <p className="relative z-10 mt-4 max-w-[26rem] text-[0.98rem] leading-7 text-[#315a82]">
            Acompañar a las personas en sus procesos emocionales y psicológicos, ofreciendo estrategias efectivas y herramientas prácticas que favorezcan su bienestar, equilibrio y desarrollo personal.
          </p>
          <svg
            viewBox="0 0 260 120"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 w-56 text-[#ff9a5c] opacity-40"
          >
            <path d="M19 100c60-25 118-55 190-91" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
            <path
              d="M68 80c-22-18-42-18-60-2 24 20 44 20 60 2ZM105 62c-16-23-35-29-57-18 18 26 38 31 57 18ZM144 42c-10-26-27-35-51-29 12 29 30 39 51 29ZM158 36c20-1 35 7 45 24-22 4-37-4-45-24ZM124 54c22 1 37 11 46 30-25 2-40-8-46-30ZM88 72c22 4 35 16 40 36-25-1-38-13-40-36Z"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
          </svg>
        </article>

        <article className="soft-card-shadow relative flex min-h-[19rem] flex-col items-center overflow-hidden rounded-[2rem] border border-white/80 bg-white/86 px-8 py-9 text-center backdrop-blur">
          <div className="grid size-24 place-items-center rounded-full bg-[#e9f3fa] text-[#0454a6]">
            <EyeIcon className="size-14" />
          </div>
          <h3 className="mt-6 font-(family-name:--font-display) text-[1.55rem] font-bold leading-tight text-[#0454a6]">
            Visión
          </h3>
          <p className="relative z-10 mt-4 max-w-[26rem] text-[0.98rem] leading-7 text-[#315a82]">
            Ser un centro psicológico reconocido por su calidad humana y profesional, promoviendo una cultura de bienestar emocional y crecimiento consciente en nuestra comunidad.
          </p>
          <MountainsDecor className="pointer-events-none absolute bottom-0 left-0 w-full text-[#c8dcee] opacity-70" />
        </article>
      </div>
    </section>
  );
}
