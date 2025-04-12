"use client";

import { Calendar, Award, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Hotel La Perle Du Sud",
    position: "Küchenpraktikant",
    date: "Juli - August 2021",
    description: "Grundlegende Küchentechniken erlernt und bei der Zubereitung verschiedener Gerichte assistiert. Fokus auf Mise en Place und Qualitätskontrolle.",
    achievements: [
      "Eigenständige Vorbereitung von Beilagen",
      "Unterstützung bei der Menüplanung",
      "Einblicke in Hotelküchen-Management"
    ]
  },
  {
    title: "Hotel Amazirte",
    position: "Küchenhilfe",
    date: "Juli - September 2019",
    description: "Aktive Mitarbeit in der Hotelküche mit steigender Verantwortung. Erste eigenständige Gerichte zubereitet.",
    achievements: [
      "Vorbereitung von Frühstücksbuffets",
      "Eigenständige Zubereitung kleiner Gerichte",
      "Unterstützung bei Großveranstaltungen"
    ]
  },
  {
    title: "Hotel Kasbah Chems Dades",
    position: "Küchenhilfe",
    date: "Juli - August 2018",
    description: "Erstes Praktikum in einer professionellen Küche. Grundlegende Einführung in Küchenabläufe und Hygiene.",
    achievements: [
      "Erlernen von Grundtechniken",
      "Mise en Place Vorbereitung",
      "Einführung in Küchenhygiene"
    ]
  }
];

export default function Experience() {
  return (
    <section id="erfahrung" className="section-spacing bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Berufserfahrung</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mein Weg in der Küche – von den ersten Schritten bis zu eigenständiger Verantwortung.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover-card">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Briefcase className="h-5 w-5" />
                    <span className="font-medium">{exp.position}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.date}</span>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}