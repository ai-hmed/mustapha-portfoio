"use client";

import { ChefHat, Languages, GraduationCap, Star, Heart, Brain, Lightbulb, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Qualifications() {
  return (
    <section id="qualifikationen" className="py-12 md:py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Qualifikationen & Fähigkeiten</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Cooking Skills */}
          <Card className="p-4 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <ChefHat className="h-6 w-6" />
              <h3 className="text-lg md:text-xl font-semibold">Kochen</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Badge>Grundtechniken</Badge>
                <span className="text-sm text-muted-foreground">Schneidetechniken, Garmethoden</span>
              </li>
              <li className="flex items-center gap-2">
                <Badge>Marokkanische Küche</Badge>
                <span className="text-sm text-muted-foreground">Tajine, Couscous, Pastilla</span>
              </li>
              <li className="flex items-center gap-2">
                <Badge>Internationale Gerichte</Badge>
                <span className="text-sm text-muted-foreground">Europäische & mediterrane Küche</span>
              </li>
            </ul>
          </Card>

          {/* Languages */}
          <Card className="p-4 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <Languages className="h-6 w-6" />
              <h3 className="text-lg md:text-xl font-semibold">Sprachen</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Badge>Tamazight</Badge>
                <span className="text-sm text-muted-foreground">Muttersprache</span>
              </li>
              <li className="flex items-center gap-2">
                <Badge>Arabisch</Badge>
                <span className="text-sm text-muted-foreground">Muttersprache</span>
              </li>
              <li className="flex items-center gap-2">
                <Badge>Deutsch</Badge>
                <span className="text-sm text-muted-foreground">B1 Niveau (ÖSD Zertifikat)</span>
              </li>
              <li className="flex items-center gap-2">
                <Badge>Englisch</Badge>
                <span className="text-sm text-muted-foreground">B1 Niveau</span>
              </li>
              <li className="flex items-center gap-2">
                <Badge>Französisch</Badge>
                <span className="text-sm text-muted-foreground">Fließend in Wort und Schrift</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Education */}
        <div className="mt-8 md:mt-12">
          <Card className="p-4 md:p-6">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-6 w-6" />
              <h3 className="text-lg md:text-xl font-semibold">Bildung & Zertifikate</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-semibold">Abitur</h4>
                <p className="text-sm text-muted-foreground">2019</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-semibold">Universität für Rechts-, Wirtschafts- und Sozialwissenschaften</h4>
                <p className="text-sm text-muted-foreground">Marrakesch, 2019-2020</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-semibold">ÖSD Zertifikat B1</h4>
                <p className="text-sm text-muted-foreground">Sprechen, Hören, Schreiben (2023)</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Personal Qualities */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 md:mt-12">
          <QualityCard icon={<Star />} title="Zuverlässigkeit" />
          <QualityCard icon={<Heart />} title="Verantwortungsbewusstsein" />
          <QualityCard icon={<Users />} title="Kommunikationsstärke" />
          <QualityCard icon={<ChefHat />} title="Selbstständigkeit" />
          <QualityCard icon={<Brain />} title="Hohe Lernbereitschaft" />
          <QualityCard icon={<Lightbulb />} title="Kreativität" />
        </div>
      </div>
    </section>
  );
}

function QualityCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <Card className="p-4 text-center">
      <div className="h-6 w-6 mx-auto mb-2">
        {icon}
      </div>
      <h4 className="font-semibold">{title}</h4>
    </Card>
  );
}