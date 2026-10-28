
:root {
  --forest: #173d32;
  --forest-dark: #102b23;
  --gold: #d8b777;
  --ivory: #f7f5ef;
  --white: #fffefa;
  --ink: #24352f;
  --muted: #707a72;
  --line: #e4e3dc;
  --serif: "Playfair Display", Georgia, serif;
  --sans: "DM Sans", Arial, sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  margin: 0;
  color: var(--ink);
  background: var(--white);
  font-family: var(--sans);
  line-height: 1.7;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  width: 100%;
  object-fit: cover;
}

button, input, select, textarea {
  font: inherit;
}

button, a, input, select, textarea {
  -webkit-tap-highlight-color: transparent;
}

a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 3px solid var(--gold);
  outline-offset: 3px;
}

/* Header and navigation */
.header {
  min-height: 82px;
  padding: 14px max(5%, calc((100% - 1180px)/2));
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background: var(--white);
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid #eeeae0;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .12em;
  color: var(--forest);
}

.logo small {
  display: block;
  margin-top: 3px;
  color: #9b8455;
  font-size: 9px;
  letter-spacing: .25em;
}

.logo-icon {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  background: var(--forest);
  color: var(--gold);
  border-radius: 50% 50% 50% 4px;
  font: 600 24px var(--serif);
}

#navigation {
  display: flex;
  align-items: center;
  gap: 27px;
  font-size: 12px;
  font-weight: 600;
}

#navigation a:hover {
  color: #a17c3f;
}

#navigation .nav-button {
  padding: 12px 16px;
  color: white;
  background: var(--forest);
}

.menu-toggle {
  display: none;
  border: 0;
  background: transparent;
  color: var(--forest);
  font-size: 25px;
  cursor: pointer;
}

/* Hero section */
.hero {
  min-height: 660px;
  height: min(760px, 86svh);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 70px max(7%, calc((100% - 1120px)/2));
  color: white;
  position: relative;
  background:
    linear-gradient(90deg, rgba(8,31,23,.86), rgba(8,31,23,.5) 48%, rgba(8,31,23,.08)),
    url("https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=2200&q=90") center 48%/cover;
}

.hero-content {
  max-width: 670px;
}

.eyebrow {
  margin: 0 0 17px;
  color: #9b8047;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .18em;
}

.hero .eyebrow {
  color: #ead8ad;
}

.hero h1 {
  margin: 0;
  font: 500 clamp(48px, 7vw, 84px)/1.07 var(--serif);
  letter-spacing: -.035em;
}

h1 em, h2 em {
  color: #c9a96a;
  font-weight: 500;
}

.hero-content > p:not(.eyebrow) {
  max-width: 490px;
  color: #e2e7e0;
  font-size: 15px;
  line-height: 1.9;
  margin: 24px 0 29px;
}

.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  min-height: 48px;
  padding: 12px 19px;
  border: 1px solid var(--forest);
  background: var(--forest);
  color: white;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  transition: transform .2s, background .2s;
}

.button:hover {
  transform: translateY(-2px);
  background: #285244;
}

.hero .button {
  background: var(--gold);
  border-color: var(--gold);
  color: #20372c;
}

.hero .button:hover {
  background: #e6c98f;
}

.hero-caption {
  position: absolute;
  bottom: 25px;
  right: 6%;
  font-size: 9px;
  letter-spacing: .18em;
  color: #f0eee6;
}

/* General sections */
.section {
  padding: 95px max(5%, calc((100% - 1120px)/2));
}

.section h2,
.booking h2 {
  color: var(--forest);
  font: 500 clamp(38px, 5vw, 59px)/1.13 var(--serif);
  letter-spacing: -.025em;
  margin: 0 0 18px;
}

.intro {
  text-align: center;
  background: var(--ivory);
}

.intro .section-description {
  max-width: 650px;
  margin: 0 auto;
}

.section-description {
  max-width: 660px;
  color: var(--muted);
  line-height: 1.9;
  font-size: 14px;
}

/* Destination cards */
.destinations {
  background: var(--white);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 35px;
}

.destination-card {
  border: 1px solid var(--line);
  background: white;
  overflow: hidden;
}

.destination-card img {
  height: 235px;
  transition: transform .5s;
}

