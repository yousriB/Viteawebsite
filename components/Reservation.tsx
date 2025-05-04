"use client";
import React from "react";

import {
  Mail,
  Phone,
  PhoneIcon as WhatsApp,
  User,
  CheckCircle,
  Plane,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const Reservation = () => {
  // Country data with flags and descriptions
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

  // Sectors with icons and descriptions
  const sectors = [
    {
      name: "Informatique & Tech",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-blue-600"
        >
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      ),
      description:
        "Développement, cybersécurité, data science, IA et plus encore.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Finance & Banque",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-blue-600"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v20M17 12H2M22 12h-5" />
        </svg>
      ),
      description:
        "Comptabilité, analyse financière, gestion de patrimoine, fintech.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Santé & Médical",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-blue-600"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      description:
        "Médecins, infirmiers, recherche pharmaceutique, biotechnologie.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Ingénierie",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-blue-600"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      description: "Génie civil, mécanique, électrique, aéronautique et plus.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Marketing & Communication",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-blue-600"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      description:
        "Marketing digital, relations publiques, publicité, médias sociaux.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Éducation & Formation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-blue-600"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
      description:
        "Enseignement, formation professionnelle, e-learning, coaching.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ];
  return (
    <div>
      {/* Reservation Section */}
      <section
        id="reservation"
        className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-white"
      >
        {/* Background animation elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-60 h-60 bg-blue-100 rounded-full opacity-10 animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div className="absolute top-1/4 right-1/4 animate-[flyAcross_30s_linear_infinite]">
            <Plane className="h-8 w-8 text-blue-200 transform -rotate-12" />
          </div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-600">
                Réservez Votre Consultation
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Complétez le formulaire ci-dessous pour réserver votre
                consultation gratuite
              </p>
            </div>
          </div>

          <div
            className={cn(
              "mx-auto max-w-3xl mt-12 rounded-xl border bg-white p-8 shadow-lg relative"
            )}
          >
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white animate-bounce">
              <span className="font-bold">Free</span>
            </div>

            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="name"
                      placeholder="Votre nom"
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Votre email"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="phone"
                      placeholder="Votre numéro"
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Pays</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un pays" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.name} value={country.name}>
                          <span className="flex items-center">
                            <span className="mr-2">{country.flag}</span>{" "}
                            {country.name}
                          </span>
                        </SelectItem>
                      ))}
                      <SelectItem value="other">Autre pays</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="sector">Secteur d'activité</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un secteur" />
                    </SelectTrigger>
                    <SelectContent>
                      {sectors.map((sector) => (
                        <SelectItem key={sector.name} value={sector.name}>
                          {sector.name}
                        </SelectItem>
                      ))}
                      <SelectItem value="other">Autre secteur</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service souhaité</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cv">
                        Rédaction & optimisation de CV
                      </SelectItem>
                      <SelectItem value="lettre">
                        Création de lettres de motivation
                      </SelectItem>
                      <SelectItem value="recherche">
                        Accompagnement recherche d'emploi
                      </SelectItem>
                      <SelectItem value="entretien">
                        Préparation aux entretiens
                      </SelectItem>
                      <SelectItem value="complet">Pack complet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Informations complémentaires</Label>
                <Textarea
                  id="message"
                  placeholder="Parlez-nous de votre parcours et de vos objectifs professionnels"
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">
                    J'accepte de recevoir des informations par email
                  </span>
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 group"
              >
                Réserver ma consultation gratuite
                <CheckCircle className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              </Button>

              <p className="text-center text-xs text-gray-500 mt-4">
                Nous vous contacterons dans les 24 heures pour confirmer votre
                rendez-vous
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;
