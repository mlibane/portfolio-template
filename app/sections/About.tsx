'use client'

import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion } from 'framer-motion';
import Image from "next/legacy/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const experiences = [
    { company: "TechCorp", role: "Senior Full-Stack Developer", duration: "2020 - Present" },
    { company: "WebSolutions Inc.", role: "Full-Stack Developer", duration: "2018 - 2020" },
    { company: "StartupXYZ", role: "Junior Developer", duration: "2016 - 2018" },
  ];

  return (
    <>
      <section id="about" className="relative min-h-screen py-20">
        <AnimatedBackground />
        <div className="container mx-auto px-4 z-10 relative">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/profile-picture.jpg"
                alt="John Doe"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg mb-6">
                Hi, I&apos;m John Doe, a passionate full-stack developer with 5 years of experience
                in creating robust web applications. I specialize in React, Node.js, and
                MongoDB, and I&apos;m always eager to learn new technologies.
              </p>
              <p className="text-lg mb-6">
                When I&apos;m not coding, you can find me hiking in the mountains or experimenting
                with new recipes in the kitchen. I believe in continuous learning and giving
                back to the developer community through open-source contributions and mentoring.
              </p>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
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
                <h3 className="text-2xl font-semibold mb-4">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {['Web Development', 'UI/UX Design', 'Machine Learning', 'Open Source', 'Tech Writing'].map((interest, index) => (
                    <Badge key={index} variant="secondary">{interest}</Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="section-divider" />
    </>
  );
};

export default About;