'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const projects = [
  {
    title: "Mentoring Platform",
    description: "A full-stack mentoring solution built with Next.js, featuring real-time inventory management, secure payment processing with Stripe, and a responsive, accessibility-focused design.",
    image: "/mentorlabs.jpg",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "PostgreSQL"],
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    liveLink: "https://ecommerce-platform-demo.vercel.app"
  },
  {
    title: "AI-Powered Content Generator",
    description: "An innovative web application that utilizes OpenAI's GPT-3 to generate high-quality, context-aware content for various purposes, including blog posts, product descriptions, and social media updates.",
    image: "/passman.jpg",
    tags: ["React", "Node.js", "OpenAI API", "MongoDB"],
    githubLink: "https://github.com/yourusername/ai-content-generator",
    liveLink: "https://ai-content-generator-demo.herokuapp.com"
  },
  // Add even more  of your projects below to add to the carousel.
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index}>
                <Card className="overflow-hidden">
                  <CardHeader className="p-0">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      width={800} 
                      height={400} 
                      className="object-cover w-full h-64"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-base mb-4">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> View Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;