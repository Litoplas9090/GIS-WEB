import re
with open('src/sections/Hero.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('className="w-full h-full object-contain"', 'className="w-full h-full object-cover object-center"')
content = content.replace('image: "/real/real_img_3.webp"', 'image: "/real/talento certificado.webp"')

with open('src/sections/Hero.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated Hero")
