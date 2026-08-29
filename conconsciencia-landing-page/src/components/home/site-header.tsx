import { useState } from "react";
import { AppointmentButton } from "./appointment-button";
import { CloseIcon, MenuIcon } from "./home-illustrations";

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#quienes-somos", label: "Quiénes somos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#recursos", label: "Recursos" },
  { href: "#contacto", label: "Contacto" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d9e6f2]/80 bg-white/92 shadow-[0_8px_28px_rgba(43,79,118,0.08)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-[6.7rem] lg:px-10">
        <a
          href="/"
          className="flex items-center gap-2.5 rounded-2xl focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#ff8b62]"
          aria-label="ConConsciencia Centro Psicológico"
        >
          <img
            src="/branding/logo-icon.png"
            alt=""
            className="h-[3.25rem] w-[3.25rem] object-contain sm:h-16 sm:w-16 lg:h-[4.65rem] lg:w-[4.65rem]"
            width="928"
            height="928"
          />
          <img
            src="/branding/logo-text.png"
            alt="ConConsciencia Centro Psicológico"
            className="h-auto w-[9.7rem] object-contain sm:w-[12.2rem] lg:w-[13.6rem]"
            width="778"
            height="156"
          />
        </a>

        <nav
          className="hidden items-center gap-9 text-[0.92rem] font-semibold text-[#0454a6] lg:flex"
          aria-label="Navegación principal"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-1.5 py-2 transition duration-300 hover:text-[#ff5a1f]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden items-center justify-center rounded-full bg-[#ff5a1f] px-5 py-3 text-sm font-extrabold text-white shadow-[0_14px_28px_rgba(255,90,31,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff6c36] sm:px-7 lg:inline-flex lg:px-8 lg:py-4 lg:text-base"
        >
          Agenda tu sesión
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className="grid size-11 place-items-center rounded-full text-[#0454a6] transition duration-300 hover:bg-[#eef5fb] lg:hidden"
        >
          {isMenuOpen ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-nav"
          className="border-t border-[#d9e6f2]/80 bg-white/98 px-5 pb-6 pt-4 shadow-[0_18px_28px_rgba(43,79,118,0.08)] sm:px-8 lg:hidden"
          aria-label="Navegación móvil"
        >
          <ul className="flex flex-col gap-1 text-base font-semibold text-[#0454a6]">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-3 py-3 transition duration-300 hover:bg-[#eef5fb] hover:text-[#ff5a1f]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <AppointmentButton className="mt-4 w-full" />
        </nav>
      ) : null}
    </header>
  );
}
