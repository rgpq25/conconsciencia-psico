type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  title,
  subtitle,
  className = "",
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`relative z-10 ${centered ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.1rem,4vw,3.55rem)] font-semibold leading-none tracking-[-0.03em] text-[#0454a6]">
        {title}
      </h2>
      <span
        className={`mt-3 block h-[3px] w-16 rounded-full bg-[#ff5a1f] ${
          centered ? "mx-auto" : ""
        }`}
        aria-hidden="true"
      />
      {subtitle ? (
        <p className="mx-auto mt-6 max-w-2xl text-[1.02rem] leading-8 text-[#244c78]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
