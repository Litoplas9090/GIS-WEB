import re
with open('src/sections/About.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'src="https://images.unsplash.com/photo-[^"]+"', 'src="/real/about_gis.webp"', content)

with open('src/sections/About.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated About.tsx image")
