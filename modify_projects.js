const fs = require('fs');

const files = ['project-script.js', 'portfolio/project-script.js'];
files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let code = fs.readFileSync(file, 'utf8');
  
  // Transform data
  code = code.replace(/brief: "(.*?)",\s*approach: "(.*?)",\s*outcome: "(.*?)",/g, (match, b, a, o) => {
    return `details: [\n            { title: "The Brief", content: "${b}" },\n            { title: "My Approach", content: "${a}" },\n            { title: "The Outcome", content: "${o}" }\n          ],`;
  });
  
  // Update openModal
  code = code.replace(/document\.getElementById\('mBrief'\)\.innerHTML = d\.brief;\s*document\.getElementById\('mApproach'\)\.innerHTML = d\.approach;\s*document\.getElementById\('mOutcome'\)\.innerHTML = d\.outcome;/g, `
        var mGrid = document.querySelector('.modal-3col');
        if (mGrid) {
            mGrid.innerHTML = '';
            if (d.details) {
                d.details.forEach(function(det) {
                    var cell = document.createElement('div');
                    cell.className = 'm3cell';
                    cell.innerHTML = '<div class="m3label"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>' + det.title + '</div><p class="m3val">' + det.content + '</p>';
                    mGrid.appendChild(cell);
                });
            }
        }
  `);
  
  fs.writeFileSync(file, code);
});
