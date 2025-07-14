import React, { useRef, useState } from "react";
import { FaGithub, FaBars, FaXmark } from "react-icons/fa6";

const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      ref={headerRef}
      className={`text-white p-4 fixed inset-x-0 top-0 z-50 flex justify-between items-center px-6 bg-amber-700/25 backdrop-blur-md`}
    >
      <h1 className="text-2xl">Kanboard</h1>

      {/* Hamburger Menu Button (mobile only) */}
      <button
        className="text-2xl md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <FaXmark /> : <FaBars />}
      </button>

      {/* Navbar */}
      <nav
        className={`absolute md:static top-full left-0 w-full md:w-auto bg-amber-900 md:bg-transparent transition-all duration-300 ease-in-out ${
          menuOpen ? "block" : "hidden"
        } md:flex`}
      >
        <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 md:p-0">
          <li>
            <a href="#main" onClick={() => setMenuOpen(false)}>Home</a>
          </li>
          <li>
            <a href="#techstack" onClick={() => setMenuOpen(false)}>Stack</a>
          </li>
          <li>
            <a
              href="https://github.com/vinsouza99/kanboard"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
              onClick={() => setMenuOpen(false)}
            >
              <FaGithub />
              Source Code
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

