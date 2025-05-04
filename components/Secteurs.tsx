"use client";

import React from "react";
import { Briefcase, Globe, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Secteurs = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const sectors = [
    {
      name: "Informatique & Tech",
      icon: (
        <svg className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      ),
      description: "Développement, cybersécurité, data science, IA et plus encore.",
    },
    {
      name: "Finance & Banque",
      icon: (
        <svg className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v20M17 12H2M22 12h-5" />
        </svg>
      ),
      description: "Comptabilité, analyse financière, gestion de patrimoine, fintech.",
    },
    {
      name: "Santé & Médical",
      icon: (
        <svg className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      description: "Médecins, infirmiers, recherche pharmaceutique, biotechnologie.",
    },
    {
      name: "Ingénierie",
      icon: (
        <svg className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      description: "Génie civil, mécanique, électrique, aéronautique et plus.",
    },
    {
      name: "Marketing & Communication",
      icon: (
        <svg className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      description: "Marketing digital, relations publiques, publicité, médias sociaux.",
    },
    {
      name: "Éducation & Formation",
      icon: (
        <svg className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
      description: "Enseignement, formation professionnelle, e-learning, coaching.",
    },
  ];

  return (
    <section id="sectors" className="w-full py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-12 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700">
            Secteurs d'Expertise
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Nous couvrons tous les domaines professionnels pour répondre à vos besoins spécifiques
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.name}
              custom={i}
              variants={fadeInUp}
              className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-sm hover:shadow-md transition-all hover:scale-[1.03]"
            >
              <div className="mb-4">
                <div className="p-3 rounded-full bg-blue-100">{sector.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">{sector.name}</h3>
              <p className="text-gray-600">{sector.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => scrollToSection("reservation")}
          >
            Explorer tous les secteurs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Secteurs;
