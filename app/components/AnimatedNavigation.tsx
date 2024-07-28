'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const AnimatedNavigation: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 right-0 z-20 flex justify-between items-center px-8 py-4 bg-white dark:bg-zinc-800 bg-opacity-80 backdrop-blur-sm"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-2xl font-bold"
      >
        My Portfolio
      </motion.h1>
      <ul className="flex space-x-4">
        {navItems.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <a href={`#${item.toLowerCase()}`} className="hover:text-blue-500 transition-colors">
              {item}
            </a>
          </motion.li>
        ))}
      </ul>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-700"
      >
        {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </motion.button>
    </motion.nav>
  );
};

export default AnimatedNavigation;