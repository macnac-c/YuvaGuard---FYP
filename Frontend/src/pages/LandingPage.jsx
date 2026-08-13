import React, { useState } from "react";
import LogoMark from "../components/LogoMark";
import SlashAccent from "../components/SlashAccent";

const IMG_HERO = "/images/img1.png";
const IMG_GOAL = "/images/img2.png";
const IMG_SERVICES = "/images/img3.png";
const IMG_CONTACT = "/images/img4.png";

const faqs = [
  {
    q: "Does YuvaGuard read my private messages?",
    a: "No. YuvaGuard only analyzes behavioral patterns — never the content of private conversations.",
  },
  {
    q: "What age groups is it designed for?",
    a: "YuvaGuard is built for teens aged 10–18, with dashboards that adapt to different age groups.",
  },
  {
    q: "Can parents see everything my teen does?",
    a: "No. Parents see AI-generated insights and risk flags only. Teens maintain privacy by design.",
  },
  {
    q: "How is privacy protected?",
    a: "YuvaGuard is being built on privacy-preserving and ethical AI principles from the ground up, using explainable AI so families can understand what's flagged and why.",
  },
];

function LandingPage({ navigate }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="overflow-x-hidden" style={{ background: "#C8D8EA" }}>
      {/* HERO */}
      <section
        className="min-h-screen pt-28 pb-0"
        style={{ background: "#C8D8EA" }}
      >
        <div className="max-w-5xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[80vh]">
          <div className="fade-up">
            <div className="flex items-center gap-2 mb-10">
              <LogoMark />
              <span
                className="font-display font-700 text-xl"
                style={{
                  color: "#2244EE",
                  letterSpacing: "-0.01em",
                }}
              >
                Yuva guard
              </span>
            </div>

            <h1
              className="font-display font-900 leading-[1.05] mb-8"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 4.8rem)",
                color: "#111827",
                letterSpacing: "-0.02em",
              }}
            >
              Your safe
              <br />
              space in
              <br />
              the digital
              <br />
              world
            </h1>

            <div className="flex flex-col gap-3 max-w-[180px]">
              <button
                onClick={() => navigate("auth")}
                className="btn-outline text-center font-body font-700"
                style={{
                  color: "#111827",
                  fontSize: "1rem",
                }}
              >
                <span>Register</span>
              </button>

              <button
                onClick={() => navigate("auth")}
                className="btn-outline text-center font-body font-700"
                style={{
                  color: "#111827",
                  fontSize: "1rem",
                }}
              >
                <span>Log in</span>
              </button>
            </div>
          </div>

          <div className="flex justify-center animate-float fade-up-1">
            <img
              src={IMG_HERO}
              alt="Three friends"
              className="w-full max-w-xs rounded-sm"
              style={{
                boxShadow: "0 12px 40px rgba(17,24,39,0.12)",
              }}
            />
          </div>
        </div>
      </section>

      {/* OUR GOAL */}
      <section
        className="py-20 px-8"
        style={{ background: "#2244EE" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center fade-up">
            <img
              src={IMG_GOAL}
              alt="Person on laptop"
              className="w-full max-w-xs rounded-sm"
              style={{
                boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
              }}
            />
          </div>

          <div className="fade-up-1">
            <h2
              className="font-display font-800 text-3xl md:text-4xl mb-3 sketch-underline"
              style={{ color: "#C8D8EA" }}
            >
              Our goal
            </h2>

            <p
              className="font-body text-lg leading-relaxed mt-6"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              This online platform helps us coordinate digital safety, share
              important guidance, and ensure every teen stays protected. We
              encourage all family members to stay informed and contribute to
              a safer digital world together.
            </p>

            <div className="flex gap-8 mt-10">
              {[
                ["6", "Core Modules"],
                ["Preventive", "Not Reactive"],
                ["MERN + Python", "Tech Stack"],
              ].map(([val, lbl]) => (
                <div key={lbl}>
                  <p className="font-display font-800 text-2xl text-white">
                    {val}
                  </p>

                  <p
                    className="font-body text-sm"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {lbl}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        className="py-20 px-8"
        style={{ background: "#C8D8EA" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-up">
            <h2
              className="font-display font-800 text-3xl md:text-4xl mb-3 sketch-underline"
              style={{ color: "#2244EE" }}
            >
              Services we provide
            </h2>

            <p
              className="font-body text-lg leading-relaxed mt-6"
              style={{ color: "#1F2937" }}
            >
              YUVAGUARD is designed around six proposed modules that work
              together to detect early risk indicators, explain what's been
              flagged and why, and deliver personalized guidance — with
              privacy-preserving and ethical AI principles built in from the
              start.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "🛡️  Risk Detection — cyberbullying, grooming, distress",
                "📊  Behavioral Analysis — predicting vulnerabilities early",
                "🔍  Explainable AI — transparent, interpretable insights",
                "💡  Recommendation & Intervention — personalized guidance",
                "👪  Parent/Guardian Insight — privacy-conscious sharing",
                "🔒  Privacy & Ethics Layer — ethical AI by design",
              ].map((item) => (
                <li
                  key={item}
                  className="font-body font-600 text-base"
                  style={{ color: "#1F2937" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center fade-up-1">
            <img
              src={IMG_SERVICES}
              alt="Person examining with magnifier"
              className="w-full max-w-xs rounded-sm"
              style={{
                boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
              }}
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        className="py-20 px-8"
        style={{ background: "#2244EE" }}
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-display font-800 text-3xl md:text-4xl mb-14 text-center sketch-underline inline-block"
            style={{ color: "#C8D8EA" }}
          >
            How it works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
            {[
              {
                num: "01",
                title: "Sign Up",
                desc: "Create a family account in under 3 minutes. Teens control what they share.",
              },
              {
                num: "02",
                title: "AI Learns",
                desc: "SAFEGUARD analyzes patterns (never content) to build a safety baseline.",
              },
              {
                num: "03",
                title: "Get Insights",
                desc: "Timely alerts and guidance — smart support, not surveillance.",
              },
              {
                num: "04",
                title: "Grow Together",
                desc: "Build skills in the Learning Hub and watch your resilience score rise.",
              },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 font-display font-800 text-xl"
                  style={{
                    background: "rgba(200,216,234,0.2)",
                    color: "#C8D8EA",
                    border: "2.5px solid rgba(200,216,234,0.4)",
                  }}
                >
                  {step.num}
                </div>

                <h3
                  className="font-display font-700 text-lg mb-2"
                  style={{ color: "white" }}
                >
                  {step.title}
                </h3>

                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / ABOUT */}
      <section
        className="py-20 px-8"
        style={{ background: "#C8D8EA" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center fade-up">
            <img
              src={IMG_CONTACT}
              alt="Person reading"
              className="w-full max-w-xs rounded-sm"
              style={{
                boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
              }}
            />
          </div>

          <div className="fade-up-1">
            <h2
              className="font-display font-800 text-3xl md:text-4xl mb-3 sketch-underline"
              style={{ color: "#2244EE" }}
            >
              Contact Us
            </h2>

            <p
              className="font-body text-lg leading-relaxed mt-6"
              style={{ color: "#1F2937" }}
            >
              YUVAGUARD is a final-year B.Tech project from the Department of
              Computer Science &amp; Engineering at MGM's College of Engineering
              &amp; Technology, built by a four-person team under faculty
              supervision. We'd love to hear your questions or feedback as the
              project develops.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("contact")}
                className="btn-outline font-body font-700"
                style={{
                  color: "#2244EE",
                  fontSize: "0.95rem",
                }}
              >
                <span>Get in touch</span>
              </button>

              <button
                onClick={() => navigate("about")}
                className="btn-outline font-body font-700"
                style={{
                  color: "#111827",
                  fontSize: "0.95rem",
                }}
              >
                <span>Our story</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section
        className="py-20 px-8"
        style={{ background: "#2244EE" }}
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-display font-800 text-3xl md:text-4xl mb-12 text-center"
            style={{ color: "#C8D8EA" }}
          >
            What we're aiming for
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Identify early signs of cyberbullying, grooming, and emotional distress using AI-based techniques.",
                label: "Early Detection",
              },
              {
                quote:
                  "Analyze behavioral patterns to predict potential digital vulnerabilities before real harm occurs.",
                label: "Prediction",
              },
              {
                quote:
                  "Provide explainable AI insights so families understand exactly what's flagged and why.",
                label: "Transparency",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="p-6 rounded-sm"
                style={{
                  background: "rgba(200,216,234,0.15)",
                  border: "1.5px solid rgba(200,216,234,0.3)",
                }}
              >
                <p
                  className="font-body text-base leading-relaxed mb-5"
                  style={{ color: "rgba(255,255,255,0.9)" }}
                >
                  {t.quote}
                </p>

                <p
                  className="font-body font-700 text-sm"
                  style={{ color: "#C8D8EA" }}
                >
                  {t.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-20 px-8"
        style={{ background: "#C8D8EA" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-display font-800 text-3xl md:text-4xl mb-10 sketch-underline inline-block"
            style={{ color: "#2244EE" }}
          >
            Questions?
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-b cursor-pointer transition-all"
                style={{
                  borderColor: "rgba(34,68,238,0.25)",
                }}
                onClick={() =>
                  setOpenFaq(openFaq === i ? null : i)
                }
              >
                <div className="flex justify-between items-center py-4">
                  <h3
                    className="font-body font-700 text-base pr-4"
                    style={{ color: "#111827" }}
                  >
                    {faq.q}
                  </h3>

                  <span
                    className="font-display font-800 text-xl flex-shrink-0"
                    style={{ color: "#2244EE" }}
                  >
                    {openFaq === i ? "−" : "+"}
                  </span>
                </div>

                {openFaq === i && (
                  <p
                    className="pb-4 font-body text-sm leading-relaxed"
                    style={{ color: "#374151" }}
                  >
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-8 relative overflow-hidden"
        style={{ background: "#2244EE" }}
      >
        <div className="absolute top-6 right-16 animate-wiggle pointer-events-none opacity-60">
          <SlashAccent color="rgba(200,216,234,0.6)" />
        </div>

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2
            className="font-display font-900 text-3xl md:text-5xl text-white mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Ready to begin?
          </h2>

          <p
            className="font-body text-lg mb-10"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            Free forever for families. Setup in under 3 minutes.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <button
              onClick={() => navigate("auth")}
              className="px-10 py-4 font-body font-700 text-base transition-all hover:opacity-90"
              style={{
                background: "#C8D8EA",
                color: "#2244EE",
              }}
            >
              Register now
            </button>

            <button
              onClick={() => navigate("about")}
              className="px-10 py-4 font-body font-700 text-base transition-all hover:bg-white/10"
              style={{
                border: "2.5px solid rgba(200,216,234,0.6)",
                color: "#C8D8EA",
              }}
            >
              Learn more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;