"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
  nombre: z.string().min(2, "El nombre es muy corto"),
  empresa: z.string().optional(),
  email: z.string().email("Correo inválido"),
  telefono: z.string().min(7, "Teléfono inválido"),
  servicio: z.string().min(1, "Seleccione un servicio"),
  mensaje: z.string().min(10, "El mensaje es muy corto"),
});

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const message = `Hola, soy ${data.nombre} ${data.empresa ? `de la empresa ${data.empresa}` : ""}.\n\nMe interesa el servicio de: ${data.servicio}\n\nMensaje: ${data.mensaje}\n\nMi correo es: ${data.email}`;
    const whatsappUrl = `https://wa.me/573003707198?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contacto" className="py-24 bg-corporate-black text-white relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888081696-6e4266fb85f3?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-corporate-cyan tracking-widest uppercase mb-3">Contacto</h2>
          <h3 className="text-3xl md:text-5xl font-bold heading mb-6">Trabajemos Juntos</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            ¿Tiene un proyecto en mente? Nuestro equipo de ingenieros está listo para brindarle la mejor solución.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="bg-corporate-cyan/10 p-4 rounded-xl">
                <MapPin className="text-corporate-cyan w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Ubicación Principal</h4>
                <p className="text-gray-400">Barranquilla, Colombia<br/>Atención a toda la región Caribe</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-corporate-cyan/10 p-4 rounded-xl">
                <Phone className="text-corporate-cyan w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Llámanos</h4>
                <p className="text-gray-400">+57 300 370 7198<br/>+57 300 187 8739</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-corporate-cyan/10 p-4 rounded-xl">
                <Mail className="text-corporate-cyan w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Correo Electrónico</h4>
                <p className="text-gray-400">proyectos@gissas.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-corporate-cyan/10 p-4 rounded-xl">
                <Clock className="text-corporate-cyan w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Horario de Atención</h4>
                <p className="text-gray-400">Lunes a Viernes: 8:00 AM - 6:00 PM<br/>Sábados: 8:00 AM - 1:00 PM</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#050B14] p-8 rounded-2xl border border-white/10 shadow-2xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nombre *</label>
                  <input {...register("nombre")} className="w-full bg-[#021d38] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-corporate-cyan transition-colors" />
                  {errors.nombre && <span className="text-red-400 text-xs mt-1">{errors.nombre.message}</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Empresa</label>
                  <input {...register("empresa")} className="w-full bg-[#021d38] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-corporate-cyan transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                  <input {...register("email")} type="email" className="w-full bg-[#021d38] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-corporate-cyan transition-colors" />
                  {errors.email && <span className="text-red-400 text-xs mt-1">{errors.email.message}</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Teléfono *</label>
                  <input {...register("telefono")} className="w-full bg-[#021d38] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-corporate-cyan transition-colors" />
                  {errors.telefono && <span className="text-red-400 text-xs mt-1">{errors.telefono.message}</span>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Servicio de Interés *</label>
                <select {...register("servicio")} className="w-full bg-[#021d38] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-corporate-cyan transition-colors">
                  <option value="">Seleccione un servicio</option>
                  <option value="Proyectos Electrónicos">Proyectos Electrónicos</option>
                  <option value="Proyectos Mecánicos">Proyectos Mecánicos</option>
                  <option value="Proyectos Eléctricos">Proyectos Eléctricos</option>
                  <option value="Integración de Proyectos">Integración de Proyectos</option>
                  <option value="Alquiler de Maquinaria">Alquiler de Maquinaria</option>
                </select>
                {errors.servicio && <span className="text-red-400 text-xs mt-1">{errors.servicio.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Mensaje *</label>
                <textarea {...register("mensaje")} rows={4} className="w-full bg-[#021d38] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-corporate-cyan transition-colors"></textarea>
                {errors.mensaje && <span className="text-red-400 text-xs mt-1">{errors.mensaje.message}</span>}
              </div>

              <button type="submit" className="w-full bg-corporate-cyan text-corporate-blue font-bold py-4 rounded-lg hover:bg-white hover:text-corporate-blue transition-colors duration-300">
                Enviar Mensaje por WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}