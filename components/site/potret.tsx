import Image from "next/image";

import type { Orang } from "@/lib/data";
import { cn } from "@/lib/utils";

// Inisial dari nama tanpa gelar: "Rio Nur Sholeh, M.Pd" menjadi "RN".
export function inisial(nama: string) {
  return nama
    .split(",")[0]
    .split(/\s+/)
    .filter((kata) => kata && !kata.endsWith("."))
    .slice(0, 2)
    .map((kata) => kata[0].toUpperCase())
    .join("");
}

type Props = {
  orang: Orang;
  sizes: string;
  className?: string;
  priority?: boolean;
};

// Foto guru di website lama tidak semuanya ada. Yang kosong memakai inisial,
// bukan foto buatan (R-23).
export function Potret({ orang, sizes, className, priority }: Props) {
  return (
    <div className={cn("relative aspect-[3/4] overflow-hidden rounded-[14px] bg-[#dcebdf]", className)}>
      {orang.foto ? (
        <Image
          src={orang.foto}
          alt=""
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
      ) : (
        <span
          aria-hidden="true"
          className="absolute inset-0 grid place-items-center font-heading text-[2.5rem] font-semibold text-hijau-tua"
        >
          {inisial(orang.nama)}
        </span>
      )}
    </div>
  );
}
