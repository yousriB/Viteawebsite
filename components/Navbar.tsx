"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="sticky top-0 z-50">
      <header className="z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-blue-600">
              Vitae Services Company
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#services"
              onClick={() => scrollToSection("services")}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600",
                activeSection === "services" && "text-blue-600 font-semibold"
              )}
            >
              Services
            </Link>
            <Link
              href="#countries"
              onClick={() => scrollToSection("countries")}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600",
                activeSection === "countries" && "text-blue-600 font-semibold"
              )}
            >
              Pays
            </Link>
            <Link
              href="#sectors"
              onClick={() => scrollToSection("sectors")}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600",
                activeSection === "sectors" && "text-blue-600 font-semibold"
              )}
            >
              Secteurs
            </Link>
            <Link
              href="#testimonials"
              onClick={() => scrollToSection("testimonials")}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600",
                activeSection === "testimonials" &&
                  "text-blue-600 font-semibold"
              )}
            >
              Témoignages
            </Link>
            <Link
              href="#reservation"
              onClick={() => scrollToSection("reservation")}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600",
                activeSection === "reservation" && "text-blue-600 font-semibold"
              )}
            >
              Réservation
            </Link>
            <Link
              href="#contact"
              onClick={() => scrollToSection("contact")}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600",
                activeSection === "contact" && "text-blue-600 font-semibold"
              )}
            >
              Contact
            </Link>
          </nav>
          <Button
            size="sm"
            className="hidden md:flex bg-blue-600 hover:bg-blue-700"
            onClick={() => scrollToSection("reservation")}
          >
            Réservez maintenant
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-16 z-50 bg-white border-b shadow-lg animate-fade-in">
            <div className="container py-4 flex flex-col space-y-4">
              <Link
                href="#services"
                onClick={() => scrollToSection("services")}
                className={cn(
                  "px-4 py-2 text-sm font-medium hover:bg-blue-50 rounded-md transition-colors",
                  activeSection === "services" && "text-blue-600 bg-blue-50"
                )}
              >
                Services
              </Link>
              <Link
                href="#countries"
                onClick={() => scrollToSection("countries")}
                className={cn(
                  "px-4 py-2 text-sm font-medium hover:bg-blue-50 rounded-md transition-colors",
                  activeSection === "countries" && "text-blue-600 bg-blue-50"
                )}
              >
                Pays
              </Link>
              <Link
                href="#sectors"
                onClick={() => scrollToSection("sectors")}
                className={cn(
                  "px-4 py-2 text-sm font-medium hover:bg-blue-50 rounded-md transition-colors",
                  activeSection === "sectors" && "text-blue-600 bg-blue-50"
                )}
              >
                Secteurs
              </Link>
              <Link
                href="#testimonials"
                onClick={() => scrollToSection("testimonials")}
                className={cn(
                  "px-4 py-2 text-sm font-medium hover:bg-blue-50 rounded-md transition-colors",
                  activeSection === "testimonials" && "text-blue-600 bg-blue-50"
                )}
              >
                Témoignages
              </Link>
              <Link
                href="#reservation"
                onClick={() => scrollToSection("reservation")}
                className={cn(
                  "px-4 py-2 text-sm font-medium hover:bg-blue-50 rounded-md transition-colors",
                  activeSection === "reservation" && "text-blue-600 bg-blue-50"
                )}
              >
                Réservation
              </Link>
              <Link
                href="#contact"
                onClick={() => scrollToSection("contact")}
                className={cn(
                  "px-4 py-2 text-sm font-medium hover:bg-blue-50 rounded-md transition-colors",
                  activeSection === "contact" && "text-blue-600 bg-blue-50"
                )}
              >
                Contact
              </Link>
              <Button
                className="bg-blue-600 hover:bg-blue-700 w-full"
                onClick={() => scrollToSection("reservation")}
              >
                Réservez maintenant
              </Button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
