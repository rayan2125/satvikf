import React from 'react';
import Link from 'next/link'; // Use Next.js's Link component
import '../../styles/navbar.css';
import Image from 'next/image';
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
    <div className="navbar px-10 py-1 mt-10 mb-10">
  <div className="navbar-header">
    {/* Logo Section */}
    <div className="logo-container">
      <div className="">
        <Image
          src="/Footer/logo.png"
          alt="Logo"
          width={40}
          height={80}
        />
      </div>
    </div>

    {/* Navbar Links Section */}
    <div className="navbar-links-container ml-8">
      <ul>
        {navbarItems.map((item, index) => (
          <li className='text-white' key={index}>
            <Link className='text-sm ml-4' href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

  );
};

export default Navbar;
