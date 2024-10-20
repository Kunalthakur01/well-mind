import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Heart size={24} />
          <span className="text-xl font-bold">MindWell</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/services" className="hover:text-blue-200">Services</Link></li>
            <li><Link to="/booking" className="hover:text-blue-200">Book a Session</Link></li>
            <li><Link to="/about" className="hover:text-blue-200">About Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;