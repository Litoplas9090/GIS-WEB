"use client";

import { motion } from "framer-motion";
import { Shield, Cpu, Activity, Lightbulb } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-corporate-cyan" />,
      title: "Seguridad",
      desc: "Trabajamos bajo los más altos estándares para garantizar confianza y protección en cada proyecto."
    },
    {
      icon: <Activity className="w-8 h-8 text-corporate-cyan" />,
      title: "Eficiencia energética",
      desc: "Aplicamos ingeniería enfocada en el ahorro energético y la optimización de recursos."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-corporate-cyan" />,
      title: "Medio ambiente",
      desc: "Promovemos la conservación mediante la implementación de nuevas tecnologías sostenibles."
    },
    {
      icon: <Cpu className="w-8 h-8 text-corporate-cyan" />,
      title: "Talento certificado",
      desc: "Personal técnico calificado y certificado en las diferentes áreas, apoyado por herramientas y equipos especializados."
    }
  ];

  return (
    <section id="about" className="py-24 bg-corporate-light text-corporate-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-corporate-cyan tracking-widest uppercase mb-3">Quiénes Somos</h2>
            <h3 className="text-3xl md:text-5xl font-bold heading mb-6 leading-tight text-corporate-blue">
              Ingeniería especializada para tu industria
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              En <strong className="text-corporate-blue">Grupo Ingeniería y Soluciones (GIS)</strong>, somos una compañía dedicada a la prestación de servicios en las áreas eléctrica, electrónica, mecánica y metalmecánica. Contamos con un grupo de talento humano especializado, capaz de ofrecer soluciones integradas para proyectos industriales, comerciales y residenciales en la región Caribe.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="border-l-2 border-corporate-cyan pl-4">
                <h4 className="text-xl font-bold text-corporate-blue mb-2">Misión</h4>
                <p className="text-sm text-gray-500">Proveer servicios de ingeniería orientados a la seguridad, eficiencia energética y conservación del medio ambiente.</p>
              </div>
              <div className="border-l-2 border-corporate-cyan pl-4">
                <h4 className="text-xl font-bold text-corporate-blue mb-2">Visión</h4>
                <p className="text-sm text-gray-500">Ser líderes en la región Caribe en la integración de soluciones de ingeniería con las más altas exigencias normativas.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100"
          >
            {/* Fondo estirado desenfocado para evitar espacios en blanco si la imagen no llena */}
            <img src="/real/about_gis.webp" alt="Fondo desenfocado" className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-50 scale-110" />
            
            <img src="/real/about_gis.webp" alt="Ingenieros especializados" className="absolute inset-0 w-full h-full object-contain drop-shadow-md z-10" />
            <div className="absolute inset-0 bg-corporate-blue/10 mix-blend-multiply z-20 pointer-events-none" />
          </motion.div>
          
        </div>

        <div className="mt-20 text-center mb-12">
           <h3 className="text-3xl font-bold heading text-corporate-blue mb-4">Nuestros Pilares</h3>
           <p className="text-gray-600 max-w-2xl mx-auto">La base de nuestra operación y garantía de éxito en cada uno de los proyectos que emprendemos.</p>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 shadow-xl border border-gray-100 flex flex-col items-center text-center">
                <div className="bg-corporate-cyan/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-corporate-blue">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
      </div>
    </section>
  );
}
