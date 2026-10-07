"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Qué incluye el servicio de administración de propiedad horizontal?",
    a: "Incluye gestión administrativa, logística, supervisión operativa, atención a residentes, coordinación de proveedores y gestión documental completa."
  },
  {
    q: "¿Las soluciones de domótica se pueden instalar en casas ya construidas?",
    a: "Sí, utilizamos tecnologías inalámbricas avanzadas que permiten automatizar espacios sin necesidad de realizar obras civiles complejas."
  },
  {
    q: "¿Desarrollan software a la medida para cualquier tipo de industria?",
    a: "Absolutamente. Diseñamos ERP, CRM y sistemas personalizados adaptados a los procesos específicos de tu empresa para maximizar la eficiencia."
  },
  {
    q: "¿Ofrecen soporte técnico para los sistemas de seguridad instalados?",
    a: "Sí, contamos con un equipo técnico especializado que brinda soporte, mantenimiento preventivo y correctivo para todos nuestros sistemas."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-corporate-blue text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-corporate-cyan tracking-widest uppercase mb-3">Preguntas Frecuentes</h2>
          <h3 className="text-3xl md:text-5xl font-bold heading">Resolvemos tus dudas</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-white/10 rounded-lg overflow-hidden bg-white/5">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-corporate-cyan transition-transform duration-300 ${open === idx ? "rotate-180" : ""}`} 
                />
              </button>
              <AnimatePresence>
                {open === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-gray-400"
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
