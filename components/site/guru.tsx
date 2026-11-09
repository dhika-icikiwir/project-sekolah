"use client";

import { useState } from "react";

import { JudulBagian } from "@/components/site/judul-bagian";
import { Potret } from "@/components/site/potret";
import { Button } from "@/components/ui/button";
import { guruStaf, kaprog, kepalaSekolah, pimpinan, type Orang } from "@/lib/data";

const pimpinanDanKaprog: Orang[] = [...pimpinan, kaprog.mplb, kaprog.akl, kaprog.pplg];
const TAMPIL_AWAL = 6;

function KartuOrang({ orang, sizes }: { orang: Orang; sizes: string }) {
  return (
    <li>
      <Potret orang={orang} sizes={sizes} />
      <p className="mt-3 text-[0.95rem] leading-snug font-semibold text-tinta">{orang.nama}</p>
      {orang.jabatan ? <p className="mt-0.5 text-sm leading-snug text-tinta-redup">{orang.jabatan}</p> : null}
    </li>
  );
}

export function Guru() {
  const [semua, setSemua] = useState(false);
  const daftar = semua ? guruStaf : guruStaf.slice(0, TAMPIL_AWAL);
  const sisa = guruStaf.length - TAMPIL_AWAL;

  return (
    <section id="guru" tabIndex={-1} aria-labelledby="judul-guru" className="scroll-mt-20 bg-mint py-16 focus-visible:outline-none sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <JudulBagian
          id="judul-guru"
          label="Tenaga pengajar dan tata usaha"
          judul={
            <>
              Guru dan <span className="stabilo">staf</span> sekolah
            </>
          }
        />

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[17rem_1fr] lg:gap-14">
          <figure data-reveal className="grid grid-cols-[8.5rem_1fr] items-end gap-5 sm:grid-cols-[11rem_1fr] lg:block">
            <Potret orang={kepalaSekolah} sizes="(min-width: 1024px) 272px, 176px" />
            <figcaption className="lg:mt-5">
              <span className="block text-sm text-tinta-redup">{kepalaSekolah.jabatan}</span>
              <span className="mt-1 block font-heading text-2xl leading-tight font-semibold text-hijau-tua">
                {kepalaSekolah.nama}
              </span>
            </figcaption>
          </figure>

          <div>
            <h3 className="text-xl font-semibold text-hijau-tua">Wakil kepala sekolah dan kepala program</h3>
            <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 xl:grid-cols-4">
              {pimpinanDanKaprog.map((orang) => (
                <KartuOrang key={orang.nama} orang={orang} sizes="(min-width: 1280px) 190px, (min-width: 640px) 30vw, 45vw" />
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-[#cfe0d3] pt-10 lg:mt-20">
          <h3 className="text-xl font-semibold text-hijau-tua">Guru dan tata usaha</h3>
          <ul
            id="daftar-guru"
            className="mt-6 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
          >
            {daftar.map((orang) => (
              <KartuOrang key={orang.nama} orang={orang} sizes="(min-width: 1024px) 170px, (min-width: 768px) 23vw, (min-width: 640px) 30vw, 45vw" />
            ))}
          </ul>
          {sisa > 0 ? (
            <Button
              variant="outline"
              className="mt-10 border-input bg-white text-hijau-tua"
              aria-expanded={semua}
              aria-controls="daftar-guru"
              onClick={() => setSemua((v) => !v)}
            >
              {semua ? "Tampilkan lebih sedikit" : `Tampilkan ${sisa} guru dan staf lainnya`}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
