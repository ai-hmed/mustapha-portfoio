"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      className="fixed bottom-4 right-4 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      onClick={scrollToTop}
      size="icon"
    >
      <ArrowUp className="h-6 w-6" />
    </Button>
  );
};

export default ScrollToTopButton;
