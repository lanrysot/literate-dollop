import os, glob, re

replacements = [
    {
        'old_client': 'Eversend',
        'new_client': 'EchoOne AI',
        'old_title': 'App UI Animation System - Making a Review Platform Feel Alive',
        'new_title': 'Agentic AI Platform - Turning Multi-Agent Actions into an Intuitive Workflow',
        'old_video': r'https://www\.youtube\.com/embed/BGMCvHMxhV8\?si=PNJ0HCKKRtuoswax',
        'new_video': 'https://www.youtube.com/embed/sg-ql8fGzgY'
    },
    {
        'old_client': 'Plivra',
        'new_client': 'Quicken',
        'old_title': 'B2B SaaS Explainer - Breaking Down a Multi-Feature Platform in 2 Minutes',
        'new_title': 'FinTech Payment - Simplifying Payments with Real-Time Financial Visibility',
        'old_video': r'https://www\.youtube\.com/embed/sL84nunOstc\?si=jbdUuZothy7k4y6Y',
        'new_video': 'https://www.youtube.com/embed/6MFHlMs1VDI'
    },
    {
        'old_client': 'Push',
        'new_client': 'Hushly',
        'old_title': 'Brand Identity in Motion - Logo Animation &amp; Brand Motion System',
        'new_title': 'Hotel Management Platform — Turning Daily Hotel Operations into One Connected Workflow',
        'old_video': r'https://www\.youtube\.com/embed/qIa23UIv9FY\?si=S-0zfMyWNtZwe8B0',
        'new_video': 'https://www.youtube.com/embed/8qqgFdPYB-8'
    }
]

files = glob.glob('*.html') + glob.glob('portfolio/*.html') + ['project-script.js', 'portfolio/project-script.js']
files = [f for f in files if os.path.exists(f)]

for file in set(files):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    for r in replacements:
        content = re.sub(f'>\s*{r["old_client"]}\s*<', f'>{r["new_client"]}<', content, flags=re.IGNORECASE)
        content = re.sub(f'client:\s*"{r["old_client"]}"', f'client: "{r["new_client"]}"', content, flags=re.IGNORECASE)
        
        content = content.replace(r["old_title"], r["new_title"])
        content = content.replace(r["old_title"].replace('&amp;', '&'), r["new_title"])
        
        content = re.sub(rf'\b{r["old_client"]}\b', r["new_client"], content, flags=re.IGNORECASE)
        content = re.sub(r["old_video"], r["new_video"], content)

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print('Update successful')
