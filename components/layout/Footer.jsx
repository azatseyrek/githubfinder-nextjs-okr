import React from 'react';

const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-2 bg-secondary-content footer-center opacity-40 ">
      <div>
        <p className="text-gray-400">
          Copyright &copy; {footerYear} All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
