"use client";
import React, { useEffect, useState } from "react";
import { Plane, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Couverture = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [animationPlayed, setAnimationPlayed] = useState({
    countries: false,
    sectors: false,
    testimonials: false,
    reservation: false,
  });

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
            setActiveSection(section);
            if (
              !animationPlayed[section] &&
              ["countries", "sectors", "testimonials", "reservation"].includes(section)
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

  const countries = [
    {
      name: "France",
      flag: "🇫🇷",
      flagImage: "/placeholder.svg?height=60&width=90",
      description:
        "Un marché du travail dynamique avec des opportunités dans la tech, le luxe et l'industrie.",
      sectors: ["Tech", "Luxe", "Industrie", "Finance"],
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      flagImage: "/placeholder.svg?height=60&width=90",
      description:
        "Excellent pour l'immigration qualifiée avec des programmes spécifiques pour les travailleurs.",
      sectors: ["Ressources naturelles", "Tech", "Santé", "Éducation"],
    },
    {
      name: "Allemagne",
      flag: "🇩🇪",
      flagImage: "/placeholder.svg?height=60&width=90",
      description:
        "Leader européen en ingénierie et industrie avec une forte demande de talents internationaux.",
      sectors: ["Ingénierie", "Automobile", "Énergie", "Recherche"],
    },
    {
      name: "Émirats",
      flag: "🇦🇪",
      flagImage: "/placeholder.svg?height=60&width=90",
      description:
        "Centre d'affaires international offrant des opportunités dans de nombreux secteurs sans impôts.",
      sectors: ["Finance", "Immobilier", "Tourisme", "Tech"],
    },
    {
      name: "Qatar",
      flag: "🇶🇦",
      flagImage: "/placeholder.svg?height=60&width=90",
      description:
        "Économie en pleine expansion avec des investissements massifs dans les infrastructures.",
      sectors: ["Énergie", "Finance", "Construction", "Éducation"],
    },
    {
      name: "Arabie Saoudite",
      flag: "🇸🇦",
      flagImage: "/placeholder.svg?height=60&width=90",
      description:
        "Économie en pleine expansion avec des investissements massifs dans les infrastructures.",
      sectors: ["Énergie", "Finance", "Construction", "Éducation"],
    },
  ];

  return (
    <section
      id="countries"
      className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-[flyAcross_20s_linear_infinite]">
          <Plane className="h-6 w-6 text-blue-300 rotate-45" />
        </div>
        <div
          className="absolute bottom-40 right-10 animate-[flyAcross_25s_linear_infinite_reverse]"
          style={{ animationDelay: "5s" }}
        >
          <Plane className="h-5 w-5 text-blue-300 -rotate-45" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-blue-200 opacity-20 animate-pulse" />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-blue-200 opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-blue-200 opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <motion.div
        className="container px-4 md:px-6 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerStagger}
      >
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          variants={fadeInUp}
          custom={0}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700">
            Couverture Mondiale
          </h2>
          <p className="max-w-2xl text-gray-600 text-lg">
            Nous accompagnons des candidats dans tous les pays du monde
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              variants={fadeInUp}
              custom={index + 1}
              className="group relative overflow-hidden rounded-lg border bg-white shadow-md hover:shadow-xl transition-all"
            >
              <div className="absolute top-0 right-0 p-2 text-4xl">
                <span role="img" aria-label={`Drapeau ${country.name}`}>
                  {country.flag}
                </span>
              </div>
              <div className="absolute top-4 left-4 w-16 h-10 overflow-hidden rounded shadow-sm">
                <Image
                  src={country.flagImage}
                  width={60}
                  height={40}
                  alt={`Drapeau ${country.name}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 pt-16">
                <h3 className="text-xl font-bold text-blue-700 mb-2">
                  {country.name}
                </h3>
                <p className="text-gray-600 mb-4">{country.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">
                    Secteurs principaux:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {country.sectors.map((sector) => (
                      <span
                        key={sector}
                        className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 group-hover:bg-blue-200 transition-colors"
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 group">
            Découvrir tous nos pays
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default Couverture;
