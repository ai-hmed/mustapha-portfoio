"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-primary" />
            <p className="text-sm text-muted-foreground">
              Mit Leidenschaft gekocht
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Mostapha Eddaoudi. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}