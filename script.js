/* =========================================================
   ORGANICO EPSOM
   Modern café / health food design
========================================================= */

:root {
    --green-950: #17382b;
    --green-900: #1e4635;
    --green-800: #285641;
    --green-700: #356b4f;
    --green-100: #e4eee7;

    --cream: #f6f1e7;
    --cream-light: #fbf8f1;
    --cream-dark: #e9dfce;

    --coral: #e4775d;
    --coral-dark: #c95e47;

    --text: #20251f;
    --muted: #73786f;
    --line: #ddd7ca;

    --white: #ffffff;

    --shadow: 0 20px 60px rgba(23, 56, 43, 0.10);

    --serif: "Playfair Display", Georgia, serif;
    --sans: "DM Sans", Arial, sans-serif;

    --radius: 24px;
    --max-width: 1180px;
}


/* =========================================================
   RESET
========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: var(--cream-light);
    color: var(--text);
    font-family: var(--sans);
    line-height: 1.6;
    overflow-x: hidden;
}

img {
    display: block;
    width: 100%;
}

a {
    color: inherit;
    text-decoration: none;
}

button,
a {
    -webkit-tap-highlight-color: transparent;
}

button {
    font-family: inherit;
}

::selection {
    background: var(--green-900);
    color: white;
}


/* =========================================================
   GLOBAL
========================================================= */

.section-shell,
.nav-shell {
    width: min(calc(100% - 48px), var(--max-width));
    margin: 0 auto;
}

.section {
    padding: 120px 0;
}

.section-label {
    color: var(--green-700);
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
}

.section-heading {
    max-width: 700px;
    margin-bottom: 55px;
}

.section-heading.centered {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}

.section-heading h2,
.menu-heading h2,
.social-heading h2,
.visit-copy h2,
.about-copy h2 {
    margin-top: 14px;
    color: var(--green-950);
    font-family: var(--serif);
    font-size: clamp(2.5rem, 5vw, 4.4rem);
    line-height: 1.02;
    letter-spacing: -0.04em;
}

.section-heading h2 em,
.menu-heading h2 em,
.social-heading h2 em,
.visit-copy h2 em,
.about-copy h2 em {
    color: var(--coral);
    font-weight: 500;
}

.section-heading p {
    max-width: 620px;
    margin: 20px auto 0;
    color: var(--muted);
    font-size: 1.05rem;
}


/* =========================================================
   HEADER
========================================================= */

.site-header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(251, 248, 241, 0.92);
    border-bottom: 1px solid rgba(32, 37, 31, 0.08);
    backdrop-filter: blur(18px);
}

.nav-shell {
    min-height: 78px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}

.brand {
    display: inline-flex;
    align-items: center;
    gap: 10px;
}

.brand-mark {
    position: relative;
    width: 31px;
    height: 31px;
    display: block;
}

.brand-mark span {
    position: absolute;
    width: 14px;
    height: 25px;
    background: var(--green-800);
    border-radius: 100% 0 100% 0;
    transform: rotate(35deg);
}

.brand-mark span:nth-child(1) {
    top: 1px;
    left: 3px;
}

.brand-mark span:nth-child(2) {
    top: 8px;
    left: 10px;
    transform: rotate(110deg);
}

.brand-mark span:nth-child(3) {
    top: 4px;
    left: 16px;
    transform: rotate(65deg);
    opacity: 0.7;
}

.brand-text {
    display: flex;
    flex-direction: column;
    line-height: 1;
}

.brand-text strong {
    color: var(--green-950);
    font-family: var(--serif);
    font-size: 1.55rem;
    font-weight: 700;
    letter-spacing: -0.04em;
}

.brand-text small {
    margin-top: 4px;
    color: var(--green-700);
    font-size: 0.48rem;
    font-weight: 700;
    letter-spacing: 0.3em;
}

.main-nav {
    display: flex;
    align-items: center;
    gap: 28px;
}

.main-nav > a:not(.nav-order) {
    color: var(--text);
    font-size: 0.88rem;
    font-weight: 600;
    transition: color 0.2s ease;
}

