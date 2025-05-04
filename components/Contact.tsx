"use client";

import React from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  PhoneCall,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24 bg-blue-50"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700">
            Contactez-nous
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous sommes à votre disposition pour répondre à toutes vos questions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-0">
                <div className="relative h-[250px]">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    fill
                    alt="Carte"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end p-6 text-white">
                    <div>
                      <p className="text-lg font-bold">Bureaux Internationaux</p>
                      <p>Présents dans plusieurs pays pour mieux vous servir</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              <ContactInfo icon={<Phone className="h-5 w-5 text-blue-600" />} title="Téléphone" value="+216 57 285 151" />
              <ContactInfo icon={<Mail className="h-5 w-5 text-blue-600" />} title="Email" value="contact@vitaeservices.com" />
              <ContactInfo icon={<Clock className="h-5 w-5 text-blue-600" />} title="Horaires" value="Lun-Ven: 9h-18h" />
              <ContactInfo icon={<MapPin className="h-5 w-5 text-blue-600" />} title="Siège" value="International" />
            </div>

            <div>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                <PhoneCall className="mr-2 h-5 w-5" />
                Contactez-nous sur WhatsApp
              </Button>
            </div>
          </div>

          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold">
              Envoyez-nous un message
            </h3>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="contact-name">Nom</Label>
                <Input id="contact-name" placeholder="Votre nom" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="Votre email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  placeholder="Votre message"
                  className="min-h-[120px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Envoyer
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) => (
  <div className="flex items-center gap-4 rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition">
    <div className="p-2 rounded-full bg-blue-100">{icon}</div>
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-700">{value}</p>
    </div>
  </div>
);

export default Contact;
