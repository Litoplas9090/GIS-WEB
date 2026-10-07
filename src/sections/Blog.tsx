"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const blogPosts = [
  {
    slug: "montaje-planta-electrica-industrial",
    category: "Proyectos Eléctricos",
    title: "Montaje de Planta Eléctrica para Zona Industrial",
    excerpt: "Instalación y puesta en marcha de un sistema de respaldo energético de 500kVA para garantizar la continuidad operativa de una planta de producción.",
    date: "15 Sep, 2026",
    readTime: "Proyectos"
  },
  {
    slug: "automatizacion-sistema-bombeo",
    category: "Proyectos Electrónicos",
    title: "Automatización de Sistema de Bombeo Agrícola",
    excerpt: "Implementación de control industrial y sensorización para un sistema de riego a gran escala, optimizando el consumo de agua y energía.",
    date: "28 Ago, 2026",
    readTime: "Proyectos"
  },
  {
    slug: "climatizacion-centro-comercial",
    category: "Proyectos Mecánicos",
    title: "Sistema de Climatización y Ventilación",
    excerpt: "Diseño y montaje de un sistema de aire acondicionado central y ventilación mecánica para un nuevo centro comercial en la región Caribe.",
    date: "10 Jul, 2026",
    readTime: "Proyectos"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-[#0A1118] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-corporate-cyan tracking-widest uppercase mb-3">Portafolio</h2>
            <h3 className="text-3xl md:text-5xl font-bold heading">Proyectos Destacados</h3>
          </div>
          <button className="text-corporate-cyan font-bold uppercase tracking-wide hover:text-white transition-colors flex items-center gap-2">
            Ver Todos <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <Link key={idx} href={`/proyectos/${post.slug}`} passHref>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-corporate-blue/30 rounded-2xl border border-white/5 overflow-hidden hover:border-corporate-cyan/50 transition-colors group cursor-pointer h-full flex flex-col"
              >
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-center mb-4 text-xs font-medium text-gray-400">
                    <span className="bg-corporate-cyan/10 text-corporate-cyan px-3 py-1 rounded-full">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-corporate-cyan transition-colors">{post.title}</h4>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm font-medium pt-4 border-t border-white/5">
                    <span className="text-gray-500">{post.date}</span>
                    <span className="text-corporate-cyan flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                      Ver detalles <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
