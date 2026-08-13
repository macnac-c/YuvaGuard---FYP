import React, { useState, useEffect } from "react";

function Navbar({ page, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", to: "home" },
    { label: "For Teens", to: "teen-dashboard" },
    { label: "For Parents", to: "parent-dashboard" },
    { label: "AI Shield", to: "ai-detection" },
    { label: "Learn", to: "learning-hub" },
    { label: "About", to: "about" },
  ];

  if (page === "auth") return null;

  const go = (to) => { setMenuOpen(false); navigate(to); };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(200,216,234,0.92)" : "rgba(200,216,234,0.6)",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1.5px solid rgba(34,68,238,0.15)" : "1.5px solid transparent",
        boxShadow: scrolled ? "0 2px 24px rgba(34,68,238,0.08)" : "none",
      }}>
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <button onClick={() => go("home")} className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-md flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: "#2244EE" }}>
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M12 3L4 7V13C4 17.4 7.4 21.5 12 22.5C16.6 21.5 20 17.4 20 13V7L12 3Z" fill="white" opacity="0.95" />
              <path d="M9 12L11 14L15 10" stroke="#2244EE" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="font-display font-700 text-xl" style={{ color: "#2244EE", letterSpacing: "-0.01em" }}>Yuva guard</span>
        </button>

        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <button key={link.to} onClick={() => go(link.to)}
              className="px-3.5 py-2 font-body font-600 text-sm transition-all"
              style={{
                color: page === link.to ? "#2244EE" : "#374151",
                borderBottom: page === link.to ? "2px solid #2244EE" : "2px solid transparent",
                fontWeight: page === link.to ? 700 : 600,
              }}>
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
        <button onClick={() => go("login")} className="btn-outline font-body text-sm" style={{ color: "#374151", borderColor: "rgba(55,65,81,0.4)", padding: "0.4rem 1rem" }}>
        <span>Log in</span>
        </button>


        <button
        onClick={() => go("register")}
        className="px-5 py-2 font-body font-700 text-sm transition-all hover:opacity-90"
        style={{ background: "#2244EE", color: "white" }}>
        Register
       </button>
        </div>

        <button className="md:hidden p-2" onClick={() => setMenuOpen((m) => !m)} aria-label="Toggle menu">
          <div className="w-5 flex flex-col gap-1.5">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-0.5 rounded-full transition-all"
                style={{
                  background: "#2244EE",
                  width: i === 1 && menuOpen ? "60%" : "100%",
                  transform: menuOpen && i === 0 ? "rotate(45deg) translateY(7px)" : menuOpen && i === 2 ? "rotate(-45deg) translateY(-7px)" : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }} />
            ))}
          </div>
        </button>
      </div>

      <div className="md:hidden overflow-hidden transition-all duration-300" style={{ maxHeight: menuOpen ? "360px" : "0" }}>
        <div className="px-6 pb-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button key={link.to} onClick={() => go(link.to)}
              className="px-3 py-3 font-body font-600 text-sm text-left transition-all border-b"
              style={{ color: page === link.to ? "#2244EE" : "#374151", borderColor: "rgba(34,68,238,0.1)", fontWeight: page === link.to ? 700 : 600 }}>
              {link.label}
            </button>
          ))}
          <button
          onClick={() => go("register")}
          className="mt-3 py-3 font-body font-700 text-sm text-center transition-all"
          style={{ background: "#2244EE", color: "white" }}>  
          Register
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;