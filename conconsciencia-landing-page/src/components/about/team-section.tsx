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
            className="soft-card-shadow flex flex-col items-center rounded-[1.7rem] border border-white/80 bg-white px-6 py-8 text-center transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(46,86,125,0.14)]"
          >
            <div className="relative flex h-32 w-32 items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[#eef3f8]" aria-hidden="true" />
              <img
                src={member.image}
                alt={`Ilustración de ${member.name}`}
                className="relative z-10 w-full max-w-[9.5rem] object-contain"
                width={member.width}
                height={member.height}
                loading="lazy"
              />
            </div>
            <h3 className="mt-5 font-(family-name:--font-display) text-[1.2rem] font-bold leading-tight text-[#0454a6]">
              {member.name}
            </h3>
            <p className="mt-1 text-[0.86rem] font-extrabold text-[#ff5a1f]">{member.role}</p>
            <p className="mt-2 text-[0.88rem] leading-6 text-[#315a82]">{member.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
