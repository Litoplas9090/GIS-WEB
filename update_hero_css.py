import re
with open('src/sections/Hero.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('w-full h-full object-cover', 'w-full h-full object-contain')

with open('src/sections/Hero.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated Hero styles")
