import re
with open('src/components/Footer.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix GIS logo visibility
content = content.replace(
    'className="h-48 md:h-56 w-auto object-contain drop-shadow-lg"',
    'className="h-48 md:h-56 w-auto object-contain bg-white/80 p-4 rounded-2xl drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"'
)

# Add IntegralKey logo
content = content.replace(
    '<p className="text-xs font-bold text-corporate-cyan">Desarrollado por IntegraKey</p>',
    """<div className="flex flex-col items-center justify-center gap-2 mt-4">
          <p className="text-xs font-bold text-gray-500">Desarrollado por</p>
          <img src="/integralkey_logo.png" alt="IntegralKey Logo" className="h-8 object-contain" />
        </div>"""
)

with open('src/components/Footer.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated Footer")
