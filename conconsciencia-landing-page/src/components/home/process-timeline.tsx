import type { ReactNode } from "react";

type ProcessStep = {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
};

type ProcessTimelineProps = {
  steps: ProcessStep[];
};

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <ol className="relative mx-auto max-w-2xl space-y-7 before:absolute before:left-5 before:top-7 before:h-[calc(100%-3.5rem)] before:w-px before:bg-[#b8d5ea] md:mx-0 md:before:left-[2.1rem]">
      {steps.map((step, index) => {
        const isWarm = index % 2 === 0;

        return (
          <li key={step.number} className="relative grid grid-cols-[2.7rem_4.2rem_1fr] items-start gap-4 md:grid-cols-[4.25rem_5.2rem_1fr] md:gap-5">
            <span
              className={`relative z-10 grid size-10 place-items-center rounded-full text-sm font-extrabold text-[#0454a6] shadow-[0_8px_18px_rgba(43,79,118,0.13)] md:size-[3.25rem] ${
                isWarm ? "bg-[#ff8b4f]" : "bg-[#a8cde6]"
              }`}
            >
              {step.number}
            </span>
            <span className="grid size-14 place-items-center rounded-full bg-[#fff9f4] text-[#0454a6] shadow-[0_12px_24px_rgba(43,79,118,0.09)] md:size-[4.25rem]">
              {step.icon}
            </span>
            <div className="pt-1">
              <h3 className="font-[family-name:var(--font-display)] text-[1.22rem] font-bold leading-tight text-[#0454a6]">
                {step.title}
              </h3>
              <p className="mt-1.5 max-w-[31rem] text-[0.94rem] font-semibold leading-6 text-[#315a82]">
                {step.description}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
