(function () {
      "use strict";

      /* ── CASE STUDY DATA ── */
      var PROJECTS = [
        {
          cat: "Explainer", client: "Revizze",
          title: "SaaS Platform Explainer — Turning a Complex Dashboard Into a 90-Second Story",
          tagline: "Revizze needed their platform's core value communicated clearly for an enterprise audience with zero prior product knowledge. The challenge: explain a 14-feature dashboard in under 90 seconds without dumbing it down.",
          brief: "Create a 90-second explainer video for Revizze's product launch targeting enterprise buyers. The video needed to live on the homepage, in sales decks, and run as a paid ad on LinkedIn.",
          approach: "I stripped the product down to a single hero use case — saving 3 hours per week per team member — and built the entire narrative around that one transformation. Clean 2D animation with data visualisations showing real numbers.",
          outcome: "The video became the #1 asset in Revizze's sales cycle. Reps now send it before every discovery call, and the homepage conversion rate jumped within the first month of use.",
          before: "Prospects visited the homepage and left without booking a demo — bounce rate was 74%. Sales reps were spending 20 minutes per call explaining the product before any real conversation started.",
          after: "Bounce rate dropped to 48%. Demo requests up 42% in the first 30 days. Sales reps now use the video to pre-educate, cutting call time by an average of 12 minutes.",
          results: [{ n: "42%", l: "More Demo Requests" }, { n: "26pt", l: "Bounce Rate Drop" }, { n: "12min", l: "Saved Per Sales Call" }],
          tools: ["After Effects", "Adobe Illustrator", "Premiere Pro", "Audition"],
          video: "https://www.youtube.com/embed/Rk3NoCbwouI?si=J8BgXo0mz7732tSr"
        },
        {
          cat: "Product Demo", client: "Bankleva",
          title: "Fintech Product Demo — Showing How Payments Work in Under 2 Minutes",
          tagline: "Quickcollect's payment collection tool was seeing high sign-up intent but users were dropping off during onboarding. The product worked well — the problem was clarity, not functionality.",
          brief: "Build an animated product walkthrough that shows the full payment collection flow end-to-end. Target: reduce drop-off at the onboarding stage and increase activation rate.",
          approach: "I mapped the entire user journey and identified the 3 moments where confusion peaked. Built a 3D animated walkthrough of the actual product UI — real screens, real flow, no mockup — with voiceover guiding each step.",
          outcome: "Placed at the top of the onboarding flow, the video gave users confidence before they touched the product. Activation rate increased significantly and the support team saw fewer 'how do I start' tickets.",
          before: "31% of new sign-ups were abandoning onboarding before completing their first payment setup. Support tickets were high volume and low-complexity — users just didn't know where to start.",
          after: "Onboarding drop-off reduced by 31%. Support ticket volume down 22%. Users who watched the video were 2.4x more likely to complete their first transaction within 24 hours.",
          results: [{ n: "31%", l: "Less Drop-off" }, { n: "2.4x", l: "Faster Activation" }, { n: "22%", l: "Fewer Support Tickets" }],
          tools: ["Blender", "Cinema 4D", "After Effects", "Figma"],
          video: "https://www.youtube.com/embed/74j-l-0pw68?si=E5JVmwmpIw97LW-8"
        },
        {
          cat: "Promotional", client: "Kajota",
          title: "AI Product Launch — A Campaign Video That Made People Stop Scrolling",
          tagline: "Kajota's AI tool was launching into a crowded market. The launch video needed to feel genuinely different — not another tech startup montage with stock footage and buzzwords.",
          brief: "Create a 60-second launch video for social-first distribution across LinkedIn and Twitter/X. The brand needed to feel premium, human, and exciting — not corporate or overhyped.",
          approach: "Ditched stock footage entirely. Built a fully animated world using abstract 3D geometry to represent how Kajota's AI processes information. Wrote copy that focused on the human outcome, not the technology.",
          outcome: "The video outperformed every other asset in Kajota's launch campaign. It became a template for how the brand communicates on social going forward.",
          before: "No visual brand language. Marketing relied on text posts and product screenshots. Engagement rate on social: 1.2%. The brand had no differentiated visual identity to stand on.",
          after: "Launch video hit 2.4M impressions in week one. LinkedIn engagement rate: 8.7%. The brand was cited in 3 design publications. Used in the seed fundraising deck.",
          results: [{ n: "2.4M", l: "Week One Impressions" }, { n: "8.7%", l: "LinkedIn Engagement" }, { n: "3", l: "Design Publications" }],
          tools: ["Blender", "Cinema 4D", "After Effects", "DaVinci Resolve"],
          video: "https://www.youtube.com/embed/gLqxiHWS610?si=y8mJ3jiY7tonVLRv"
        },
        {
          cat: "UI/UX Animation", client: "Eversend",
          title: "App UI Animation System — Making a Review Platform Feel Alive",
          tagline: "Eversend's review platform worked well but felt clunky and static. Users described it as 'functional but uninspiring.' The design team needed a motion system, not just a few animations.",
          brief: "Design and deliver a comprehensive UI animation system for Eversend's mobile app — including micro-interactions, loading states, page transitions, and feedback animations.",
          approach: "Started with a motion audit of every screen. Identified 22 interaction points with no animation feedback. Built a system of 4 animation principles (speed, easing, scale, opacity) and applied them consistently across the app.",
          outcome: "The animation system shipped with the v2.0 redesign. Users reported the app feeling 'faster' even though load times didn't change — a classic effect of well-timed animation. App Store rating climbed.",
          before: "App Store rating sitting at 3.2 stars. Top complaint in reviews: 'feels cheap and unfinished.' Users spending less time per session than the industry average for the category.",
          after: "App Store rating: 4.6 stars. 'Feels polished' became one of the most-used words in App Store reviews. Session time up 34%. Daily active users increased 19% within 60 days.",
          results: [{ n: "4.6", l: "App Store Rating" }, { n: "34%", l: "Longer Sessions" }, { n: "19%", l: "More Daily Users" }],
          tools: ["Figma", "After Effects", "Principle", "Lottie"],
          video: "https://www.youtube.com/embed/BGMCvHMxhV8?si=PNJ0HCKKRtuoswax"
        },
        {
          cat: "Explainer", client: "Plivra",
          title: "B2B SaaS Explainer — Breaking Down a Multi-Feature Platform in 2 Minutes",
          tagline: "Plivra's sales team was relying on a 20-slide deck to explain a product that could be shown in 2 minutes. The pitch was losing deals in the first 10 minutes of every meeting.",
          brief: "Replace the slide deck with a 2-minute animated explainer that could be used at the top of every sales call, on the website, and in cold outreach sequences.",
          approach: "Interviewed 6 members of the sales team to understand what questions prospects always asked. Built the narrative around answering those 6 questions in sequence. Whiteboard-style animation with a conversational tone.",
          outcome: "The video replaced the deck as the primary sales tool. It travels further too — prospects are sharing it internally with decision-makers before they've even spoken to a Plivra rep.",
          before: "Average sales cycle: 8 weeks. Discovery calls running 45-60 minutes with most of the time spent on basic product explanation rather than qualification. 1 in 4 deals lost after the first call.",
          after: "Average sales cycle: 5 weeks. Discovery calls now average 28 minutes. First-call-to-second-call conversion up 38%. The video is forwarded internally by 60% of prospects.",
          results: [{ n: "3wks", l: "Shorter Sales Cycle" }, { n: "38%", l: "Better Call Conversion" }, { n: "60%", l: "Internal Forward Rate" }],
          tools: ["After Effects", "Adobe Illustrator", "Audition", "Premiere Pro"],
          video: "https://www.youtube.com/embed/sL84nunOstc?si=jbdUuZothy7k4y6Y"
        },
        {
          cat: "Brand Motion", client: "Push",
          title: "Brand Identity in Motion — Logo Animation &amp; Full Brand Motion System",
          tagline: "Push had a strong visual identity on paper but no motion language. Every video they made felt disconnected from their brand. They needed a system, not just a logo animation.",
          brief: "Develop a complete brand motion system: animated logo (3 variants), branded lower thirds, social video templates, and a signature opening sequence for all video content.",
          approach: "Extracted the 3 core visual principles from Push's static brand guide (precision, speed, clarity) and translated each into motion properties: easing curves, timing, and spatial movement patterns.",
          outcome: "Push now has a fully consistent motion language across every video they produce. Their marketing team uses the templates independently. Brand recognition in customer surveys jumped.",
          before: "Each video Push produced looked like it came from a different company. Brand recognition in customer surveys: 29%. Marketing team had no motion templates to work from independently.",
          after: "Brand consistency score: 91% (up from 29%). Customer survey recognition up 58%. Marketing team produces 4x more video content using the template system. 3 industry publications featured the brand identity.",
          results: [{ n: "58%", l: "Brand Recognition Up" }, { n: "91%", l: "Consistency Score" }, { n: "4x", l: "More Content Output" }],
          tools: ["After Effects", "Cinema 4D", "Illustrator", "Premiere Pro"],
          video: "https://www.youtube.com/embed/qIa23UIv9FY?si=S-0zfMyWNtZwe8B0"
        }
      ];

      /* ── CURSOR ── */
      var DOT = document.getElementById('cd'), RING = document.getElementById('cr');
      var mx = window.innerWidth / 2, my = window.innerHeight / 2, rx = mx, ry = my, big = false;
      function sd(x, y) { DOT.style.transform = 'translate(' + (x - 4) + 'px,' + (y - 4) + 'px)'; }
      sd(mx, my);
      document.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; sd(mx, my); });
      var hels = document.querySelectorAll('a,button,.pcard,.ftag,.pill,.modal-close,.modal-play');
      for (var hi = 0; hi < hels.length; hi++) {
        hels[hi].addEventListener('mouseenter', function () { RING.classList.add('big'); big = true; });
        hels[hi].addEventListener('mouseleave', function () { RING.classList.remove('big'); big = false; });
      }
      (function ar() { rx += (mx - rx) * .11; ry += (my - ry) * .11; RING.style.transform = 'translate(' + (rx - (big ? 29 : 18)) + 'px,' + (ry - (big ? 29 : 18)) + 'px)'; requestAnimationFrame(ar); })();

      /* ── PARTICLE CANVAS ── */
      var CV = document.getElementById('bgc'), CTX = CV.getContext('2d'), W, H, PTS = [];
      function rsz() { W = CV.width = window.innerWidth; H = CV.height = window.innerHeight; }
      rsz(); window.addEventListener('resize', function () { rsz(); mkp(); });
      function mkp() { PTS = []; var n = Math.floor(W * H / 14000); for (var i = 0; i < n; i++) PTS.push({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * .8 + .2, vx: (Math.random() - .5) * .22, vy: (Math.random() - .5) * .22, a: Math.random() * .35 + .06 }); }
      mkp();
      function drw() {
        CTX.clearRect(0, 0, W, H);
        CTX.strokeStyle = 'rgba(14,165,233,.022)'; CTX.lineWidth = 1;
        for (var gx = 0; gx <= W; gx += 90) { CTX.beginPath(); CTX.moveTo(gx, 0); CTX.lineTo(gx, H); CTX.stroke(); }
        for (var gy = 0; gy <= H; gy += 90) { CTX.beginPath(); CTX.moveTo(0, gy); CTX.lineTo(W, gy); CTX.stroke(); }
        for (var pi = 0; pi < PTS.length; pi++) {
          var p = PTS[pi]; p.x += p.vx; p.y += p.vy;
          if (p.x < 0) p.x = W; if (p.x > W) p.x = 0; if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
          CTX.beginPath(); CTX.arc(p.x, p.y, p.r, 0, Math.PI * 2); CTX.fillStyle = 'rgba(14,165,233,' + p.a + ')'; CTX.fill();
        }
        for (var ii = 0; ii < PTS.length; ii++) for (var jj = ii + 1; jj < PTS.length; jj++) {
          var dx = PTS[ii].x - PTS[jj].x, dy = PTS[ii].y - PTS[jj].y, dd = Math.sqrt(dx * dx + dy * dy);
          if (dd < 110) { CTX.beginPath(); CTX.moveTo(PTS[ii].x, PTS[ii].y); CTX.lineTo(PTS[jj].x, PTS[jj].y); CTX.strokeStyle = 'rgba(14,165,233,' + (0.06 * (1 - dd / 110)) + ')'; CTX.lineWidth = .5; CTX.stroke(); }
        }
        requestAnimationFrame(drw);
      }
      drw();

      /* ── SCROLL REVEAL ── */
      var rvEls = document.querySelectorAll('.rv');
      requestAnimationFrame(function () {
        for (var i = 0; i < rvEls.length; i++) rvEls[i].classList.add('hi');
        requestAnimationFrame(function () {
          if (!window.IntersectionObserver) { for (var i = 0; i < rvEls.length; i++) rvEls[i].classList.remove('hi'); return; }
          var obs = new IntersectionObserver(function (entries) {
            for (var i = 0; i < entries.length; i++) if (entries[i].isIntersecting) { entries[i].target.classList.remove('hi'); obs.unobserve(entries[i].target); }
          }, { threshold: .08, rootMargin: '0px 0px -20px 0px' });
          for (var i = 0; i < rvEls.length; i++) obs.observe(rvEls[i]);
        });
      });

      /* ── COUNTERS ── */
      function ctr(el) {
        var to = parseInt(el.getAttribute('data-to'), 10), suf = el.getAttribute('data-suf') || '';
        if (!to || el.getAttribute('data-done')) return;
        el.setAttribute('data-done', '1');
        var dur = 1800, t0 = performance.now();
        (function tk(now) { var p = Math.min((now - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3); el.textContent = Math.floor(e * to) + suf; if (p < 1) requestAnimationFrame(tk); else el.textContent = to + suf; })(performance.now());
      }
      var stEls = document.querySelectorAll('[data-to]');
      for (var si = 0; si < stEls.length; si++) ctr(stEls[si]);

      /* ── FILTER ── */
      var ftags = document.querySelectorAll('.ftag');
      var cards = document.querySelectorAll('.pcard');
      function applyFilter(f) {
        for (var i = 0; i < ftags.length; i++) ftags[i].classList.toggle('on', ftags[i].getAttribute('data-filter') === f);
        var vis = 0;
        for (var j = 0; j < cards.length; j++) {
          var show = (f === 'all' || cards[j].getAttribute('data-cat') === f);
          cards[j].style.display = show ? '' : 'none';
          if (show) vis++;
        }
      }
      for (var fi = 0; fi < ftags.length; fi++) {
        ftags[fi].addEventListener('click', (function (tag) {
          return function () { applyFilter(tag.getAttribute('data-filter')); };
        })(ftags[fi]));
      }

      /* ── MODAL ── */
      var MB = document.getElementById('modal-bg');
      var MC = document.getElementById('modalClose');

      function openModal(id) {
        var d = PROJECTS[id];
        if (!d) return;
        document.getElementById('mCat').textContent = d.cat;
        document.getElementById('mClient').textContent = d.client;
        document.getElementById('mTitle').innerHTML = d.title;
        document.getElementById('mTagline').textContent = d.tagline;
        document.getElementById('mBrief').textContent = d.brief;
        document.getElementById('mApproach').textContent = d.approach;
        document.getElementById('mOutcome').textContent = d.outcome;
        document.getElementById('mBefore').textContent = d.before;
        document.getElementById('mAfter').textContent = d.after;
        // results
        var rGrid = document.getElementById('mResults'); rGrid.innerHTML = '';
        for (var ri = 0; ri < d.results.length; ri++) {
          var rc = document.createElement('div'); rc.className = 'res-card';
          rc.innerHTML = '<span class="res-num">' + d.results[ri].n + '</span><span class="res-lbl">' + d.results[ri].l + '</span>';
          rGrid.appendChild(rc);
        }
        // tools
        var tRow = document.getElementById('mTools'); tRow.innerHTML = '';
        for (var ti = 0; ti < d.tools.length; ti++) {
          var tc = document.createElement('span'); tc.className = 'tool-chip'; tc.textContent = d.tools[ti];
          tRow.appendChild(tc);
        }
        // video
        document.getElementById('modalVisual').innerHTML = '<iframe width="100%" height="100%" src="' + d.video + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        MB.classList.add('open');
        document.body.style.overflow = 'hidden';
        MB.scrollTop = 0;
      }
      function closeModal() { MB.classList.remove('open'); document.body.style.overflow = ''; document.getElementById('modalVisual').innerHTML = ''; }

      for (var ci = 0; ci < cards.length; ci++) {
        cards[ci].addEventListener('click', (function (card) {
          return function () { openModal(parseInt(card.getAttribute('data-id'), 10)); };
        })(cards[ci]));
      }
      MC.addEventListener('click', closeModal);
      MB.addEventListener('click', function (e) { if (e.target === MB) closeModal(); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });

      /* ── MOBILE MENU ── */
      var mobileMenuBtn = document.getElementById('mobileMenuBtn');
      var mobileMenu = document.getElementById('mobileMenu');
      var mobileMenuLinks = document.querySelectorAll('.mobile-nav-ul a');

      function toggleMobileMenu() {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
      }

      function closeMobileMenu() {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      }

      mobileMenuBtn.addEventListener('click', toggleMobileMenu);

      for (var mi = 0; mi < mobileMenuLinks.length; mi++) {
        mobileMenuLinks[mi].addEventListener('click', closeMobileMenu);
      }

      mobileMenu.addEventListener('click', function (e) {
        if (e.target === mobileMenu) closeMobileMenu();
      });

    })();