"use client";

import { useState, useEffect } from "react";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Reservation from "@/components/Reservation";
import Testimonia from "@/components/Testimonia";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Couverture from "@/components/Couverture";
import Secteurs from "@/components/Secteurs";

export default function Home() {
  const [animationPlayed, setAnimationPlayed] = useState({
    countries: false,
    sectors: false,
    testimonials: false,
    reservation: false,
  });

  // Handle scroll and set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "services",
        "countries",
        "sectors",
        "testimonials",
        "reservation",
        "contact",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            // Set animation played for visible sections
            if (
              !animationPlayed[section] &&
              ["countries", "sectors", "testimonials", "reservation"].includes(
                section
              )
            ) {
              setAnimationPlayed((prev) => ({ ...prev, [section]: true }));
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animationPlayed]);

  return (
    <div className="flex min-h-screen flex-col bg-white relative">
      <Navbar />
      <div className="bg-gradient-to-b from-blue-100 to-white">
      <Hero />
      <Services />
      <Couverture />
      <Secteurs />
      <Testimonia />
      <Reservation />
      <Faq />
      <Contact />
      </div>
      <Footer />

    </div>
  );
}
