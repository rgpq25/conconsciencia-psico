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
      className={`relative z-10 mx-auto text-center ${centered ? "" : "md:mx-0 md:text-left"} ${className}`}
    >
      <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.85rem,7vw,3.55rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-[#0454a6] sm:leading-none">
        {title}
      </h2>
      <span
        className={`mx-auto mt-3 block h-[3px] w-16 rounded-full bg-[#ff5a1f] ${
          centered ? "" : "md:mx-0"
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
