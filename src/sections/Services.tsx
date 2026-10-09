"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const services = [
  {
    id: "electronicos",
    title: "Proyectos Electrónicos",
    image: "/real/proyectos electronico.webp",
    features: ["Automatización y control industrial", "Instrumentación y sensorización", "Sistemas de comunicación y redes", "Seguridad electrónica y cámaras", "Mantenimiento de PLC"],
    desc: "Sistemas avanzados con cámaras, sensores y automatización para control industrial."
  },
  {
    id: "mecanicos",
    title: "Proyectos Mecánicos",
    image: "/real/proyectos mecanico.webp",
    features: ["Mecánica industrial pesada", "Mantenimiento de rodamientos", "Motores de combustión interna", "Ventilación y climatización", "Sistemas hidráulicos y neumáticos"],
    desc: "Mantenimiento profundo de motores, rodamientos y sistemas de mecánica industrial."
  },
  {
    id: "electricos",
    title: "Proyectos Eléctricos",
    image: "/real/proyectos electrico.webp",
    features: ["Montaje de tableros eléctricos", "Mantenimiento de subestaciones", "Gestión de energías renovables", "Líneas de media y baja tensión"],
    desc: "Montaje, mantenimiento de tableros industriales y soluciones en energías renovables."
  },
  {
    id: "diseno",
    title: "Diseño Industrial y CAD",
    image: "/real/diseno_industrial.webp",
    features: ["Modelado 3D (SolidWorks, CATIA)", "Planos 2D (AutoCAD)", "Análisis (Inventor)", "Estructuras y Soldadura", "Sistemas Hidráulicos"],
    desc: "Ingeniería de detalle y diseño especializado con los mejores software del mercado."
  },
  {
    id: "integracion",
    title: "Integración de Proyectos",
    image: "/real/integracion_ingenieria.webp",
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
                  className={`transform group-hover:scale-110 transition-transform duration-700 ease-in-out ${srv.id === 'diseno' ? 'object-contain p-6 bg-gray-100' : 'object-cover'}`}
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