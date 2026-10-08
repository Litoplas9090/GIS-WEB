import re
with open('src/components/Navbar.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Make links fully white with drop shadow
content = content.replace(
    'text-gray-300 hover:text-corporate-cyan transition-colors text-sm font-medium uppercase tracking-wider font-bold',
    'text-white hover:text-corporate-cyan transition-colors text-sm uppercase tracking-wider font-extrabold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]'
)

# Make mobile links fully white
content = content.replace(
    'text-gray-300 hover:text-white hover:bg-white/5',
    'text-white hover:text-corporate-cyan hover:bg-white/5 font-bold'
)

# Fix logo visibility and size
content = content.replace(
    'className="h-32 md:h-48 w-auto object-contain drop-shadow-md"',
    'className="h-40 md:h-60 w-auto object-contain bg-white/80 p-3 rounded-2xl backdrop-blur-md drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"'
)

with open('src/components/Navbar.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated Navbar")
