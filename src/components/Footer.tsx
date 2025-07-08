import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      id="footer"
      className="bg-amber-800/25 w-full text-center text-white p-5"
    >
      Vinicius Souza &copy; {currentYear} - All rights reserved.
    </footer>
  );
};

export default Footer;
