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

export function BotanicalSpray(props: IconProps) {
  return (
    <svg viewBox="0 0 420 380" fill="none" aria-hidden="true" {...props}>
      <path d="M65 342c50-76 125-109 207-206" stroke="#0454a6" strokeWidth="3" strokeLinecap="round" opacity="0.74" />
      <path d="M132 275c-30-3-52 8-68 33 34 5 56-5 68-33ZM176 227c-34-2-60 11-78 40 38 2 63-12 78-40ZM222 178c-27-16-55-16-84 1 29 19 57 19 84-1ZM267 127c-6-32 4-58 31-78 8 35-2 61-31 78ZM245 153c28-11 52-7 72 13-31 14-55 9-72-13ZM201 202c27-9 50-5 69 13-29 13-52 8-69-13Z" fill="#cfe5f3" opacity="0.72" />
      <path d="M147 294c10-44 21-78 42-124M193 243c19-40 44-76 77-113M240 185c34-20 64-40 91-62" stroke="#0454a6" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      <path d="M288 91c12-16 25-21 40-16-6 18-19 24-40 16ZM246 145c20-2 35 5 45 20-20 5-35-2-45-20ZM196 207c18 3 31 12 38 28-19 2-32-7-38-28Z" stroke="#ff5a1f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="304" cy="111" r="6" fill="#ff5a1f" />
      <circle cx="333" cy="73" r="7" fill="#ff8b4f" />
      <circle cx="262" cy="165" r="6" fill="#ff5a1f" />
      <circle cx="218" cy="225" r="6" fill="#ff8b4f" />
      <path d="M28 352c47-11 76-7 105 12 32-20 65-27 105-19" stroke="#cfe5f3" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function PaleLeafSpray(props: IconProps) {
  return (
    <svg viewBox="0 0 260 380" fill="none" aria-hidden="true" {...props}>
      <path d="M19 353C91 246 129 145 129 31" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" opacity="0.45" />
      <path d="M88 238c-39-16-62-8-81 24 43 15 70 6 81-24ZM115 178c-39-17-68-10-91 22 46 18 76 10 91-22ZM131 112c-28-29-54-36-83-20 29 34 58 42 83 20ZM132 78c31-15 53-9 68 17-33 16-56 10-68-17ZM112 159c32-12 56-4 71 22-36 13-59 5-71-22ZM80 229c32-10 54-1 67 26-35 11-58 2-67-26Z" fill="currentColor" opacity="0.15" />
      <path d="M161 51c-8-28-1-44 21-50 9 29 2 45-21 50ZM122 121c-4-28 5-45 28-50 5 31-4 47-28 50Z" stroke="currentColor" strokeWidth="2" opacity="0.38" />
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

export function TeamIllustration(props: IconProps) {
  return (
    <svg viewBox="0 0 540 380" fill="none" aria-hidden="true" {...props}>
      <path d="M77 337c37-27 76-41 117-41h138c50 0 94 13 132 39" stroke="#8bbbe0" strokeWidth="5" strokeLinecap="round" opacity="0.35" />
      <g stroke="#2d75b9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M87 159c-19 22-31 58-33 108l-7 68h82l-5-77" fill="#e7f1f8" strokeWidth="3.4" />
        <path d="M117 151c16 28 47 39 74 27 28-13 42-45 31-74-10-30-41-45-70-37-29 8-47 35-43 63" fill="#eef6fb" strokeWidth="3.4" />
        <path d="M135 109c22 6 43-3 55-19 17 18 17 44 2 62" strokeWidth="3.2" />
        <path d="M139 131c7 10 19 12 30 4" strokeWidth="3" />
        <path d="M124 213c22 18 47 18 73 0M80 232c-20 19-33 43-39 71M206 227c14 27 23 61 26 102" strokeWidth="3.2" />
      </g>
      <g stroke="#2d75b9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M176 340l9-108c3-45 29-72 72-72 47 0 73 27 76 74l8 106H176Z" fill="#dfeef7" strokeWidth="3.4" />
        <path d="M217 139c-3-34 18-61 51-65 35-4 63 19 66 53 3 35-20 64-54 67-34 4-60-20-63-55Z" fill="#f3f8fb" strokeWidth="3.4" />
        <path d="M219 129c28 2 52-10 72-36 17 15 27 33 30 54" strokeWidth="3.2" />
        <path d="M251 140c9 9 23 9 33 0" strokeWidth="3" />
        <path d="M216 225c23 21 58 22 91 2M200 263c-14 21-21 45-20 74M322 260c19 22 29 49 31 80" strokeWidth="3.2" />
      </g>
      <g stroke="#2d75b9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M315 340l2-92c1-46 29-76 70-76 43 0 70 30 73 76l6 92H315Z" fill="#edf5fa" strokeWidth="3.4" />
        <path d="M342 145c-1-32 24-58 57-58 34 0 59 26 58 58-1 33-26 58-59 58-32 0-56-25-56-58Z" fill="#f7fbfd" strokeWidth="3.4" />
        <path d="M352 125c28 5 52-4 70-27 18 14 28 32 30 54" strokeWidth="3.2" />
        <path d="M377 148c9 9 22 9 31 0" strokeWidth="3" />
        <path d="M335 236c26 23 61 25 96 4M321 269c-17 22-27 46-29 72M445 261c23 21 37 47 43 79" strokeWidth="3.2" />
      </g>
      <g stroke="#2d75b9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 340l15-91c8-46 36-71 77-68 42 3 66 32 66 78l-1 81H18Z" fill="#f5f9fc" strokeWidth="3.4" />
        <path d="M58 151c-2-34 22-61 57-61 35 0 61 27 60 61-1 35-27 62-62 61-34 0-54-24-55-61Z" fill="#f7fbfd" strokeWidth="3.4" />
        <path d="M63 132c28 0 52-13 70-38 20 14 31 34 34 58" strokeWidth="3.2" />
        <path d="M93 155c9 9 22 9 32 0" strokeWidth="3" />
        <path d="M42 243c21 20 53 24 90 9M30 277c-15 18-24 38-27 61" strokeWidth="3.2" />
      </g>
      <path d="M93 325h350" stroke="#8bbbe0" strokeWidth="4" strokeLinecap="round" opacity="0.42" />
      <path d="M58 276c30 9 57 6 80-9M217 277c30 11 62 9 96-4M359 278c31 10 58 8 84-7" stroke="#2d75b9" strokeWidth="2.6" strokeLinecap="round" opacity="0.78" />
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