.main-nav > a:not(.nav-order):hover {
    color: var(--coral-dark);
}

.nav-order {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 18px;
    background: var(--coral);
    color: white;
    border-radius: 999px;
    font-size: 0.84rem;
    font-weight: 700;
    transition: transform 0.2s ease, background 0.2s ease;
}

.nav-order:hover {
    background: var(--coral-dark);
    transform: translateY(-2px);
}

.menu-toggle {
    display: none;
    width: 44px;
    height: 44px;
    border: 0;
    border-radius: 50%;
    background: var(--green-900);
    cursor: pointer;
}

.menu-toggle span {
    display: block;
    width: 18px;
    height: 2px;
    margin: 4px auto;
    background: white;
    border-radius: 10px;
}


/* =========================================================
   HERO
========================================================= */

.hero {
    position: relative;
    overflow: hidden;
    padding: 90px 0 100px;
    background:
        radial-gradient(circle at 8% 20%, rgba(228, 119, 93, 0.09), transparent 27%),
        radial-gradient(circle at 92% 70%, rgba(53, 107, 79, 0.10), transparent 32%),
        var(--cream-light);
}

.hero-shell {
    width: min(calc(100% - 48px), var(--max-width));
    margin: auto;
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    align-items: center;
    gap: 70px;
}

.eyebrow {
    display: flex;
    align-items: center;
    gap: 9px;
    color: var(--green-700);
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.17em;
}

.eyebrow-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--coral);
}

.hero h1 {
    max-width: 650px;
    margin-top: 22px;
    color: var(--green-950);
    font-family: var(--serif);
    font-size: clamp(3.5rem, 6.4vw, 6.6rem);
    line-height: 0.94;
    letter-spacing: -0.055em;
}

.hero h1 em {
    display: block;
    color: var(--coral);
    font-weight: 500;
}

.hero-description {
    max-width: 560px;
    margin-top: 28px;
    color: var(--muted);
    font-size: 1.08rem;
}

.hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 32px;
}

.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    min-height: 52px;
    padding: 0 22px;
    border-radius: 999px;
    font-size: 0.88rem;
    font-weight: 700;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.button span {
    font-size: 1rem;
}

.button-primary {
    background: var(--coral);
    color: white;
    box-shadow: 0 12px 30px rgba(228, 119, 93, 0.24);
}

.button-primary:hover {
    background: var(--coral-dark);
    transform: translateY(-2px);
}

.button-secondary {
    border: 1px solid var(--green-800);
    color: var(--green-900);
}

.button-secondary:hover {
    background: var(--green-900);
    color: white;
    transform: translateY(-2px);
}

.hero-note {
    display: flex;
    align-items: center;
    gap: 9px;
    margin-top: 25px;
    color: var(--muted);
    font-size: 0.78rem;
}

.mini-leaf {
    color: var(--coral);
}

.hero-visual {
    position: relative;
    min-height: 590px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-image-card {
    position: relative;
    width: min(100%, 530px);
    height: 550px;
    overflow: hidden;
    border-radius: 160px 30px 30px 30px;
    box-shadow: var(--shadow);
    background: var(--cream-dark);
}

.hero-image-card::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
        to top,
        rgba(23, 56, 43, 0.7),
        transparent 50%
    );
}

.hero-image-card img {
    height: 100%;
    object-fit: cover;
}

.hero-image-label {
    position: absolute;
    z-index: 2;
    left: 28px;
    bottom: 26px;
    color: white;
}

.hero-image-label span {
    display: block;
    margin-bottom: 5px;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
}

.hero-image-label strong {
    font-family: var(--serif);
    font-size: 1.8rem;
    font-weight: 500;
}

.floating-card {
    position: absolute;
    z-index: 5;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 18px;
    border: 1px solid rgba(32, 37, 31, 0.08);
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0 20px 50px rgba(23, 56, 43, 0.12);
    backdrop-filter: blur(10px);
}

.floating-card-top {
    top: 45px;
    right: -20px;
}

.floating-card-bottom {
    bottom: 45px;
    left: -35px;
}

