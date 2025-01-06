import React, { useState, useEffect } from "react";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      className="btn btn-outline-secondary"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
    </button>
  );
};

export default ThemeToggle;
