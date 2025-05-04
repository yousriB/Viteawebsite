"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  function scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  }

  return (
    <section
      id="hero"
      className="w-full py-16 md:py-24 "
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-700">
              Vitae Services Company
            </h1>
            <h2 className="text-2xl text-blue-900 font-semibold">
              Expert en recherche d'emploi
            </h2>
            <p className="text-gray-700 max-w-xl text-lg">
              Boostez votre carrière avec un accompagnement sur mesure.
            </p>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
              onClick={() => scrollToSection("reservation")}
            >
              Réservez votre consultation gratuite
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="relative w-full max-w-md h-[400px] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Vitae Services"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-blue-900/80 to-transparent text-white">
              <p className="text-lg font-bold">Expertise Internationale</p>
              <p>Votre partenaire pour une carrière sans frontières</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
