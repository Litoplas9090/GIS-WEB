import re
with open('src/sections/Clients.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("grayscale hover:grayscale-0 ", "")

with open('src/sections/Clients.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated Clients.tsx logos")
