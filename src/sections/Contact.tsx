"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const formSchema = z.object({
  nombre: z.string().min(2, "El nombre es requerido"),
  empresa: z.string().optional(),
  correo: z.string().email("Correo electrónico inválido"),
  telefono: z.string().min(7, "Teléfono inválido"),
  servicio: z.string().min(1, "Seleccione un servicio"),
  mensaje: z.string().min(10, "El mensaje es muy corto")
});

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const message = `Hola, mi nombre es ${data.nombre} ${data.empresa ? `de la empresa ${data.empresa}` : ''}.
Me interesa el servicio de: ${data.servicio}.
Mensaje: ${data.mensaje}

Contacto:
Tel: ${data.telefono}
Correo: ${data.correo}`;
    
    const whatsappUrl = `https://wa.me/573003707198?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contacto" className="py-24 bg-corporate-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-sm font-bold text-corporate-cyan tracking-widest uppercase mb-3">Contacto</h2>
            <h3 className="text-3xl md:text-5xl font-bold heading mb-6 text-white">Iniciemos tu próximo proyecto</h3>
            <p className="text-gray-300 mb-10 text-lg">
              Déjanos tus datos o contáctanos directamente. Estamos listos para brindarte la mejor solución en ingeniería.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-corporate-cyan/10 flex items-center justify-center mr-4 shrink-0">
                  <MapPin className="text-corporate-cyan" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Ubicación</h4>
                  <p className="text-gray-300">Barranquilla, Colombia</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-corporate-cyan/10 flex items-center justify-center mr-4 shrink-0">
                  <Phone className="text-corporate-cyan" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Teléfonos / WhatsApp</h4>
                  <p className="text-gray-300">3003707198 - 3001878739 - 3015768376</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-corporate-cyan/10 flex items-center justify-center mr-4 shrink-0">
                  <Mail className="text-corporate-cyan" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Correos Electrónicos</h4>
                  <p className="text-gray-300">gerencia@ingenieriagis.com</p>
                  <p className="text-gray-300">ventas@ingenieriagis.com</p>
                  <p className="text-gray-300">soporte@ingenieriagis.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-corporate-cyan/10 flex items-center justify-center mr-4 shrink-0">
                  <Instagram className="text-corporate-cyan" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Instagram</h4>
                  <a href="https://www.instagram.com/ingenieriasgis?stkn=MTZvZDJrNnBlcnNpMQ==" target="_blank" rel="noopener noreferrer" className="text-corporate-cyan hover:underline">
                    @ingenieriasgis
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl glass-dark">
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
                  <label className="block text-sm font-medium text-gray-300 mb-2">Correo *</label>
                  <input type="email" {...register("correo")} className="w-full bg-[#021d38] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-corporate-cyan transition-colors" />
                  {errors.correo && <span className="text-red-400 text-xs mt-1">{errors.correo.message}</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Teléfono *</label>
                  <input type="tel" {...register("telefono")} className="w-full bg-[#021d38] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-corporate-cyan transition-colors" />
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
          </div>
        </div>
      </div>
    </section>
  );
}