.destination-card:hover img {
  transform: scale(1.04);
}

.card-content {
  padding: 23px;
}

.card-content > span {
  color: #9b8047;
  font-size: 9px;
  letter-spacing: .16em;
  font-weight: 700;
}

.card-content h3,
.experience h3,
.package h3 {
  color: var(--forest);
  font: 500 25px/1.25 var(--serif);
  margin: 9px 0;
}

.card-content p,
.experience p:not(.experience-number),
.package p:not(.eyebrow) {
  color: var(--muted);
  font-size: 12px;
  line-height: 1.9;
}

.card-content a,
.package a {
  display: inline-block;
  margin-top: 10px;
  color: var(--forest);
  font-size: 11px;
  font-weight: 700;
  border-bottom: 1px solid #d4c6a7;
  padding-bottom: 6px;
}

/* Experiences */
.experience {
  background: var(--forest);
  color: white;
}

.experience > .eyebrow {
  color: var(--gold);
}

.experience h2 {
  color: white;
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 36px;
  border-top: 1px solid #ffffff36;
}

.experience-grid article {
  padding: 25px 20px 10px 0;
}

.experience-grid article + article {
  border-left: 1px solid #ffffff36;
  padding-left: 25px;
}

.experience-number {
  color: var(--gold);
  font-size: 11px;
  letter-spacing: .12em;
}

.experience h3 {
  color: white;
}

.experience p:not(.experience-number) {
  color: #cbd4cc;
}

/* Tour packages */
.packages {
  background: var(--ivory);
}

.package-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 17px;
  margin-top: 35px;
}

.package {
  padding: 25px;
  border: 1px solid var(--line);
  background: white;
}

.package.featured {
  background: #ece9dc;
  border-color: #d8c79f;
}

.package h3 {
  margin-top: 28px;
}

.disclaimer {
  margin-top: 20px;
  font-size: 10px;
  color: #777f77;
}

/* Booking form */
.booking {
  background: #f1f0e9;
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  gap: 65px;
  align-items: start;
}

.booking-intro > p:not(.eyebrow) {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.9;
}

#booking-form {
  padding: 30px;
  background: var(--white);
  border: 1px solid var(--line);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

#booking-form label {
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 16px;
  color: #46574d;
  font-size: 11px;
  font-weight: 600;
}

#booking-form input:not([type=checkbox]),
#booking-form select,
#booking-form textarea,
#enquiry-message {
  width: 100%;
  min-height: 44px;
  padding: 11px 12px;
  border: 1px solid #dedfd7;
  background: #fff;
  color: var(--ink);
  border-radius: 0;
  font-size: 12px;
}

#booking-form textarea,
#enquiry-message {
  resize: vertical;
}

#booking-form .consent {
  flex-direction: row;
  align-items: flex-start;
  font-weight: 400;
  line-height: 1.6;
}

.consent input {
  margin-top: 4px;
  accent-color: var(--forest);
}

#booking-form button {
  width: 100%;
}

.form-note {
  color: #81887f;
  font-size: 10px;
  line-height: 1.7;
}

#form-status {
  color: var(--forest);
  font-size: 12px;
}

/* Footer */
footer {
  padding: 35px max(5%, calc((100% - 1120px)/2)) 18px;
  background: var(--forest-dark);
  color: white;
}

.footer-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 25px;
  border-bottom: 1px solid #ffffff2c;
}

.footer-logo {
  color: white;
}

.footer-logo .logo-icon {
  background: #285244;
}

.footer-logo small {
  color: var(--gold);
}

.footer-main > p {
  font: italic 17px/1.6 var(--serif);
  color: #e1e3d9;
}

.footer-main > a:last-child,
.footer-bottom {
  color: #e0d0a9;
  font-size: 10px;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  padding-top: 17px;
  color: #bfc9c0;
}

/* Enquiry dialog */
#enquiry-dialog {
  width: min(540px, calc(100% - 28px));
  padding: 30px;
  border: 0;
  color: var(--ink);
  background: var(--white);
}

#enquiry-dialog::backdrop {
  background: #0a2019c9;
}

#enquiry-dialog h2 {
  font: 500 37px var(--serif);
  color: var(--forest);
  margin: 0;
}

