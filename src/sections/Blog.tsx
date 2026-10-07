"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const blogPosts = [
  {
    id: "1",
    title: "Mantenimiento de Subestación Eléctrica",
    excerpt: "Intervención preventiva y correctiva para prolongar la vida útil de los equipos de potencia en la zona industrial.",
    date: "Octubre 2026",
    image: "/gis_electricos.jpg",
    category: "Proyecto Eléctrico"
  },
  {
    id: "2",
    title: "Montaje Sistema de Refrigeración Industrial",
    excerpt: "Diseño e implementación de soluciones de aire acondicionado y ventilación para centro logístico.",
    date: "Septiembre 2026",
    image: "/gis_mecanicos.jpg",
    category: "Proyecto Mecánico"
  },
  {
    id: "3",
    title: "Instalación de Red Contra Incendios",
    excerpt: "Diseño y montaje de sistemas de protección cumpliendo normativas de seguridad en complejo comercial.",
    date: "Agosto 2026",
    image: "/gis_infraestructura.jpg",
    category: "Integración"
  }
];

export default function Blog() {
  return (
    <section className="py-24 bg-corporate-light text-corporate-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-corporate-cyan tracking-widest uppercase mb-3">Casos de Éxito</h2>
            <h3 className="text-3xl md:text-5xl font-bold heading text-corporate-blue">Proyectos Destacados</h3>
          </div>
          <Link href="#contacto" className="inline-flex items-center text-corporate-cyan hover:text-corporate-blue transition-colors font-bold uppercase tracking-wider text-sm">
            Cotizar un Proyecto <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-corporate-blue/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-corporate-cyan text-corporate-blue text-xs font-bold uppercase tracking-wider rounded-sm shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-gray-400 text-sm mb-3 block">{post.date}</span>
                <h4 className="text-xl font-bold text-corporate-blue mb-4 group-hover:text-corporate-cyan transition-colors">{post.title}</h4>
                <p className="text-gray-600 mb-6 text-sm flex-grow">{post.excerpt}</p>
                <div className="inline-flex items-center text-corporate-blue font-semibold text-sm group-hover:text-corporate-cyan transition-colors mt-auto">
                  Leer más <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
