import re
with open('src/sections/Services.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('"/real/real_img_4.webp"', '"/real/proyectos electronico.webp"')
content = content.replace('"/real/real_img_12.webp"', '"/real/proyectos mecanico.webp"')
content = content.replace('"/real/real_img_2.webp"', '"/real/proyectos electrico.webp"')

with open('src/sections/Services.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated Services images")
