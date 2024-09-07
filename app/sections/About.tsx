/* eslint-disable react/no-unescaped-entities */
'use client'

import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import { motion } from 'framer-motion';
import Image from "next/legacy/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const experiences = [
    { company: "Oliver Agency", role: "IT Support Intern", duration: "May 2023 - June 2023" },
    { company: "Local convenience store", role: "Sales Assistant", duration: "October 2022 - August 2023" },
  ];

  return (
    <section id="about" className="relative min-h-screen py-20">
      <AnimatedBackground />
      <div className="container mx-auto px-4 z-10 relative">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <Image
              src="/profile-picture.jpg"
              alt="Libane Mohamed"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-base md:text-lg mb-4">
              Hi, I&apos;m Libane Mohamed, an aspiring Web Developer with a passion for technology and continuous learning. I&apos;m currently completing my L3 Extended Diploma BTEC in Software Development at ELATT.
            </p>
            <p className="text-base md:text-lg mb-6">
              I specialize in Next.Js, JavaScript, Django, and Tailwind CSS. I&apos;m always eager to learn new technologies and apply my problem-solving skills to create robust web applications.
            </p>
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Work Experience</h3>
              {experiences.map((exp, index) => (
                <Card key={index} className="mb-4">
                  <CardContent className="p-4">
                    <h4 className="text-lg font-semibold">{exp.company}</h4>
                    <p className="text-primary">{exp.role}</p>
                    <p className="text-sm text-muted-foreground">{exp.duration}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Skills & Interests</h3>
              <div className="flex flex-wrap gap-2">
                {['Web Development', 'Python', 'JavaScript', 'React.js', 'Django', 'Typescript', 'Filmmaking', 'Football'].map((interest, index) => (
                  <Badge key={index} variant="secondary">{interest}</Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;