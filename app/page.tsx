"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import TestimonialsSection from "@/components/testimonials-section";
import { TeamSection } from "@/components/team-section";
import { FAQSection } from "@/components/faq-section";
import { ContactForm } from "@/components/contact-form";
import App from "@/components/How-it-Work";
import { Footer } from "@/components/footer";
import Process from "@/components/process";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    handleHashChange(); // Handle hash on initial load
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="bg-[#001529]">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <App />
        {/* <TestimonialsSection /> */}
        <TeamSection />
        <FAQSection />
        <Process />
        <ContactForm />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
