import React, { useRef } from "react";

const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <header
      ref={headerRef}
      className={`text-white p-4 fixed inset-x-0 top-0 z-50 flex justify-between px-10 ${"bg-amber-700/25 backdrop-blur-md"}`}
    >
      <div>
        <h1 className="text-2xl">Kanboard</h1>
      </div>
      <nav className="flex items-center">
        <ul className="list-none m-0 p-0 flex gap-4">
          <li>
            <a href="#main">Home</a>
          </li>
          <li>
            <a href="#techstack">Stack</a>
          </li>
          <li>
            <a href="#contact"> Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