.floating-icon {
    display: grid;
    width: 38px;
    height: 38px;
    place-items: center;
    border-radius: 12px;
    background: var(--green-100);
    color: var(--green-900);
}

.floating-card strong,
.floating-card small {
    display: block;
}

.floating-card strong {
    color: var(--green-950);
    font-size: 0.82rem;
}

.floating-card small {
    color: var(--muted);
    font-size: 0.7rem;
}


/* =========================================================
   FEATURE STRIP
========================================================= */

.feature-strip {
    background: var(--green-950);
    color: white;
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.feature-item {
    min-height: 190px;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 20px;
    padding: 30px;
    border-right: 1px solid rgba(255, 255, 255, 0.12);
}

.feature-item:last-child {
    border-right: 0;
}

.feature-icon {
    display: grid;
    width: 50px;
    height: 50px;
    place-items: center;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 50%;
    color: #fff;
    font-size: 1.15rem;
}

.feature-number {
    display: block;
    margin-bottom: 5px;
    color: rgba(255, 255, 255, 0.42);
    font-size: 0.67rem;
    font-weight: 700;
    letter-spacing: 0.15em;
}

.feature-item h3 {
    font-family: var(--serif);
    font-size: 1.35rem;
    font-weight: 500;
}

.feature-item p {
    max-width: 280px;
    margin-top: 6px;
    color: rgba(255, 255, 255, 0.64);
    font-size: 0.82rem;
}


/* =========================================================
   ABOUT
========================================================= */

.about-grid {
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    align-items: center;
    gap: 100px;
}

.about-image-wrap {
    position: relative;
}

.about-image-main {
    overflow: hidden;
    height: 590px;
    border-radius: 30px;
    box-shadow: var(--shadow);
}

.about-image-main img {
    height: 100%;
    object-fit: cover;
}

.about-stamp {
    position: absolute;
    right: -35px;
    bottom: 35px;
    width: 145px;
    height: 145px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(32, 37, 31, 0.1);
    border-radius: 50%;
    background: var(--coral);
    color: white;
    text-align: center;
    transform: rotate(7deg);
}

.about-stamp span {
    font-family: var(--serif);
    font-size: 1.15rem;
}

.about-stamp strong {
    font-size: 0.8rem;
    letter-spacing: 0.15em;
}

.about-stamp small {
    margin-top: 4px;
    font-size: 0.43rem;
    letter-spacing: 0.1em;
}

.about-copy .large-copy {
    margin-top: 28px;
    color: var(--green-900);
    font-family: var(--serif);
    font-size: 1.5rem;
    line-height: 1.45;
}

.about-copy > p:not(.large-copy) {
    margin-top: 18px;
    color: var(--muted);
}

.about-points {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-top: 40px;
}

.about-points div {
    padding-top: 17px;
    border-top: 1px solid var(--line);
}

.about-points span {
    display: block;
    color: var(--coral);
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.12em;
}

.about-points strong {
    display: block;
    margin-top: 5px;
    color: var(--green-950);
    font-size: 0.82rem;
}


/* =========================================================
   WHY ORGANICO
========================================================= */

.why-section {
    padding: 120px 0;
    background: var(--cream);
}

.why-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 16px;
}

.why-card {
    min-height: 270px;
    padding: 32px;
    border: 1px solid rgba(32, 37, 31, 0.08);
    border-radius: var(--radius);
    background: var(--cream-light);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.why-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow);
}

.why-card-large {
    grid-row: span 2;
    min-height: 556px;
    background: var(--green-900);
    color: white;
}

.why-number {
    color: var(--coral);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.15em;
}

.why-content {
    margin-top: 70px;
}

.why-card-large .why-content {
    margin-top: 240px;
}

.why-icon {
    display: block;
    margin-bottom: 15px;
    font-size: 1.7rem;
}

.why-content h3 {
    color: var(--green-950);
    font-family: var(--serif);
    font-size: 1.7rem;
    line-height: 1.1;
}

.why-card-large .why-content h3 {
    color: white;
    font-size: 2.6rem;
}

.why-content p {
    max-width: 500px;
    margin-top: 12px;
    color: var(--muted);
    font-size: 0.88rem;
}

