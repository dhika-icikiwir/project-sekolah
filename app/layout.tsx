import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SMKS Hikmah Yapis Jayapura",
  description:
    "Sekolah menengah kejuruan di bawah Yayasan Pendidikan Islam (YAPIS) di Jayapura Utara, Papua. Program keahlian MPLB, AKL, dan PPLG.",
};

export const viewport: Viewport = {
  themeColor: "#0b4a2a",
};

// Dipasang sebelum halaman tampil agar elemen hero bisa disembunyikan
// hanya untuk pengguna yang tidak meminta gerak dikurangi.
const motionFlag = `try{if(matchMedia('(prefers-reduced-motion: no-preference)').matches)document.documentElement.classList.add('gerak')}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${fraunces.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
