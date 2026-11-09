import Image from "next/image";

import { JudulBagian } from "@/components/site/judul-bagian";
import { kutipanSiswa } from "@/lib/data";

export function SuaraSiswa() {
  if (kutipanSiswa.length === 0) return null;
  const [utama, ...lainnya] = kutipanSiswa;

  return (
    <section aria-labelledby="judul-suara" className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <JudulBagian
          id="judul-suara"
          label="Dari siswa"
          judul={
            <>
              Kata mereka yang <span className="stabilo">belajar</span> di sini
            </>
          }
          pengantar="Kutipan dari testimoni siswa yang dimuat di website sekolah sebelumnya."
        />

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <figure data-reveal className="grid gap-6 sm:grid-cols-[11rem_1fr] sm:gap-8">
            <Image
              src={utama.foto}
              alt=""
              width={529}
              height={900}
              sizes="176px"
              className="aspect-[3/4] w-36 rounded-[14px] object-cover object-top sm:w-full"
            />
            <div>
              <blockquote className="font-heading text-[clamp(1.4rem,2.6vw,1.9rem)] leading-snug font-medium text-hijau-tua">
                <p>&ldquo;{utama.isi}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-6">
                <span className="block font-semibold text-tinta">{utama.nama}</span>
                <span className="block text-[0.95rem] text-tinta-redup">{utama.peran}</span>
              </figcaption>
            </div>
          </figure>

          <ul className="divide-y divide-border border-y border-border">
            {lainnya.map((k) => (
              <li key={k.nama} data-reveal className="py-7">
                <figure className="grid grid-cols-[3.5rem_1fr] gap-4">
                  <Image
                    src={k.foto}
                    alt=""
                    width={112}
                    height={112}
                    sizes="56px"
                    className="size-14 rounded-full object-cover object-top"
                  />
                  <div>
                    <blockquote className="text-[1.05rem] leading-relaxed text-tinta">
                      <p>&ldquo;{k.isi}&rdquo;</p>
                    </blockquote>
                    <figcaption className="mt-3 text-[0.95rem]">
                      <span className="font-semibold text-tinta">{k.nama}</span>
                      <span className="text-tinta-redup">, {k.peran}</span>
                    </figcaption>
                  </div>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
