import re
with open('src/sections/About.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

old_img_block = """          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img src="/real/about_gis.webp" alt="Ingenieros especializados" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-corporate-blue/20 mix-blend-multiply" />
          </motion.div>"""

new_img_block = """          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100"
          >
            {/* Fondo estirado desenfocado para evitar espacios en blanco si la imagen no llena */}
            <img src="/real/about_gis.webp" alt="Fondo desenfocado" className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-50 scale-110" />
            
            <img src="/real/about_gis.webp" alt="Ingenieros especializados" className="absolute inset-0 w-full h-full object-contain drop-shadow-md z-10" />
            <div className="absolute inset-0 bg-corporate-blue/10 mix-blend-multiply z-20 pointer-events-none" />
          </motion.div>"""

content = content.replace(old_img_block, new_img_block)
with open('src/sections/About.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated About.tsx image block")
