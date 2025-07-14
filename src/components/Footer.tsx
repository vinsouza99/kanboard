import React from "react";
import { FaGithub, FaLinkedinIn, FaGlobe } from "react-icons/fa6";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      id="footer"
      className="bg-amber-800/25 w-full text-center text-white p-5"
    >
      <p>
      Vinicius Souza &copy; {currentYear} - All rights reserved.
      </p>
      <ul className="flex list-none justify-center mt-5 text-2xl">
        <li className="mx-2">
          <a href="https://linkedin.com/in/vinicius-abner/" target="_blank">
            <FaLinkedinIn className="inline-block align-middle" />
            <span className="visually-hidden">LinkedIn</span>
          </a>
        </li>
        <li className="mx-2">
          <a href="https://github.com/vinsouza99" target="_blank">
            <FaGithub className="inline-block align-middle" />
            <span className="visually-hidden">GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://vinsouza.com/" target="_blank">
            <FaGlobe className="inline-block align-middle" />
            <span className="visually-hidden">Website</span>
          </a>
        </li>
      </ul>
      <p className="mt-5 text-xs text-gray-800/50"><a href="https://www.flaticon.com/free-icons/kanban" title="kanban icons">Kanban icons created by Ida Desi Mariana - Flaticon</a></p>
    </footer>
  );
};

export default Footer;
