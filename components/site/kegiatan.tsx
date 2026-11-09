"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { JudulBagian } from "@/components/site/judul-bagian";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { kegiatan, prestasi, type Foto } from "@/lib/data";
import { cn } from "@/lib/utils";

const semuaFoto: Foto[] = [...prestasi, ...kegiatan];

type KartuProps = {
  foto: Foto;
  sizes: string;
  onBuka: () => void;
  besar?: boolean;
};

function KartuFoto({ foto, sizes, onBuka, besar = false }: KartuProps) {
  return (
    <figure className="group">
      <button
        type="button"
        onClick={onBuka}
        aria-label={`Perbesar foto: ${foto.judul}`}
        className="block w-full overflow-hidden rounded-[14px] bg-[#dcebdf]"
      >
        <Image
          src={foto.src}
          alt=""
          width={foto.width}
          height={foto.height}
          sizes={sizes}
          className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02] group-active:scale-100 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </button>
      <figcaption className="mt-3">
        <span className={cn("block font-heading font-semibold text-hijau-tua", besar ? "text-2xl" : "text-lg")}>
          {foto.judul}
        </span>
        <span className="mt-1 block text-[0.95rem] leading-relaxed text-tinta-redup">{foto.keterangan}</span>
      </figcaption>
    </figure>
  );
}

function FotoPenuh({ foto }: { foto: Foto }) {
  const [status, setStatus] = useState<"memuat" | "siap" | "gagal">("memuat");

  return (
    <div className="relative grid min-h-48 place-items-center overflow-hidden rounded-lg bg-mint">
      {status === "memuat" ? (
        <p role="status" className="absolute text-sm text-tinta-redup">
          Memuat foto...
        </p>
      ) : null}
      {status === "gagal" ? (
        <p role="alert" className="px-6 py-16 text-center text-[0.95rem] text-tinta">
          Foto tidak bisa dimuat. Periksa koneksi internet, lalu tutup dan buka lagi foto ini.
        </p>
      ) : (
        <Image
          src={foto.src}
          alt={`${foto.judul}. ${foto.keterangan}`}
          width={foto.width}
          height={foto.height}
          sizes="(min-width: 1024px) 900px, 100vw"
          onLoad={() => setStatus("siap")}
          onError={() => setStatus("gagal")}
          className="h-auto max-h-[68dvh] w-auto max-w-full object-contain"
        />
      )}
    </div>
  );
}

export function Kegiatan() {
  const [aktif, setAktif] = useState<number | null>(null);
  const foto = aktif === null ? null : semuaFoto[aktif];
  // Dialog dibuka dari state, bukan DialogTrigger, jadi tombol pembuka disimpan
  // sendiri agar fokus bisa dikembalikan saat ditutup.
  const pembuka = useRef<HTMLElement | null>(null);
  const buka = (i: number) => {
    pembuka.current = document.activeElement as HTMLElement | null;
    setAktif(i);
  };

  const geser = (arah: 1 | -1) =>
    setAktif((i) => (i === null ? i : (i + arah + semuaFoto.length) % semuaFoto.length));

  return (
    <section id="kegiatan" tabIndex={-1} aria-labelledby="judul-kegiatan" className="scroll-mt-20 bg-mint py-16 focus-visible:outline-none sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <JudulBagian
          id="judul-kegiatan"
          label="Arsip foto sekolah"
          judul={
            <>
              Prestasi dan <span className="stabilo">kegiatan</span> siswa
            </>
          }
          pengantar="Foto dari kegiatan dan lomba yang diikuti sekolah. Ketuk foto untuk melihat ukuran penuh."
        />

        {semuaFoto.length === 0 ? (
          <p className="mt-12 rounded-[14px] border border-dashed border-input bg-white px-6 py-10 text-center text-tinta-redup">
            Belum ada foto kegiatan. Tambahkan foto di <code>lib/data.ts</code> agar tampil di sini.
          </p>
        ) : null}

        {prestasi.length > 0 ? (
          <div className="mt-12 lg:mt-16">
            <h3 className="text-2xl font-semibold text-hijau-tua">Prestasi</h3>
            <div className="mt-6 grid gap-8 md:grid-cols-[1.15fr_1fr] md:gap-10">
              <KartuFoto
                foto={prestasi[0]}
                besar
                sizes="(min-width: 1152px) 580px, (min-width: 768px) 52vw, 100vw"
                onBuka={() => buka(0)}
              />
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-1">
                {prestasi.slice(1).map((f, i) => (
                  <KartuFoto
                    key={f.src}
                    foto={f}
                    sizes="(min-width: 1152px) 500px, (min-width: 768px) 45vw, (min-width: 640px) 50vw, 100vw"
                    onBuka={() => buka(i + 1)}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {kegiatan.length > 0 ? (
          <div className="mt-16 lg:mt-20">
            <h3 className="text-2xl font-semibold text-hijau-tua">Kegiatan sekolah</h3>
            <div className="mt-6 gap-8 sm:columns-2 lg:columns-3">
              {kegiatan.map((f, i) => (
                <div key={f.src} className="mb-8 break-inside-avoid">
                  <KartuFoto
                    foto={f}
                    sizes="(min-width: 1152px) 360px, (min-width: 1024px) 31vw, (min-width: 640px) 48vw, 100vw"
                    onBuka={() => buka(prestasi.length + i)}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <Dialog open={foto !== null} onOpenChange={(terbuka) => !terbuka && setAktif(null)}>
        <DialogContent
          className="max-h-[calc(100dvh-2rem)] gap-4 overflow-y-auto p-4 sm:max-w-4xl sm:p-6"
          onCloseAutoFocus={(e) => {
            e.preventDefault();
            pembuka.current?.focus();
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") geser(1);
            if (e.key === "ArrowLeft") geser(-1);
          }}
        >
          {foto ? (
            <>
              <div className="pr-12">
                <DialogTitle className="text-xl font-semibold text-hijau-tua">{foto.judul}</DialogTitle>
                <DialogDescription className="mt-1 text-[0.95rem] text-tinta-redup">{foto.keterangan}</DialogDescription>
              </div>
              <FotoPenuh key={foto.src} foto={foto} />
              <div className="flex items-center justify-between gap-3">
                <Button variant="outline" className="border-input" onClick={() => geser(-1)}>
                  <ChevronLeftIcon aria-hidden="true" />
                  Sebelumnya
                </Button>
                <p className="text-sm text-tinta-redup" aria-live="polite">
                  {(aktif ?? 0) + 1} dari {semuaFoto.length}
                </p>
                <Button variant="outline" className="border-input" onClick={() => geser(1)}>
                  Berikutnya
                  <ChevronRightIcon aria-hidden="true" />
                </Button>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
