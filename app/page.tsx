import { Footer } from "@/components/site/footer";
import { Gerak } from "@/components/site/gerak";
import { Guru } from "@/components/site/guru";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Jurusan } from "@/components/site/jurusan";
import { Kegiatan } from "@/components/site/kegiatan";
import { Kontak } from "@/components/site/kontak";
import { Ppdb } from "@/components/site/ppdb";
import { Profil } from "@/components/site/profil";
import { SuaraSiswa } from "@/components/site/suara-siswa";

export default function Home() {
  return (
    <>
      <Header />
      <main id="isi" tabIndex={-1} className="focus-visible:outline-none">
        <Hero />
        <Profil />
        <Jurusan />
        <Kegiatan />
        <SuaraSiswa />
        <Guru />
        <Ppdb />
        <Kontak />
      </main>
      <Footer />
      <Gerak />
    </>
  );
}
