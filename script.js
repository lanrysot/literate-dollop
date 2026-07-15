(function () {
    "use strict";

    /* ── CURSOR ── */
    // ── Cursor
    const cur = document.getElementById('cur'), ring = document.getElementById('ring');
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cur.style.left = mx + 'px'; cur.style.top = my + 'px'; });
    (function loop() { rx += (mx - rx) * .13; ry += (my - ry) * .13; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(loop); })();
    document.querySelectorAll('a,button,.svc-card,.why-card,.proc-step,.h-stat').forEach(el => {
        el.addEventListener('mouseenter', () => { cur.style.width = '12px'; cur.style.height = '12px'; ring.style.width = '52px'; ring.style.height = '52px'; ring.style.borderColor = 'var(--bh)'; });
        el.addEventListener('mouseleave', () => { cur.style.width = '7px'; cur.style.height = '7px'; ring.style.width = '30px'; ring.style.height = '30px'; ring.style.borderColor = 'var(--acgs)'; });
    });

    // ── Scroll reveal
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
    }, { threshold: .08, rootMargin: '0px 0px -32px 0px' });
    document.querySelectorAll('.r').forEach(el => obs.observe(el));

    /* ── PARTICLE CANVAS ── */
    var CV = document.getElementById('bgc');
    var CTX = CV.getContext('2d');
    var W, H, PTS = [];

    function resizeCv() {
        W = CV.width = window.innerWidth;
        H = CV.height = window.innerHeight;
    }
    resizeCv();
    window.addEventListener('resize', function () { resizeCv(); makePts(); });

    function makePts() {
        PTS = [];
        var n = Math.floor(W * H / 13000);
        for (var i = 0; i < n; i++) {
            PTS.push({
                x: Math.random() * W, y: Math.random() * H,
                r: Math.random() * 0.9 + 0.3,
                vx: (Math.random() - 0.5) * 0.26,
                vy: (Math.random() - 0.5) * 0.26,
                a: Math.random() * 0.4 + 0.07
            });
        }
    }
    makePts();

    function drawCv() {
        CTX.clearRect(0, 0, W, H);
        CTX.strokeStyle = 'rgba(14,165,233,0.025)'; CTX.lineWidth = 1;
        for (var gx = 0; gx <= W; gx += 88) { CTX.beginPath(); CTX.moveTo(gx, 0); CTX.lineTo(gx, H); CTX.stroke(); }
        for (var gy = 0; gy <= H; gy += 88) { CTX.beginPath(); CTX.moveTo(0, gy); CTX.lineTo(W, gy); CTX.stroke(); }
        for (var pi = 0; pi < PTS.length; pi++) {
            var p = PTS[pi];
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
            if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
            CTX.beginPath(); CTX.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            CTX.fillStyle = 'rgba(14,165,233,' + p.a + ')'; CTX.fill();
        }
        for (var ii = 0; ii < PTS.length; ii++) {
            for (var jj = ii + 1; jj < PTS.length; jj++) {
                var dx = PTS[ii].x - PTS[jj].x, dy = PTS[ii].y - PTS[jj].y;
                var dd = Math.sqrt(dx * dx + dy * dy);
                if (dd < 110) {
                    CTX.beginPath(); CTX.moveTo(PTS[ii].x, PTS[ii].y); CTX.lineTo(PTS[jj].x, PTS[jj].y);
                    CTX.strokeStyle = 'rgba(14,165,233,' + (0.065 * (1 - dd / 110)) + ')';
                    CTX.lineWidth = 0.5; CTX.stroke();
                }
            }
        }
        requestAnimationFrame(drawCv);
    }
    drawCv();

    /* ── NAV ── */
    var NAV = document.getElementById('nav');
    window.addEventListener('scroll', function () {
        NAV.classList.toggle('sc', window.scrollY > 60);
    });

    /* ── SCROLL REVEAL ── */
    var rvEls = document.querySelectorAll('.rv');
    requestAnimationFrame(function () {
        for (var ri = 0; ri < rvEls.length; ri++) rvEls[ri].classList.add('hi');
        requestAnimationFrame(function () {
            if (!window.IntersectionObserver) {
                // fallback: just show everything
                for (var fi = 0; fi < rvEls.length; fi++) rvEls[fi].classList.remove('hi');
                return;
            }
            var revObs = new IntersectionObserver(function (entries) {
                for (var ei = 0; ei < entries.length; ei++) {
                    if (entries[ei].isIntersecting) {
                        entries[ei].target.classList.remove('hi');
                        revObs.unobserve(entries[ei].target);
                    }
                }
            }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
            for (var oi = 0; oi < rvEls.length; oi++) revObs.observe(rvEls[oi]);
        });
    });

    /* ── STAT COUNTERS ── */
    function counter(el) {
        var to = parseInt(el.getAttribute('data-to'), 10);
        var suf = el.getAttribute('data-suf') || '';
        if (!to || el.getAttribute('data-done')) return;
        el.setAttribute('data-done', '1');
        var dur = 2000, t0 = performance.now();
        function tick(now) {
            var prog = Math.min((now - t0) / dur, 1);
            var ease = 1 - Math.pow(1 - prog, 3);
            el.textContent = Math.floor(ease * to) + suf;
            if (prog < 1) requestAnimationFrame(tick);
            else el.textContent = to + suf;
        }
        requestAnimationFrame(tick);
    }

    var statEls = document.querySelectorAll('.stn[data-to]');

    // Fire immediately — stats are in the viewport on load
    for (var si = 0; si < statEls.length; si++) counter(statEls[si]);

    // Also watch for small-screen cases
    if (window.IntersectionObserver) {
        var ctObs = new IntersectionObserver(function (entries) {
            for (var ci = 0; ci < entries.length; ci++) {
                if (entries[ci].isIntersecting) counter(entries[ci].target);
                ctObs.unobserve(entries[ci].target);
            }
        }, { threshold: 0.2 });
        for (var csi = 0; csi < statEls.length; csi++) ctObs.observe(statEls[csi]);
    }

    var socialFloat = document.getElementById('socialFloat');
    if (socialFloat) {
        var dragging = false;
        var startX = 0;
        var startY = 0;
        var origX = 0;
        var origY = 0;

        function clamp(value, min, max) {
            return Math.min(Math.max(value, min), max);
        }

        socialFloat.addEventListener('pointerdown', function (e) {
            if (!e.target.closest('.social-float-head')) return;
            dragging = true;
            socialFloat.setPointerCapture(e.pointerId);
            var rect = socialFloat.getBoundingClientRect();
            startX = e.clientX;
            startY = e.clientY;
            origX = rect.left;
            origY = rect.top;
            socialFloat.style.transition = 'none';
        });

        socialFloat.addEventListener('pointermove', function (e) {
            if (!dragging) return;
            var dx = e.clientX - startX;
            var dy = e.clientY - startY;
            var left = origX + dx;
            var top = origY + dy;
            var minMargin = 12;
            var maxX = window.innerWidth - socialFloat.offsetWidth - minMargin;
            var maxY = window.innerHeight - socialFloat.offsetHeight - minMargin;
            left = clamp(left, minMargin, maxX);
            top = clamp(top, minMargin, maxY);
            socialFloat.style.left = left + 'px';
            socialFloat.style.top = top + 'px';
            socialFloat.style.right = 'auto';
        });

        function stopDrag(e) {
            if (!dragging) return;
            dragging = false;
            if (socialFloat.hasPointerCapture && socialFloat.hasPointerCapture(e.pointerId)) {
                socialFloat.releasePointerCapture(e.pointerId);
            }
            socialFloat.style.transition = '';
        }

        socialFloat.addEventListener('pointerup', stopDrag);
        socialFloat.addEventListener('pointercancel', stopDrag);
    }

})();