.why-card-large .why-content p {
    color: rgba(255, 255, 255, 0.68);
}


/* =========================================================
   MENU
========================================================= */

.menu-section {
    background: var(--cream-light);
}

.menu-heading {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 40px;
    margin-bottom: 45px;
}

.text-link,
.social-link {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    color: var(--green-900);
    font-size: 0.82rem;
    font-weight: 700;
    white-space: nowrap;
}

.text-link:hover,
.social-link:hover {
    color: var(--coral-dark);
}

.menu-tabs {
    display: flex;
    gap: 8px;
    margin-bottom: 42px;
    padding: 6px;
    overflow-x: auto;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: white;
}

.menu-tab {
    flex: 1;
    min-width: 130px;
    padding: 14px 22px;
    border: 0;
    border-radius: 999px;
    background: transparent;
    color: var(--muted);
    cursor: pointer;
    font-size: 0.84rem;
    font-weight: 700;
    white-space: nowrap;
    transition: background 0.2s ease, color 0.2s ease;
}

.menu-tab:hover {
    color: var(--green-900);
}

.menu-tab.active {
    background: var(--green-900);
    color: white;
}

.menu-panel {
    display: none;
}

.menu-panel.active {
    display: block;
    animation: menuFade 0.3s ease;
}

@keyframes menuFade {
    from {
        opacity: 0;
        transform: translateY(8px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.menu-category-heading {
    display: grid;
    grid-template-columns: 160px 1fr;
    align-items: end;
    gap: 20px;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--line);
}

.menu-category-heading > span {
    color: var(--coral);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.14em;
}

.menu-category-heading h3 {
    color: var(--green-950);
    font-family: var(--serif);
    font-size: 2.2rem;
    font-weight: 500;
}

.menu-category-heading p {
    grid-column: 2;
    margin-top: -10px;
    color: var(--muted);
    font-size: 0.85rem;
}

.menu-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 40px;
}

.menu-item {
    padding: 25px 0;
    border-bottom: 1px solid var(--line);
}

.menu-item-top {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 20px;
}

.menu-item h4 {
    color: var(--green-950);
    font-family: var(--serif);
    font-size: 1.15rem;
    line-height: 1.2;
    font-weight: 600;
}

.menu-item strong {
    flex-shrink: 0;
    color: var(--green-800);
    font-size: 0.9rem;
}

.menu-item p {
    max-width: 570px;
    margin-top: 8px;
    color: var(--muted);
    font-size: 0.78rem;
}

.featured-menu-item {
    padding-left: 18px;
    border-left: 3px solid var(--coral);
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 10px;
}

.tags span {
    padding: 4px 8px;
    border-radius: 999px;
    background: var(--green-100);
    color: var(--green-800);
    font-size: 0.61rem;
    font-weight: 700;
}

.menu-subcategory {
    margin-top: 55px;
}

.menu-subcategory > h4 {
    margin-bottom: 16px;
    color: var(--green-900);
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
}

.drink-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-top: 1px solid var(--line);
    border-left: 1px solid var(--line);
}

.drink-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 18px;
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    background: white;
}

.drink-item span {
    color: var(--text);
    font-size: 0.84rem;
}

.drink-item strong {
    color: var(--green-800);
    font-size: 0.82rem;
}

.compact-list {
    margin-top: 0;
}

.menu-note {
    margin-top: 50px;
    padding: 18px 20px;
    border-radius: 15px;
    background: var(--cream);
    color: var(--muted);
    font-size: 0.75rem;
}

.menu-note strong {
    color: var(--green-900);
}


/* =========================================================
   IMAGE BREAK
========================================================= */

.image-break {
    position: relative;
    height: 620px;
    overflow: hidden;
}

.image-break > img {
    height: 100%;
    object-fit: cover;
}

.image-break-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: flex-end;
    padding: 70px;
    background: linear-gradient(
        to top,
        rgba(23, 56, 43, 0.85),
        rgba(23, 56, 43, 0.05) 70%
    );
    color: white;
}

.image-break-overlay span {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.2em;
}

