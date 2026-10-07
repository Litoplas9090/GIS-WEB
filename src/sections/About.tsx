"use client";

import { motion } from "framer-motion";
import { Shield, Cpu, Activity, Lightbulb } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-corporate-cyan" />,
      title: "Seguridad",
      desc: "Trabajamos bajo los más altos estándares para garantizar confianza y protección."
    },
    {
      icon: <Activity className="w-8 h-8 text-corporate-cyan" />,
      title: "Eficiencia energética",
      desc: "Ingeniería aplicada al ahorro energético."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-corporate-cyan" />,
      title: "Medio ambiente",
      desc: "Promovemos la conservación mediante tecnologías sostenibles."
    },
    {
      icon: <Cpu className="w-8 h-8 text-corporate-cyan" />,
      title: "Talento certificado",
      desc: "Personal técnico calificado y certificado, apoyado por herramientas especializadas."
    }
  ];

  return (
    <section id="about" className="py-24 bg-corporate-light text-corporate-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-corporate-cyan tracking-widest uppercase mb-3">Quiénes Somos</h2>
            <h3 className="text-3xl md:text-5xl font-bold heading mb-6 leading-tight">
              Ingeniería especializada para tu industria
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              En <strong className="text-corporate-blue">GIS S.A.S.</strong>, somos una compañía dedicada a la prestación de servicios en las áreas eléctrica, electrónica, mecánica y metalmecánica. Contamos con talento humano especializado para llevar a cabo cada proyecto con la mayor eficiencia.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="border-l-2 border-corporate-cyan pl-4">
                <h4 className="text-xl font-bold text-corporate-blue mb-2">Misión</h4>
                <p className="text-sm text-gray-600">Proveer servicios de ingeniería especializados con talento humano altamente calificado, garantizando eficiencia, seguridad y sostenibilidad en cada proyecto.</p>
              </div>
              <div className="border-l-2 border-corporate-cyan pl-4">
                <h4 className="text-xl font-bold text-corporate-blue mb-2">Visión</h4>
                <p className="text-sm text-gray-600">Ser líderes en la región Caribe en la integración de soluciones de ingeniería multidisciplinarias.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((item, index) => (
              <div key={index} className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 bg-white shadow-xl border border-gray-100">
                <div className="bg-corporate-cyan/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
