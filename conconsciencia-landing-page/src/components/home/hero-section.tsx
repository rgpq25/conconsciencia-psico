import { AppointmentButton } from "./appointment-button";
import {
  BranchAccent,
  DottedCluster,
  HeartTinyIcon,
} from "./home-illustrations";

export function HeroSection() {
  return (
    <section id="inicio" className="bg-grain relative isolate overflow-hidden bg-[#fbfdff]">
      <div className="absolute -left-24 top-8 h-96 w-96 rounded-full bg-[#dcebf6]/70 blur-3xl" aria-hidden="true" />
      <div className="absolute right-0 top-20 h-[31rem] w-[31rem] rounded-full bg-[#fde8db]/70 blur-3xl" aria-hidden="true" />
      <div className="absolute left-[44%] top-0 h-52 w-52 rounded-b-full bg-white/70" aria-hidden="true" />
      <DottedCluster className="absolute right-10 top-52 hidden w-24 text-[#9cc7e4] md:block" />

      <div className="relative z-10 mx-auto grid min-h-[41rem] max-w-7xl items-center gap-10 px-5 pb-24 pt-14 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:pb-20 lg:pt-20">
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
            src="/illustrations/hero-embrace.svg"
            alt="Ilustración de dos personas abrazándose con calidez"
            className="relative z-10 w-[min(58vw,24rem)] object-contain drop-shadow-[0_28px_42px_rgba(22,72,116,0.12)]"
            width="264"
            height="378"
            loading="eager"
          />
        </div>
      </div>

      <div className="absolute -bottom-12 left-1/2 h-28 w-[130vw] -translate-x-1/2 rounded-[50%] bg-[#fbfdff]" aria-hidden="true" />
    </section>
  );
}
