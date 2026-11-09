// Semua isi di file ini diambil dari website lama sekolah
// (smkhikmahyapisjayapura.sch.id). Ubah di sini, bukan di komponen.

export const sekolah = {
  nama: "SMKS Hikmah Yapis Jayapura",
  namaPendek: "SMK Hikmah Yapis",
  alamat: "Jl. Dr. Sam Ratulangi No. 3A, Dok V, Jayapura Utara, Kota Jayapura, Papua",
  alamatBaris: ["Jl. Dr. Sam Ratulangi No. 3A, Dok V", "Jayapura Utara, Kota Jayapura, Papua"],
  telepon: "(0967) 534688",
  teleponHref: "tel:+62967534688",
  email: "smkhikmahyapis@gmail.com",
  jamKerja: "Senin sampai Jumat, 07.00 - 15.00 WIT",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4740.095174855324!2d140.71446228060162!3d-2.5300607673795303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x686cf5e555555555%3A0x946a8ded8365f710!2sSMK%20HIKMAH%20YAPIS!5e0!3m2!1sen!2sid!4v1738396770490!5m2!1sen!2sid",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=SMK+HIKMAH+YAPIS+Jayapura",
  motto: "Ilmu Amaliah, Amal Ilmiah",
} as const;

export const cemara = [
  { huruf: "C", kata: "Cerdas" },
  { huruf: "E", kata: "Beretika" },
  { huruf: "M", kata: "Mandiri" },
  { huruf: "A", kata: "Berakhlak" },
  { huruf: "R", kata: "Rajin" },
  { huruf: "A", kata: "Amanah" },
] as const;

export type Peristiwa = { waktu: string; judul: string; isi: string };

export const sejarah: Peristiwa[] = [
  {
    waktu: "1972",
    judul: "Kursus pembukuan di SD Hikmah I",
    isi: "Bapak Suwarno, Kepala Biro Personalia Yapis Irian Jaya, atas inisiatif sendiri membuka Kursus Pembukuan Bon A dan Bon B di SD Hikmah I Yapis. Kursus ini menjadi cikal bakal SMEA Hikmah Yapis Jayapura, juga akademi yang kini menjadi Universitas Yapis Papua (UNIYAP).",
  },
  {
    waktu: "Desember 1972",
    judul: "Berdiri sebagai SMEA",
    isi: "Yapis Irian Jaya mendirikan Sekolah Menengah Ekonomi Atas (SMEA) Hikmah Yapis Jayapura dengan status terdaftar, membuka jurusan Tata Buku dan Tata Usaha.",
  },
  {
    waktu: "Kelas jauh",
    judul: "Filial di Abepura",
    isi: "Sekolah membuka kelas jauh di Perguruan Muhammadiyah Abepura. Salah satu alumninya, Prof. Dr. H. Hasan Basri Umar, SE, M.Si, kini guru besar di Universitas Cenderawasih.",
  },
  {
    waktu: "Sekarang",
    judul: "SMK dengan tiga program keahlian",
    isi: "Menjadi SMK Hikmah Yapis Jayapura dengan program Manajemen Perkantoran dan Layanan Bisnis, Akuntansi dan Keuangan Lembaga, serta Pengembangan Perangkat Lunak dan Gim.",
  },
];

export const visi =
  "Menghasilkan lulusan yang berkarakter mulia, berkompetensi unggul dan mampu berkompetisi, serta berwawasan global.";

export const misi = [
  "Meningkatkan iman dan takwa kepada Tuhan Yang Maha Esa.",
  "Mengembangkan kompetensi tenaga pendidik, tenaga kependidikan, dan peserta didik sesuai bidang keahlian dan semangat berkompetisi.",
  "Menanamkan nilai etika dan wirausaha untuk menciptakan lulusan siap kerja.",
  "Berkolaborasi dalam membentuk karakter individu.",
  "Membangun kerja sama dengan dunia usaha, industri, dan lembaga pendidikan untuk memperluas kesempatan belajar dan berkompetisi.",
  "Menyelenggarakan pembelajaran berkualitas untuk mengembangkan kompetensi unggul dan keterampilan abad 21.",
  "Menciptakan lingkungan belajar yang kondusif, disiplin, dan berbudaya untuk mendukung keunggulan dan daya saing lulusan.",
  "Meningkatkan sarana dan prasarana serta pembelajaran berbasis teknologi informasi.",
];

export type Orang = {
  nama: string;
  jabatan?: string;
  foto?: string;
};

export const kepalaSekolah: Orang = {
  nama: "Gunanto, S.E., M.Si",
  jabatan: "Kepala Sekolah",
  foto: "/images/guru/gunanto.jpeg",
};