.image-break-overlay h2 {
    margin-top: 8px;
    font-family: var(--serif);
    font-size: clamp(3rem, 6vw, 5.5rem);
    line-height: 0.95;
}

.image-break-overlay p {
    margin-top: 12px;
    color: rgba(255, 255, 255, 0.7);
}


/* =========================================================
   REVIEWS
========================================================= */

.reviews-section {
    background: var(--cream);
}

.reviews-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}

.review-card {
    min-height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px;
    border: 1px solid rgba(32, 37, 31, 0.08);
    border-radius: var(--radius);
    background: var(--cream-light);
}

.review-card-featured {
    background: var(--green-900);
    color: white;
    transform: translateY(-18px);
}

.review-stars {
    color: var(--coral);
    letter-spacing: 0.15em;
}

.review-card blockquote {
    margin: 35px 0;
    font-family: var(--serif);
    font-size: 1.4rem;
    line-height: 1.35;
}

.review-meta strong,
.review-meta span {
    display: block;
}

.review-meta strong {
    color: var(--green-950);
    font-size: 0.8rem;
}

.review-card-featured .review-meta strong {
    color: white;
}

.review-meta span {
    margin-top: 3px;
    color: var(--muted);
    font-size: 0.68rem;
}

.review-card-featured .review-meta span {
    color: rgba(255, 255, 255, 0.6);
}


/* =========================================================
   SOCIAL GRID
========================================================= */

.social-section {
    padding: 110px 0;
    background: var(--cream-light);
}

.social-heading {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 30px;
    margin-bottom: 42px;
}

.social-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 240px;
    gap: 10px;
}

.social-photo {
    position: relative;
    overflow: hidden;
    border-radius: 18px;
}

.social-photo-large {
    grid-column: span 2;
}

.social-photo img {
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.social-photo:hover img {
    transform: scale(1.05);
}

.social-photo::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
        to top,
        rgba(23, 56, 43, 0.55),
        transparent 60%
    );
}

.social-photo span {
    position: absolute;
    z-index: 2;
    left: 16px;
    bottom: 13px;
    color: white;
    font-size: 0.72rem;
    font-weight: 700;
}


/* =========================================================
   VISIT
========================================================= */

.visit-section {
    padding: 120px 0;
    background: var(--green-950);
    color: white;
}

.visit-grid {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 70px;
    align-items: center;
}

.visit-copy .section-label {
    color: var(--coral);
}

.visit-copy h2 {
    color: white;
}

.visit-copy > p {
    max-width: 520px;
    margin-top: 25px;
    color: rgba(255, 255, 255, 0.64);
}

.contact-list {
    margin-top: 38px;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.contact-row {
    display: grid;
    grid-template-columns: 42px 1fr auto;
    align-items: center;
    gap: 15px;
    padding: 18px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.contact-icon {
    display: grid;
    width: 37px;
    height: 37px;
    place-items: center;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 50%;
    color: var(--coral);
}

.contact-row small,
.contact-row strong {
    display: block;
}

.contact-row small {
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.61rem;
    font-weight: 700;
    letter-spacing: 0.15em;
}

.contact-row strong {
    margin-top: 3px;
    color: white;
    font-size: 0.84rem;
}

.contact-arrow {
    color: var(--coral);
}

.hours {
    margin-top: 35px;
}

.hours-heading {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    color: rgba(255, 255, 255, 0.45);
    font-size: 0.64rem;
    font-weight: 700;
    letter-spacing: 0.14em;
}

.hours-heading strong {
    color: var(--coral);
}

.hours-row {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 10px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.8rem;
}

.hours-row strong {
    color: white;
}

.map-card {
    position: relative;
    height: 610px;
    overflow: hidden;
    border-radius: 30px;
    background: #dfe4dd;
}

.map-card iframe {
    width: 100%;
    height: 100%;
    border: 0;
    filter: saturate(0.8);
}

.map-overlay-card {
    position: absolute;
    left: 22px;
    right: 22px;
    bottom: 22px;
    display: grid;
    grid-template-columns: 42px 1fr auto;
    align-items: center;
    gap: 14px;
    padding: 16px;
    border-radius: 17px;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

.map-pin {
    display: grid;
    width: 40px;
    height: 40px;
    place-items: center;
    border-radius: 12px;
    background: var(--green-100);
    color: var(--green-900);
}

.map-overlay-card strong,
.map-overlay-card small {
    display: block;
}

.map-overlay-card strong {
    color: var(--green-950);
    font-size: 0.82rem;
}

.map-overlay-card small {
    color: var(--muted);
    font-size: 0.68rem;
}

.map-overlay-card a {
    padding: 9px 13px;
    border-radius: 999px;
    background: var(--coral);
    color: white;
    font-size: 0.68rem;
    font-weight: 700;
}


/* =========================================================
   FOOTER
========================================================= */

.site-footer {
    padding: 70px 0 25px;
    background: #112b21;
    color: white;
}

.footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 50px;
}

.footer-logo .brand-text strong {
    color: white;
}

.footer-logo .brand-text small {
    color: rgba(255, 255, 255, 0.55);
}

.footer-logo .brand-mark span {
    background: var(--coral);
}

.footer-brand p {
    max-width: 250px;
    margin-top: 20px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.8rem;
}

.footer-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
}

.footer-column h4 {
    margin-bottom: 8px;
    color: var(--coral);
    font-size: 0.68rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
}

.footer-column a {
    color: rgba(255, 255, 255, 0.62);
    font-size: 0.78rem;
    transition: color 0.2s ease;
}

.footer-column a:hover {
    color: white;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 60px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.35);
    font-size: 0.65rem;
}


