import re
with open('src/sections/Services.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

new_service = """  {
    id: "diseno",
    title: "Diseño Industrial y CAD",
    image: "/real/diseno_industrial.webp",
    features: ["Modelado 3D (SolidWorks, CATIA)", "Planos 2D (AutoCAD)", "Análisis (Inventor)", "Estructuras y Soldadura", "Sistemas Hidráulicos"],
    desc: "Ingeniería de detalle y diseño especializado con los mejores software del mercado."
  },
  {
    id: "integracion","""

content = content.replace('  {\n    id: "integracion",', new_service)

with open('src/sections/Services.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated Services")
