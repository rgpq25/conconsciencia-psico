import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function CalendarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3.5" y="4.5" width="17" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M7.5 2.8v4M16.5 2.8v4M4 9h16M8 13h2.2M13.7 13H16M8 16.5h2.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function HeartTinyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 20.1s-7-4.2-8.4-9.1C2.5 7.1 6.9 4.7 9.7 7.5L12 9.8l2.3-2.3c2.8-2.8 7.2-.4 6.1 3.5C19 15.9 12 20.1 12 20.1Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PeopleCareIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 72 72" fill="none" aria-hidden="true" {...props}>
      <circle cx="25" cy="23" r="8" fill="currentColor" opacity="0.55" />
      <circle cx="49" cy="23" r="8" fill="currentColor" opacity="0.8" />
      <path d="M13 56c1-13 8.5-20 18.5-20 5.8 0 10.5 2.1 13.7 6" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M39 56c.8-12.5 7.7-20 17.6-20" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M36 38c4.3 5 10.8 5.1 15.2 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function BloomIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 72 72" fill="none" aria-hidden="true" {...props}>
      <path d="M36 60V31" stroke="#0454a6" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M36 34c-13-6-17-16-15-26 10 2 18 9 15 26Z" fill="#ff5a1f" opacity="0.92" />
      <path d="M36 34c13-6 17-16 15-26-10 2-18 9-15 26Z" fill="#ff8b4f" opacity="0.95" />
      <path d="M36 53c-10-1-17-7-20-16 10-1 18 4 20 16ZM36 53c10-1 17-7 20-16-10-1-18 4-20 16Z" stroke="#0454a6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 61h36" stroke="#0454a6" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function GrowthIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 72 72" fill="none" aria-hidden="true" {...props}>
      <path d="M36 58V33" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M36 38c-12-2-19-9-21-21 13 1 20 9 21 21Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M36 38c12-2 19-9 21-21-13 1-20 9-21 21Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 60h40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function CouchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 82 82" fill="none" aria-hidden="true" {...props}>
      <path d="M18 46V35c0-8 5-13 13-13h18c8 0 13 5 13 13v11" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M14 48h53c5 0 8 3 8 8v11H7V55c0-4 3-7 7-7Z" fill="currentColor" opacity="0.28" />
      <path d="M7 67h68M17 67v7M65 67v7M67 48v-7c0-4 2-6 6-6 3 0 5 2 5 6v20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M60 20h14v32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M54 20h26L74 5H60l-6 15Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CoupleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 82 82" fill="none" aria-hidden="true" {...props}>
      <circle cx="30" cy="24" r="10" fill="currentColor" opacity="0.45" />
      <circle cx="54" cy="23" r="11" fill="#ff5a1f" opacity="0.9" />
      <path d="M17 66c1-16 10-25 23-25" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <path d="M39 66c1-16 9-25 24-25" stroke="#ff5a1f" strokeWidth="6" strokeLinecap="round" />
      <path d="M34 43c5 5 12 5 17 0" stroke="#0454a6" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function FamilyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 82 82" fill="none" aria-hidden="true" {...props}>
      <circle cx="41" cy="20" r="9" fill="currentColor" opacity="0.38" />
      <circle cx="23" cy="32" r="7" fill="#ff5a1f" opacity="0.5" />
      <circle cx="59" cy="32" r="7" fill="#ff5a1f" opacity="0.5" />
      <path d="M18 63c1-11 7-18 17-18h12c10 0 16 7 17 18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M9 63c.8-9 6-15 14-15M73 63c-.8-9-6-15-14-15" stroke="#0454a6" strokeWidth="4" strokeLinecap="round" />
      <path d="M31 30c4.8 6 14.6 6 20 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="41" cy="41" r="32" stroke="currentColor" strokeWidth="2.5" opacity="0.45" />
    </svg>
  );
}

