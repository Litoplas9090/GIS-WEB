"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

const images = Array.from({ length: 30 }, (_, i) => `/real/real_img_${i + 1}.webp`);
const videos = ["/real/real_vid_1.mp4", "/real/real_vid_2.mp4"];

export default function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-24 bg-corporate-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-corporate-cyan tracking-widest uppercase mb-3">
            Nuestro Trabajo
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold heading text-corporate-blue">
            Galería de Proyectos
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explora nuestro portafolio de proyectos reales en terreno, demostrando la calidad y profesionalismo de GIS S.A.S. en cada disciplina.
          </p>
        </div>

        {/* Videos Section */}
        <div className="mb-16">
          <h4 className="text-xl font-bold text-corporate-blue mb-6 border-b pb-2">Videos en Terreno</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((vid, idx) => (
              <div key={idx} className="relative rounded-2xl overflow-hidden shadow-xl bg-corporate-black aspect-video">
                <video 
                  src={vid} 
                  controls 
                  className="w-full h-full object-contain"
                  preload="metadata"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Images Grid */}
        <div>
          <h4 className="text-xl font-bold text-corporate-blue mb-6 border-b pb-2">Fotografías</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (idx % 10) * 0.05 }}
                className="relative aspect-square cursor-pointer rounded-lg overflow-hidden group shadow-md"
                onClick={() => setSelectedMedia(img)}
              >
                <div className="absolute inset-0 bg-corporate-blue/20 group-hover:bg-transparent transition-colors z-10" />
                <Image
                  src={img}
                  alt={`Proyecto GIS ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedMedia(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-corporate-cyan transition-colors z-50"
              onClick={() => setSelectedMedia(null)}
            >
              <X size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-square md:aspect-video rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedMedia}
                alt="Vista ampliada"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
