"use client";
import React from "react";
import Link from "next/link";
import {
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  PhoneIcon as WhatsApp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <div>
      <footer className="w-full border-t bg-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-600">
                Vitae Services Company
              </h3>
              <p className="text-sm text-gray-500">
                Expert en recherche d'emploi et accompagnement professionnel.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-600">
                  Navigation
                </h3>
                <nav className="flex flex-col space-y-2 text-sm">
                  <Link
                    href="#services"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    Services
                  </Link>
                  <Link
                    href="#countries"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    Pays
                  </Link>
                  <Link
                    href="#sectors"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    Secteurs
                  </Link>
                  <Link
                    href="#testimonials"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    Témoignages
                  </Link>
                  <Link
                    href="#reservation"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    Réservation
                  </Link>
                </nav>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-600">Légal</h3>
                <nav className="flex flex-col space-y-2 text-sm">
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    Mentions légales
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    Politique de confidentialité
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    Conditions d'utilisation
                  </Link>
                </nav>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-600">
                Newsletter
              </h3>
              <p className="text-sm text-gray-500">
                Abonnez-vous pour recevoir nos conseils et actualités.
              </p>
              <form className="flex space-x-2">
                <Input placeholder="Votre email" className="max-w-lg flex-1" />
                <Button
                  type="submit"
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  S'abonner
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} Vitae Services Company. Tous droits
              réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
