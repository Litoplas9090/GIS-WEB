import re

with open('src/components/Navbar.tsx', 'r', encoding='utf-8') as file:
    content = file.read()

new_content = re.sub(r'\{\s*name:\s*\'Galería\',\s*href:\s*\'#galeria\'\s*\},?\n?\s*', '', content)

with open('src/components/Navbar.tsx', 'w', encoding='utf-8') as file:
    file.write(new_content)
print("Removed Gallery from Navbar")
