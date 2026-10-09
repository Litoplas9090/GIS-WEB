export default function Footer() {
  return (
    <footer className="bg-[#050B14] py-12 border-t border-white/10 text-center text-gray-400">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center mb-6">
          <img src="/logogis.png" alt="GIS Logo" className="h-32 md:h-48 w-auto object-contain bg-white p-2 rounded-xl drop-shadow-md" />
        </div>
        <p className="mb-6">Ingeniería segura, eficiente y sostenible.</p>
        <div className="flex justify-center gap-6 mb-8 text-sm uppercase font-bold tracking-wider">
          <a href="#" className="hover:text-corporate-cyan transition">Inicio</a>
          <a href="#about" className="hover:text-corporate-cyan transition">Nosotros</a>
          <a href="#services" className="hover:text-corporate-cyan transition">Servicios</a>
          <a href="#contacto" className="hover:text-corporate-cyan transition">Contacto</a>
        </div>
        <p className="text-xs mb-2">&copy; 2026 GIS Todos los derechos reservados. Barranquilla, Colombia.</p>
        <div className="flex flex-col itemás-center justify-center gap-2 mt-4">
          <p className="text-xs font-bold text-gray-500">Desarrollado por</p>
          <img src="/integralkey_logo.png" alt="IntegralKey Logo" className="h-8 object-contain" />
        </div>
      </div>
    </footer>
  );
}