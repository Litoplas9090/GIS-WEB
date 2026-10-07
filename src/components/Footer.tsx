export default function Footer() {
  return (
    <footer className="bg-[#050B14] py-12 border-t border-white/10 text-center text-gray-400">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-2xl font-bold text-white heading tracking-tighter mb-4">
          GIS <span className="text-corporate-cyan">S.A.S.</span>
        </div>
        <p className="mb-6">Ingeniería segura, eficiente y sostenible</p>
        <div className="flex justify-center gap-6 mb-8 text-sm">
          <a href="#" className="hover:text-corporate-cyan transition">Inicio</a>
          <a href="#about" className="hover:text-corporate-cyan transition">Nosotros</a>
          <a href="#services" className="hover:text-corporate-cyan transition">Servicios</a>
          <a href="/portal" className="hover:text-corporate-cyan transition">Portal Clientes</a>
        </div>
        <p className="text-xs">&copy; {new Date().getFullYear()} GIS S.A.S. Todos los derechos reservados. Barranquilla, Colombia.</p>
      </div>
    </footer>
  );
}
