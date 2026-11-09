import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type Props = {
  id?: string;
  label?: string;
  judul: ReactNode;
  pengantar?: ReactNode;
  className?: string;
  gelap?: boolean;
};

export function JudulBagian({ id, label, judul, pengantar, className, gelap = false }: Props) {
  return (
    <div data-reveal className={cn("max-w-3xl", className)}>
      {label ? (
        <p className={cn("mb-3 text-[0.95rem] font-semibold", gelap ? "text-[#a9cdb4]" : "text-hijau")}>
          {label}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.05] font-semibold tracking-[-0.01em]",
          gelap ? "text-white" : "text-hijau-tua",
        )}
      >
        {judul}
      </h2>
      {pengantar ? (
        <p className={cn("mt-5 text-lg leading-relaxed", gelap ? "text-[#d6ebdc]" : "text-tinta-redup")}>
          {pengantar}
        </p>
      ) : null}
    </div>
  );
}
