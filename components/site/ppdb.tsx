"use client";

import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { jurusan, sekolah } from "@/lib/data";

type Isian = {
  nama: string;
  asal: string;
  program: string;
  hp: string;
  pertanyaan: string;
};

type Kesalahan = Partial<Record<keyof Isian, string>>;

const kosong: Isian = { nama: "", asal: "", program: "", hp: "", pertanyaan: "" };

function periksa(isian: Isian): Kesalahan {
  const salah: Kesalahan = {};
  if (isian.nama.trim().length < 3) salah.nama = "Tulis nama lengkap calon siswa.";
  if (isian.asal.trim().length < 3) salah.asal = "Tulis nama SMP atau MTs asal.";
  if (!isian.program) salah.program = "Pilih program yang diminati, atau pilih Belum memutuskan.";
  const angka = isian.hp.replace(/[\s-]/g, "");
  if (!/^(\+62|62|0)8\d{7,12}$/.test(angka)) salah.hp = "Tulis nomor HP yang bisa dihubungi, misalnya 0812 3456 7890.";
  return salah;
}

function susunEmail(isian: Isian) {
  const subjek = `Pertanyaan PPDB: ${isian.nama.trim()}`;
  const isi = [
    "Assalamualaikum, Bapak/Ibu bagian tata usaha SMKS Hikmah Yapis Jayapura.",
    "",
    "Saya ingin bertanya tentang pendaftaran peserta didik baru.",
    "",
    `Nama calon siswa: ${isian.nama.trim()}`,
    `Asal sekolah: ${isian.asal.trim()}`,
    `Program yang diminati: ${isian.program}`,
    `Nomor HP: ${isian.hp.trim()}`,
    "",
    isian.pertanyaan.trim() ? `Pertanyaan: ${isian.pertanyaan.trim()}` : "Mohon informasi jadwal dan syarat pendaftaran.",
    "",
    "Terima kasih.",
  ].join("\n");
  return `mailto:${sekolah.email}?subject=${encodeURIComponent(subjek)}&body=${encodeURIComponent(isi)}`;
}

