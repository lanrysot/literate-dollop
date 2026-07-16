const fs = require('fs');

const acmeflowStr = `
        {
          cat: "Explainer", client: "AcmeFlow",
          title: "AcmeFlow AI-Powered Project Management Platform",
          tagline: "The video will be used on the homepage, in paid LinkedIn campaigns, and by the sales team during product demos.",
          details: [
            { title: "Project Overview", content: "Create a 90-second product launch video introducing AcmeFlow's AI-powered project management platform. The video will be used on the homepage, in paid LinkedIn campaigns, and by the sales team during product demos." },
            { title: "The Brief", content: "AcmeFlow was preparing for a new product launch targeting operations managers at growing companies. The goal was to clearly communicate the platform's value in under 90 seconds while positioning it as a faster, smarter alternative to manual project management tools. The video needed to work across multiple channels without requiring different edits." },
            { title: "Research", content: "I spent time understanding the product from the perspective of a first-time user, mapping the onboarding flow, key features, and most common pain points. I also reviewed competitor videos from Asana, Monday.com, ClickUp, and Notion to identify common messaging patterns and opportunities to differentiate the narrative." },
            { title: "Creative Strategy", content: "Rather than explaining every feature, I focused the story around one measurable benefit: helping teams save time every week. This became the central message, allowing every animation, transition, and UI sequence to reinforce a single outcome instead of competing for attention." },
            { title: "Script Development", content: "The script followed a simple progression: introduce the problem, highlight the frustrations of manual project management, demonstrate how AcmeFlow solves those challenges through AI automation, and finish with a clear invitation to start a free trial." },
            { title: "Storyboard", content: "Each scene was sketched before animation began, allowing the pacing and visual hierarchy to be reviewed early. This helped validate the narrative flow before investing time in design and motion." },
            { title: "Animatic", content: "Before production, I assembled a timed animatic using storyboard frames and the approved voiceover to validate pacing, scene timing, and narrative flow. This allowed key stakeholders to review the structure and make adjustments before animation began, reducing revisions later in production." },
            { title: "Style Exploration", content: "The visual language combined clean typography, generous spacing, subtle gradients, and minimal interface design. Motion references were inspired by modern SaaS brands, emphasizing clarity over decorative animation." },
            { title: "Asset Design", content: "Product screens were recreated in Figma to ensure consistency and flexibility during animation. Supporting assets including icons, graphs, interface cards, and illustrations were designed as reusable components to maintain visual consistency throughout the project." },
            { title: "Animation", content: "Animation focused on communicating functionality rather than showcasing effects. UI interactions, cursor movements, graph animations, and smooth transitions guided the viewer through the product naturally, keeping attention on the story rather than the motion itself." },
            { title: "Sound Design", content: "Subtle interface sounds, transitions, and a modern background track reinforced the feeling of using a responsive digital product without distracting from the narration." },
            { title: "Review & Iteration", content: "Multiple review rounds refined pacing, typography, and feature prioritization. Small adjustments to timing and visual emphasis significantly improved clarity while keeping the overall runtime concise." },
            { title: "The Outcome", content: "The final video became the company's primary product explainer across marketing and sales. It was featured on the homepage, included in outbound sales presentations, and repurposed for paid social campaigns, giving the product team a consistent asset across every stage of the customer journey." }
          ],
          before: "-",
          after: "-",
          results: [{ n: "1", l: "Primary Asset" }, { n: "90s", l: "Explainer Video" }, { n: "Multi", l: "Channel Usage" }],
          tools: ["Figma", "After Effects", "Premiere Pro", "Audition"],
          video: "https://www.youtube.com/embed/Rk3NoCbwouI?si=J8BgXo0mz7732tSr"
        },
`;

const files = ['project-script.js', 'portfolio/project-script.js'];
files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let code = fs.readFileSync(file, 'utf8');
  
  // Prepend AcmeFlow to PROJECTS
  code = code.replace(/var PROJECTS = \[/, 'var PROJECTS = [' + acmeflowStr);
  
  fs.writeFileSync(file, code);
});
