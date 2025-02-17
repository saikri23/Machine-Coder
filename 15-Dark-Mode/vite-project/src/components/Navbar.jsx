import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../Hooks/use-theme-context";

const Navbar = () => {
  const { theme, handleTheme } = useTheme();

  return (
    <nav className={`navbar ${theme}`}>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div className="mode-switch">
        <label>
          <input
            type="checkbox"
            onChange={handleTheme}
            checked={theme === "dark"}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
