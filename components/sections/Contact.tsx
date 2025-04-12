"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="kontakt" className="section-spacing bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kontakt</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Haben Sie Fragen oder möchten Sie mehr über meine Arbeit erfahren? 
            Ich freue mich auf Ihre Nachricht.
          </p>
        </div>

        <Card className="p-6">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <a 
                  href="mailto:mostaphaeddaoudi15@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  mostaphaeddaoudi15@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Telefon</p>
                <a 
                  href="tel:+212674323844" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +212 674323844
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Adresse</p>
                <p className="text-muted-foreground">
                  Hay Slilou Boumalne Dades, 45150 Tinghir, Marokko
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}