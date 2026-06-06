import os
import glob
import re

directories_to_scan = [
    'app/**/*.tsx', 'app/**/*.css',
    'components/**/*.tsx', 'components/**/*.ts',
    'lib/**/*.ts',
    'tailwind.config.ts'
]

files = []
for pattern in directories_to_scan:
    files.extend(glob.glob(pattern, recursive=True))

replacements = {
    'insa-primary': 'itsec-primary',
    'insa-ink': 'itsec-ink',
    'insa-dark': 'itsec-dark',
    'insa-muted': 'itsec-muted',
    'INSA': 'ITSEC',
    'insa': 'itsec'
}

for file_path in set(files):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    original = content
    
    # Precise replacements for CSS vars and tailwind classes
    content = content.replace('insa-', 'itsec-')
    content = content.replace('--insa', '--itsec')
    
    # Case-sensitive text replacements
    content = content.replace('INSA', 'ITSEC')
    content = content.replace('insa ', 'itsec ')
    content = content.replace(' insa ', ' itsec ')
    content = content.replace('insa.gov.et', 'itsectech.com')

    if content != original:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Cleaned {file_path}")

print("Global cleanup complete.")
