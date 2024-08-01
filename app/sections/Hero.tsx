'use client'

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Button } from "@/components/ui/button";
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import Image from "next/legacy/image";
import AnimatedBackground from '../components/AnimatedBackground';

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="text-left">
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold mb-4">
              Hi, I&apos;m <span className="text-primary">John Doe</span>
            </motion.h1>
            <motion.h2 variants={itemVariants} className="text-3xl lg:text-4xl font-semibold mb-6 subtitle-text">
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer',
                  2000,
                  'UI/UX Enthusiast',
                  2000,
                  'Problem Solver',
                  2000,
                  'Lebron James Stan',
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl mb-8 max-w-xl">
              Passionate about creating innovative web solutions and delivering exceptional user experiences.
              Let&apos;s build something amazing together!
            </motion.p>
            <motion.div variants={itemVariants} className="flex space-x-4 z-20">
              <Button size="lg" className="relative z-20">View My Work</Button>
              <Button size="lg" variant="outline" className="relative z-20">Download CV</Button>
            </motion.div>
          </div>
          <motion.div variants={itemVariants} className="relative">
            <div className="w-full h-[500px] relative">
              <Image
                src="/passman.jpg" 
                alt="Latest Project"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-background/80 backdrop-blur-sm p-6 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-2">Latest Project</h3>
              <p className="mb-4">AI-Powered Task Management App</p>
              <Button variant="link">Learn More →</Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2.5 transform -translate-x-1/2 z-20"
      >
        <div className="flex justify-center space-x-6">
          {[
            { Icon: SiGithub, href: "https://github.com", ariaLabel: "GitHub" },
            { Icon: MdEmail, href: "mailto:mlibane7@gmail.com", ariaLabel: "Email" },
            { Icon: SiLinkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
          ].map(({ Icon, href, ariaLabel }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ariaLabel}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl text-gray-400 hover:text-white transition-colors relative z-20"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;