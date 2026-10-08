import re
with open('src/sections/Benefits.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("GIS S.A.S.", "GIS")

with open('src/sections/Benefits.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Removed SAS from Benefits")
