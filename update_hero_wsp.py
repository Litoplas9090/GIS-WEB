import re
with open('src/sections/Hero.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# I am replacing the literal href in Hero.tsx
content = re.sub(
    r'href=\{`https://wa\.me/573003707198\?text=.*?`\}',
    'href="https://wa.me/573003707198?text=Hola,%20deseo%20recibir%20información%20sobre%20los%20servicios%20de%20Grupo%20Ingeniería%20y%20Soluciones."',
    content
)

with open('src/sections/Hero.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated Hero WhatsApp")
