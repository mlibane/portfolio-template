'use client'

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('Home');
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop - 100) {
          setActiveSection(section.id.charAt(0).toUpperCase() + section.id.slice(1));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 right-4 z-50">
      <AnimatedBackground />
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-2">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`${item.toLowerCase()}`}
                className={`block px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-full"
          style={{ scaleY, originY: 0 }}
        />
      </div>
    </nav>
  );
};

export default Navbar;