"use client";

import Hero from "@/components/sections/Hero";
import Navigation from "@/components/sections/Navigation";
import About from "@/components/sections/About";
import Qualifications from "@/components/sections/Qualifications";
import Experience from "@/components/sections/Experience";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <Navigation />
      <About />
      <Qualifications />
      <Experience />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}