/* =========================================================
   MOBILE ACTION BAR
========================================================= */

.mobile-action-bar {
    display: none;
}


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 1050px) {

    .hero-shell {
        gap: 40px;
    }

    .floating-card-top {
        right: -5px;
    }

    .floating-card-bottom {
        left: -10px;
    }

    .about-grid {
        gap: 55px;
    }

    .visit-grid {
        gap: 40px;
    }

}


@media (max-width: 900px) {

    .section-shell,
    .nav-shell {
        width: min(calc(100% - 36px), var(--max-width));
    }

    .menu-toggle {
        display: block;
    }

    .main-nav {
        position: absolute;
        top: 78px;
        left: 18px;
        right: 18px;
        display: none;
        flex-direction: column;
        align-items: stretch;
        gap: 4px;
        padding: 12px;
        border: 1px solid var(--line);
        border-radius: 20px;
        background: rgba(251, 248, 241, 0.98);
        box-shadow: var(--shadow);
    }

    .main-nav.open {
        display: flex;
    }

    .main-nav > a:not(.nav-order) {
        padding: 13px;
        border-radius: 12px;
    }

    .main-nav > a:not(.nav-order):hover {
        background: var(--cream);
    }

    .nav-order {
        justify-content: center;
        margin-top: 5px;
    }

    .hero-shell,
    .about-grid,
    .visit-grid {
        grid-template-columns: 1fr;
    }

    .hero-copy {
        max-width: 750px;
    }

    .hero-visual {
        min-height: 500px;
    }

    .hero-image-card {
        height: 500px;
    }

    .about-grid {
        gap: 60px;
    }

    .about-image-main {
        height: 500px;
    }

    .why-grid {
        grid-template-columns: 1fr 1fr;
    }

    .why-card-large {
        grid-row: auto;
        grid-column: span 2;
        min-height: 400px;
    }

    .why-card-large .why-content {
        margin-top: 130px;
    }

    .reviews-grid {
        grid-template-columns: 1fr;
    }

    .review-card-featured {
        transform: none;
    }

    .visit-grid {
        gap: 50px;
    }

    .map-card {
        height: 500px;
    }

    .footer-grid {
        grid-template-columns: 2fr 1fr 1fr;
    }

}


