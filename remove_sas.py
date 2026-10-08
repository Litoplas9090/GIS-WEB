import glob
import re

files = glob.glob('src/**/*.tsx', recursive=True)

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Reemplazar " S.A.S." con nada
    content = content.replace(" S.A.S.", "")
    content = content.replace(" S.A.S", "")
    content = content.replace("S.A.S.", "")
    content = content.replace("S.A.S", "")
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Removed S.A.S")
