"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigasi } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Tujuan disimpan sampai Sheet selesai menutup, karena kunci scroll Radix
  // masih aktif saat tautan diklik dan lompatan anchor bisa hilang.
  const tujuan = useRef<string | null>(null);

  const pilih = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    tujuan.current = event.currentTarget.getAttribute("href");
    setMenuOpen(false);
  };

  const setelahTutup = (event: Event) => {
    const href = tujuan.current;
    if (!href) return;
    tujuan.current = null;
    event.preventDefault();
    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;
    history.pushState(null, "", href);
    target.scrollIntoView();
    target.focus({ preventScroll: true });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b bg-white transition-colors",
        scrolled ? "border-border" : "border-transparent",
      )}
    >
      <a
        href="#isi"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-hijau-tua focus:px-4 focus:py-3 focus:text-white"
      >
        Langsung ke isi
      </a>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6">
        <a href="#beranda" className="flex min-h-11 items-center gap-3 rounded-md">
          <Image
            src="/LogoYapis.png"
            alt=""
            width={408}
            height={512}
            className="h-10 w-auto sm:h-11"
            priority
          />
          <span className="font-heading text-[1.05rem] leading-tight font-semibold text-hijau-tua sm:text-lg">
            SMKS Hikmah Yapis
            <span className="block text-sm font-normal text-tinta-redup sm:text-[0.95rem]">Jayapura</span>
          </span>
        </a>

        <nav aria-label="Navigasi utama" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigasi.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center rounded-md px-3 text-[0.95rem] font-medium text-tinta transition-colors hover:bg-mint hover:text-hijau-tua active:bg-[#dcebdf]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <a href="#ppdb">Info PPDB</a>
          </Button>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="border-input lg:hidden">
                <MenuIcon aria-hidden="true" />
                Menu
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(20rem,85vw)] gap-0" onCloseAutoFocus={setelahTutup}>
              <SheetHeader className="border-b px-5 py-5">
                <SheetTitle className="text-lg text-hijau-tua">SMKS Hikmah Yapis Jayapura</SheetTitle>
                <SheetDescription>Pilih bagian halaman yang ingin dibuka.</SheetDescription>
              </SheetHeader>
              <nav aria-label="Navigasi seluler" className="px-3 py-3">
                <ul className="flex flex-col">
                  {navigasi.map((item) => (
                    <li key={item.href}>
                      <a
                          href={item.href}
                          onClick={pilih}
                          className="flex min-h-12 items-center rounded-md px-3 text-base font-medium text-tinta hover:bg-mint hover:text-hijau-tua active:bg-[#dcebdf]"
                        >
                          {item.label}
                        </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-auto border-t p-5">
                <Button asChild size="lg" className="w-full">
                  <a href="#ppdb" onClick={pilih}>
                    Info PPDB
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
