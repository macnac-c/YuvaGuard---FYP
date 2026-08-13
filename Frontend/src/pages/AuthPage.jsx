import React, { useState } from "react";
import LogoMark from "../components/LogoMark";
import SlashAccent from "../components/SlashAccent";

function AuthPage({ navigate, initialMode = "register" }) {
  const [mode, setMode] = useState(initialMode);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "adolescent"
  });
  const isBlue = mode === "register";

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (mode === "login") {
      try {
        const response = await fetch("http://localhost:8080/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: form.email,
            password: form.password,
          }),
        });
    
        const data = await response.text();

        if (response.ok) {
          alert(data);
          console.log("Login response:", data);
        }

      } catch (error) {
        console.error("Login error:", error);
      }
    
      return;
    }
  
    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
  
      const data = await response.text();
  
      if (response.ok) {
        alert("Account created successfully!");
        console.log("Registration response:", data);
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: isBlue ? "#2244EE" : "#C8D8EA" }}>
      <div className="flex items-center justify-between px-8 pt-6">
        <button onClick={() => navigate("home")} className="flex items-center gap-2">
          <LogoMark bg={isBlue ? "#C8D8EA" : "#2244EE"} check={isBlue ? "#2244EE" : "white"} />
          <span className="font-display font-700 text-xl" style={{ color: isBlue ? "white" : "#2244EE" }}>Yuva guard</span>
        </button>

        <div className="hidden md:block">
          <SlashAccent color={isBlue ? "rgba(200,216,234,0.7)" : "#2244EE"} />
        </div>

        <button onClick={() => navigate("home")}>
          <span className="btn-outline font-body font-700 text-sm" style={{ color: isBlue ? "white" : "#111827", borderColor: isBlue ? "white" : "#111827" }}>
            <span>Back</span>
          </span>
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-10">
        <div className="text-center mb-8 relative">
          <h1 className="font-display font-900 inline-block sketch-underline"
            style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)", color: isBlue ? "white" : "#2244EE", letterSpacing: "-0.02em" }}>
            {mode === "register" ? "Register" : "Log in"}
          </h1>
        </div>

        <div className="flex gap-4 mb-10">
          {["register", "login"].map((m) => (
            <button key={m} onClick={() => setMode(m)}
              className="font-body font-700 text-sm px-6 py-2 transition-all"
              style={{
                background: mode === m ? (isBlue ? "rgba(200,216,234,0.2)" : "rgba(34,68,238,0.12)") : "transparent",
                color: isBlue ? (mode === m ? "white" : "rgba(255,255,255,0.55)") : (mode === m ? "#2244EE" : "#6B7280"),
                borderBottom: mode === m ? `2.5px solid ${isBlue ? "white" : "#2244EE"}` : "2.5px solid transparent",
              }}>
              {m === "register" ? "Register" : "Log in"}
            </button>
          ))}
        </div>

        <div className="w-full max-w-md">
          <div className="rounded-sm p-8 md:p-10" style={{ background: "white", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}>
            <form className="space-y-8" onSubmit={handleSubmit}>
            {mode === "login" ? (
  <>
    <div>
      <label
        className="font-body font-700 text-lg mb-3 block"
        style={{ color: "#2244EE" }}
      >
        Email:
      </label>

      <input
        type="email"
        className="input-underline"
        value={form.email}
        onChange={(e) =>
          setForm((f) => ({ ...f, email: e.target.value }))
        }
        placeholder="you@gmail.com"
      />
    </div>

    <div>
      <label
        className="font-body font-700 text-lg mb-3 block"
        style={{ color: "#2244EE" }}
      >
        Password:
      </label>

      <input
        type="password"
        className="input-underline"
        value={form.password}
        onChange={(e) =>
          setForm((f) => ({ ...f, password: e.target.value }))
        }
        placeholder="••••••••"
      />
    </div>
  </>
) : (
                <>
                  <div>
                    <label className="font-body font-700 text-lg mb-3 block" style={{ color: "#2244EE" }}>Name:</label>
                    <input type="text" className="input-underline" value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="Your full name" />
                  </div>
                  
                  <div>
                    <label className="font-body font-700 text-lg mb-3 block" style={{ color: "#2244EE" }}>Email:</label>
                    <input type="email" className="input-underline" value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} placeholder="you@gmail.com" />
                  </div>
                  <div>
                    <label className="font-body font-700 text-lg mb-3 block" style={{ color: "#2244EE" }}>Password:</label>
                    <input type="password" className="input-underline" value={form.password}
                      onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))} placeholder="••••••••" />
                  </div>

                  <div>
  <label
    className="font-body font-700 text-lg mb-3 block"
    style={{ color: "#2244EE" }}
  >
    I am registering as:
  </label>

  <select
    className="input-underline"
    value={form.role}
    onChange={(e) =>
      setForm((f) => ({ ...f, role: e.target.value }))
    }
  >
    <option value="adolescent">Adolescent</option>
    <option value="parent">Parent</option>
  </select>
</div>
                </>
              )}

              <div className="pt-4 flex flex-col sm:flex-row gap-4 items-start">
                <button type="submit" className="btn-outline font-body font-700 text-base" style={{ color: "#2244EE", borderColor: "#2244EE" }}>
                  <span>{mode === "register" ? "Create account" : "Sign in"}</span>
                </button>
                {mode === "login" && (
                  <button type="button" className="font-body text-sm" style={{ color: "#6B7280" }}>Forgot password?</button>
                )}
              </div>
            </form>
          </div>
        </div>

        <p className="mt-8 font-body text-sm" style={{ color: isBlue ? "rgba(255,255,255,0.65)" : "#6B7280" }}>
          {mode === "register" ? "Already have an account? " : "Don't have an account? "}
          <button onClick={() => setMode(mode === "register" ? "login" : "register")} className="font-700 underline underline-offset-2" style={{ color: isBlue ? "white" : "#2244EE" }}>
            {mode === "register" ? "Log in" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AuthPage;