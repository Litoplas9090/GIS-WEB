import os
import glob
import codecs

replacements = {
    'Ingenier\u01dfa': 'Ingeniería',
    'ingenier\u01dfa': 'ingeniería',
    'Ingeniera': 'Ingeniería',
    'ingeniera': 'ingeniería',
    'm\u01dfa': 'mía',
    'est\u01dfndares': 'estándares',
    'estndares': 'estándares',
    'energ\u01df\u01d8tica': 'energética',
    'energtica': 'energética',
    'Energ\u01dfa': 'Energía',
    'el\u01d8ctrica': 'eléctrica',
    'elctrica': 'eléctrica',
    'El\u01d8ctrica': 'Eléctrica',
    'el\u01d8ctricos': 'eléctricos',
    'elctricos': 'eléctricos',
    'el\u01d8ctrico': 'eléctrico',
    'elctrico': 'eléctrico',
    'mec\u01dfnica': 'mecánica',
    'mecnica': 'mecánica',
    'Mec\u01dfnica': 'Mecánica',
    'mec\u01dfnicos': 'mecánicos',
    'mecnicos': 'mecánicos',
    'electr\u00f3nica': 'electrónica',
    'electrnica': 'electrónica',
    'Electr\u00f3nica': 'Electrónica',
    'automatizaci\u00f3n': 'automatización',
    'automatizacin': 'automatización',
    'sensorizaci\u00f3n': 'sensorización',
    'comunicaci\u00f3n': 'comunicación',
    'c\u01dfmaras': 'cámaras',
    'cmaras': 'cámaras',
    'gesti\u00f3n': 'gestión',
    'gestin': 'gestión',
    'energ\u01dfas': 'energías',
    'tensi\u00f3n': 'tensión',
    'tensin': 'tensión',
    'integraci\u00f3n': 'integración',
    'integracin': 'integración',
    'Integraci\u00f3n': 'Integración',
    'm\u01df\u01e7ltiples': 'múltiples',
    'mǧltiples': 'múltiples',
    'Qui\u00e9nes': 'Quiénes',
    'compa\u00f1\u01dfa': 'compañía',
    'compaa': 'compañía',
    '\u01dfreas': 'áreas',
    'reas': 'áreas',
    'regi\u00f3n': 'región',
    'regin': 'región',
    'Misi\u00f3n': 'Misión',
    'Visi\u00f3n': 'Visión',
    'l\u01dfderes': 'líderes',
    'lderes': 'líderes',
    'garant\u01dfa': 'garantía',
    'garanta': 'garantía',
    '\u00e9xito': 'éxito',
    'tecnol\u00f3gico': 'tecnológico',
    'tecnolgico': 'tecnológico',
    'tecnolog\u01dfa': 'tecnología',
    'tecnologa': 'tecnología',
    'tecnolog\u01dfas': 'tecnologías',
    'tecnologas': 'tecnologías',
    'dise\u00f1o': 'diseño',
    'Dise\u00f1o': 'Diseño',
    'An\u01dflisis': 'Análisis',
    'Hidr\u01dfulicos': 'Hidráulicos',
    'Neum\u01dfticos': 'Neumáticos',
    't\u01d8cnico': 'técnico',
    'tcnico': 'técnico',
    'combusti\u00f3n': 'combustión',
    'combustin': 'combustión',
    'gr\u01df\u01e7as': 'grúas',
    'log\u01dfstica': 'logística',
    'logstica': 'logística',
    'ejecuci\u00f3n': 'ejecución',
    'ejecucin': 'ejecución',
    'construcci\u00f3n': 'construcción',
    'instalaci\u00f3n': 'instalación',
    'informaci\u00f3n': 'información',
    'informacin': 'información',
    'd\u01dfa': 'día',
    'da': 'día',
    'protecci\u00f3n': 'protección',
    'proteccin': 'protección',
    'optimizaci\u00f3n': 'optimización',
    'conservaci\u00f3n': 'conservación',
    'implementaci\u00f3n': 'implementación',
    'Mantenimiento de PLCs': 'Mantenimiento de PLC',
    'Mantenimiento de PLC': 'Mantenimiento de PLC',
}

for filepath in glob.glob('src/**/*.tsx', recursive=True):
    try:
        with codecs.open(filepath, 'r', encoding='utf-16-le') as f:
            content = f.read()
    except UnicodeDecodeError:
        with codecs.open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
    
    # Check if we mistakenly read utf-8 as utf-16 (it would contain lots of nulls)
    if content.count('\x00') > len(content) / 2:
        with codecs.open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            
    original = content
    for old, new in replacements.items():
        content = content.replace(old, new)
        
    # Manual un-corrupt logic for any leftover 
    # Example: Ingeniera -> Ingeniería
    content = content.replace('Ingeniera', 'Ingeniería')
    content = content.replace('ingeniera', 'ingeniería')
    content = content.replace('estndares', 'estándares')
    content = content.replace('energtica', 'energética')
    content = content.replace('elctrica', 'eléctrica')
    content = content.replace('elctricos', 'eléctricos')
    content = content.replace('mecnica', 'mecánica')
    content = content.replace('mecnicos', 'mecánicos')
    content = content.replace('electrnica', 'electrónica')
    content = content.replace('automatizacin', 'automatización')
    content = content.replace('cmaras', 'cámaras')
    content = content.replace('gestin', 'gestión')
    content = content.replace('tensin', 'tensión')
    content = content.replace('integracin', 'integración')
    content = content.replace('compaa', 'compañía')
    content = content.replace('reas', 'áreas')
    content = content.replace('regin', 'región')
    content = content.replace('lderes', 'líderes')
    content = content.replace('garanta', 'garantía')
    content = content.replace('tecnolgico', 'tecnológico')
    content = content.replace('tecnologa', 'tecnología')
    content = content.replace('tcnico', 'técnico')
    content = content.replace('combustin', 'combustión')
    content = content.replace('logstica', 'logística')
    content = content.replace('ejecucin', 'ejecución')
    content = content.replace('informacin', 'información')
    content = content.replace('da', 'día')
    content = content.replace('proteccin', 'protección')
    content = content.replace('Quines', 'Quiénes')

    if content != original or 'utf-16' in str(type(original)):
        with codecs.open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

print("Restored encodings to UTF-8")
