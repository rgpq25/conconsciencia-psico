import { BranchAccent, DottedCluster, HeartTinyIcon } from "../home/home-illustrations";

export function AboutHeroSection() {
  return (
    <section className="bg-grain relative isolate overflow-hidden bg-[#fbfdff]">
      <div className="absolute -left-24 top-8 h-96 w-96 rounded-full bg-[#dcebf6]/70 blur-3xl" aria-hidden="true" />
      <div className="absolute right-0 top-20 h-[31rem] w-[31rem] rounded-full bg-[#fde8db]/70 blur-3xl" aria-hidden="true" />
      <div className="absolute left-[44%] top-0 h-52 w-52 rounded-b-full bg-white/70" aria-hidden="true" />
      <DottedCluster className="absolute right-10 top-24 hidden w-24 text-[#9cc7e4] md:block" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-10 sm:px-8 lg:min-h-[38rem] lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:pb-20 lg:pt-20">
        <div className="reveal-soft max-w-[46rem]">
          <p className="text-sm font-extrabold text-[#ff5a1f]">Quiénes somos</p>
          <span className="mt-2 block h-[3px] w-10 rounded-full bg-[#ff5a1f]" aria-hidden="true" />
          <h1 className="mt-5 font-(family-name:--font-display) text-[2.15rem] leading-[1.12] tracking-[-0.02em] text-[#0454a6] sm:text-[2.75rem] lg:text-[clamp(3rem,4.4vw,4rem)] lg:leading-[1.02] lg:tracking-[-0.04em]">
            Somos un equipo que camina contigo hacia tu{" "}
            <span className="text-[#ff5a1f]">bienestar.</span>
          </h1>
          <p className="mt-7 max-w-[34rem] text-[1.02rem] font-semibold leading-8 text-[#244c78]">
            ConConsciencia es un centro psicológico comprometido con acompañar a las personas en sus procesos emocionales y de crecimiento personal. Escuchamos sin juicio, comprendemos con empatía y ofrecemos herramientas prácticas para transformar vidas.
          </p>
          <p className="mt-8 flex items-center gap-2 text-sm font-bold text-[#315a82]">
            <HeartTinyIcon className="size-5 text-[#5f93be]" />
            Atención cálida, confidencial y personalizada
          </p>
        </div>

        <div className="reveal-soft reveal-delay-1 relative mx-auto flex min-h-[24rem] w-full max-w-[36rem] items-center justify-center lg:min-h-[30rem]">
          <div className="breathe-soft absolute left-4 top-12 h-[14rem] w-[14rem] rounded-[45%_55%_55%_45%] bg-[#dcebf6]/85" aria-hidden="true" />
          <div className="breathe-soft absolute bottom-6 right-2 h-[15rem] w-[17rem] rounded-[55%_45%_50%_50%] bg-[#fde2d5]/90 [animation-delay:1.5s]" aria-hidden="true" />
          <BranchAccent className="absolute bottom-8 right-0 w-40 rotate-[-10deg] text-[#9bbfda] opacity-70 sm:w-48" />
          <img
            src="/illustrations/about-team.svg"
            alt="Ilustración del equipo de ConConsciencia"
            className="relative z-10 w-[min(88vw,34rem)] object-contain drop-shadow-[0_28px_42px_rgba(22,72,116,0.12)]"
            width="420"
            height="405"
            loading="eager"
          />
        </div>
      </div>

      <div className="absolute -bottom-12 left-1/2 h-28 w-[130vw] -translate-x-1/2 rounded-[50%] bg-[#fbfdff]" aria-hidden="true" />
    </section>
  );
}
