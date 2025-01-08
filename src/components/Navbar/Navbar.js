import React from 'react';
import Link from 'next/link'; // Use Next.js's Link component
import '../../styles/navbar.css'; 
const Navbar = () => {
  const navbarItems = [
    
    { name: 'About', path: '/about' },
    { name: 'Why Choose', path: '/why-choose' },
    { name: 'Program', path: '/program' },
    { name: 'FAQ', path: '/faq' },
    { name: 'More', path: '/more' },
    { name: 'Register', path: '/register' },
  ];

  return (
    <div className="navbar">
    
    

      {/* Navbar Links */}
      <ul>
        {navbarItems.map((item, index) => (
          <li key={index}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
