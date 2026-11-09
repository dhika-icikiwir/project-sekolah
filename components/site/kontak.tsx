import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import { JudulBagian } from "@/components/site/judul-bagian";
import { sekolah } from "@/lib/data";

// Ikon di sini dipakai karena setiap baris memang berisi jenis kontak yang berbeda;
// label teks tetap ada di sebelahnya.
const baris = [
  { ikon: MapPinIcon, label: "Alamat", isi: sekolah.alamat },
  { ikon: PhoneIcon, label: "Telepon", isi: sekolah.telepon, href: sekolah.teleponHref },
  { ikon: MailIcon, label: "Email", isi: sekolah.email, href: `mailto:${sekolah.email}` },
  { ikon: ClockIcon, label: "Jam kerja", isi: `${sekolah.jamKerja}. Minggu tutup.` },
];

export function Kontak() {
  return (
    <section id="kontak" tabIndex={-1} aria-labelledby="judul-kontak" className="scroll-mt-20 border-t border-border py-16 focus-visible:outline-none sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <JudulBagian
            id="judul-kontak"
            label="Kontak"
            judul={
              <>
                Datang ke sekolah di <span className="stabilo">Dok V</span>
              </>
            }
          />
          <dl className="mt-10 space-y-6">
            {baris.map(({ ikon: Ikon, label, isi, href }) => (
              <div key={label} className="grid grid-cols-[2.75rem_1fr] gap-4">
                <span className="grid size-11 place-items-center rounded-lg bg-mint text-hijau-tua">
                  <Ikon aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <dt className="text-sm text-tinta-redup">{label}</dt>
                  <dd className="mt-0.5 text-[1.05rem] text-tinta">
                    {href ? (
                      <a href={href} className="inline-flex min-h-11 items-center font-semibold break-all text-hijau underline underline-offset-4 hover:text-hijau-tua">
                        {isi}
                      </a>
                    ) : (
                      isi
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
          <a
            href={sekolah.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-11 items-center rounded-md border border-input px-4 font-medium text-hijau-tua transition-colors hover:bg-mint active:bg-[#dcebdf]"
          >
            Buka rute di Google Maps
            <span className="sr-only"> (membuka tab baru)</span>
          </a>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-mint lg:aspect-auto lg:min-h-[28rem]">
          <p className="absolute inset-0 grid place-items-center px-6 text-center text-sm text-tinta-redup">
            Memuat peta lokasi sekolah. Jika peta tidak muncul, pakai tombol Buka rute di Google Maps.
          </p>
          <iframe
            src={sekolah.mapsEmbed}
            title="Peta lokasi SMKS Hikmah Yapis Jayapura di Google Maps"
            width={1100}
            height={450}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 size-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
