import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  // Custom Fiverr SVG icon component
  const FiverrIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23 9.52c0-2.83-2.17-5.14-5-5.14h-1.88c-.58-2.45-2.6-4.26-5.12-4.38h-.11a5.13 5.13 0 0 0-4.92 3.66L1 8.24v12.24h18.46a4.5 4.5 0 0 0 4.53-4.53V9.52zm-2.65 6.43a1.89 1.89 0 0 1-1.88 1.88H3.66v-7.93l3.66-3.66a2.49 2.49 0 0 1 2.49-2.49h.11a2.49 2.49 0 0 1 2.49 2.49v1.88h5.14a2.49 2.49 0 0 1 2.49 2.49v5.14z" />
    </svg>
  );

  return (
    <footer className="bg-[#222222] text-white py-12 mt-12 border-t border-[#33353F]">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Mr-Ehtsham</h3>
            <p className="text-gray-400 text-sm">
              Transforming ideas into digital reality. Full-stack developer passionate about creating impactful solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <a href="mailto:contact@example.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <span>mr_ehtsham@yahoo.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <span>+923211848495</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/MrEhtsham0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#333333] p-2 rounded-lg hover:bg-[#444444] transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ehtsham-khaliq-3a5091309/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#333333] p-2 rounded-lg hover:bg-[#444444] transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.fiverr.com/users/mr_ehtsham1202/manage_gigs?current_filter=active"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#333333] p-2 rounded-lg hover:bg-[#444444] transition-colors duration-300"
              >
                <FiverrIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#333333] my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Mr-Ehtsham. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;