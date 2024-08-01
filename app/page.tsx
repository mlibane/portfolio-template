'use client'

import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import ParallaxText from './components/ParallaxText';

export default function Home() {
  const [loading, setLoading] = useState(true);

  const finishLoading = () => {
    setLoading(false);
  };

  if (loading) {
    return <LoadingScreen finishLoading={finishLoading} />;
  }
  
  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <div className="h-24 overflow-hidden">
        <ParallaxText baseVelocity={-5}>About Me</ParallaxText>
      </div>
      <About />
      <div className="h-24 overflow-hidden">
        <ParallaxText baseVelocity={5}>My Skills</ParallaxText>
      </div>
      <Skills />
      <div className="h-24 overflow-hidden">
        <ParallaxText baseVelocity={-5}>Projects</ParallaxText>
      </div>
      <Projects />
      <div className="h-24 overflow-hidden">
        <ParallaxText baseVelocity={5}>Get In Touch</ParallaxText>
      </div>
      <Contact />
    </div>
  );
}