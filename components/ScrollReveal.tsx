"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // Intersection Observer to reveal sections on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    let heroRevealed = false;
    const revealHero = () => {
      if (heroRevealed) return;
      heroRevealed = true;
      const hero = document.querySelector("section");
      if (hero) {
        hero.classList.add("section-reveal");
        // Slight delay so the user catches the entrance right as the eraser wipes
        setTimeout(() => {
          hero.classList.add("is-revealed");
        }, 120);
      }
    };

    const observeSections = () => {
      const sections = document.querySelectorAll("section, .section-reveal");
      sections.forEach((sec, idx) => {
        sec.classList.add("section-reveal");
        // The first section (Hero) is reserved for revealHero
        if (idx === 0) {
          // If window has already scrolled down, reveal immediately
          if (window.scrollY > 100) {
            sec.classList.add("is-revealed");
          }
        } else {
          observer.observe(sec);
        }
      });
    };

    observeSections();

    // Listen for the eraser sweep event from LoadingScreen
    window.addEventListener("gap-reveal-hero", revealHero);

    // Fallback timer in case the event was missed or loading screen finished earlier
    const fallbackTimer = setTimeout(revealHero, 2000);

    // MutationObserver to automatically support any sections added dynamically
    const mutationObserver = new MutationObserver(() => {
      observeSections();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener("gap-reveal-hero", revealHero);
      clearTimeout(fallbackTimer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
