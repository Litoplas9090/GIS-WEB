"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Qué incluye el servicio de mantenimiento predictivo?",
    a: "Incluye diagnóstico, monitoreo de equipos mediante termografía, análisis de calidad de energía y reportes detallados para anticipar fallas y prolongar la vida útil de las instalaciones."
  },
  {
    q: "¿Cuentan con personal certificado para trabajo en alturas?",
    a: "Sí, todo nuestro personal técnico cuenta con certificaciones al día y equipos especializados para ejecutar proyectos con riesgos especiales como alturas, energías peligrosas y espacios confinados."
  },
  {
    q: "¿Ofrecen alquiler de maquinaria para proyectos externos?",
    a: "Absolutamente. Proveemos maquinaria pesada, plataformas unipersonales, andamios certificados y herramientas especializadas para la ejecución eficiente de sus proyectos."
  },
  {
    q: "¿Cómo garantizan la eficiencia energética en las instalaciones?",
    a: "Aplicamos ingeniería avanzada para el ahorro energético, optimizando recursos mediante el uso de tecnologías limpias, energías renovables y la mejora de sistemas electromecánicos."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-corporate-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-corporate-cyan tracking-widest uppercase mb-3">Preguntas Frecuentes</h2>
          <h3 className="text-3xl md:text-5xl font-bold heading text-white">Resolvemos tus dudas</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-white/10 rounded-lg overflow-hidden bg-white/5 backdrop-blur-md">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg text-white">{faq.q}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-corporate-cyan transition-transform duration-300 shrink-0 ${open === idx ? "rotate-180" : ""}`} 
                />
              </button>
              <AnimatePresence>
                {open === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-gray-300"
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
