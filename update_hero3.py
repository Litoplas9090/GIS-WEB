import re
with open('src/sections/Hero.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the image container mapping
old_code = """          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative h-full">
              <div className="absolute inset-0 bg-corporate-black/60 mix-blend-multiply z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/70 to-transparent z-10" />
              <img 
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}"""

new_code = """          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative h-full bg-corporate-black overflow-hidden">
              {/* Fondo difuminado para rellenar espacios sin recortar la imagen frontal */}
              <img 
                src={slide.image}
                alt="Fondo"
                className="absolute inset-0 w-full h-full object-cover object-center scale-110 blur-3xl opacity-50 z-0"
              />
              
              <div className="absolute inset-0 bg-corporate-black/60 mix-blend-multiply z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/70 to-transparent z-10" />
              
              {/* Imagen frontal 100% visible sin recortar ningun detalle */}
              <img 
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-contain object-center z-10"
              />
            </div>
          ))}"""

content = content.replace(old_code, new_code)

with open('src/sections/Hero.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated Hero blur background technique")
