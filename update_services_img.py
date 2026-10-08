import re
with open('src/sections/Services.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# I will replace the image rendering part
old_img_code = """                <Image
                  src={srv.image}
                  alt={srv.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />"""

new_img_code = """                <Image
                  src={srv.image}
                  alt={srv.title}
                  fill
                  className={`transform group-hover:scale-110 transition-transform duration-700 ease-in-out ${srv.id === 'diseno' ? 'object-contain p-6 bg-gray-100' : 'object-cover'}`}
                />"""

content = content.replace(old_img_code, new_img_code)

with open('src/sections/Services.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated Services image class")
