"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // Ensure Hero is ALWAYS visible immediately
    const hero = document.getElementById("hero");
    if (hero) {
      hero.classList.remove("section-reveal");
      hero.classList.add("is-revealed");
    }

    // Intersection Observer to reveal subsequent sections on scroll
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
        threshold: 0.08,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const observeSections = () => {
      // Only target sections AFTER the hero
      const sections = document.querySelectorAll("section:not(#hero)");
      sections.forEach((sec) => {
        if (!sec.classList.contains("is-revealed")) {
          sec.classList.add("section-reveal");
          observer.observe(sec);
        }
      });
    };

    observeSections();
    const t = setTimeout(observeSections, 300);

    return () => {
      observer.disconnect();
      clearTimeout(t);
    };
  }, []);

  return null;
}
