import re
with open('src/sections/Hero.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace EFICIENCIA ENERGETICA slide image. Right now it uses real_img_2.webp or similar.
# In my previous code, it was:
# { title: "EFICIENCIA ENERGÉTICA", subtitle: "Soluciones sostenibles...", image: "/real/real_img_2.webp" }
content = re.sub(r'image:\s*"/real/real_img_2.webp"', 'image: "/real/paneles_solares.webp"', content)

with open('src/sections/Hero.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated Hero with panels")
