import { SocialIcon } from "./home-illustrations";

const footerLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#quienes-somos", label: "Quiénes somos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#recursos", label: "Recursos" },
  { href: "#contacto", label: "Contacto" },
];

const socials = [
  { kind: "instagram" as const, label: "Instagram", color: "text-[#ff7a3d]" },
  { kind: "facebook" as const, label: "Facebook", color: "text-[#1e80e6]" },
  { kind: "youtube" as const, label: "YouTube", color: "text-[#e42828]" },
  { kind: "whatsapp" as const, label: "WhatsApp", color: "text-[#19ad61]" },
];

export function SiteFooter() {
  return (
    <footer id="contacto" className="bg-[#f8fbff] px-5 pb-8 pt-7 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-white/45 px-5 py-7 sm:px-8 lg:grid-cols-[1.25fr_1fr_0.75fr_0.75fr] lg:px-12">
        <div>
          <a href="/" className="inline-flex items-center gap-3" aria-label="ConConsciencia Centro Psicológico">
            <img src="/branding/logo-icon.png" alt="" className="h-20 w-20 object-contain" width="928" height="928" />
            <img src="/branding/logo-text.png" alt="ConConsciencia Centro Psicológico" className="h-auto w-44 object-contain" width="778" height="156" />
          </a>
          <p className="mt-4 max-w-[18rem] text-sm font-semibold leading-6 text-[#5e7895]">
            Acompañamiento psicológico con empatía, respeto y profesionalismo.
          </p>
        </div>

        <div>
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#0454a6]">Contacto</h2>
          <ul className="mt-4 space-y-3 text-sm font-semibold text-[#315a82]">
            <li className="flex gap-3">
              <span aria-hidden="true" className="min-w-7 text-xs font-extrabold uppercase text-[#0454a6]">Tel</span>
              <a href="tel:+573001234567" className="hover:text-[#ff5a1f]">+57 300 123 4567</a>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="min-w-7 text-xs font-extrabold uppercase text-[#0454a6]">Mail</span>
              <a href="mailto:hola@conconsciencia.com" className="hover:text-[#ff5a1f]">hola@conconsciencia.com</a>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="min-w-7 text-xs font-extrabold uppercase text-[#0454a6]">Dir</span>
              <span>Calle 45 # 22-10, Medellín, Colombia</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#0454a6]">Enlaces</h2>
          <ul className="mt-4 space-y-2 text-sm font-bold text-[#315a82]">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-[#ff5a1f]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#0454a6]">Síguenos</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {socials.map((social) => (
              <a
                key={social.kind}
                href="#contacto"
                aria-label={social.label}
                className={`grid size-9 place-items-center rounded-full bg-white shadow-[0_8px_18px_rgba(43,79,118,0.08)] transition duration-300 hover:-translate-y-0.5 ${social.color}`}
              >
                <SocialIcon kind={social.kind} className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-4 flex max-w-7xl flex-col gap-2 px-5 text-xs font-semibold text-[#7b92a8] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p>&copy; 2024 ConConsciencia Centro Psicológico. Todos los derechos reservados.</p>
        <p>
          <a href="#contacto" className="hover:text-[#ff5a1f]">Política de privacidad</a>
          <span className="mx-3">|</span>
          <a href="#contacto" className="hover:text-[#ff5a1f]">Términos y condiciones</a>
        </p>
      </div>
    </footer>
  );
}
