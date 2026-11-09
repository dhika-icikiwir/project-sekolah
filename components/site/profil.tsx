import Image from "next/image";

import { JudulBagian } from "@/components/site/judul-bagian";
import { misi, sejarah, visi } from "@/lib/data";

export function Profil() {
  return (
    <>
      <section id="profil" tabIndex={-1} aria-labelledby="judul-profil" className="scroll-mt-20 py-16 focus-visible:outline-none sm:py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <JudulBagian
              id="judul-profil"
              label="Sejarah sekolah"
              judul={
                <>
                  Berawal dari kursus <span className="stabilo">pembukuan</span> tahun 1972
                </>
              }
              pengantar="Sekolah ini lahir dari kursus kecil yang dibuka seorang pegawai Yapis Irian Jaya, lalu tumbuh menjadi SMEA dan kini SMK."
            />
            <figure className="mt-10">
              <Image
                src="/images/sekolah/guru-dan-staf.jpg"
                alt="Guru dan staf berpakaian adat dan batik duduk di tangga depan gedung sekolah"
                width={1600}
                height={1200}
                sizes="(min-width: 1152px) 520px, (min-width: 1024px) 45vw, 100vw"
                className="aspect-[4/3] w-full rounded-[14px] object-cover"
              />
              <figcaption className="mt-3 text-sm text-tinta-redup">Guru dan staf di depan gedung sekolah.</figcaption>
            </figure>
          </div>

          <ol data-timeline className="relative ml-1.5 lg:mt-2">
            <span aria-hidden="true" className="absolute top-2 bottom-2 left-0 w-[3px] rounded-full bg-[#dcebdf]" />
            <span
              aria-hidden="true"
              data-timeline-line
              className="absolute top-2 bottom-2 left-0 w-[3px] origin-top rounded-full bg-hijau"
            />
            {sejarah.map((item) => (
              <li key={item.judul} className="relative pb-12 pl-9 last:pb-0 sm:pl-12">
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 left-[-6.5px] size-4 rounded-full border-[3px] border-hijau bg-white"
                />
                <p className="font-heading text-xl font-semibold text-hijau sm:text-2xl">{item.waktu}</p>
                <h3 className="mt-1 text-[1.6rem] leading-tight font-semibold text-hijau-tua">{item.judul}</h3>
                <p className="mt-3 max-w-prose text-[1.05rem] leading-relaxed text-tinta">{item.isi}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="judul-visi" className="on-dark bg-hijau-tua py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="judul-visi" data-reveal className="text-[0.95rem] font-sans font-semibold text-[#a9cdb4]">
            Visi dan misi
          </h2>
          <p
            data-reveal
            className="mt-4 max-w-4xl font-heading text-[clamp(1.75rem,4.2vw,3rem)] leading-[1.15] font-medium text-white"
          >
            {visi}
          </p>

          <div className="mt-14 border-t border-white/20 pt-10 lg:mt-20">
            <h3 className="font-heading text-2xl font-semibold text-white">Misi</h3>
            <ol className="mt-8 grid gap-x-12 gap-y-7 md:grid-cols-2">
              {misi.map((butir, i) => (
                <li key={butir} className="grid grid-cols-[2.5rem_1fr] gap-3">
                  <span aria-hidden="true" className="font-heading text-2xl leading-none font-semibold text-[#a9cdb4]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[1.05rem] leading-relaxed text-[#d6ebdc]">{butir}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
