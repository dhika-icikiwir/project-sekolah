"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Semua gerak halaman ada di sini. Tujuan tiap gerak dicatat di DESIGN.md.
// Tidak ada yang berjalan jika pengguna meminta gerak dikurangi.
export function Gerak() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .fromTo(
          "[data-hero-line]",
          { yPercent: 105, autoAlpha: 1 },
          { yPercent: 0, duration: 0.9, stagger: 0.1 },
        )
        .fromTo(
          "[data-hero-photo]",
          { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 50% 100%, 0 100%)", autoAlpha: 1 },
          { clipPath: "polygon(0 0, 100% 0, 100% 82%, 50% 100%, 0 82%)", duration: 1.1, ease: "power2.inOut" },
          "-=0.6",
        );

      gsap.from("[data-cemara-letter]", {
        y: 18,
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: "[data-cemara]", start: "top 85%", once: true },
      });

      gsap.fromTo(
        "[data-timeline-line]",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: "[data-timeline]", start: "top 70%", end: "bottom 60%", scrub: 0.4 },
        },
      );

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 24,
          autoAlpha: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
    });

    // Gambar yang dimuat belakangan mengubah tinggi halaman.
    const segarkan = () => ScrollTrigger.refresh();
    window.addEventListener("load", segarkan);
    return () => {
      window.removeEventListener("load", segarkan);
      mm.revert();
    };
  });

  return null;
}
