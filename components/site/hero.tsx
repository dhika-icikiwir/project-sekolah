import Image from "next/image";

import { Button } from "@/components/ui/button";
import { cemara } from "@/lib/data";

function KataCemara({ huruf, kata }: { huruf: string; kata: string }) {
  const i = kata.toLowerCase().indexOf(huruf.toLowerCase());
  return (
    <>
      {kata.slice(0, i)}
      <span className="font-bold text-hijau-tua underline decoration-2 underline-offset-4">{kata[i]}</span>
      {kata.slice(i + 1)}
    </>
  );
}

export function Hero() {
  return (
    <section id="beranda" tabIndex={-1} aria-labelledby="judul-utama" className="scroll-mt-20 focus-visible:outline-none">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-8 pb-14 sm:px-6 sm:pt-12 md:grid-cols-[1.1fr_0.9fr] md:gap-8 lg:gap-14 lg:pt-16 lg:pb-20">
        <div>
          <p className="text-[0.95rem] font-medium text-tinta-redup">Jayapura Utara, Papua. Berdiri sejak 1972.</p>

          <h1
            id="judul-utama"
            className="mt-4 text-[clamp(2.75rem,10vw,4.75rem)] leading-[0.95] md:text-[clamp(2.75rem,6.4vw,4.75rem)] font-semibold tracking-[-0.02em] text-hijau-tua"
          >
            <span className="block overflow-hidden pb-[0.06em]">
              <span data-hero-line className="block">
                SMK
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <span data-hero-line className="block">
                <span className="stabilo">Hikmah</span> Yapis
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <span data-hero-line className="block">
                Jayapura
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-tinta-redup">
            Sekolah menengah kejuruan di bawah Yayasan Pendidikan Islam (YAPIS). Siswa memilih satu dari tiga
            program: administrasi perkantoran, akuntansi, atau pengembangan perangkat lunak.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#jurusan">Lihat tiga jurusan</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-input text-hijau-tua">
              <a href="#ppdb">Cara mendaftar</a>
            </Button>
          </div>
        </div>

        <figure className="mx-auto w-full max-w-md md:max-w-none">
          <div data-hero-photo className="perisai relative aspect-[5/6] overflow-hidden bg-mint">
            <Image
              src="/images/sekolah/gedung-depan.jpeg"
              alt="Gerbang SMK Hikmah Yapis Jayapura bercat hijau dan kuning dengan papan nama sekolah"
              fill
              priority
              fetchPriority="high"
              sizes="(min-width: 1152px) 480px, (min-width: 768px) 42vw, 100vw"
              className="object-cover object-[22%_50%]"
            />
          </div>
          <figcaption className="mt-3 text-center text-sm text-tinta-redup">
            Gerbang sekolah di Jl. Dr. Sam Ratulangi No. 3A, Dok V
          </figcaption>
        </figure>
      </div>

      <div data-cemara className="bg-mint">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[14rem_1fr] lg:items-center lg:gap-10">
          <div>
            <h2 className="text-2xl font-semibold text-hijau-tua">Nilai CEMARA</h2>
            <p className="mt-1 text-tinta-redup">Enam sikap yang dibiasakan di sekolah. SMK Bisa, SMK Hebat.</p>
          </div>
          <ol className="grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-6">
            {cemara.map((nilai, i) => (
              <li key={`${nilai.huruf}-${i}`} data-cemara-letter className="flex flex-col">
                <span aria-hidden="true" className="font-heading text-5xl leading-none font-semibold text-hijau sm:text-6xl">
                  {nilai.huruf}
                </span>
                <span className="mt-2 text-[0.95rem] text-tinta">
                  <KataCemara huruf={nilai.huruf} kata={nilai.kata} />
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
