"use client";
import { motion } from "framer-motion";

export default function Clients() {
  // Los duplicamos varias veces para que el scroll infinito se vea sin huecos
  const baseClients = [
    { name: "Billares Del Caribe", logo: "/clientes/billares del caribe.png" },
    { name: "Bmonte", logo: "/clientes/bmonte.png" },
    { name: "Chilman", logo: "/clientes/chilman.png" },
    { name: "Datecsa", logo: "/clientes/datecsa.png" },
    { name: "Enermaq", logo: "/clientes/enermaq.png" },
    { name: "Grupo Nutresa", logo: "/clientes/grupo nutresa.png" },
    { name: "Litoplas", logo: "/clientes/litoplas.png" },
    { name: "Metalmecanica Poveda", logo: "/clientes/metalmecanica poveda.png" },
    { name: "Muebles Y Diseños Rf", logo: "/clientes/muebles y diseños rf.png" },
    { name: "Polyrec", logo: "/clientes/polyrec.png" },
    { name: "Termicom", logo: "/clientes/termicom.png" },
    { name: "Ventures", logo: "/clientes/ventures.png" }
  ];
  
  const clients = [...baseClients, ...baseClients, ...baseClients, ...baseClients];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-sm font-bold text-corporate-cyan tracking-widest uppercase mb-3">Confianza</h2>
        <h3 className="text-3xl md:text-4xl font-bold heading text-corporate-blue">
          Estos son algunos de nuestros clientes
        </h3>
      </div>
      
      <div className="relative w-full flex items-center">
        <div className="absolute left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="flex w-max animate-[scroll_30s_linear_infinite]">
          {clients.map((client, index) => (
            <div key={index} className="mx-8 flex items-center justify-center w-48 h-24 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
              <img src={client.logo} alt={client.name} className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
