import re
with open('src/components/Footer.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    '<p className="text-xs">&copy; 2026 GIS Todos los derechos reservados. Barranquilla, Colombia.</p>',
    '<p className="text-xs mb-2">&copy; 2026 GIS Todos los derechos reservados. Barranquilla, Colombia.</p>\n        <p className="text-xs font-bold text-corporate-cyan">Desarrollado por IntegraKey</p>'
)

with open('src/components/Footer.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Added Integralkey to footer")