export const pimpinan: Orang[] = [
  { nama: "Meivita Sastriva Zulkifli, S.Pd", jabatan: "Wakil Kepala Sekolah Kurikulum", foto: "/images/guru/meivita-sastriva-zulkifli.jpeg" },
  { nama: "Aprianti, M.Pd", jabatan: "Wakil Kepala Sekolah Kesiswaan", foto: "/images/guru/aprianti.jpeg" },
  { nama: "Moh. Ali Rumatiga, S.Pd.I", jabatan: "Wakil Kepala Sekolah Sarana dan Prasarana", foto: "/images/guru/ali-rumatiga.jpeg" },
  { nama: "Menik Kushendrastati, A.Md.T", jabatan: "Kepala Tata Usaha", foto: "/images/guru/menik-kushendrastati.jpeg" },
];

export const kaprog = {
  mplb: { nama: "Krisdiyah Hernawati, S.Pd", jabatan: "Kepala Program Keahlian MPLB", foto: "/images/guru/krisdiyah-hernawati.jpeg" },
  akl: { nama: "Safrita, S.Pd., M.Si", jabatan: "Kepala Program Keahlian AKL", foto: "/images/guru/safrita.jpeg" },
  pplg: { nama: "Abd. Karim Manjurungi, S.Kom", jabatan: "Kepala Program Keahlian RPL", foto: "/images/guru/abd-karim-manjurungi.jpeg" },
} satisfies Record<string, Orang>;

export const guruStaf: Orang[] = [
  { nama: "Dwi Emylia Ratna Sari, S.E", jabatan: "Bendahara", foto: "/images/guru/dwi-emylia-ratna-sari.jpeg" },
  { nama: "Dra. Mutia Prima Sari", jabatan: "Kepala Perpustakaan", foto: "/images/guru/mutia-prima-sari.jpeg" },
  { nama: "Wa Hasana, S.Pd", jabatan: "Pembina OSIS", foto: "/images/guru/wa-hasana.jpeg" },
  { nama: "Nur Inayah, S.Pd", jabatan: "Guru Bidang Studi", foto: "/images/guru/nur-inayah.jpeg" },
  { nama: "Dra. Hardwin Duda", jabatan: "Guru Bidang Studi", foto: "/images/guru/hardwin-duda.jpeg" },
  { nama: "Sandra P. Hataul, S.Pd", jabatan: "Guru Bidang Studi", foto: "/images/guru/sandra-hataul.jpeg" },
  { nama: "Kasmira, S.Sos", jabatan: "Guru Bidang Studi", foto: "/images/guru/kasmira.jpeg" },
  { nama: "M. Zainal Arifin, S.Kom", jabatan: "Guru Bidang Studi", foto: "/images/guru/zainal-arifin.jpeg" },
  { nama: "Ali Irsyad, S.Hum", jabatan: "Guru Bidang Studi", foto: "/images/guru/ali-irsyad.jpeg" },
  { nama: "M. Kunta Fadhila Qoidi, M.Pd", jabatan: "Guru", foto: "/images/guru/kunta-fadhila-qoidi.jpeg" },
  { nama: "Rio Nur Sholeh, M.Pd", jabatan: "Guru Bidang Studi" },
  { nama: "Arifandy Tambijo, S.Kom", jabatan: "Guru" },
  { nama: "Meidy Tabligh Nuriansia" },
  { nama: "Rizka Dwi Cahyani, S.Pd", jabatan: "Staf Tata Usaha", foto: "/images/guru/rizka-dwi-cahyani.jpeg" },
  { nama: "M. Saleh Renhard", jabatan: "Staf Tata Usaha", foto: "/images/guru/saleh-renhard.jpeg" },
  { nama: "Andini Gustiani Jumadi, S.T", jabatan: "Tata Usaha" },
];

export type Jurusan = {
  kode: string;
  nama: string;
  catatan?: string;
  akreditasi: string;
  deskripsi: string;
  kaprog: Orang;
};

export const jurusan: Jurusan[] = [
  {
    kode: "MPLB",
    akreditasi: "A",
    nama: "Manajemen Perkantoran dan Layanan Bisnis",
    deskripsi:
      "Peserta didik dibekali keterampilan, pengetahuan, dan sikap untuk menjadi tenaga kerja tingkat menengah yang cakap mengelola administrasi perkantoran.",
    kaprog: kaprog.mplb,
  },
  {
    kode: "AKL",
    akreditasi: "A",
    nama: "Akuntansi dan Keuangan Lembaga",
    deskripsi:
      "Siswa belajar mencatat dan mengelola keuangan secara manual maupun dengan komputer, mengelola transaksi keuangan dan pajak, dengan tujuan menjadi staf akuntansi yang mandiri dan berkarakter.",
    kaprog: kaprog.akl,
  },
  {
    kode: "PPLG",
    akreditasi: "A",
    nama: "Pengembangan Perangkat Lunak dan Gim",
    catatan: "Sebelumnya dikenal sebagai Rekayasa Perangkat Lunak (RPL).",
    deskripsi:
      "Mempelajari cara mengembangkan perangkat lunak: pembuatan, pemeliharaan, manajemen organisasi pengembangan, sampai manajemen kualitas.",
    kaprog: kaprog.pplg,
  },
];

