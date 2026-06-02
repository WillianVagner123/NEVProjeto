import { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({ eyebrow, title, children, align = "left" }: { eyebrow?: string; title: string; children?: ReactNode; align?: "left" | "center" }) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className="section-title mt-5">{title}</h2>
      {children && <div className="body-lg mt-6">{children}</div>}
    </Reveal>
  );
}
