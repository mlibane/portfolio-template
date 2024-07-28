'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedBackground from '../components/AnimatedBackground';

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
      { name: "Express", level: 80, description: "Middleware, routing, and error handling" },
      { name: "MongoDB", level: 75, description: "Schema design, aggregation pipelines, and indexing" },
      { name: "GraphQL", level: 70, description: "Schema definition, resolvers, and integration with Apollo Server" },
    ]
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git & GitHub", level: 90, description: "Version control, branching strategies, and CI/CD workflows" },
      { name: "Docker", level: 75, description: "Containerization, Docker Compose, and orchestration" },
      { name: "AWS", level: 65, description: "EC2, S3, Lambda, and CloudFront services" },
      { name: "Jest", level: 70, description: "Unit testing, mocking, and test coverage analysis" },
    ]
  }
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section id="skills" className="relative py-20">
      <AnimatedBackground />
      <div className="container mx-auto px-4 z-10 relative">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Expertise
        </motion.h2>
        <Tabs defaultValue="Frontend" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 relative z-20">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.name} value={category.name}>{category.name}</TabsTrigger>
            ))}
          </TabsList>
          {skillCategories.map((category) => (
            <TabsContent key={category.name} value={category.name}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                        <Progress value={skill.level} className="h-2 mb-4" />
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
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
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
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