export type Foto = {
  src: string;
  width: number;
  height: number;
  judul: string;
  keterangan: string;
};

export const prestasi: Foto[] = [
  {
    src: "/images/kegiatan/qris-school-challenge-2023.jpeg",
    width: 1170,
    height: 1455,
    judul: "QRIS School Challenge 2023",
    keterangan:
      "Bank Indonesia Perwakilan Papua: Juara 1 kategori sekolah, Juara 1 kategori guru/pegawai, dan Juara 2 kategori siswa/siswi.",
  },
  {
    src: "/images/kegiatan/juara-olimpiade-akuntansi.jpeg",
    width: 1170,
    height: 1153,
    judul: "Juara 1 OLIMPIA",
    keterangan:
      "Olimpiade Akuntansi tingkat SMA/SMK se-Kota Jayapura, Kabupaten Jayapura, dan Kabupaten Keerom.",
  },
  {
    src: "/images/kegiatan/juara-fl2sn-gitar.jpeg",
    width: 1170,
    height: 1166,
    judul: "Juara 1 FL2SN",
    keterangan: "Instrumen solo gitar, cabang seni pertunjukan, tingkat Kota Jayapura.",
  },
];

export const kegiatan: Foto[] = [
  {
    src: "/images/kegiatan/gerak-jalan-hut-ri-78.jpeg",
    width: 1170,
    height: 828,
    judul: "Lomba gerak jalan HUT RI ke-78",
    keterangan: "Lomba gerak jalan tingkat SMA/SMK se-Kota Jayapura, 11 Agustus 2023.",
  },
  {
    src: "/images/kegiatan/karnaval-merdeka-belajar.jpeg",
    width: 1170,
    height: 835,
    judul: "Karnaval Merdeka Belajar",
    keterangan: "Karnaval yang mencerminkan kebinekaan, menyambut HUT RI ke-78, 16 Agustus 2023.",
  },
  {
    src: "/images/kegiatan/in-house-training-2023.jpeg",
    width: 1170,
    height: 1163,
    judul: "In House Training Kurikulum Merdeka",
    keterangan:
      "Pelatihan implementasi Kurikulum Merdeka dalam membentuk Profil Pelajar Pancasila, 25 sampai 27 Juli 2023.",
  },
  {
    src: "/images/kegiatan/lomba-17-agustus.jpeg",
    width: 1170,
    height: 835,
    judul: "Lomba 17-an",
    keterangan: "Siswa dan siswi mengikuti lomba peringatan kemerdekaan di halaman sekolah.",
  },
  {
    src: "/images/kegiatan/apel-halaman-sekolah.jpeg",
    width: 1170,
    height: 876,
    judul: "Apel di halaman sekolah",
    keterangan: "Siswa berbaris di halaman sekolah.",
  },
];

export type Kutipan = {
  nama: string;
  peran: string;
  foto: string;
  isi: string;
};

// Kutipan dipotong dan ejaannya dirapikan dari testimoni di website lama.
export const kutipanSiswa: Kutipan[] = [
  {
    nama: "Freya Adara Dastin",
    peran: "Siswi",
    foto: "/images/siswa/freya-adara-dastin.jpg",
    isi: "SMK Hikmah Yapis Jayapura mengajari saya banyak hal yang perlu saya ketahui untuk bekerja di masa industri ini, bukan hanya materi di dalam kelas. Para guru memberi saya banyak sekali ilmu untuk lebih kreatif dan bijak.",
  },
  {
    nama: "Ilma Nur Qolby",
    peran: "Siswi RPL",
    foto: "/images/siswa/ilma-nur-qolby.jpg",
    isi: "Saya merasa nyaman karena mendapat teman-teman baru, dan para guru di sana baik. Mereka mengajarkan saya cara berpikir positif agar tidak selalu berpikir negatif kepada orang lain.",
  },
  {
    nama: "Yasin",
    peran: "Siswa",
    foto: "/images/siswa/yasin.jpg",
    isi: "Walaupun sekolahnya tidak sebesar sekolah lain, saya dapat banyak sekali pelajaran: saling menghargai, saling mendukung, saling tolong-menolong. Guru-gurunya asyik dan cepat akrab dengan murid.",
  },
  {
    nama: "Badriah Ramadani",
    peran: "Siswa",
    foto: "/images/siswa/badriah-ramadani.jpg",
    isi: "Guru-guru di SMK Yapis sangat baik. Mereka membantu saya dalam proses belajar dan memberi saya kesempatan menemukan minat dan bakat saya.",
  },
];

export const navigasi = [
  { href: "#profil", label: "Profil" },
  { href: "#jurusan", label: "Jurusan" },
  { href: "#kegiatan", label: "Kegiatan" },
  { href: "#guru", label: "Guru" },
  { href: "#kontak", label: "Kontak" },
] as const;
