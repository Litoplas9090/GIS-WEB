"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "electronicos",
    title: "Proyectos Electrónicos",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80",
    features: ["Automatización y control industrial", "Instrumentación y sensorización", "Sistemas de comunicación y redes", "Seguridad electrónica", "Mantenimiento de equipos"],
    desc: "Sistemas avanzados y automatización para optimizar la producción."
  },
  {
    id: "mecanicos",
    title: "Proyectos Mecánicos",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
    features: ["Montaje de sistemas mecánicos", "Ventilación y climatización", "Red contra incendio", "Plantas eléctricas a combustión", "Sistemas hidráulicos y neumáticos"],
    desc: "Instalación y mantenimiento de maquinaria y sistemas mecánicos."
  },
  {
    id: "electricos",
    title: "Proyectos Eléctricos",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80",
    features: ["Montaje en baja y media tensión", "Mantenimiento predictivo", "Gestión energética y renovables", "Sistemas de bombeo"],
    desc: "Soluciones eléctricas eficientes y seguras para tu industria."
  },
  {
    id: "integracion",
    title: "Integración de Proyectos",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    features: ["Eléctrica", "Mecánica", "Metalmecánica", "Electrónica"],
    desc: "Desarrollamos soluciones completas integrando múltiples disciplinas."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#050B14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-corporate-cyan tracking-widest uppercase mb-3">Portafolio de Soluciones</h2>
          <h3 className="text-3xl md:text-5xl font-bold heading">Nuestras Áreas de Experiencia</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-corporate-blue/50 border border-white/5 flex flex-col sm:flex-row"
            >
              <div className="relative h-64 sm:h-auto sm:w-2/5 overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-corporate-blue/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                <Image
                  src={srv.image}
                  alt={srv.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="p-8 sm:w-3/5 flex flex-col justify-center">
                <h4 className="text-2xl font-bold mb-4 group-hover:text-corporate-cyan transition-colors">{srv.title}</h4>
                <p className="text-gray-400 mb-6 text-sm">{srv.desc}</p>
                <ul className="space-y-2 mb-8">
                  {srv.features.map((feat, i) => (
                    <li key={i} className="flex items-center text-xs text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-corporate-cyan mr-3 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contacto"
                  className="inline-flex items-center text-corporate-cyan font-semibold text-sm uppercase tracking-wider hover:text-white transition-colors"
                >
                  Solicitar Cotización &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
