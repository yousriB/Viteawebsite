"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section
      id="faq"
      className="w-full py-16 md:py-24"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700">
            FAQ
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Questions fréquemment posées
          </p>
        </div>
        <div className="mx-auto max-w-5xl">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is Vitae Services Company?
              </AccordionTrigger>
              <AccordionContent>
                Vitae Services Company is an expert in job search and professional support.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What services do you offer?
              </AccordionTrigger>
              <AccordionContent>
                We offer CV writing, cover letter creation, job search assistance, and interview preparation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How can I book a consultation?
              </AccordionTrigger>
              <AccordionContent>
                You can book a free consultation by filling out the form on our website.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How can I book a consultation?
              </AccordionTrigger>
              <AccordionContent>
                You can book a free consultation by filling out the form on our website.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                How can I book a consultation?
              </AccordionTrigger>
              <AccordionContent>
                You can book a free consultation by filling out the form on our website.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                How can I book a consultation?
              </AccordionTrigger>
              <AccordionContent>
                You can book a free consultation by filling out the form on our website.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
