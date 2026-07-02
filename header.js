(function () {
  function loadLink(href) {
    if (document.querySelector('link[href="' + href + '"]')) return;
    var el = document.createElement("link");
    el.rel = "stylesheet"; el.href = href;
    document.head.appendChild(el);
  }
  loadLink("https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800&display=swap");
  loadLink("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");
  ["https://fonts.googleapis.com","https://fonts.gstatic.com"].forEach(function(u){
    if(document.querySelector('link[href="'+u+'"]')) return;
    var pc=document.createElement("link"); pc.rel="preconnect"; pc.href=u;
    if(u.includes("gstatic")) pc.crossOrigin="";
    document.head.appendChild(pc);
  });

  var css = `

  
html { overflow-x: hidden; }

.tz-header *, .tz-header *::before, .tz-header *::after {
  box-sizing: border-box; margin: 0; padding: 0;
}

.tz-header {
  position: sticky; top: 0; z-index: 9999;
  padding: 14px 16px;
  font-family: "Lexend", system-ui, -apple-system, sans-serif;
}

.tz-wrap {
  max-width: 1220px; margin: 0 auto; padding: 10px 20px;
  display: flex; align-items: center; justify-content: space-between; gap: 18px;
  border-radius: 999px;
  background: rgba(30, 41, 70, 0.85);
  border: 1px solid rgba(99, 140, 255, 0.18);
  position: relative;
}

.tz-logo {
  display: flex; align-items: center; text-decoration: none;
  font-size: 1.35rem; font-weight: 800; color: #f0f4ff;
  z-index: 10; order: 1; white-space: nowrap; letter-spacing: -0.3px;
}
.tz-logo span {
  background: linear-gradient(90deg, #4f8cff, #a78bfa);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tz-nav-wrapper {
  flex: 1; display: flex; align-items: center; justify-content: center; order: 2;
}

.tz-nav { display: flex; align-items: center; gap: 4px; }

.tz-link, .tz-toggle {
  font-family: "Lexend", system-ui, sans-serif;
  border: 0; background: transparent; cursor: pointer;
  text-decoration: none; padding: 10px 16px; border-radius: 999px;
  color: #c8d4f0; font-weight: 500; font-size: 15px;
  display: inline-flex; align-items: center; gap: 7px;
  line-height: 1; white-space: nowrap; position: relative; z-index: 2;
  transition: background 0.2s, color 0.2s;
}
.tz-link:hover, .tz-toggle:hover, .tz-toggle:focus {
  background: rgba(79, 140, 255, 0.18); color: #ffffff; outline: none;
}

.tz-caret {
  font-size: 11px; opacity: 0.7;
  transform: translateY(1px); transition: transform 0.3s;
}
.tz-toggle[aria-expanded="true"] .tz-caret {
  transform: translateY(1px) rotate(180deg);
}

.tz-cta-btn {
  text-decoration: none;
  background: linear-gradient(135deg, #2f6bff, #7c3aed);
  color: #fff; padding: 10px 22px; border-radius: 999px;
  font-weight: 700; font-size: 15px; white-space: nowrap;
  order: 3; z-index: 10; transition: filter 0.2s;
  font-family: "Lexend", system-ui, sans-serif;
}
.tz-cta-btn:hover { filter: brightness(1.12); }

.tz-hamburger {
  display: none; background: transparent; border: none;
  cursor: pointer; padding: 6px; z-index: 10; order: 4;
}
.tz-hamburger span {
  display: block; width: 22px; height: 2px;
  background: #c8d4f0; margin: 5px 0;
  border-radius: 2px; transition: 0.3s;
}
.tz-hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(5px,5px); }
.tz-hamburger.active span:nth-child(2) { opacity: 0; }
.tz-hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(5px,-5px); }

.tz-item { display: flex; align-items: center; }

.tz-dropdown {
  position: absolute; top: calc(100% + 10px); left: 0; right: 0; width: 100%;
  visibility: hidden; opacity: 0; pointer-events: none; transform: translateY(10px);
  transition: opacity 0.28s ease, transform 0.28s ease, visibility 0.28s ease;
  background: #111827; border-radius: 28px;
  border: 1px solid rgba(99, 140, 255, 0.15);
  box-shadow: 0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04);
  overflow: hidden; z-index: 1;
}
.tz-dropdown.is-open {
  visibility: visible; opacity: 1; pointer-events: auto; transform: translateY(0);
}

.tz-inner { display: grid; grid-template-columns: 0.9fr 3.6fr; }

.tz-left {
  padding: 40px 32px; background: #0d1424;
  border-right: 1px solid rgba(99,140,255,0.1);
  display: flex; flex-direction: column; justify-content: space-between; gap: 40px;
}
.tz-left h2 {
  font-size: clamp(26px,1.8vw,42px); line-height: 1.1;
  letter-spacing: -0.6px; color: #f0f4ff; font-weight: 800;
}
.tz-left-cta {
  display: inline-flex; align-items: center; gap: 10px;
  text-decoration: none; font-weight: 700;
  background: linear-gradient(90deg,#4f8cff,#a78bfa);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text; letter-spacing: 0.8px;
  font-size: 13px; text-transform: uppercase;
  font-family: "Lexend", system-ui, sans-serif;
}
.tz-left-cta span { font-size: 18px; -webkit-text-fill-color: #4f8cff; }

.tz-right { padding: 28px 20px 24px; }
.tz-panel-title {
  font-size: 13px; font-weight: 600;
  color: rgba(200,212,240,0.45); text-transform: uppercase;
  letter-spacing: 1.2px; margin-bottom: 16px; padding-left: 10px;
  font-family: "Lexend", system-ui, sans-serif;
}

.tz-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 6px; }

.tz-card {
  text-decoration: none; color: #c8d4f0;
  display: flex; flex-direction: column; gap: 7px;
  padding: 12px; border-radius: 16px; transition: background 0.2s;
  border: 1px solid transparent;
}
.tz-card:hover { background: rgba(79,140,255,0.1); border-color: rgba(79,140,255,0.2); }
.tz-card.c-sky:hover    { background:rgba(56,189,248,0.1);  border-color:rgba(56,189,248,0.2); }
.tz-card.c-green:hover  { background:rgba(34,197,94,0.1);   border-color:rgba(34,197,94,0.2); }
.tz-card.c-purple:hover { background:rgba(168,85,247,0.1);  border-color:rgba(168,85,247,0.2); }
.tz-card.c-pink:hover   { background:rgba(236,72,153,0.1);  border-color:rgba(236,72,153,0.2); }
.tz-card.c-indigo:hover { background:rgba(99,102,241,0.1);  border-color:rgba(99,102,241,0.2); }
.tz-card.c-amber:hover  { background:rgba(245,158,11,0.1);  border-color:rgba(245,158,11,0.2); }

.tz-card-head { display: flex; align-items: center; gap: 12px; }
.tz-card h4 { font-size: 15px; font-weight: 700; color: #e8eeff; line-height: 1.2; }
.tz-card p  { font-size: 13px; line-height: 1.6; color: rgba(200,212,240,0.6); font-weight: 300; }

.tz-icon {
  width: 40px; height: 40px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; font-size: 16px;
}
.tz-icon.bg-sky    { background:rgba(56,189,248,0.2);  color:#38bdf8; }
.tz-icon.bg-green  { background:rgba(34,197,94,0.2);   color:#22c55e; }
.tz-icon.bg-purple { background:rgba(168,85,247,0.2);  color:#a855f7; }
.tz-icon.bg-pink   { background:rgba(236,72,153,0.2);  color:#ec4899; }
.tz-icon.bg-indigo { background:rgba(99,102,241,0.2);  color:#6366f1; }
.tz-icon.bg-amber  { background:rgba(245,158,11,0.2);  color:#f59e0b; }

.tz-mobile-list { display: none; }

.tz-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.75);
  z-index: 9998; opacity: 0; visibility: hidden;
  transition: 0.3s; backdrop-filter: blur(4px); pointer-events: none;
}
.tz-overlay.active { opacity: 1; visibility: visible; pointer-events: auto; }

.tz-close-btn { display: none; }

/* ── MOBILE ── */
@media (max-width: 991px) {
  .tz-header { padding: 10px 12px; }
  .tz-wrap { border-radius: 18px; padding: 8px 14px; }
  .tz-hamburger { display: block; }
  .tz-cta-btn { display: none; }

  .tz-nav {
    position: fixed; top: 0; right: 0; width: 290px; height: 100vh;
    background: #0d1424; z-index: 9999;
    flex-direction: column; align-items: stretch;
    padding: 64px 16px 20px; gap: 4px; overflow-y: auto;
    box-shadow: -6px 0 40px rgba(0,0,0,0.7);
    transform: translateX(100%);
    transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
    visibility: hidden;
  }
  .tz-nav.active { transform: translateX(0); visibility: visible; }

  .tz-close-btn {
    display: flex; position: absolute; top: 14px; right: 14px;
    width: 34px; height: 34px; border-radius: 50%;
    background: rgba(79,140,255,0.15);
    border: 1px solid rgba(79,140,255,0.25);
    cursor: pointer; align-items: center; justify-content: center;
    font-size: 16px; color: #c8d4f0; transition: background 0.2s; z-index: 1;
  }
  .tz-close-btn:hover { background: rgba(79,140,255,0.3); }

  .tz-link {
    width: 100%; padding: 13px 14px; border-radius: 12px;
    background: rgba(255,255,255,0.05); color: #c8d4f0;
    font-size: 15px; border: 1px solid rgba(255,255,255,0.06);
  }
  .tz-toggle {
    width: 100%; justify-content: space-between; padding: 13px 14px;
    border-radius: 12px; background: rgba(255,255,255,0.05);
    color: #c8d4f0; font-size: 15px; border: 1px solid rgba(255,255,255,0.06);
  }

  .tz-dropdown {
    position: static !important; width: 100% !important;
    left: auto !important; right: auto !important; top: auto !important;
    transform: none !important; box-shadow: none; border: none;
    border-radius: 12px; background: transparent; overflow: visible;
    padding: 0; margin: 4px 0 6px;
    visibility: visible !important; pointer-events: auto !important;
    display: none; opacity: 1 !important; transition: none !important;
  }
  .tz-dropdown.is-open { display: block !important; }

  .tz-item { flex-direction: column; align-items: stretch; }
  .tz-inner { display: flex !important; flex-direction: column !important; }
  .tz-left  { display: none !important; }
  .tz-right { display: none !important; }

  .tz-mobile-list {
    display: block;
    background: rgba(79,140,255,0.07);
    border: 1px solid rgba(79,140,255,0.15);
    border-radius: 12px; overflow: hidden;
  }
  .tz-mobile-list a {
    display: block; padding: 12px 16px; text-decoration: none;
    color: #a0b0d0; font-size: 14px; font-weight: 500;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    font-family: "Lexend", system-ui, sans-serif;
    transition: background 0.2s, color 0.2s;
  }
  .tz-mobile-list a:last-child { border-bottom: none; }
  .tz-mobile-list a:hover { background: rgba(79,140,255,0.15); color: #7eb8ff; }

  .tz-nav-wrapper { flex: 1; }
}
  `;

  if (!document.getElementById("tz-header-styles")) {
    var styleEl = document.createElement("style");
    styleEl.id = "tz-header-styles";
    styleEl.textContent = css;
    document.head.appendChild(styleEl);
  }

  var html = `
<header class="tz-header" id="tz-header">
  <div class="tz-wrap">

    <button class="tz-hamburger" id="tzHamburger" aria-label="Open Menu">
      <span></span><span></span><span></span>
    </button>

    <a class="tz-logo" href="index.html">Umar <span>Farooq</span></a>

    <div class="tz-nav-wrapper">
      <nav class="tz-nav" id="tzNav" aria-label="Main Navigation">

        <button class="tz-close-btn" id="tzCloseBtn" aria-label="Close Menu">&#x2715;</button>

        <a class="tz-link" href="index.html">Home</a>

        <!-- EXPLORE -->
        <div class="tz-item" id="tzExploreMega">
          <button class="tz-toggle" type="button" aria-expanded="false" id="tzExploreBtn">
            Explore <span class="tz-caret">&#9660;</span>
          </button>
          <div class="tz-dropdown" id="tzExplorePanel">
            <div class="tz-inner">
              <div class="tz-left">
                <h2>Navigate My<br>Professional<br>Portfolio.</h2>
                <a class="tz-left-cta" href="#contact">Get In Touch <span>&#x2192;</span></a>
              </div>
              <div class="tz-right">
                <div class="tz-panel-title">All Sections</div>
                <div class="tz-grid">
                  <a class="tz-card c-purple" href="#about">
                    <div class="tz-card-head"><span class="tz-icon bg-purple"><i class="fas fa-user"></i></span><h4>About Me</h4></div>
                    <p>My journey from WordPress Specialist to Full Stack Developer.</p>
                  </a>
                  <a class="tz-card c-sky" href="#contact">
                    <div class="tz-card-head"><span class="tz-icon bg-sky"><i class="fas fa-share-alt"></i></span><h4>Connect With Me</h4></div>
                    <p>Get in touch via Fiverr, Upwork, LinkedIn, and more.</p>
                  </a>
                  <a class="tz-card c-indigo" href="#experience">
                    <div class="tz-card-head"><span class="tz-icon bg-indigo"><i class="fas fa-briefcase"></i></span><h4>Experience</h4></div>
                    <p>My professional history at East &amp; West Agency.</p>
                  </a>
                  <a class="tz-card c-green" href="#education">
                    <div class="tz-card-head"><span class="tz-icon bg-green"><i class="fas fa-graduation-cap"></i></span><h4>Education</h4></div>
                    <p>Computer Science degree at Hayat Medical College.</p>
                  </a>
                  <a class="tz-card c-amber" href="#achievements">
                    <div class="tz-card-head"><span class="tz-icon bg-amber"><i class="fas fa-trophy"></i></span><h4>Key Achievements</h4></div>
                    <p>Highlights of my career including 50+ projects delivered.</p>
                  </a>
                  <a class="tz-card c-pink" href="#pricing">
                    <div class="tz-card-head"><span class="tz-icon bg-pink"><i class="fas fa-tag"></i></span><h4>Pricing Plans</h4></div>
                    <p>Starter, Business, and Enterprise packages for your needs.</p>
                  </a>
                </div>
              </div>
              <div class="tz-mobile-list">
                <a href="#about">About Me</a>
                <a href="#connect">Connect With Me</a>
                <a href="#experience">Experience</a>
                <a href="#education">Education</a>
                <a href="#achievements">Key Achievements</a>
                <a href="#pricing">Pricing Plans</a>
              </div>
            </div>
          </div>
        </div>

        <!-- SERVICES -->
        <div class="tz-item" id="tzServicesMega">
          <button class="tz-toggle" type="button" aria-expanded="false" id="tzServicesBtn">
            Services <span class="tz-caret">&#9660;</span>
          </button>
          <div class="tz-dropdown" id="tzServicesPanel">
            <div class="tz-inner">
              <div class="tz-left">
                <h2>My Technical<br>Expertise &amp;<br>Solutions.</h2>
                <a class="tz-left-cta" href="#contact">Hire Me <span>&#x2192;</span></a>
              </div>
              <div class="tz-right">
                <div class="tz-panel-title">My Services</div>
                <div class="tz-grid">
                  <a class="tz-card c-sky" href="#experience">
                    <div class="tz-card-head"><span class="tz-icon bg-sky"><i class="fas fa-code"></i></span><h4>Coding Expertise</h4></div>
                    <p>HTML, CSS, JS, PHP, WordPress, React, Node.js, MySQL.</p>
                  </a>
                  <a class="tz-card c-green" href="#front-end-dev">
                    <div class="tz-card-head"><span class="tz-icon bg-green"><i class="fas fa-laptop-code"></i></span><h4>Front End Dev</h4></div>
                    <p>Responsive design, animations, and UI/UX implementation.</p>
                  </a>
                  <a class="tz-card c-purple" href="#technical-skills">
                    <div class="tz-card-head"><span class="tz-icon bg-purple"><i class="fas fa-cogs"></i></span><h4>Technical Skills</h4></div>
                    <p>WordPress, WooCommerce, SEO, API integrations, and tools.</p>
                  </a>
                  <a class="tz-card c-pink" href="#platform-expertise">
                    <div class="tz-card-head"><span class="tz-icon bg-pink"><i class="fas fa-layer-group"></i></span><h4>Platform Expertise</h4></div>
                    <p>WordPress, Elementor, Shopify, GoHighLevel, and more.</p>
                  </a>
                  <a class="tz-card c-indigo" href="#services">
                    <div class="tz-card-head"><span class="tz-icon bg-indigo"><i class="fas fa-rocket"></i></span><h4>Main Services</h4></div>
                    <p>Development, Optimization, and Security services.</p>
                  </a>
                </div>
              </div>
              <div class="tz-mobile-list">
                <a href="#coding-expertise">Coding Expertise</a>
                <a href="#front-end-dev">Front End Development</a>
                <a href="#technical-skills">Technical Skills</a>
                <a href="#platform-expertise">Platform Expertise</a>
                <a href="#main-services">Main Services</a>
              </div>
            </div>
          </div>
        </div>

        <!-- PROJECTS -->
        <div class="tz-item" id="tzProjectsMega">
          <button class="tz-toggle" type="button" aria-expanded="false" id="tzProjectsBtn">
            Projects <span class="tz-caret">&#9660;</span>
          </button>
          <div class="tz-dropdown" id="tzProjectsPanel">
            <div class="tz-inner">
              <div class="tz-left">
                <h2>Featured<br>Works &amp;<br>Portfolio.</h2>
                <a class="tz-left-cta" href="#projects">View All <span>&#x2192;</span></a>
              </div>
              <div class="tz-right">
                <div class="tz-panel-title">Project Categories</div>
                <div class="tz-grid">
                  <a class="tz-card c-sky" href="#react-projects">
                    <div class="tz-card-head"><span class="tz-icon bg-sky"><i class="fab fa-react"></i></span><h4>React &amp; Full Stack</h4></div>
                    <p>Dynamic web apps built with React, Node.js, and MySQL.</p>
                  </a>
                  <a class="tz-card c-green" href="#coding-projects">
                    <div class="tz-card-head"><span class="tz-icon bg-green"><i class="fas fa-code"></i></span><h4>Custom Coding</h4></div>
                    <p>HTML, CSS, JS, and Bootstrap based websites.</p>
                  </a>
                  <a class="tz-card c-purple" href="#wordpress-projects">
                    <div class="tz-card-head"><span class="tz-icon bg-purple"><i class="fab fa-wordpress"></i></span><h4>WordPress Sites</h4></div>
                    <p>Custom themes, Elementor, and WooCommerce stores.</p>
                  </a>
                  <a class="tz-card c-pink" href="#ecom-projects">
                    <div class="tz-card-head"><span class="tz-icon bg-pink"><i class="fas fa-shopping-cart"></i></span><h4>E-Commerce</h4></div>
                    <p>WooCommerce and Shopify online stores.</p>
                  </a>
                </div>
              </div>
              <div class="tz-mobile-list">
                <a href="#react-projects">React &amp; Full Stack</a>
                <a href="#coding-projects">Custom Coding</a>
                <a href="#wordpress-projects">WordPress Sites</a>
                <a href="#ecom-projects">E-Commerce</a>
              </div>
            </div>
          </div>
        </div>

       

      </nav>
    </div>

    <a class="tz-cta-btn" href="#contact">Contact</a>

  </div>
  <div class="tz-overlay" id="tzOverlay"></div>
</header>
  `;


  var root = document.getElementById("tz-header-root");
  if (!root) {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = html;
    document.body.insertBefore(wrapper.firstElementChild, document.body.firstChild);
  } else {
    root.outerHTML = html;
  }

  var header    = document.getElementById("tz-header");
  var hamburger = document.getElementById("tzHamburger");
  var closeBtn  = document.getElementById("tzCloseBtn");
  var nav       = document.getElementById("tzNav");
  var overlay   = document.getElementById("tzOverlay");

  var panels = [
    { btn: document.getElementById("tzExploreBtn"),  panel: document.getElementById("tzExplorePanel"),  item: document.getElementById("tzExploreMega") },
    { btn: document.getElementById("tzServicesBtn"), panel: document.getElementById("tzServicesPanel"), item: document.getElementById("tzServicesMega") },
    { btn: document.getElementById("tzProjectsBtn"), panel: document.getElementById("tzProjectsPanel"), item: document.getElementById("tzProjectsMega") }
  ];

  function closeAll() {
    panels.forEach(function(d) {
      if (d.panel) d.panel.classList.remove("is-open");
      if (d.btn)   d.btn.setAttribute("aria-expanded","false");
    });
  }

  function closeMenu() {
    nav.classList.remove("active");
    if (hamburger) hamburger.classList.remove("active");
    if (overlay)   overlay.classList.remove("active");
    document.body.style.overflow = "";
    closeAll();
  }
  function openMenu() {
    nav.classList.add("active");
    if (hamburger) hamburger.classList.add("active");
    if (overlay)   overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  if (hamburger) hamburger.addEventListener("click", function() {
    nav.classList.contains("active") ? closeMenu() : openMenu();
  });
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (overlay)  overlay.addEventListener("click", closeMenu);

  var closeTimer = null;

  function openPanel(d) {
    clearTimeout(closeTimer);
    closeAll();
    d.panel.classList.add("is-open");
    d.btn.setAttribute("aria-expanded","true");
  }
  function scheduleClose() {
    closeTimer = setTimeout(closeAll, 150);
  }

  panels.forEach(function(d) {
    if (!d.btn || !d.panel) return;

    d.item.addEventListener("mouseenter", function() {
      if (window.innerWidth >= 992) openPanel(d);
    });
    d.item.addEventListener("mouseleave", function() {
      if (window.innerWidth >= 992) scheduleClose();
    });
    d.panel.addEventListener("mouseenter", function() {
      if (window.innerWidth >= 992) clearTimeout(closeTimer);
    });
    d.panel.addEventListener("mouseleave", function() {
      if (window.innerWidth >= 992) scheduleClose();
    });

    d.btn.addEventListener("click", function(e) {
      if (window.innerWidth < 992) {
        e.preventDefault();
        var isOpen = d.panel.classList.contains("is-open");
        closeAll();
        if (!isOpen) {
          d.panel.classList.add("is-open");
          d.btn.setAttribute("aria-expanded","true");
        }
      }
    });
  });

  document.addEventListener("click", function(e) {
    if (window.innerWidth >= 992 && header && !header.contains(e.target)) closeAll();
  });

})();