"use client";

import { Card } from "@/components/ui/card";

const galleryImages = [
  '/images/01.png',
  '/images/02.png',
  '/images/03.png'
];

const descriptions = [
  'Kulinarische Kreation',
  'Präsentation eines Gerichts',
  'Zubereitung in der Küche'
];

export default function Gallery() {
  return (
    <section id="galerie" className="section-spacing bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Einblicke in meine Arbeit</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Eine Auswahl meiner kulinarischen Kreationen, die meine Leidenschaft für die Fusion 
            von marokkanischer und deutscher Küche zeigen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((src, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group hover-card border border-border/40"
            >
              <div className="relative aspect-[4/3]">
                <img 
                  src={src} 
                  alt={descriptions[index]} 
                  className="absolute inset-0 w-full h-full object-cover image-zoom"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-white text-center font-medium">
                      {descriptions[index]}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
