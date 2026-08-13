import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthPage from "./pages/AuthPage";
import LandingPage from "./pages/LandingPage";

/* ============================================================
   IMAGE ASSETS — your uploaded illustrations
============================================================ */
const IMG_HERO = "/img1.png";

const IMG_GOAL = "/img2.png";

const IMG_SERVICES = "/img3.png";

const IMG_CONTACT = "/img4.png";

/* ============================================================
   GLOBAL STYLES — ported from src/index.css
============================================================ */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@700;800;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap');

    .yg-root, .yg-root * { box-sizing: border-box; }
    .yg-root { font-family: 'DM Sans', system-ui, sans-serif; line-height: 1.6; overflow-x: hidden; }

    .font-display { font-family: 'Fraunces', Georgia, serif; }
    .font-body    { font-family: 'DM Sans', system-ui, sans-serif; }
    .font-hand    { font-family: 'Caveat', cursive; }
    .font-700 { font-weight: 700; }
    .font-800 { font-weight: 800; }
    .font-900 { font-weight: 900; }
    .font-600 { font-weight: 600; }

    @keyframes float-gentle { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
    @keyframes float-slow   { 0%,100% { transform: translateY(0px) rotate(-2deg); } 50% { transform: translateY(-14px) rotate(2deg); } }
    @keyframes fade-up      { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes wiggle       { 0%,100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }

    .animate-float      { animation: float-gentle 3.6s ease-in-out infinite; }
    .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
    .animate-wiggle      { animation: wiggle 2.4s ease-in-out infinite; }
    .fade-up   { animation: fade-up 0.55s ease-out both; }
    .fade-up-1 { animation: fade-up 0.55s ease-out 0.1s both; }

    .sketch-underline { position: relative; display: inline-block; }
    .sketch-underline::after {
      content: ''; position: absolute; left: 0; right: 0; bottom: -4px;
      height: 3px; background: currentColor; border-radius: 2px; transform: rotate(-0.5deg);
    }

    .btn-outline {
      display: inline-block; border: 2.5px solid currentColor; padding: 0.5rem 1.4rem;
      font-family: 'DM Sans', sans-serif; font-weight: 700; letter-spacing: 0.02em;
      transition: background 0.18s, color 0.18s; cursor: pointer; background: transparent;
    }
    .btn-outline:hover { background: currentColor; }
    .btn-outline:hover span { color: white; }

    .input-underline {
      background: transparent; border: none; border-bottom: 2.5px solid #111827; outline: none;
      width: 100%; font-family: 'DM Sans', sans-serif; font-size: 1rem; padding: 0.25rem 0; color: #111827;
    }
    .input-underline::placeholder { color: rgba(17,24,39,0.3); }
  `}</style>
);

/* ============================================================
   ILLUSTRATIONS — ported from LandingPage.tsx
============================================================ */

function SlashAccent({ color = "#2244EE" }) {
  return (
    <svg viewBox="0 0 80 60" fill="none" className="w-16 h-12">
      <path d="M18 8 L8 52" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <path d="M36 4 L26 48" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <path d="M58 10 L44 50" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/* ============================================================
   Placeholder pages for the other routes in the real project
   (TeenDashboard, ParentDashboard, AIDetection, LearningHub,
   About, Contact) — kept minimal here since this file focuses
   on Home + Auth. Ask if you want any of these fully ported.
============================================================ */
function PlaceholderPage({ title, navigate }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-32" style={{ background: "#C8D8EA" }}>
      <h1 className="font-display font-900 text-4xl mb-4" style={{ color: "#111827" }}>{title}</h1>
      <p className="font-body text-base mb-8" style={{ color: "#374151" }}>
        This page exists in the full project — say the word and I'll port it into this file too.
      </p>
      <button onClick={() => navigate("home")} className="btn-outline font-body font-700" style={{ color: "#2244EE" }}>
        <span>Back home</span>
      </button>
    </div>
  );
}

/* ============================================================
   ROOT — ported from layouts/Root.tsx, using state instead of
   react-router (not available in this sandbox)
============================================================ */

export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (to) => {
    setPage(to);
    window.scrollTo(0, 0);
  };

  const hideFooter = page === "auth" || page === "login" || page === "register";

  const pageTitles = {
    "teen-dashboard": "For Teens",
    "parent-dashboard": "For Parents",
    "ai-detection": "AI Shield",
    "learning-hub": "Learning Hub",
    about: "About",
    contact: "Contact",
  };

  return (
    <div
      className="yg-root min-h-screen"
      style={{ background: "#F9F7F2" }}
    >
      <GlobalStyles />

      <Navbar page={page} navigate={navigate} />

      <main>
        {page === "home" && <LandingPage navigate={navigate} />}

        {(page === "auth" ||
          page === "login" ||
          page === "register") && (
          <AuthPage
            navigate={navigate}
            initialMode={page === "login" ? "login" : "register"}
          />
        )}

        {pageTitles[page] && (
          <PlaceholderPage
            title={pageTitles[page]}
            navigate={navigate}
          />
        )}
      </main>

      {!hideFooter && <Footer navigate={navigate} />}
    </div>
  );
}