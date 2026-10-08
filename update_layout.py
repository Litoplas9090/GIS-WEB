import re

with open('src/app/layout.tsx', 'r', encoding='utf-8') as file:
    content = file.read()

new_meta = """export const metadata: Metadata = {
  title: "GIS S.A.S. | Grupo Ingeniería y Soluciones",
  description: "Desarrollo de proyectos industriales, comerciales y residenciales bajo los más altos estándares. Ingeniería segura, eficiencia energética y talento certificado.",
  keywords: "Ingeniería industrial, Proyectos eléctricos, Proyectos mecánicos, Automatización, Energía solar, Mantenimiento industrial",
  icons: {
    icon: '/favicon.ico',
  },
};"""

new_content = re.sub(r'export const metadata: Metadata = \{.*?\};', new_meta, content, flags=re.DOTALL)

with open('src/app/layout.tsx', 'w', encoding='utf-8') as file:
    file.write(new_content)
print("Updated layout.tsx")
