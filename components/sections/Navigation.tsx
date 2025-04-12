"use client";

import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur shadow-md' : 'bg-background'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-12 text-sm font-medium">
              <li>
                <a href="#uber-mich" className="px-3 py-2 hover:text-primary transition-colors">
                  Über Mich
                </a>
              </li>
              <li>
                <a href="#qualifikationen" className="px-3 py-2 hover:text-primary transition-colors">
                  Qualifikationen
                </a>
              </li>
              <li>
                <a href="#erfahrung" className="px-3 py-2 hover:text-primary transition-colors">
                  Erfahrung
                </a>
              </li>
              <li>
                <a href="#galerie" className="px-3 py-2 hover:text-primary transition-colors">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#kontakt" className="px-3 py-2 hover:text-primary transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div className="w-10 md:hidden"></div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64' : 'max-h-0'
        }`}>
          <ul className="flex flex-col py-4">
            <li>
              <a 
                href="#uber-mich" 
                className="block py-3 px-4 hover:bg-primary/5 hover:text-primary transition-colors rounded-lg" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Über Mich
              </a>
            </li>
            <li>
              <a 
                href="#qualifikationen" 
                className="block py-3 px-4 hover:bg-primary/5 hover:text-primary transition-colors rounded-lg" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Qualifikationen
              </a>
            </li>
            <li>
              <a 
                href="#erfahrung" 
                className="block py-3 px-4 hover:bg-primary/5 hover:text-primary transition-colors rounded-lg" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Erfahrung
              </a>
            </li>
            <li>
              <a 
                href="#galerie" 
                className="block py-3 px-4 hover:bg-primary/5 hover:text-primary transition-colors rounded-lg" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Galerie
              </a>
            </li>
            <li>
              <a 
                href="#kontakt" 
                className="block py-3 px-4 hover:bg-primary/5 hover:text-primary transition-colors rounded-lg" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}