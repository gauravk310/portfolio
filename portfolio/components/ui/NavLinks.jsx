'use client'
import React, { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements & Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function NavLinks() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      const navbarHeight = 80; // Adjust based on your navbar height
      const targetPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      setActiveSection(targetId);
    }
  };

  return (
    <nav className="hidden md:flex items-center gap-1">
      {navItems.map((item) => {
        const isActive = activeSection === item.href.substring(1);

        return (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className={`
              relative px-4 py-2 text-sm font-medium transition-all duration-300 cursor-target
              ${isActive
                ? 'text-[#00c951]'
                : 'text-gray-300 hover:text-white'
              }
            `}
          >
            {/* Active indicator */}
            <span
              className={`
                absolute bottom-0 left-0 right-0 h-0.5 bg-[#00c951] transition-all duration-300
                ${isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
              `}
            />

            {/* Hover effect */}
            <span
              className={`
                absolute inset-0 bg-[#00c951]/10 rounded-md transition-all duration-300
                ${isActive ? 'opacity-100' : 'opacity-0 hover:opacity-100'}
              `}
            />

            <span className="relative z-10">{item.name}</span>
          </a>
        );
      })}
    </nav>
  );
}
