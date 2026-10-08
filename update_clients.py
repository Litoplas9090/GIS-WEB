import os
import glob
import re

image_files = glob.glob('public/clientes/*.png') + glob.glob('public/clientes/*.jpg') + glob.glob('public/clientes/*.jpeg')
image_files = [os.path.basename(f) for f in image_files]

base_clients = []
for f in image_files:
    name = os.path.splitext(f)[0].title()
    base_clients.append(f'{{ name: "{name}", logo: "/clientes/{f}" }}')

clients_array_str = ",\n    ".join(base_clients)

with open('src/sections/Clients.tsx', 'r', encoding='utf-8') as file:
    content = file.read()

new_content = re.sub(r'const baseClients = \[.*?\];', f'const baseClients = [\n    {clients_array_str}\n  ];', content, flags=re.DOTALL)

with open('src/sections/Clients.tsx', 'w', encoding='utf-8') as file:
    file.write(new_content)
print("Updated Clients.tsx")
