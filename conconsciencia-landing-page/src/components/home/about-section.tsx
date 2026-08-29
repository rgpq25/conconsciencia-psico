import { AppointmentButton } from "./appointment-button";
import { SectionHeading } from "./section-heading";

export function AboutSection() {
  return (
    <section id="quienes-somos" className="bg-[#f8fbff] px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-[2.3rem] bg-white/40 px-6 py-8 shadow-[0_20px_60px_rgba(46,86,125,0.05)] sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-14 lg:py-10">
        <div className="order-2 lg:order-1">
          <img
            src="/illustrations/about-team.svg"
            alt="Ilustración del equipo de ConConsciencia"
            className="mx-auto w-full max-w-[30rem] object-contain"
            width="420"
            height="405"
            loading="lazy"
          />
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
          <AppointmentButton
            className="mt-8 px-8"
            label="Conoce más sobre nosotros"
            variant="arrow"
          />
        </div>
      </div>
    </section>
  );
}