.dialog-note {
  font-size: 12px;
  color: var(--muted);
  line-height: 1.8;
}

.close-dialog {
  position: absolute;
  right: 12px;
  top: 8px;
  border: 0;
  background: transparent;
  font-size: 28px;
  cursor: pointer;
}

.dialog-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
}

.button-outline {
  background: transparent;
  color: var(--forest);
}

#copy-status {
  font-size: 11px;
  color: var(--forest);
}

/* Tablet and mobile screens */
@media (max-width: 800px) {
  .header {
    padding-inline: 20px;
  }

  .menu-toggle {
    display: block;
  }

  #navigation {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 14px 20px 22px;
    background: var(--white);
    box-shadow: 0 14px 20px #102b2314;
    align-items: stretch;
    flex-direction: column;
    gap: 0;
  }

  #navigation.open {
    display: flex;
  }

  #navigation a {
    padding: 12px 4px;
    border-bottom: 1px solid var(--line);
  }

  #navigation .nav-button {
    text-align: center;
    margin-top: 10px;
  }

  .hero {
    min-height: 600px;
    height: 78svh;
    padding-inline: 7%;
    background-position: 58% center;
  }

  .card-grid {
    grid-template-columns: 1fr 1fr;
  }

  .destination-card:last-child {
    grid-column: span 2;
  }

  .destination-card:last-child img {
    height: 280px;
  }

  .booking {
    grid-template-columns: 1fr;
    gap: 25px;
  }
}

@media (max-width: 520px) {
  .header {
    min-height: 70px;
  }

  .logo {
    font-size: 11px;
  }

  .logo-icon {
    width: 36px;
    height: 36px;
  }

  .hero {
    min-height: 590px;
    height: 78svh;
  }

  .hero h1 {
    font-size: clamp(44px, 12vw, 61px);
  }

  .hero-content > p:not(.eyebrow) {
    font-size: 13px;
  }

  .hero-caption {
    font-size: 7px;
    right: 18px;
  }

  .section {
    padding: 65px 20px;
  }

  .section h2 {
    font-size: 42px;
  }

  .card-grid,
  .package-grid,
  .experience-grid {
    grid-template-columns: 1fr;
  }

  .destination-card:last-child {
    grid-column: auto;
  }

  .destination-card img,
  .destination-card:last-child img {
    height: 240px;
  }

  .experience-grid article,
  .experience-grid article + article {
    border-left: 0;
    border-bottom: 1px solid #ffffff36;
    padding: 20px 0;
  }

  #booking-form {
    padding: 20px 15px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .footer-main {
    flex-wrap: wrap;
  }

  .footer-main > p {
    width: 100%;
    order: 3;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 5px;
  }

  .dialog-buttons {
    flex-direction: column;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition: none !important;
  }
}

/* EXPERIENCE GALLERY */
.experience-intro {
  max-width: 650px;
  margin: 18px 0 30px;
  color: #cbd4cc;
  font-size: 14px;
  line-height: 1.8;
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 25px;
  margin-top: 35px;
  border-top: none;
}

.experience-card {
  overflow: hidden;
  background: #ffffff;
  color: #26382f;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px #00000025;
}

.experience-card > a:first-child {
  display: block;
  overflow: hidden;
}

.experience-card img {
  display: block;
  width: 100%;
  height: 230px;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.experience-card:hover img {
  transform: scale(1.05);
}

.experience-content {
  padding: 22px;
}

.experience-content > span {
  color: #9b8047;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.2px;
}

.experience-content h3 {
  margin: 12px 0;
  color: #173d32;
  font-size: 23px;
}

.experience-content p {
  color: #737d74;
  font-size: 13px;
  line-height: 1.8;
}

.experience-content .experience-link {
  display: inline-block;
  margin-top: 10px;
  color: #173d32;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
  border-bottom: 1px solid #d8b777;
  padding-bottom: 5px;
}

.experience-content .experience-link:hover {
  color: #9b8047;
}

/* TABLETS */
@media (max-width: 900px) {
  .experience-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }
}

/* PHONES */
@media (max-width: 560px) {
  .experience-grid {
    grid-template-columns: 1fr;
  }

  .experience-card img {
    height: 240px;
  }

  .experience-content {
    padding: 18px;
  }
}
