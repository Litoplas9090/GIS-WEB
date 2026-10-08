import re
with open('src/sections/Hero.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Change the h1 span style (it was text-gray-400 for the last word)
content = content.replace(
    'className={i === arr.length - 1 ? "text-gray-400" : ""}',
    'className=""'
)

# Change the paragraph style (it was text-gray-300)
content = content.replace(
    'className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl font-light"',
    'className="text-xl md:text-2xl text-white mb-10 max-w-2xl font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"'
)

with open('src/sections/Hero.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated Hero text colors")
