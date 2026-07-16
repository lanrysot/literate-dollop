$sectionsText = @"
          sections: [
            { label: 'Project Overview', text: 'Create a 90-second product launch video introducing Revizze''s AI-powered project management platform. The video will be used on the homepage, in paid LinkedIn campaigns, and by the sales team during product demos.' },
            { label: 'The Brief', text: 'Revizze was preparing for a new product launch targeting operations managers at growing companies. The goal was to clearly communicate the platform''s value in under 90 seconds while positioning it as a faster, smarter alternative to manual project management tools. The video needed to work across multiple channels without requiring different edits.' },
            { label: 'Research', text: 'I spent time understanding the product from the perspective of a first-time user, mapping the onboarding flow, key features, and most common pain points. I also reviewed competitor videos from Asana, Monday.com, ClickUp, and Notion to identify common messaging patterns and opportunities to differentiate the narrative.' },
            { label: 'Creative Strategy', text: 'Rather than explaining every feature, I focused the story around one measurable benefit: helping teams save time every week. This became the central message, allowing every animation, transition, and UI sequence to reinforce a single outcome instead of competing for attention.' },
            { label: 'Script Development', text: 'The script followed a simple progression: introduce the problem, highlight the frustrations of manual project management, demonstrate how Revizze solves those challenges through AI automation, and finish with a clear invitation to start a free trial.' },
            { label: 'Storyboard', text: 'Each scene was sketched before animation began, allowing the pacing and visual hierarchy to be reviewed early. This helped validate the narrative flow before investing time in design and motion.' },
            { label: 'Animatic', text: 'Before production, I assembled a timed animatic using storyboard frames and the approved voiceover to validate pacing, scene timing, and narrative flow. This allowed key stakeholders to review the structure and make adjustments before animation began, reducing revisions later in production.' },
            { label: 'Style Exploration', text: 'The visual language combined clean typography, generous spacing, subtle gradients, and minimal interface design. Motion references were inspired by modern SaaS brands, emphasizing clarity over decorative animation.' },
            { label: 'Asset Design', text: 'Product screens were recreated in Figma to ensure consistency and flexibility during animation. Supporting assets including icons, graphs, interface cards, and illustrations were designed as reusable components to maintain visual consistency throughout the project.' },
            { label: 'Animation', text: 'Animation focused on communicating functionality rather than showcasing effects. UI interactions, cursor movements, graph animations, and smooth transitions guided the viewer through the product naturally, keeping attention on the story rather than the motion itself.' },
            { label: 'Sound Design', text: 'Subtle interface sounds, transitions, and a modern background track reinforced the feeling of using a responsive digital product without distracting from the narration.' },
            { label: 'Review & Iteration', text: 'Multiple review rounds refined pacing, typography, and feature prioritization. Small adjustments to timing and visual emphasis significantly improved clarity while keeping the overall runtime concise.' },
            { label: 'The Outcome', text: 'The final video became the company''s primary product explainer across marketing and sales. It was featured on the homepage, included in outbound sales presentations, and repurposed for paid social campaigns, giving the product team a consistent asset across every stage of the customer journey.' }
          ],
"@

$renderLogicText = @"
        const sectionsContainer = document.getElementById('mSections');
        sectionsContainer.innerHTML = '';
        if (d.sections) {
            d.sections.forEach(sec => {
                const cell = document.createElement('div');
                cell.className = 'm3cell';
                
                const label = document.createElement('div');
                label.className = 'm3label';
                label.innerHTML = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>' + sec.label;
                
                const val = document.createElement('p');
                val.className = 'm3val';
                val.innerHTML = sec.text;
                
                cell.appendChild(label);
                cell.appendChild(val);
                sectionsContainer.appendChild(cell);
            });
        }
"@

$files = @("project-script.js", "portfolio/project-script.js")

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        
        # Replace the brief, approach, outcome block
        $content = $content -replace '(?s)brief:[\s\S]*?outcome:.*?\",', $sectionsText
        
        # Replace the rendering logic block
        $content = $content -replace '(?s)document\.getElementById\(''mBrief''\)\.innerHTML = d\.brief;\s*document\.getElementById\(''mApproach''\)\.innerHTML = d\.approach;\s*document\.getElementById\(''mOutcome''\)\.innerHTML = d\.outcome;', $renderLogicText
        
        Set-Content -Path $file -Value $content -NoNewline
        Write-Host "Updated $file"
    }
}
