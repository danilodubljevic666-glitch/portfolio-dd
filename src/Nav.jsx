import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('O Meni');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 1, label: 'O Meni', href: '#o-meni' },
    { id: 2, label: 'Projekti', href: '#projekti' },
    { id: 3, label: 'Tehnologije', href: '#tehnologije' },
    { id: 4, label: 'Kontakt', href: '#kontakt' },
  ];

  // Efekat za promjenu boje navigacije prilikom skrolovanja
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900 shadow-xl' 
        : 'bg-gradient-to-br from-gray-900 via-black to-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold tracking-tighter font-['Montserrat']">
              <span className="text-white">D</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">D</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-12">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => handleItemClick(item.label)}
                  className="relative px-1 py-2 text-base font-medium font-['Inter'] transition-all duration-500 group"
                >
                  <span className={`relative z-10 ${
                    activeItem === item.label ? 'text-white font-semibold' : 'text-gray-300'
                  }`}>
                    {item.label}
                  </span>
                  
                  {/* Hover underline effect */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white via-gray-200 to-gray-400 transition-all duration-500 group-hover:w-full"></span>
                  
                  {/* Active item underline */}
                  {activeItem === item.label && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white via-gray-200 to-gray-400"></span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* CV Dugme */}
          <div className="hidden md:block">
            <a
              href="/cv/CV.pdf"
              download
              className="px-6 py-2.5 font-['Inter'] font-medium text-white rounded-lg border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Preuzmi CV
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors duration-300 border border-white/20"
              aria-expanded="false"
            >
              <span className="sr-only">Otvori glavni meni</span>
              {/* Hamburger Icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-7 w-7`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close Icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-7 w-7`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gradient-to-b from-gray-900 to-black border-t border-white/10`}>
        <div className="px-2 pt-3 pb-5 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => handleItemClick(item.label)}
              className={`block px-4 py-4 text-lg font-medium font-['Inter'] transition-all duration-300 relative overflow-hidden group ${
                activeItem === item.label
                  ? 'text-white bg-white/10'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              
              {/* Hover effect for mobile */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white via-gray-200 to-gray-400 transition-all duration-500 group-hover:w-full"></span>
              
              {/* Active item underline for mobile */}
              {activeItem === item.label && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white via-gray-200 to-gray-400"></span>
              )}
            </a>
          ))}
          
          {/* CV Dugme za mobile */}
          <div className="px-4 py-3">
            <a
              href="/Danilo_Dubljevic_CV.txt"
              download
              className="block w-full text-center px-6 py-3 font-['Inter'] font-medium text-white rounded-lg border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Preuzmi CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;