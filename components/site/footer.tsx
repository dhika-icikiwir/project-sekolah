import Image from "next/image";

import { navigasi, sekolah } from "@/lib/data";

export function Footer() {
  return (
    <footer className="on-dark bg-hijau-tua text-[#d6ebdc]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1fr_auto] md:items-end">
        <div className="flex items-start gap-4">
          <Image src="/LogoYapis.png" alt="" width={408} height={512} className="h-16 w-auto" />
          <div>
            <p className="font-heading text-xl font-semibold text-white">{sekolah.nama}</p>
            <p className="mt-1 italic">{sekolah.motto}</p>
            <p className="mt-4 text-[0.95rem]">{sekolah.alamat}</p>
          </div>
        </div>

        <nav aria-label="Navigasi bawah">
          <ul className="flex flex-wrap gap-x-1 gap-y-1 md:justify-end">
            {navigasi.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-flex min-h-11 items-center rounded-md px-3 text-white hover:bg-white/10 active:bg-white/15">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#beranda" className="inline-flex min-h-11 items-center rounded-md px-3 text-white hover:bg-white/10 active:bg-white/15">
                Kembali ke atas
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-6xl px-4 py-5 text-sm sm:px-6">
          &copy; {new Date().getFullYear()} {sekolah.nama}
        </p>
      </div>
    </footer>
  );
}
