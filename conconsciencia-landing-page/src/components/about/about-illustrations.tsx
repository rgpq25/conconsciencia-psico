import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function HeartFilledIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path
        d="M24 40s-15-8.2-17.5-19C4.5 13 11 7 17 12l7 6 7-6c6-5 12.5 1 10.5 9C39 31.8 24 40 24 40Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path
        d="M24 5 9 10v11c0 11 7 18.5 15 22 8-3.5 15-11 15-22V10Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect x="18" y="21" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="3" />
      <path d="M20.5 21v-3a3.5 3.5 0 0 1 7 0v3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function MedalIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 29 13 41l7-2.5L24 44l4-5.5 7 2.5-4-12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="19" r="11" stroke="currentColor" strokeWidth="3" />
      <path
        d="M24 13.5 26 18h5l-4 3 1.5 5-4.5-3-4.5 3L20 21l-4-3h5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TwoPeopleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <circle cx="17" cy="16" r="6" stroke="currentColor" strokeWidth="3" />
      <path d="M7 38c1-8 5-13 10-13s9 5 10 13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="32" cy="16" r="6" stroke="currentColor" strokeWidth="3" />
      <path d="M22 38c1-8 5-13 10-13s9 5 10 13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function EyeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 24c4-8 12-13 20-13s16 5 20 13c-4 8-12 13-20 13S8 32 4 24Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

export function MountainsDecor(props: IconProps) {
  return (
    <svg viewBox="0 0 240 110" fill="none" aria-hidden="true" {...props}>
      <circle cx="188" cy="34" r="16" fill="currentColor" opacity="0.65" />
      <path d="M0 110 55 52l30 26 25-19 40 29 30-24 60 46Z" fill="currentColor" opacity="0.55" />
    </svg>
  );
}
