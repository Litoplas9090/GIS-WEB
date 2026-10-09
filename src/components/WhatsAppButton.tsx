"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/573003707198?text=Hola,%20deseo%20recibir%20información%20sobre%20los%20servicios%20de%20Grupo%20Ingeniería%20y%20Soluciones."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center hover:bg-[#128C7E] transition-colors"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} />
    </motion.a>
  );
}
