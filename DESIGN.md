# DESIGN.md: SMKS Hikmah Yapis Jayapura

Arah desain untuk website sekolah. Dibaca sebelum mengerjakan UI apa pun di repo ini.

Dial: ENERGY 2 / RHYTHM 3 / MOTION 2

## Sumber arahan

- Permintaan pemilik: tema hijau dan putih, Next.js + GSAP + shadcn/ui, foto dari website lama.
- Pemilik meminta UI **tidak sama** dengan website lama. Konten dan foto boleh dipakai, tata letak dan gaya harus baru.
- Identitas visual diambil dari logo YAPIS: perisai hijau dengan bingkai kuning, motto "Ilmu Amaliah, Amal Ilmiah".

## Design Read

Website profil sekolah kejuruan untuk calon siswa dan orang tua di Jayapura, yang sebagian besar membuka lewat HP. Bahasa visual editorial yang hangat dan institusional, bertumpu pada foto asli sekolah.

## Palet

| Token | Hex | Peran |
|---|---|---|
| `--hijau-tua` | `#0B4A2A` | Blok gelap (visi, PPDB, footer), judul |
| `--hijau` | `#0A7A3A` | Tombol utama, tautan, focus ring di atas putih. Turunan hijau logo yang digelapkan agar teks putih lolos AA (5.44:1) |
| `--mint` | `#EEF6EF` | Permukaan sekunder untuk memisahkan bagian |
| `--kuning` | `#F3D230` | Satu-satunya aksen: stabilo di bawah satu kata kunci per judul, dan focus ring di atas hijau tua |
| `--tinta` | `#10261A` | Teks utama |
| `--tinta-redup` | `#44584B` | Teks pendukung (7.66:1 di putih, 6.95:1 di mint) |

Alasan: hijau dan putih diminta pemilik; kuning berasal dari bingkai logo dan cat gedung sekolah, dipakai hanya sebagai stabilo dan focus ring, tidak di tombol, ikon, atau garis.

Tema terang saja. Alasan (R-21): pemilik secara eksplisit meminta tema hijau dan putih.

## Tipografi

- **Fraunces** (judul): serif bergaya lama dengan sudut lembut. Sekolah ini berdiri sejak 1972; serif memberi kesan lembaga yang punya sejarah tanpa terasa kaku.
- **Plus Jakarta Sans** (teks): dirancang oleh Tokotype, studio huruf Indonesia, dan nyaman dibaca di layar HP kecil.
- Tidak ada label huruf kapital dengan tracking lebar. Label kecil memakai huruf biasa.

## Motif identitas

1. **Stabilo kuning** di bawah satu kata kunci di setiap judul bagian, meniru bingkai kuning logo.
2. **Potongan perisai** pada foto hero, mengikuti bentuk perisai logo YAPIS.
3. **Huruf CEMARA** (Cerdas, Beretika, Mandiri, Berakhlak, Rajin, Amanah) ditampilkan sebagai huruf serif besar.

## Ritme bagian (RHYTHM 3)

Setiap bagian memakai komposisi berbeda: hero terbelah dengan foto perisai, pita CEMARA enam kolom, linimasa sejarah dengan foto lengket, blok visi gelap layar penuh, daftar jurusan berbaris, galeri kolom bertingkat, kutipan siswa asimetris, hierarki guru (kepala sekolah, pimpinan, semua staf), formulir PPDB terbelah, kontak dengan peta.

## Gerak (MOTION 2, GSAP)

| Gerak | Tujuan |
|---|---|
| Nama sekolah di hero naik dari balik masker | Menjadikan nama sekolah titik fokus pertama |
| Foto hero terbuka dari bawah | Mengarahkan mata dari judul ke gedung sekolah |
| Huruf CEMARA muncul berurutan | Mengajarkan singkatan: huruf dulu, lalu artinya |
| Garis linimasa sejarah tumbuh mengikuti scroll | Menunjukkan perjalanan waktu 1972 sampai sekarang |
| Judul bagian muncul saat masuk layar | Memberi jeda baca antarbagian |

Semua gerak mati saat `prefers-reduced-motion: reduce`. Tidak ada animasi berulang tanpa henti.

## Radius dan bayangan

- Radius 8px untuk tombol dan input, 14px untuk foto. Tidak ada elemen berbentuk pil.
- Bayangan hanya pada lapisan overlay (Dialog, Sheet) karena benar-benar melayang di atas halaman.

## Konten

- Semua teks, nama, jabatan, dan foto berasal dari website lama sekolah.
- Tidak menampilkan angka statistik (website lama berisi angka template "Clients", "Projects"; dibuang).
- Gambar ilustrasi jurusan dari website lama tidak dipakai: itu clipart stok, dan salah satunya memuat merek sekolah lain.
- Jadwal dan syarat PPDB tidak tercantum di website lama, jadi tidak ditulis. Pengunjung diarahkan menghubungi sekolah.
