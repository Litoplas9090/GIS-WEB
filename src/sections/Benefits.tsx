"use client";

import { motion } from "framer-motion";

const benefits = [
  { value: "99%", label: "Atención personalizada" },
  { value: "<2h", label: "Tiempo de respuesta rápida" },
  { value: "360°", label: "Cobertura integral" },
  { value: "100%", label: "Tecnología de última generación" }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-corporate-blue relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-corporate-cyan/20 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white heading mb-6">
            Por qué elegir IntegralKey
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-medium">
            Nuestro compromiso es brindar un servicio excepcional, implementando soluciones inteligentes con resultados medibles.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {benefits.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10"
            >
              <div className="text-4xl md:text-6xl font-black text-corporate-cyan mb-2 font-heading">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-bold text-gray-300 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
