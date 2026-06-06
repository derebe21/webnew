import glob
import re

files_to_update = glob.glob('components/sections/*.tsx')

for file_path in files_to_update:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    
    # Backgrounds
    content = content.replace('bg-[#0a192f]', 'bg-insa-ink')
    content = content.replace('bg-[#020611]', 'bg-insa-ink')
    content = content.replace('bg-[#112240]', 'bg-insa-ink')
    content = content.replace("backgroundColor: '#0a192f'", "backgroundColor: 'rgb(var(--insa-ink))'")
    content = content.replace("backgroundColor: '#020611'", "backgroundColor: 'rgb(var(--insa-ink))'")
    content = content.replace("fill: '#0a192f'", "fill: 'rgb(var(--insa-ink))'")

    # Gradients
    content = content.replace('from-[#0a192f]', 'from-insa-ink')
    content = content.replace('from-[#112240]', 'from-insa-ink')
    content = content.replace('to-[#0a192f]', 'to-insa-ink')
    content = content.replace('via-[#0a192f]', 'via-insa-ink')
    content = content.replace('from-cyan-900/20', 'from-insa-primary/20')
    content = content.replace('from-cyan-900/30', 'from-insa-primary/30')
    content = content.replace('from-cyan-900/40', 'from-insa-primary/40')
    content = content.replace('to-cyan-900/20', 'to-insa-primary/20')
    content = content.replace('from-cyan-500/20', 'from-insa-primary/20')
    
    # Text colors
    content = content.replace('text-cyan-400', 'text-insa-primary')
    content = content.replace('text-cyan-500', 'text-insa-primary')
    content = content.replace('text-blue-500', 'text-insa-primary')
    content = content.replace('text-blue-400', 'text-insa-primary')
    content = content.replace('text-[#14aeb4]', 'text-insa-primary')

    # Border colors
    content = content.replace('border-cyan-500/30', 'border-insa-primary/30')
    content = content.replace('border-cyan-500/50', 'border-insa-primary/50')
    content = content.replace('border-cyan-400/30', 'border-insa-primary/30')
    content = content.replace('border-cyan-400/50', 'border-insa-primary/50')
    content = content.replace('border-blue-500/30', 'border-insa-primary/30')
    content = content.replace('border-[#1b75d6]', 'border-insa-primary')

    # Background colors
    content = content.replace('bg-cyan-500', 'bg-insa-primary')
    content = content.replace('bg-cyan-400', 'bg-insa-primary')
    content = content.replace('bg-[#1b75d6]', 'bg-insa-primary')
    content = content.replace('hover:bg-[#1b75d6]', 'hover:bg-insa-primary')
    content = content.replace('hover:bg-[#145cb0]', 'hover:bg-insa-dark')
    content = content.replace('hover:bg-cyan-500/20', 'hover:bg-insa-primary/20')
    content = content.replace('bg-cyan-500/10', 'bg-insa-primary/10')
    content = content.replace('bg-cyan-500/20', 'bg-insa-primary/20')
    content = content.replace('bg-blue-500/10', 'bg-insa-primary/10')
    content = content.replace('bg-blue-500/20', 'bg-insa-primary/20')

    # Gradients specifically for buttons or borders
    content = content.replace('from-[#1b75d6]', 'from-insa-primary')
    content = content.replace('to-[#0ea5e9]', 'to-insa-dark')

    # Shadows
    content = re.sub(r'rgba\(0,\s*240,\s*255', 'rgba(var(--insa-primary)', content)
    content = re.sub(r'rgba\(0,\s*120,\s*255', 'rgba(var(--insa-primary)', content)
    content = re.sub(r'rgba\(0,\s*200,\s*255', 'rgba(var(--insa-primary)', content)
    content = re.sub(r'rgba\(37,\s*99,\s*235', 'rgba(var(--insa-primary)', content)
    content = re.sub(r'rgba\(27,\s*117,\s*214', 'rgba(var(--insa-primary)', content)

    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file_path}")

print("INSA theme applied successfully.")
