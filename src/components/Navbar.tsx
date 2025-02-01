import React from 'react';
import { Home } from 'lucide-react';

const navItems = [
  'About Us',
  'Academics',
  'People',
  'Research',
  'Activities',
  'Collaboration',
  'Partner with Us',
  'Join Us',
];

const Navbar = () => {
  return (
    <nav className="bg-[#f8f9fa] shadow-sm">
      <div className="container mx-auto">
        <ul className="flex items-center justify-between">
          {navItems.map((item, index) => (
            <li 
              key={item} 
              style={{ animation: `slideIn 0.3s ease-out ${index * 0.1}s` }}
            >
              <a
                href="#"
                className="nav-link px-4 py-3 block text-[#333] hover:text-[#FF4B1F] transition-colors text-sm font-medium"
              >
                {item}
              </a>
            </li>
          ))}
          <li style={{ animation: 'slideIn 0.3s ease-out 0.8s' }}>
            <a
              href="#"
              className="nav-link px-4 py-3 block text-[#333] hover:text-[#FF4B1F] transition-colors"
            >
              <Home size={18} className="hover:scale-110 transition-transform" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;