from PIL import Image
img = Image.open(r'C:\Users\cdelarosa\.gemini\antigravity\brain\041789ce-784c-4122-90be-0eb25ea00eb1\integracion_ingenieria_1791479698674.jpg')
img = img.convert('RGB')
img.thumbnail((800, 800), Image.Resampling.LANCZOS)
img.save('public/real/integracion_ingenieria.webp', 'webp', quality=85)
img.close()
print('Converted integration image')

import re
with open('src/sections/Services.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('"/real/real_img_15.webp"', '"/real/integracion_ingenieria.webp"')

with open('src/sections/Services.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('Updated Services.tsx')
