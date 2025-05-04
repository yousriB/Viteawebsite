"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileText, Mail, Search, MessageSquare } from "lucide-react";

const services = [
  {
    title: "Rédaction & optimisation de CV",
    description:
      "Un CV professionnel qui met en valeur vos compétences et expériences pour attirer l'attention des recruteurs.",
    icon: <FileText className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Création de lettres de motivation & de candidature",
    description:
      "Des lettres personnalisées qui complètent votre CV et augmentent vos chances d'obtenir un entretien.",
    icon: <Mail className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Accompagnement pour la recherche d'emploi & postulation",
    description:
      "Stratégies efficaces pour trouver les offres adaptées à votre profil et optimiser vos candidatures.",
    icon: <Search className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Préparation aux entretiens d'embauche",
    description:
      "Coaching personnalisé pour vous préparer à réussir vos entretiens avec confiance.",
    icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
    },
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

const Services = () => {
  return (
    <section id="services" className="w-full py-16 md:py-24 bg-white">
      <motion.div
        className="container px-4 md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerStagger}
      >
        <motion.div
          variants={fadeInUp}
          custom={0}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700">
            Nos Services
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Des solutions personnalisées pour votre réussite professionnelle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              custom={i + 1}
              className="flex items-start gap-4 rounded-lg border p-6 shadow-sm hover:shadow-md hover:bg-blue-50 transition"
            >
              <div className="p-3 rounded-full bg-blue-100">{service.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
