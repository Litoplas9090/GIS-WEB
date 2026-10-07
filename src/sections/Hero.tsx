"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80",
    title: "INGENIERÍA",
    subtitle: "SEGURA",
    description: "Desarrollo de proyectos industriales, comerciales y residenciales bajo los más altos estándares."
  },
  {
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80",
    title: "SOLUCIONES",
    subtitle: "EFICIENTES",
    description: "Ingeniería aplicada al ahorro y gestión óptima de recursos en la región Caribe."
  },
  {
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&q=80",
    title: "TECNOLOGÍA",
    subtitle: "SOSTENIBLE",
    description: "Promovemos la conservación mediante la implementación de energías renovables y limpias."
  }
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    
    // Autoplay
    const autoplay = setInterval(() => {
      scrollNext();
    }, 6000);

    return () => {
      clearInterval(autoplay);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, scrollNext]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-corporate-black">
      <div className="absolute inset-0 z-0" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] h-full overflow-hidden">
              <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: selectedIndex === index ? 1 : 1.2 }}
                transition={{ duration: 8, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-corporate-black via-corporate-black/60 to-transparent" />
              <div className="absolute inset-0 bg-corporate-blue/20 mix-blend-multiply" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-end pb-32 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-corporate-cyan" />
              <span className="text-corporate-cyan text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                GIS S.A.S.
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white heading leading-[0.9] tracking-tighter mb-4">
              {slides[selectedIndex].title}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                {slides[selectedIndex].subtitle}
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-10 font-light">
              {slides[selectedIndex].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="https://wa.me/573003707198?text=Hola,%20deseo%20recibir%20información%20sobre%20los%20servicios%20de%20GIS%20S.A.S."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 overflow-hidden rounded-none bg-white text-corporate-black font-bold text-sm md:text-base tracking-widest uppercase transition-all flex items-center justify-center gap-3"
              >
                <div className="absolute inset-0 w-0 bg-corporate-cyan transition-all duration-[250ms] ease-out group-hover:w-full" />
                <span className="relative">Contactar Asesor</span>
              </a>
              <a
                href="#services"
                className="px-8 py-4 border border-white/30 text-white font-bold text-sm md:text-base tracking-widest uppercase hover:bg-white hover:text-corporate-black transition-colors duration-300 flex items-center justify-center"
              >
                Explorar Soluciones
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-10 right-4 sm:right-8 lg:right-16 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-1 transition-all duration-500 ${
              selectedIndex === index ? "w-12 bg-corporate-cyan" : "w-6 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Ir a la diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
