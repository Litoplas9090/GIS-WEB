"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MessageCircle, X } from "lucide-react";
const equipment = [
  {
    title: "Andamios Uberlink",
    image: "/real/alquiler andamios uberlink.webp",
    desc: "Andamios certificados Uberlink para trabajo seguro en alturas."
  },
  {
    title: "Genie AWP-24",
    image: "/real/alquiler genie awp-24.webp",
    desc: "Plataforma elevadora personal Genie AWP-24 para mantenimiento industrial y trabajo en alturas."
  },
  {
    title: "Genie GS-3246",
    image: "/real/alquiler genie gs-3246.webp",
    desc: "Plataforma de tijera Genie GS-3246, ideal para trabajos de instalación, construcción y mantenimiento."
  },
  {
    title: "Plataforma JLG-36AM",
    image: "/real/alquiler plataforma unipersonal jlg-36AM.webp",
    desc: "Elevador vertical unipersonal JLG-36AM, compacto y eficiente para espacios reducidos."
  }
];
export default function Benefits() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <section id="benefits" className="py-24 bg-white text-corporate-blue relative overflow-hidden border-t border-gray-100">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-corporate-cyan/20 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-corporate-blue heading mb-6">
                Alquiler de Equipos Certificados
            </h2>
            <p className="text-lg text-gray-600 font-medium mb-8">
                GIS ofrece el servicio de alquiler de maquinaria especializada y certificada para la ejecución eficiente y segura de proyectos de ingeniería. Contamos con plataformas elevadoras y andamios con todo su mantenimiento al día.
            </p>
            <div className="flex justify-center">
                <a 
                  href="https://wa.me/573003707198?text=Hola,%20deseo%20cotizar%20el%20alquiler%20de%20equipos%20certificados."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#1ebd59] transition-all hover:scale-105"
                >
                  <MessageCircle size={24} />
                  Cotizar Alquiler por WhatsApp
                </a>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipment.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-lg flex flex-col h-full cursor-pointer hover:shadow-xl hover:border-corporate-cyan/50 transition-all"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="relative h-56 w-full overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain transform group-hover:scale-105 transition-transform duration-700 ease-in-out p-2"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-lg font-bold text-corporate-blue mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 mb-4 flex-grow">{item.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                    <span className="text-corporate-cyan font-bold text-sm tracking-wide flex items-center hover:text-corporate-blue transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(`https://wa.me/573003707198?text=Hola,%20deseo%20información%20sobre%20el%20alquiler%20de%20${encodeURIComponent(item.title)}`, '_blank');
                          }}>
                      Solicitar &rarr;
                    </span>
                    <span className="text-xs text-gray-400">Ver Ficha</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Modal Fotografía Ficha */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-corporate-cyan transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-[4/3] md:aspect-video rounded-xl overflow-hidden bg-white/5"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Ficha Técnica Ampliada"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}