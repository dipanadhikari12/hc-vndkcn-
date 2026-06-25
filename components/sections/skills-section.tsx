"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Code2,
  Laptop,
  Shield,
  Server,
  TrendingUp,
} from "lucide-react";
import { skillsData } from "@/lib/portfolio-data";
import { Section, SectionHeader } from "./hero-section";
import { cn } from "@/lib/utils";

const categoryConfig = {
  programming: {
    title: "Programming Languages",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
  },
  development: {
    title: "Development",
    icon: Laptop,
    color: "from-cyan-500 to-emerald-500",
  },
  cybersecurity: {
    title: "Cybersecurity",
    icon: Shield,
    color: "from-emerald-500 to-amber-500",
  },
  infrastructure: {
    title: "Infrastructure",
    icon: Server,
    color: "from-amber-500 to-rose-500",
  },
};

interface SkillBarProps {
  name: string;
  level: number;
  description: string;
  delay: number;
  colorClass: string;
}

function SkillBar({ name, level, description, delay, colorClass }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group"
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="relative h-2.5 overflow-hidden rounded-full bg-secondary">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className={cn(
            "absolute left-0 top-0 h-full rounded-full bg-gradient-to-r",
            colorClass
          )}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.5 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
        />
      </div>
      <p className="mt-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
        {description}
      </p>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <Section id="skills">
      <SectionHeader
        title="Technical Skills"
        subtitle="A comprehensive overview of my technical expertise across different domains"
      />

      {/* Skills Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {Object.entries(categoryConfig).map(([key, config], i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="glass h-full transition-all hover:shadow-lg hover:shadow-primary/5 cursor-default">
              <CardContent className="p-6">
                <div className={cn(
                  "mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br",
                  config.color
                )}>
                  <config.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 font-semibold">{config.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {skillsData[key as keyof typeof skillsData].length} skills
                </p>
                <div className="mt-3">
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-emerald-500" />
                    <span className="text-muted-foreground">
                      Avg:{" "}
                      {Math.round(
                        skillsData[key as keyof typeof skillsData].reduce(
                          (a, s) => a + s.level,
                          0
                        ) / skillsData[key as keyof typeof skillsData].length
                      )}
                      %
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Detailed Skills Grid */}
      <div className="grid gap-8 lg:grid-cols-2">
        {Object.entries(skillsData).map(([key, skills], categoryIndex) => {
          const config = categoryConfig[key as keyof typeof categoryConfig];
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <Card className="glass h-full">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-4">
                  <div className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br",
                    config.color
                  )}>
                    <config.icon className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle>{config.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      description={skill.description}
                      delay={i * 0.05}
                      colorClass={config.color}
                    />
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Technology Stack Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12"
      >
        <Card className="gradient-border bg-card">
          <CardContent className="p-8">
            <h3 className="mb-6 text-center text-xl font-semibold">
              Technology Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                // Programming
                { name: "Python", category: "programming" },
                { name: "JavaScript", category: "programming" },
                { name: "TypeScript", category: "programming" },
                { name: "Java", category: "programming" },
                { name: "HTML/CSS", category: "programming" },
                // Development
                { name: "Next.js", category: "development" },
                { name: "React", category: "development" },
                { name: "Node.js", category: "development" },
                { name: "Discord.js", category: "development" },
                { name: "TailwindCSS", category: "development" },
                // Databases
                { name: "PostgreSQL", category: "infrastructure" },
                { name: "MongoDB", category: "infrastructure" },
                { name: "Redis", category: "infrastructure" },
                // Infrastructure
                { name: "Docker", category: "infrastructure" },
                { name: "Linux", category: "infrastructure" },
                { name: "Nginx", category: "infrastructure" },
                { name: "AWS", category: "infrastructure" },
                // Security
                { name: "Burp Suite", category: "security" },
                { name: "Wireshark", category: "security" },
                { name: "Metasploit", category: "security" },
                { name: "Git", category: "tools" },
              ].map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge
                    variant="secondary"
                    className="cursor-default px-4 py-2 text-sm transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    {tech.name}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Section>
  );
}
