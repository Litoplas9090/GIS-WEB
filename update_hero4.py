import re
with open('src/sections/Hero.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('"/real/real_img_17.webp"', '"/real/imagen1.webp"')
content = content.replace('"/real/paneles_solares.webp"', '"/real/imagen2.webp"')
content = content.replace('"/real/talento certificado.webp"', '"/real/imagen3.webp"')

with open('src/sections/Hero.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated Hero images")
