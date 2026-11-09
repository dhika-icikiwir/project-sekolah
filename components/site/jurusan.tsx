import { JudulBagian } from "@/components/site/judul-bagian";
import { Potret } from "@/components/site/potret";
import { jurusan } from "@/lib/data";

export function Jurusan() {
  return (
    <section id="jurusan" tabIndex={-1} aria-labelledby="judul-jurusan" className="scroll-mt-20 py-16 focus-visible:outline-none sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <JudulBagian
            id="judul-jurusan"
            label="Program keahlian"
            judul={
              <>
                Tiga jurusan, tiga <span className="stabilo">bidang</span> kerja
              </>
            }
          />
          <p data-reveal className="text-lg leading-relaxed text-tinta-redup lg:pb-2">
            Ketiga program berakreditasi A dan masing-masing dipimpin seorang kepala program keahlian. Pilih sesuai
            pekerjaan yang ingin ditekuni setelah lulus.
          </p>
        </div>

        <ol className="mt-12 border-t border-border lg:mt-16">
          {jurusan.map((j) => (
            <li
              key={j.kode}
              data-reveal
              className="grid gap-6 border-b border-border py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_13rem] lg:py-12"
            >
              <h3 className="text-hijau-tua">
                <span className="block font-heading text-[clamp(3.25rem,8vw,5rem)] leading-none font-semibold text-hijau">
                  {j.kode}
                </span>
                <span className="mt-3 block text-[1.45rem] leading-snug font-semibold">{j.nama}</span>
              </h3>

              <div>
                <p className="inline-flex rounded-md bg-mint px-2.5 py-1 text-sm font-semibold text-hijau-tua">
                  Akreditasi {j.akreditasi}
                </p>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-tinta">{j.deskripsi}</p>
                {j.catatan ? <p className="mt-3 text-[0.95rem] text-tinta-redup">{j.catatan}</p> : null}
              </div>

              <div className="flex items-center gap-4 md:col-start-2 lg:col-start-auto lg:flex-col lg:items-start">
                <Potret orang={j.kaprog} sizes="96px" className="w-20 shrink-0 lg:w-24" />
                <p className="text-[0.95rem] leading-snug">
                  <span className="block text-tinta-redup">Kepala program</span>
                  <span className="mt-0.5 block font-semibold text-tinta">{j.kaprog.nama}</span>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