export function LotusIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 82 82" fill="none" aria-hidden="true" {...props}>
      <path d="M41 55C30 43 31 29 41 16c10 13 11 27 0 39Z" fill="#ff5a1f" opacity="0.9" />
      <path d="M40 56C25 52 16 42 14 28c15 2 25 12 26 28ZM42 56c15-4 24-14 26-28-15 2-25 12-26 28Z" stroke="#0454a6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 63h32M19 69h44M41 17v48" stroke="#0454a6" strokeWidth="3" strokeLinecap="round" />
      <path d="M28 38c-5-7-6-15-4-24 10 3 16 10 17 21M54 38c5-7 6-15 4-24-10 3-16 10-17 21" stroke="#f2a800" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function HeadHeartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 82 82" fill="none" aria-hidden="true" {...props}>
      <path d="M35 70V58H24c-4 0-7-3-7-7V36c0-15 12-26 28-26 15 0 26 10 26 24 0 10-5 18-14 22v14H35Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M45 41s-10-6-10-13c0-5 6-7 10-3 4-4 10-2 10 3 0 7-10 13-10 13Z" fill="#ff8b4f" stroke="#ff5a1f" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path d="M8 22c0-8 7-14 16-14s16 6 16 14-7 14-16 14c-2.6 0-5-.5-7.2-1.5L9 38l2.6-7.1A13.2 13.2 0 0 1 8 22Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ClipboardIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path d="M17 10h14l2 5H15l2-5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M13 14H9v27h30V14h-4" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M17 24h14M17 31h14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <circle cx="24" cy="24" r="15" stroke="currentColor" strokeWidth="3" />
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="3" />
      <path d="M24 24 38 10M35 10h3v3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PersonIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <circle cx="24" cy="16" r="7" stroke="currentColor" strokeWidth="3" />
      <path d="M11 40c1-10 6-16 13-16s12 6 13 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function SproutLineIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path d="M24 40V21" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 25c-9-1-14-6-16-15 9 .6 15 6 16 15ZM24 29c10-1 16-7 17-17-10 .7-16 7-17 17Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DottedCluster(props: IconProps) {
  const dots = [
    [8, 7],
    [31, 6],
    [55, 8],
    [17, 31],
    [42, 31],
    [66, 31],
    [8, 55],
    [31, 56],
    [55, 55],
    [78, 56],
  ];

  return (
    <svg viewBox="0 0 88 72" fill="none" aria-hidden="true" {...props}>
      {dots.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.2" fill="currentColor" opacity="0.38" />
      ))}
    </svg>
  );
}

export function BranchAccent(props: IconProps) {
  return (
    <svg viewBox="0 0 230 120" fill="none" aria-hidden="true" {...props}>
      <path d="M19 100c60-25 118-55 190-91" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
      <path d="M68 80c-22-18-42-18-60-2 24 20 44 20 60 2ZM105 62c-16-23-35-29-57-18 18 26 38 31 57 18ZM144 42c-10-26-27-35-51-29 12 29 30 39 51 29ZM158 36c20-1 35 7 45 24-22 4-37-4-45-24ZM124 54c22 1 37 11 46 30-25 2-40-8-46-30ZM88 72c22 4 35 16 40 36-25-1-38-13-40-36Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SocialIcon({ kind, ...props }: IconProps & { kind: "instagram" | "facebook" | "youtube" | "whatsapp" }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      {kind === "instagram" ? (
        <>
          <rect x="7" y="7" width="18" height="18" rx="6" stroke="currentColor" strokeWidth="2.4" />
          <circle cx="16" cy="16" r="4.4" stroke="currentColor" strokeWidth="2.2" />
          <circle cx="21.4" cy="10.7" r="1.6" fill="currentColor" />
        </>
      ) : null}
      {kind === "facebook" ? (
        <path d="M18 27V17h4l1-4h-5v-2.6c0-1.1.4-2 2.2-2H23V5.1c-1.2-.2-2.7-.3-4.1-.3-4.1 0-6.9 2.5-6.9 7V13H8v4h4v10h6Z" fill="currentColor" />
      ) : null}
      {kind === "youtube" ? (
        <>
          <rect x="5" y="9" width="22" height="14" rx="5" fill="currentColor" />
          <path d="m14 13 7 3-7 3v-6Z" fill="white" />
        </>
      ) : null}
      {kind === "whatsapp" ? (
        <>
          <path d="M7 27l2-5.2A10.5 10.5 0 1 1 13 25.2L7 27Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M13 12.5c.4 4.1 2.8 6.4 6.4 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        </>
      ) : null}
    </svg>
  );
}
