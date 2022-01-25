import React from "react";

import { FaGithub } from 'react-icons/fa';
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>Copyright ⓒ Muhammed DAGDELEN {year}</p><a href="https://github.com/muhammedmed" rel="noreferrer" target="_blank"><FaGithub/></a>
    </footer>
  );
}

export default Footer;