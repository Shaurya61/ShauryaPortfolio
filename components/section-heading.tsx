import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  note?: React.ReactNode;
};

export default function SectionHeading({ children, note }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex flex-wrap items-end justify-between gap-x-8 gap-y-3 sm:mb-16">
      <h2 className="display text-[2.75rem] font-extrabold leading-none sm:text-[4.5rem]">
        {children}
      </h2>
      {note && <p className="max-w-[26rem] text-muted">{note}</p>}
    </div>
  );
}
