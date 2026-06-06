import re

with open('C:/Users/DEREBE/itsec-latest-fresh/components/sections/Hero.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add null checks for ctx inside draw() methods of Hexagon and Threat
content = content.replace(
    'draw() {\n        ctx.save();', 
    'draw() {\n        if (!ctx) return;\n        ctx.save();'
)
content = content.replace(
    'draw() {\n        if (!this.active) return;\n        ctx.beginPath();', 
    'draw() {\n        if (!this.active || !ctx) return;\n        ctx.beginPath();'
)

with open('C:/Users/DEREBE/itsec-latest-fresh/components/sections/Hero.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("TypeScript null checks added successfully.")
