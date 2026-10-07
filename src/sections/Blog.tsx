"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const blogPosts = [
  {
    slug: "cctv-inteligencia-artificial",
    category: "Seguridad Tecnológica",
    title: "El futuro de la videovigilancia corporativa con Inteligencia Artificial",
    excerpt: "Las cámaras de seguridad han dejado de ser dispositivos pasivos. Conoce cómo el reconocimiento facial y los análisis biométricos previenen intrusiones antes de que ocurran.",
    date: "05 Oct, 2026",
    readTime: "5 min"
  },
  {
    slug: "automatizacion-propiedad-horizontal",
    category: "Domótica y P.H.",
    title: "Automatización en Propiedad Horizontal: Reduciendo costos operativos",
    excerpt: "Por qué la integración de sistemas de iluminación inteligente y controles de acceso vehiculares están ahorrando hasta un 30% en las expensas mensuales de los grandes edificios.",
    date: "28 Sep, 2026",
    readTime: "4 min"
  },
  {
    slug: "erp-escalabilidad-empresarial",
    category: "Desarrollo de Software",
    title: "¿Por qué un ERP a la medida es la clave para la escalabilidad?",
    excerpt: "Los software empaquetados obligan a tu empresa a adaptarse a ellos. Descubre cómo una plataforma diseñada a la medida acelera el crecimiento y centraliza tus bases de datos.",
    date: "15 Sep, 2026",
    readTime: "6 min"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-[#0A1118] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-corporate-cyan tracking-widest uppercase mb-3">Blog y Actualidad</h2>
            <h3 className="text-3xl md:text-5xl font-bold heading">Insights Tecnológicos</h3>
          </div>
          <button className="text-corporate-cyan font-bold uppercase tracking-wide hover:text-white transition-colors flex items-center gap-2">
            Ver Todos <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <Link key={idx} href={`/blog/${post.slug}`} passHref>
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
                    <span>{post.readTime} de lectura</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-corporate-cyan transition-colors">{post.title}</h4>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm font-medium pt-4 border-t border-white/5">
                    <span className="text-gray-500">{post.date}</span>
                    <span className="text-corporate-cyan flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                      Leer artículo <ArrowRight size={16} />
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
