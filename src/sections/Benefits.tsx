"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const equipment = [
  {
    title: "Trabajo en altura",
    image: "/gis_altura.webp",
    desc: "Personal con arnés de seguridad, eslingas, escaleras y andamios certificados."
  },
  {
    title: "Respaldo energético",
    image: "/gis_respaldo_energetico.webp",
    desc: "Plantas eléctricas a combustión interna de gran capacidad para asegurar continuidad."
  },
  {
    title: "Herramientas especializadas",
    image: "/gis_herramientas.webp",
    desc: "Taladros industriales, equipos de precisión y herramientas de alta gama."
  },
  {
    title: "Infraestructura",
    image: "/gis_infraestructura.webp",
    desc: "Maquinaria pesada, grúas y logística completa para la ejecución de proyectos."
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white text-corporate-blue relative overflow-hidden border-t border-gray-100">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-corporate-cyan/20 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold text-corporate-blue heading mb-6">
                    Respaldo Tecnológico y Alquiler
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl font-medium">
                    Contamos con los equipos, herramientas e infraestructura necesaria para la ejecución eficiente y segura de sus proyectos. Todo nuestro equipo cuenta con certificaciones al día.
                </p>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl">
                <img src="/gis_infraestructura.webp" alt="Maquinaria pesada" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-corporate-cyan/20 mix-blend-multiply" />
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
              className="group relative overflow-hidden rounded-2xl bg-white backdrop-blur-sm border border-gray-200 shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-corporate-blue/40 mix-blend-multiply" />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-corporate-blue mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
