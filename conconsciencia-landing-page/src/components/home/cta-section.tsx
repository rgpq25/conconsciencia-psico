import { AppointmentButton } from "./appointment-button";
import { BranchAccent } from "./home-illustrations";

export function CtaSection() {
  return (
    <section className="bg-[#f8fbff] px-5 py-5 sm:px-8 lg:px-10">
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#fff1e6] via-[#fff8f3] to-[#ffe7d6] px-7 py-8 sm:px-12 lg:flex-row lg:items-center lg:px-20">
        <div className="absolute -left-14 -top-12 h-56 w-56 rounded-full border border-white/80 opacity-80" aria-hidden="true" />
        <BranchAccent className="absolute bottom-2 right-4 w-32 text-[#ff7a3d] opacity-75 sm:right-8 md:w-64" />
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
  );
}
