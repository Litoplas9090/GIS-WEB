import os
import glob
import re

for filepath in glob.glob('src/**/*.tsx', recursive=True):
    with open(filepath, 'rb') as f:
        content = f.read()
    
    # Decodificar tratando de saltar errores
    text = content.decode('utf-8', errors='replace')
    
    # Reemplazos finales de palabras comunes rotas
    text = text.replace('Ingeniera', 'Ingeniería')
    text = text.replace('ingeniera', 'ingeniería')
    text = text.replace('energtica', 'energética')
    text = text.replace('Energa', 'Energía')
    text = text.replace('elctrica', 'eléctrica')
    text = text.replace('elctricos', 'eléctricos')
    text = text.replace('mecnica', 'mecánica')
    text = text.replace('mecnicos', 'mecánicos')
    text = text.replace('electrnica', 'electrónica')
    text = text.replace('automatizacin', 'automatización')
    text = text.replace('cmaras', 'cámaras')
    text = text.replace('gestin', 'gestión')
    text = text.replace('tensin', 'tensión')
    text = text.replace('integracin', 'integración')
    text = text.replace('compaa', 'compañía')
    text = text.replace('compaa', 'compañía')
    text = text.replace('reas', 'áreas')
    text = text.replace('regin', 'región')
    text = text.replace('lderes', 'líderes')
    text = text.replace('garanta', 'garantía')
    text = text.replace('tecnolgico', 'tecnológico')
    text = text.replace('tecnologa', 'tecnología')
    text = text.replace('tcnico', 'técnico')
    text = text.replace('combustin', 'combustión')
    text = text.replace('logstica', 'logística')
    text = text.replace('ejecucin', 'ejecución')
    text = text.replace('informacin', 'información')
    text = text.replace('da', 'día')
    text = text.replace('proteccin', 'protección')
    text = text.replace('Quines', 'Quiénes')
    text = text.replace('ms', 'más')
    text = text.replace('estndares', 'estándares')
    text = text.replace('diseo', 'diseño')
    text = text.replace('xito', 'éxito')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(text)

print("Applied strict replacement.")