@media (max-width: 700px) {

    body {
        padding-bottom: 72px;
    }

    .section {
        padding: 80px 0;
    }

    .section-shell,
    .nav-shell {
        width: min(calc(100% - 28px), var(--max-width));
    }

    .nav-shell {
        min-height: 70px;
    }

    .main-nav {
        top: 70px;
        left: 14px;
        right: 14px;
    }

    .hero {
        padding: 65px 0 75px;
    }

    .hero-shell {
        width: min(calc(100% - 28px), var(--max-width));
    }

    .hero h1 {
        font-size: clamp(3rem, 15vw, 4.8rem);
    }

    .hero-description {
        font-size: 0.98rem;
    }

    .hero-actions {
        display: grid;
        grid-template-columns: 1fr;
    }

    .button {
        width: 100%;
    }

    .hero-visual {
        min-height: 410px;
    }

    .hero-image-card {
        height: 410px;
        border-radius: 110px 22px 22px 22px;
    }

    .floating-card {
        padding: 10px 13px;
    }

    .floating-card-top {
        top: 20px;
        right: -3px;
    }

    .floating-card-bottom {
        bottom: 20px;
        left: -3px;
    }

    .floating-icon {
        width: 32px;
        height: 32px;
    }

    .feature-grid {
        grid-template-columns: 1fr;
    }

    .feature-item {
        min-height: 150px;
        border-right: 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    }

    .feature-item:last-child {
        border-bottom: 0;
    }

    .about-stamp {
        right: 10px;
        bottom: 20px;
        width: 115px;
        height: 115px;
    }

    .about-points {
        grid-template-columns: 1fr;
    }

    .why-grid {
        grid-template-columns: 1fr;
    }

    .why-card-large {
        grid-column: auto;
        min-height: 430px;
    }

    .why-card-large .why-content {
        margin-top: 150px;
    }

    .menu-heading {
        display: block;
    }

    .menu-heading .text-link {
        margin-top: 20px;
    }

    .menu-tabs {
        border-radius: 16px;
    }

    .menu-tab {
        min-width: 115px;
        padding: 12px 15px;
    }

    .menu-category-heading {
        display: block;
    }

    .menu-category-heading h3 {
        margin-top: 7px;
    }

    .menu-category-heading p {
        margin-top: 8px;
    }

    .menu-list {
        grid-template-columns: 1fr;
    }

    .drink-grid {
        grid-template-columns: 1fr;
    }

    .image-break {
        height: 470px;
    }

    .image-break-overlay {
        padding: 30px 20px;
    }

    .social-heading {
        display: block;
    }

    .social-link {
        margin-top: 18px;
    }

    .social-grid {
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 170px;
    }

    .social-photo-large {
        grid-column: span 2;
    }

    .visit-section {
        padding: 80px 0;
    }

    .map-card {
        height: 430px;
    }

    .map-overlay-card {
        left: 12px;
        right: 12px;
        bottom: 12px;
        grid-template-columns: 38px 1fr;
    }

    .map-overlay-card a {
        grid-column: 1 / -1;
        text-align: center;
    }

    .footer-grid {
        grid-template-columns: 1fr 1fr;
        gap: 35px;
    }

    .footer-brand {
        grid-column: span 2;
    }

    .footer-bottom {
        display: block;
    }

    .footer-bottom span {
        display: block;
        margin-top: 8px;
    }

    .mobile-action-bar {
        position: fixed;
        z-index: 2000;
        right: 0;
        bottom: 0;
        left: 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height: 68px;
        border-top: 1px solid rgba(32, 37, 31, 0.1);
        background: rgba(251, 248, 241, 0.96);
        backdrop-filter: blur(16px);
    }

    .mobile-action-bar a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 7px;
        color: var(--green-900);
        font-size: 0.72rem;
        font-weight: 700;
    }

    .mobile-action-bar a:last-child {
        background: var(--coral);
        color: white;
    }

    .mobile-action-bar span {
        font-size: 0.9rem;
    }

}


@media (max-width: 430px) {

    .brand-text strong {
        font-size: 1.35rem;
    }

    .hero-image-card {
        height: 370px;
    }

    .floating-card strong {
        font-size: 0.72rem;
    }

    .floating-card small {
        font-size: 0.6rem;
    }

    .why-card {
        padding: 25px;
    }

    .review-card {
        min-height: 320px;
        padding: 25px;
    }

    .social-grid {
        gap: 7px;
    }

}    });});
