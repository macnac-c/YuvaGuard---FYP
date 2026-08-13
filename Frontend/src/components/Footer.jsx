import React from "react";

function Footer({ navigate }) {
  return (
    <footer style={{ background: "#1A36CC" }}>
      <div style={{ marginTop: "-2px" }}>
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full" style={{ height: "60px", display: "block" }}>
          <path d="M0 50 Q360 0 720 40 Q1080 80 1440 20 L1440 0 L0 0 Z" fill="#C8D8EA" />
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-8 pt-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-md flex items-center justify-center" style={{ background: "rgba(200,216,234,0.2)" }}>
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path d="M12 3L4 7V13C4 17.4 7.4 21.5 12 22.5C16.6 21.5 20 17.4 20 13V7L12 3Z" fill="white" opacity="0.9" />
                  <path d="M9 12L11 14L15 10" stroke="#1A36CC" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-display font-700 text-xl text-white">Yuva guard</span>
            </div>
            <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(200,216,234,0.65)" }}>
              AI-powered digital resilience for the next generation.
            </p>
          </div>

          <div>
            <h4 className="font-body font-700 text-xs uppercase tracking-widest mb-4 text-white">Platform</h4>
            <ul className="space-y-2.5">
              {[["For Teens", "teen-dashboard"], ["For Parents", "parent-dashboard"], ["AI Shield", "ai-detection"], ["Learning Hub", "learning-hub"]].map(([l, t]) => (
                <li key={t}>
                  <button onClick={() => navigate(t)} className="font-body text-sm transition-colors hover:text-white" style={{ color: "rgba(200,216,234,0.6)" }}>{l}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-700 text-xs uppercase tracking-widest mb-4 text-white">Company</h4>
            <ul className="space-y-2.5">
              {[["About", "about"], ["Contact", "contact"], ["Privacy", "contact"], ["AI Ethics", "about"]].map(([l, t]) => (
                <li key={l}>
                  <button onClick={() => navigate(t)} className="font-body text-sm transition-colors hover:text-white" style={{ color: "rgba(200,216,234,0.6)" }}>{l}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-700 text-xs uppercase tracking-widest mb-4 text-white">Stay Safe</h4>
            <p className="font-body text-sm mb-4" style={{ color: "rgba(200,216,234,0.6)" }}>Weekly digital safety tips for your family.</p>
            <input type="email" placeholder="your@email.com" className="w-full px-4 py-2.5 font-body text-sm outline-none mb-2"
              style={{ background: "rgba(200,216,234,0.1)", border: "1.5px solid rgba(200,216,234,0.2)", color: "white" }} />
            <button className="w-full py-2.5 font-body font-700 text-sm transition-all hover:opacity-90" style={{ background: "#C8D8EA", color: "#2244EE" }}>
              Subscribe
            </button>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: "rgba(200,216,234,0.15)" }}>
          <p className="font-body text-sm" style={{ color: "rgba(200,216,234,0.4)" }}>© 2026 Yuva guard. Built for safer digital futures.</p>
          <div className="flex gap-6">
            {["Terms", "Privacy", "Cookies"].map((item) => (
              <span key={item} className="font-body text-sm cursor-pointer hover:text-white transition-colors" style={{ color: "rgba(200,216,234,0.4)" }}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;