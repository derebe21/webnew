import re

with open('c:/Users/DEREBE/webnew/components/sections/Hero.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Text removal replacements
content = content.replace('LOC: X-[{mousePos.x}px] Y-[{mousePos.y}px]', '')
content = content.replace('ITSEC · CYBER LABS · LIVE', '')
content = content.replace('THREAT LEVEL: LOW', '')
content = content.replace('ONLINE\n            </span>', '\n            </span>')
content = content.replace('HUD VIEW {SCENES[scene].id}/6 — {SCENES[scene].label}', '')
content = content.replace('REFRESH_RATE: 60HZ', '')
content = content.replace('<Radar className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: \'6s\' }} /> Network Topology Zero-Trust', '<Radar className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: \'6s\' }} />')
content = content.replace('ENCRYPTION ACTIVE', '')
content = content.replace('>\n                Security Traffic Monitor\n              </span>', '>\n              </span>')
content = content.replace('>\n                SOC Shield Assets\n              </span>', '>\n              </span>')
content = re.sub(r'\{\s*label:\s*\'IPS/WAF Firewall\'', '{ label: \'\'', content)
content = re.sub(r'\{\s*label:\s*\'Cloud Virtual Node\'', '{ label: \'\'', content)
content = re.sub(r'\{\s*label:\s*\'Symmetric Cryptography\'', '{ label: \'\'', content)
content = re.sub(r'\{\s*label:\s*\'Zero-Trust Gateways\'', '{ label: \'\'', content)
content = content.replace('<Globe className="w-3.5 h-3.5 text-cyan-400 animate-pulse" /> Global Cyber-Defense Infrastructure', '<Globe className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />')
content = re.sub(r'name:\s*\'[A-Z]+\'', 'name: \'\'', content)
content = re.sub(r'label:\s*\'INTELLIGENT ENDPOINTS\',\s*val:\s*\'14,925\'', 'label: \'\', val: \'\'', content)
content = re.sub(r'label:\s*\'LIVE DATAPACKETS/S\',\s*val:\s*`\$\{310 \+ \(tick % 40\)\}`', 'label: \'\', val: \'\'', content)
content = re.sub(r'label:\s*\'THREAT FILTER RATE\',\s*val:\s*\'99\.98%\'', 'label: \'\', val: \'\'', content)
content = re.sub(r'label:\s*\'CORE SYSTEM UPTIME\',\s*val:\s*\'99\.999%\'', 'label: \'\', val: \'\'', content)
content = re.sub(r'label:\s*\'PROTECTED REGIONS\',\s*val:\s*\'32 SEC\'', 'label: \'\', val: \'\'', content)

# SCENES
content = re.sub(r'\{\s*id:\s*1,\s*label:\s*\'AI & Digital Network Graphics\',\s*short:\s*\'AI Engine\'\s*\}', '{ id: 1, label: \'\', short: \'\' }', content)
content = re.sub(r'\{\s*id:\s*2,\s*label:\s*\'Futuristic Data Center Solutions\',\s*short:\s*\'Datacenter\'\s*\}', '{ id: 2, label: \'\', short: \'\' }', content)
content = re.sub(r'\{\s*id:\s*3,\s*label:\s*\'Cybersecurity Operations \(SOC\)\',\s*short:\s*\'Cyber SOC\'\s*\}', '{ id: 3, label: \'\', short: \'\' }', content)
content = re.sub(r'\{\s*id:\s*4,\s*label:\s*\'Cloud Infrastructure Visualization\',\s*short:\s*\'Cloud Node\'\s*\}', '{ id: 4, label: \'\', short: \'\' }', content)
content = re.sub(r'\{\s*id:\s*5,\s*label:\s*\'Smart Systems Automation\',\s*short:\s*\'IoT Systems\'\s*\}', '{ id: 5, label: \'\', short: \'\' }', content)
content = re.sub(r'\{\s*id:\s*6,\s*label:\s*\'Global Digital Connectivity\',\s*short:\s*\'Global Net\'\s*\}', '{ id: 6, label: \'\', short: \'\' }', content)

# Image
content = re.sub(r'<img[^>]+alt="ITSEC Technology Logo"[^>]+>', '', content)

# Hero Info
content = content.replace('ITSEC TECHNOLOGY', '')
content = content.replace('Secure Enterprise ICT', '')
content = content.replace('Enterprise ICT &amp; Cybersecurity Solutions', '')
content = content.replace('>Secure <', '><')
content = content.replace('>•<', '><')
content = content.replace('> Intelligent <', '><')
content = content.replace('>Future‑Ready<', '><')
content = content.replace('>ICT Solutions<', '><')
content = content.replace('Empowering organizations with secure enterprise infrastructure, zero-trust cybersecurity frameworks, automated smart systems, and intelligent digital transformation solutions.', '')

# Tags
content = re.sub(r'\{icon:Shield,label:\'Cybersecurity\'\}', '{icon:Shield,label:\'\'}', content)
content = re.sub(r'\{icon:Server,label:\'Infrastructure\'\}', '{icon:Server,label:\'\'}', content)
content = re.sub(r'\{icon:Cloud,label:\'Cloud Systems\'\}', '{icon:Cloud,label:\'\'}', content)
content = re.sub(r'\{icon:Cpu,label:\'AI Intelligence\'\}', '{icon:Cpu,label:\'\'}', content)
content = re.sub(r'\{icon:Globe,label:\'Connectivity\'\}', '{icon:Globe,label:\'\'}', content)
content = re.sub(r'\{icon:Lock,label:\'Zero Trust\'\}', '{icon:Lock,label:\'\'}', content)

# Fix map keys for tags
content = content.replace('.map(({icon:Icon,label})=>(', '.map(({icon:Icon,label},idx)=>(')
content = content.replace('key={label}', 'key={idx}')

# CTA
content = content.replace('Request Consultation\n                <ArrowRight', '\n                <ArrowRight')
content = content.replace('Explore Services\n                <ArrowRight', '\n                <ArrowRight')

# Trust Strip
content = content.replace('[\'#1D4ED8\',\'GOV\'],[\'#0E7490\',\'FIN\'],[\'#1E40AF\',\'HLT\'],[\'#312E81\',\'TEL\']', '[\'#1D4ED8\',\'\'],[\'#0E7490\',\'\'],[\'#1E40AF\',\'\'],[\'#312E81\',\'\']')
content = content.replace('{label}', '')
content = content.replace('Trusted by <span className="text-white font-semibold">government, finance,</span><br/>\n                <span className="text-white font-semibold">healthcare</span> &amp; telecom sectors', '<span className="text-white font-semibold"></span><br/>\n                <span className="text-white font-semibold"></span>')

# Scroll
content = content.replace('>SCROLL<', '><')

with open('c:/Users/DEREBE/webnew/components/sections/Hero.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Hero.tsx processed successfully.")