export function Ppdb() {
  const [isian, setIsian] = useState<Isian>(kosong);
  const [salah, setSalah] = useState<Kesalahan>({});
  const [tautanEmail, setTautanEmail] = useState<string | null>(null);
  const ringkasanRef = useRef<HTMLDivElement>(null);
  const suksesRef = useRef<HTMLDivElement>(null);

  const ubah = (kunci: keyof Isian) => (nilai: string) => {
    setIsian((s) => ({ ...s, [kunci]: nilai }));
    if (salah[kunci]) setSalah((s) => ({ ...s, [kunci]: undefined }));
  };

  const kirim = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const hasil = periksa(isian);
    setSalah(hasil);
    if (Object.keys(hasil).length > 0) {
      requestAnimationFrame(() => ringkasanRef.current?.focus());
      return;
    }
    const tautan = susunEmail(isian);
    setTautanEmail(tautan);
    window.location.href = tautan;
    requestAnimationFrame(() => suksesRef.current?.focus());
  };

  const daftarSalah = Object.entries(salah).filter(([, pesan]) => pesan) as [keyof Isian, string][];

  const errorProps = (kunci: keyof Isian) =>
    salah[kunci] ? { "aria-invalid": true, "aria-describedby": `salah-${kunci}` } : {};

  return (
    <section id="ppdb" tabIndex={-1} aria-labelledby="judul-ppdb" className="scroll-mt-20 py-16 focus-visible:outline-none sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-none sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="on-dark bg-hijau-tua px-4 py-12 text-white sm:rounded-t-[14px] sm:px-8 lg:rounded-l-[14px] lg:rounded-tr-none lg:px-10 lg:py-14">
          <p className="text-[0.95rem] font-semibold text-[#a9cdb4]">Penerimaan peserta didik baru</p>
          <h2 id="judul-ppdb" data-reveal className="mt-3 text-[clamp(2rem,4.4vw,3.1rem)] leading-[1.05] font-semibold">
            Mendaftar ke SMK Hikmah Yapis
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#d6ebdc]">
            Jadwal dan syarat pendaftaran diumumkan langsung oleh sekolah. Untuk kepastian, hubungi bagian tata usaha
            atau datang pada jam kerja.
          </p>

          <dl className="mt-10 space-y-6 border-t border-white/20 pt-8 text-[1.05rem]">
            <div>
              <dt className="text-sm text-[#a9cdb4]">Pilihan program</dt>
              <dd className="mt-1 text-white">{jurusan.map((j) => j.kode).join(", ")}</dd>
            </div>
            <div>
              <dt className="text-sm text-[#a9cdb4]">Telepon sekolah</dt>
              <dd className="mt-1">
                <a href={sekolah.teleponHref} className="inline-flex min-h-11 items-center text-white underline underline-offset-4 hover:text-[#d6ebdc]">
                  {sekolah.telepon}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-[#a9cdb4]">Datang langsung</dt>
              <dd className="mt-1 text-white">
                {sekolah.alamatBaris[0]}
                <br />
                {sekolah.jamKerja}
              </dd>
            </div>
          </dl>
        </div>

        <div className="border-border bg-white px-4 py-12 sm:rounded-b-[14px] sm:border sm:border-t-0 sm:px-8 lg:rounded-r-[14px] lg:rounded-bl-none lg:border-t lg:border-l-0 lg:px-10 lg:py-14">
          {tautanEmail ? (
            <div ref={suksesRef} tabIndex={-1} role="status" className="focus-visible:outline-none">
              <h3 className="text-2xl font-semibold text-hijau-tua">Email Anda sudah disiapkan</h3>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-tinta">
                Aplikasi email di perangkat ini seharusnya terbuka dengan pesan yang sudah terisi. Periksa isinya, lalu
                tekan kirim dari aplikasi email.
              </p>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-tinta-redup">
                Aplikasi email tidak terbuka? Kirim pesan ke{" "}
                <a href={`mailto:${sekolah.email}`} className="font-semibold text-hijau underline underline-offset-4">
                  {sekolah.email}
                </a>{" "}
                atau telepon{" "}
                <a href={sekolah.teleponHref} className="font-semibold text-hijau underline underline-offset-4">
                  {sekolah.telepon}
                </a>
                .
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <a href={tautanEmail}>Buka email lagi</a>
                </Button>
                <Button
                  variant="outline"
                  className="border-input text-hijau-tua"
                  onClick={() => {
                    setTautanEmail(null);
                    setIsian(kosong);
                  }}
                >
                  Isi formulir baru
                </Button>
              </div>
            </div>
          ) : (
            <form noValidate onSubmit={kirim}>
              <h3 className="text-2xl font-semibold text-hijau-tua">Kirim pertanyaan pendaftaran</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-tinta-redup">
                Formulir ini menyusun email ke {sekolah.email}. Setelah tombol ditekan, aplikasi email di perangkat Anda
                terbuka dengan pesan yang sudah terisi. Data tidak disimpan di website ini.
              </p>

              {daftarSalah.length > 0 ? (
                <div
                  ref={ringkasanRef}
                  tabIndex={-1}
                  role="alert"
                  className="mt-6 rounded-lg border border-destructive bg-[#fdf1f0] p-4 text-[0.95rem] text-[#7a1a12] focus-visible:outline-destructive"
                >
                  <p className="font-semibold">Ada {daftarSalah.length} isian yang perlu diperbaiki:</p>
                  <ul className="mt-2 list-disc pl-5">
                    {daftarSalah.map(([kunci, pesan]) => (
                      <li key={kunci}>
                        <a href={`#isian-${kunci}`} className="underline underline-offset-2">
                          {pesan}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Label htmlFor="isian-nama" className="text-[0.95rem] text-tinta">
                    Nama calon siswa
                  </Label>
                  <Input
                    id="isian-nama"
                    name="nama"
                    autoComplete="name"
                    value={isian.nama}
                    onChange={(e) => ubah("nama")(e.target.value)}
                    className="mt-2"
                    {...errorProps("nama")}
                  />
                  {salah.nama ? <p id="salah-nama" className="mt-2 text-sm text-destructive">{salah.nama}</p> : null}
                </div>

                <div>
                  <Label htmlFor="isian-asal" className="text-[0.95rem] text-tinta">
                    Asal sekolah (SMP/MTs)
                  </Label>
                  <Input
                    id="isian-asal"
                    name="asal"
                    value={isian.asal}
                    onChange={(e) => ubah("asal")(e.target.value)}
                    className="mt-2"
                    {...errorProps("asal")}
                  />
                  {salah.asal ? <p id="salah-asal" className="mt-2 text-sm text-destructive">{salah.asal}</p> : null}
                </div>

                <div>
                  <Label htmlFor="isian-hp" className="text-[0.95rem] text-tinta">
                    Nomor HP atau WhatsApp
                  </Label>
                  <Input
                    id="isian-hp"
                    name="hp"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={isian.hp}
                    onChange={(e) => ubah("hp")(e.target.value)}
                    className="mt-2"
                    {...errorProps("hp")}
                  />
                  {salah.hp ? <p id="salah-hp" className="mt-2 text-sm text-destructive">{salah.hp}</p> : null}
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="isian-program" className="text-[0.95rem] text-tinta">
                    Program yang diminati
                  </Label>
                  <Select name="program" value={isian.program} onValueChange={ubah("program")}>
                    <SelectTrigger id="isian-program" className="mt-2 w-full" {...errorProps("program")}>
                      <SelectValue placeholder="Pilih program" />
                    </SelectTrigger>
                    <SelectContent>
                      {jurusan.map((j) => (
                        <SelectItem key={j.kode} value={`${j.kode} (${j.nama})`} className="min-h-11">
                          {j.kode}: {j.nama}
                        </SelectItem>
                      ))}
                      <SelectItem value="Belum memutuskan" className="min-h-11">
                        Belum memutuskan
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {salah.program ? <p id="salah-program" className="mt-2 text-sm text-destructive">{salah.program}</p> : null}
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="isian-pertanyaan" className="text-[0.95rem] text-tinta">
                    Pertanyaan <span className="font-normal text-tinta-redup">(boleh dikosongkan)</span>
                  </Label>
                  <Textarea
                    id="isian-pertanyaan"
                    name="pertanyaan"
                    rows={4}
                    value={isian.pertanyaan}
                    onChange={(e) => ubah("pertanyaan")(e.target.value)}
                    placeholder="Contoh: kapan pendaftaran dibuka dan apa saja berkas yang dibawa?"
                    className="mt-2"
                  />
                </div>
              </div>

              <Button type="submit" size="lg" className="mt-8 w-full sm:w-auto">
                Susun email ke sekolah
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
