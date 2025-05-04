"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Ingénieure Logiciel",
    country: "🇫🇷 France",
    content:
      "Grâce à l'accompagnement de Vitae Services, j'ai décroché un poste dans une entreprise internationale. Leur expertise dans l'optimisation de CV a fait toute la différence.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Thomas Dubois",
    role: "Responsable Marketing",
    country: "🇨🇦 Canada",
    content:
      "La préparation aux entretiens m'a donné la confiance nécessaire pour réussir. Je recommande vivement les services de Vitae à tous ceux qui cherchent à évoluer professionnellement.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Leila Benali",
    role: "Consultante Financière",
    country: "🇦🇪 Émirats",
    content:
      "Un service personnalisé et professionnel qui m'a permis de me démarquer dans un secteur très compétitif. Merci pour votre accompagnement de qualité !",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Ahmed Al-Farsi",
    role: "Directeur des Opérations",
    country: "🇶🇦 Qatar",
    content:
      "J'ai pu obtenir un poste à responsabilité au Qatar grâce à la qualité de mon dossier préparé par Vitae Services. Un investissement qui a vraiment porté ses fruits.",
    image: "/placeholder.svg?height=60&width=60",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Testimonia = () => {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 bg-blue-50 relative">
      <motion.div
        className="container px-4 md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700">
            Témoignages
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Ce que nos clients disent de nos services
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, i) => (
              <CarouselItem
                key={i}
                className="md:basis-1/2 lg:basis-1/3 px-2"
              >
                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white rounded-lg border shadow-md p-6 h-full flex flex-col justify-between transition-all"
                >
                  <div className="flex items-center gap-2 pb-2">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 py-4 flex-grow">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                      <p className="text-xs text-blue-600">{testimonial.country}</p>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </motion.div>
    </section>
  );
};

export default Testimonia;
