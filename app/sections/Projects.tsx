'use client'

import React from 'react';
import Image from "next/legacy/image";
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
import AnimatedBackground from '@/components/AnimatedBackground';

const projects = [
  {
    title: "Mapley",
    description: "A recipe sharing platform built with Django, React, and Tailwind CSS. Users can create, share, and discover recipes in a user-friendly interface.",
    image: "/mapley-preview.jpg",
    tags: ["Django", "React", "Tailwind CSS", "PostgreSQL"],
    githubLink: "https://github.com/mlibane/Mapley",
    liveLink: "https://mapley.site"
  },
  {
    title: "Nidix",
    description: "A modern blogging platform that empowers writers to create, manage, and share engaging content with a seamless, user-friendly interface and powerful publishing tools.",
    image: "/nidix-preview.jpg",
    tags: ["Next.js", "Prisma", "TypeScript", "Tailwind CSS"],
    githubLink: "https://github.com/mlibane/Nidix",
    liveLink: "https://nidix.xyz"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20">
      <AnimatedBackground />
      <div className="container mx-auto px-4 relative z-10">
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
                      layout="responsive"
                      objectFit="cover"
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
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center"
                      onClick={() => window.open(project.githubLink, '_blank', 'noopener,noreferrer')}
                    >
                      <Github className="mr-2 h-4 w-4" /> View Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex items-center"
                      onClick={() => window.open(project.liveLink, '_blank', 'noopener,noreferrer')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;