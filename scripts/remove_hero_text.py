import re

with open('C:/Users/DEREBE/itsec-latest-fresh/components/sections/Hero.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# We want to replace the CENTERED CONTENT div's contents with empty space or just remove it entirely.
# Let's target everything from {/* ── CENTERED CONTENT ── */} up to {/* ── SCROLL INDICATOR ── */}
new_content = re.sub(
    r'\{\/\* ── CENTERED CONTENT ── \*\/\}.*?(?=\{\/\* ── SCROLL INDICATOR ── \*\/\})',
    '<!-- CENTERED CONTENT REMOVED FOR CLEAN BACKGROUND -->\n      ',
    content,
    flags=re.DOTALL
)

with open('C:/Users/DEREBE/itsec-latest-fresh/components/sections/Hero.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Text removed from Hero section successfully.")
