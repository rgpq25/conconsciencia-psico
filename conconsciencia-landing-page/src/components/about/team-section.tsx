import { SectionHeading } from "../home/section-heading";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  width: number;
  height: number;
};

const team: TeamMember[] = [
  {
    name: "Laura Gómez",
    role: "Psicóloga Clínica",
    bio: "Especialista en terapia individual y manejo emocional.",
    image: "/illustrations/team-laura.svg",
    width: 185,
    height: 167,
  },
  {
    name: "Juan Esteban Ríos",
    role: "Psicólogo Clínico",
    bio: "Enfocado en terapia de pareja y resolución de conflictos.",
    image: "/illustrations/team-juan.svg",
    width: 180,
    height: 167,
  },
  {
    name: "María Camila Vélez",
    role: "Psicóloga",
    bio: "Experta en desarrollo personal y autoestima.",
    image: "/illustrations/team-maria.svg",
    width: 185,
    height: 167,
  },
  {
    name: "Andrés Felipe Vargas",
    role: "Psicólogo",
    bio: "Especialista en orientación vocacional y coaching.",
    image: "/illustrations/team-andres.svg",
    width: 180,
    height: 167,
  },
];

export function TeamSection() {
  return (
    <section id="quienes-somos-equipo" className="relative bg-[#f8fbff] px-5 pb-16 pt-4 sm:px-8 lg:px-10 lg:pb-20">
      <SectionHeading
        title="Nuestro equipo"
        subtitle="Profesionales apasionados por acompañar procesos humanos con compromiso, calidez y formación continua."
      />

      <div className="relative z-10 mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <article
            key={member.name}
            className="soft-card-shadow flex flex-row items-center gap-4 rounded-[1.7rem] border border-white/80 bg-white px-5 py-5 text-left transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(46,86,125,0.14)] sm:flex-col sm:items-center sm:gap-0 sm:px-6 sm:py-8 sm:text-center"
          >
            <div className="relative flex h-24 w-24 shrink-0 items-center justify-center sm:h-32 sm:w-32">
              <div className="absolute inset-0 rounded-full bg-[#eef3f8]" aria-hidden="true" />
              <img
                src={member.image}
                alt={`Ilustración de ${member.name}`}
                className="relative z-10 w-full max-w-[7rem] object-contain sm:max-w-[9.5rem]"
                width={member.width}
                height={member.height}
                loading="lazy"
              />
            </div>
            <div className="sm:contents">
              <h3 className="font-(family-name:--font-display) text-[1.05rem] font-bold leading-tight text-[#0454a6] sm:mt-5 sm:text-[1.2rem]">
                {member.name}
              </h3>
              <p className="mt-0.5 text-[0.8rem] font-extrabold text-[#ff5a1f] sm:mt-1 sm:text-[0.86rem]">
                {member.role}
              </p>
              <p className="mt-1 text-[0.82rem] leading-6 text-[#315a82] sm:mt-2 sm:text-[0.88rem]">
                {member.bio}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
