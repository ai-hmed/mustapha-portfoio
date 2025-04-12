"use client";

import { Award, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <section id="uber-mich" className="section-spacing bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hey, ich bin Mostapha!</h2>
          <p className="text-muted-foreground">Leidenschaftlicher Koch mit marokkanischen Wurzeln</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 hover-card">
            <div className="flex items-start gap-4">
              <Award className="h-8 w-8 text-primary flex-shrink-0" />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Meine Vision</h3>
                <p className="text-muted-foreground">
                  Die perfekte Fusion von marokkanischer Tradition und deutscher Präzision in der Küche zu schaffen.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover-card">
            <div className="flex items-start gap-4">
              <Star className="h-8 w-8 text-primary flex-shrink-0" />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Mein Ziel</h3>
                <p className="text-muted-foreground">
                  Eine Ausbildung als Koch in Deutschland zu absolvieren und meine Fähigkeiten weiter zu entwickeln.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-lg leading-relaxed">
            Nach meinem Abitur 2019 wurde mir klar: Meine Zukunft liegt in der Küche. Die Arbeit mit 
            hochwertigen Zutaten, das kreative Kombinieren von Aromen und das Erschaffen von kulinarischen 
            Erlebnissen – das ist meine wahre Leidenschaft.
          </p>
          
          <p className="text-lg leading-relaxed">
            In verschiedenen Hotels habe ich wertvolle Erfahrungen gesammelt und spreche inzwischen 
            Deutsch auf B1-Niveau. Die deutsche Küche mit ihrer Präzision und Qualität hat mich besonders 
            inspiriert, weshalb ich hier eine Ausbildung anstrebe.
          </p>

          <p className="text-lg leading-relaxed">
            Was mich auszeichnet? Ich bleibe auch in hektischen Momenten ruhig und fokussiert, 
            lerne kontinuierlich dazu und bringe eine einzigartige Perspektive in jede Küche. 
            Meine marokkanischen Wurzeln verleihen meinen Gerichten eine besondere Note, die ich 
            gekonnt mit europäischen Techniken verbinde.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-lg bg-primary/5">
            <p className="text-3xl font-bold text-primary">3+</p>
            <p className="text-sm text-muted-foreground mt-1">Jahre Erfahrung</p>
          </div>
          <div className="p-4 rounded-lg bg-primary/5">
            <p className="text-3xl font-bold text-primary">5</p>
            <p className="text-sm text-muted-foreground mt-1">Sprachen</p>
          </div>
          <div className="p-4 rounded-lg bg-primary/5">
            <p className="text-3xl font-bold text-primary">50+</p>
            <p className="text-sm text-muted-foreground mt-1">Gerichte</p>
          </div>
          <div className="p-4 rounded-lg bg-primary/5">
            <p className="text-3xl font-bold text-primary">3</p>
            <p className="text-sm text-muted-foreground mt-1">Hotels</p>
          </div>
        </div>
      </div>
    </section>
  );
}