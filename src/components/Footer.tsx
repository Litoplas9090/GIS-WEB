export default function Footer() {
  return (
    <footer className="bg-[#050B14] py-12 border-t border-white/10 text-center text-gray-400">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center mb-6">
          <img src="/logogis.png" alt="GIS S.A.S. Logo" className="h-48 md:h-56 w-auto object-contain drop-shadow-lg" />
        </div>
        <p className="mb-6">IngenierÃ­a segura, eficiente y sostenible.</p>
        <div className="flex justify-center gap-6 mb-8 text-sm uppercase font-bold tracking-wider">
          <a href="#" className="hover:text-corporate-cyan transition">Inicio</a>
          <a href="#about" className="hover:text-corporate-cyan transition">Nosotros</a>
          <a href="#services" className="hover:text-corporate-cyan transition">Servicios</a>
          <a href="#contacto" className="hover:text-corporate-cyan transition">Contacto</a>
        </div>
        <p className="text-xs">&copy; 2026 GIS S.A.S. Todos los derechos reservados. Barranquilla, Colombia.</p>
      </div>
    </footer>
  );
}
