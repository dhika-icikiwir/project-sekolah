# Website SMKS Hikmah Yapis Jayapura

Website profil sekolah dengan Next.js 15, GSAP, dan shadcn/ui. Tema hijau dan putih, memakai foto dan isi dari website lama sekolah.

## Menjalankan

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build produksi
npm run start
```

## Mengubah isi

Semua teks, nama guru, jurusan, foto kegiatan, dan kontak ada di `lib/data.ts`. Ubah di sana, bukan di komponen.

- Foto ada di `public/images/` (`sekolah/`, `kegiatan/`, `guru/`, `siswa/`).
- Guru tanpa foto otomatis tampil dengan inisial nama. Tambahkan `foto` di `lib/data.ts` jika fotonya sudah ada.
- Jadwal dan syarat PPDB belum dicantumkan karena tidak ada di website lama.

## Struktur

| Lokasi | Isi |
|---|---|
| `app/page.tsx` | Urutan bagian halaman |
| `components/site/` | Bagian halaman (header, hero, profil, jurusan, kegiatan, guru, PPDB, kontak, footer) |
| `components/site/gerak.tsx` | Semua animasi GSAP |
| `components/ui/` | Komponen shadcn/ui |
| `DESIGN.md` | Arah desain: palet, tipografi, motif, alasan setiap keputusan |

## Formulir PPDB

Website ini tidak punya server untuk menyimpan data. Formulir PPDB memeriksa isian, lalu membuka aplikasi email pengunjung dengan pesan yang sudah terisi ke alamat email sekolah.

## antislop

Skill [antislop](https://github.com/miqdadbadjuber/anti-slop) (v3.2.26) terpasang di `.claude/skills/` dan dirujuk dari `CLAUDE.md`, sehingga agen AI yang mengerjakan repo ini memakai aturannya. Untuk memperbarui: `npx antislop-ai --update`.
