"use client";

import { MapPin, Mail, Phone, Download, ChefHat, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const profileImage = '/images/profile.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background border-b overflow-hidden px-4 py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Profile Section with Chef Hat */}
            <div className="relative flex-shrink-0">
              <div className="relative">
                {/* Chef Hat Container */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-20 md:-top-24">
                  <div className="relative w-28 h-28 md:w-32 md:h-32">
                    <ChefHat 
                      className="w-full h-full text-primary animate-float" 
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                
                {/* Profile Image */}
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl bg-card">
                  <img
                    src={profileImage}
                    alt="Mostapha Eddaoudi"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-grow space-y-8 text-center md:text-left max-w-xl">
              {/* Header */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Mostapha Eddaoudi
                </h1>
                <p className="text-xl md:text-2xl text-primary font-medium">
                  Koch mit Leidenschaft
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Marokkanischer Koch mit Liebe zur deutschen Küche. Spezialisiert auf die Fusion von traditionellen 
                  marokkanischen Aromen mit modernen europäischen Kochtechniken.
                </p>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-5 flex justify-center">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                  <span className="text-foreground">Hay Slilou Boumalne Dades, 45150 Tinghir, Marokko</span>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-5 flex justify-center">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                  <a 
                    href="mailto:mostaphaeddaoudi15@gmail.com" 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    mostaphaeddaoudi15@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-5 flex justify-center">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                  <a 
                    href="tel:+212674323844" 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    +212 674323844
                  </a>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                {/* <Button 
                  size="lg" 
                  className="gap-2 shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
                >
                  <Calendar className="h-4 w-4" />
                  Termin vereinbaren
                </Button> */}
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="gap-2 hover:bg-primary/5 transition-colors w-full sm:w-auto"
                  asChild
                >
                  <a href="/Lebenslauf.pdf" download>
                    <Download className="h-4 w-4" />
                    Lebenslauf
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
