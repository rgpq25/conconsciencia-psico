import { CalendarIcon } from "./home-illustrations";

type AppointmentButtonProps = {
  className?: string;
  label?: string;
  variant?: "calendar" | "arrow";
};

export function AppointmentButton({
  className = "",
  label = "Agenda tu sesión",
  variant = "calendar",
}: AppointmentButtonProps) {
  return (
    <a
      href="#contacto"
      className={`inline-flex items-center justify-center gap-3 rounded-full bg-[#ff5a1f] px-7 py-4 text-base font-extrabold text-white shadow-[0_18px_34px_rgba(255,90,31,0.3)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff6c36] ${className}`}
    >
      {variant === "calendar" ? <CalendarIcon className="size-5" /> : null}
      {label}
      {variant === "arrow" ? <span aria-hidden="true">→</span> : null}
    </a>
  );
}
