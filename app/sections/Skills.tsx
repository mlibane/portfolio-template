'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedBackground from '@/components/AnimatedBackground';

interface Skill {
  name: string;
  level: number;
  description: string;
}

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 90, description: "Advanced state management, custom hooks, and performance optimization" },
      { name: "Next.js", level: 85, description: "Server-side rendering, static site generation, and API routes" },
      { name: "TypeScript", level: 80, description: "Type safety, interfaces, and advanced types" },
      { name: "Tailwind CSS", level: 95, description: "Responsive design, custom configurations, and component extraction" },
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85, description: "RESTful APIs, authentication, and database integration" },
      { name: "Prisma ORM", level: 80, description: "Database modeling, migrations, and efficient querying" },
      { name: "NextAuth.js", level: 75, description: "Authentication strategies, JWT handling, and session management" },
      { name: "PostgreSQL", level: 75, description: "Advanced querying, indexing, and performance optimization" },
    ]
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git & GitHub", level: 90, description: "Version control, branching strategies, and CI/CD workflows" },
      { name: "Vercel", level: 85, description: "Deployments, serverless functions, and environment management" },
      { name: "Docker", level: 75, description: "Containerization, Docker Compose, and orchestration" },
      { name: "Sentry", level: 70, description: "Error tracking, performance monitoring, and issue resolution" },
    ]
  }
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <section id="skills" className="relative py-16 md:py-20">
      <AnimatedBackground />
      <div className="container mx-auto px-4 z-10 relative">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Expertise
        </motion.h2>
        <Tabs defaultValue="Frontend" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 relative z-20">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.name} value={category.name} className="text-xs md:text-sm">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {skillCategories.map((category) => (
            <TabsContent key={category.name} value={category.name}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card 
                      className="cursor-pointer hover:shadow-lg transition-shadow duration-300 relative z-20"
                      onClick={() => setSelectedSkill(skill)}
                    >
                      <CardContent className="p-4 md:p-6">
                        <h3 className="text-lg md:text-xl font-semibold mb-2">{skill.name}</h3>
                        <Progress value={skill.level} className="h-2 mb-2 md:mb-4" />
                        <p className="text-xs md:text-sm text-muted-foreground">{skill.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedSkill(null)}
          >
            <Card className="w-full max-w-md m-4 relative z-60">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">{selectedSkill.name}</h3>
                <Progress value={selectedSkill.level} className="h-3 mb-4" />
                <p className="text-lg mb-4">Proficiency: {selectedSkill.level}%</p>
                <p className="text-muted-foreground">{selectedSkill.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;