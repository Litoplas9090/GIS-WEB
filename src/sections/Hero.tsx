"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    title: "INGENIERÍA SEGURA",
    subtitle: "Desarrollo de proyectos industriales, comerciales y residenciales bajo los más altos estándares.",
    image: "/real/real_img_17.webp",
  },
  {
    title: "EFICIENCIA ENERGÉTICA",
    subtitle: "Soluciones sostenibles que optimizan recursos y protegen el medio ambiente.",
    image: "/real/paneles_solares.webp",
  },
  {
    title: "TALENTO CERTIFICADO",
    subtitle: "Personal técnico calificado con amplia experiencia en el sector eléctrico, mecánico y electrónico.",
    image: "/real/talento certificado.webp",
  }
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);
    
    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-corporate-black">
      <div className="absolute inset-0 z-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative h-full">
              <div className="absolute inset-0 bg-corporate-black/60 mix-blend-multiply z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/70 to-transparent z-10" />
              <img 
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-corporate-cyan"></div>
              <span className="text-corporate-cyan font-bold tracking-[0.2em] text-sm md:text-base uppercase">
                GIS
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight heading drop-shadow-lg">
              {slides[currentIndex].title.split(" ").map((word, i, arr) => (
                <span key={i} className={i === arr.length - 1 ? "text-gray-400" : ""}>
                  {word}{" "}
                </span>
              ))}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl font-light">
              {slides[currentIndex].subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`https://wa.me/573003707198?text=Hola,%20deseo%20recibir%20información%20sobre%20los%20servicios%20de%20GIS%20`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-corporate-black px-8 py-4 text-center font-bold text-sm tracking-widest uppercase hover:bg-corporate-cyan transition-all duration-300"
              >
                Contactar Asesor
              </a>
              <a 
                href="#services" 
                className="border border-white/30 text-white px-8 py-4 text-center font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Explorar Soluciones
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-10 right-10 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-1 transition-all duration-500 ${
              index === currentIndex ? "w-12 bg-corporate-cyan" : "w-6 bg-white/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
