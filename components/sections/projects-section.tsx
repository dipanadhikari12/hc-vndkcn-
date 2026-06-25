"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  GitBranch,
  Target,
  AlertTriangle,
  Rocket,
  ChevronDown,
  ChevronUp,
  Layers,
  Zap,
  Shield,
  Gamepad2,
  Search,
} from "lucide-react";
import { projectsData } from "@/lib/portfolio-data";
import { Section, SectionHeader } from "./hero-section";
import { cn } from "@/lib/utils";

const projectIcons = {
  waterNodes: Layers,
  discordDevelopment: Zap,
  minecraftDevelopment: Gamepad2,
  cybersecResearch: Search,
};

const projectColors = {
  waterNodes: "from-blue-500 to-cyan-500",
  discordDevelopment: "from-cyan-500 to-emerald-500",
  minecraftDevelopment: "from-emerald-500 to-amber-500",
  cybersecResearch: "from-amber-500 to-rose-500",
};

interface ProjectCardProps {
  project: {
    name: string;
    tagline: string;
    description: string;
    technologies: string[];
    objectives: string[];
    challenges: string[];
    futureImprovements: string[];
    stats: Record<string, string>;
  };
  projectKey: keyof typeof projectsData;
  delay: number;
}

function ProjectCard({ project, projectKey, delay }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = projectIcons[projectKey];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="h-full"
    >
      <Card className="glass group h-full transition-all hover:shadow-xl hover:shadow-primary/10">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className={cn(
                "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br transition-transform group-hover:scale-110",
                projectColors[projectKey]
              )}>
                <IconComponent className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl">{project.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{project.tagline}</p>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Description */}
          <p className="text-muted-foreground">{project.description}</p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-lg font-bold text-primary">{value}</div>
                <div className="text-xs capitalize text-muted-foreground">{key}</div>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 5 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 5} more
              </Badge>
            )}
          </div>

          {/* Expandable Details */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 overflow-hidden"
              >
                {/* Objectives */}
                <div>
                  <div className="mb-2 flex items-center gap-2 font-medium">
                    <Target className="h-4 w-4 text-primary" />
                    Objectives
                  </div>
                  <ul className="space-y-1 pl-6 text-sm text-muted-foreground">
                    {project.objectives.map((obj) => (
                      <li key={obj} className="list-disc">{obj}</li>
                    ))}
                  </ul>
                </div>

                {/* Challenges */}
                <div>
                  <div className="mb-2 flex items-center gap-2 font-medium">
                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                    Challenges
                  </div>
                  <ul className="space-y-1 pl-6 text-sm text-muted-foreground">
                    {project.challenges.map((challenge) => (
                      <li key={challenge} className="list-disc">{challenge}</li>
                    ))}
                  </ul>
                </div>

                {/* Future Improvements */}
                <div>
                  <div className="mb-2 flex items-center gap-2 font-medium">
                    <Rocket className="h-4 w-4 text-emerald-500" />
                    Future Improvements
                  </div>
                  <ul className="space-y-1 pl-6 text-sm text-muted-foreground">
                    {project.futureImprovements.map((improvement) => (
                      <li key={improvement} className="list-disc">{improvement}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Expand Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="ml-1 h-4 w-4" />
              </>
            ) : (
              <>
                Show Details <ChevronDown className="ml-1 h-4 w-4" />
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <Section id="projects">
      <SectionHeader
        title="Projects Showcase"
        subtitle="Real-world projects showcasing technical expertise and problem-solving abilities"
      />

      <div className="grid gap-8 md:grid-cols-2">
        {Object.entries(projectsData).map(([key, project], i) => (
          <ProjectCard
            key={key}
            project={project}
            projectKey={key as keyof typeof projectsData}
            delay={i * 0.1}
          />
        ))}
      </div>

      {/* GitHub Activity Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12"
      >
        <Card className="glass">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <GitBranch className="h-5 w-5 text-primary" />
                <span className="font-medium">GitHub Contribution Activity</span>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/dipan-adhikari" target="_blank" rel="noopener noreferrer">
                  View Profile <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="mt-4 grid grid-cols-[repeat(52,1fr)] gap-0.5 overflow-hidden rounded-lg">
              {Array.from({ length: 52 * 7 }).map((_, i) => {
                const level = Math.floor(Math.random() * 4);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.0005 }}
                    className={cn(
                      "h-3 w-3 rounded-sm",
                      level === 0 && "bg-muted",
                      level === 1 && "bg-primary/30",
                      level === 2 && "bg-primary/60",
                      level === 3 && "bg-primary"
                    )}
                  />
                );
              })}
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="h-3 w-3 rounded-sm bg-muted" />
                <div className="h-3 w-3 rounded-sm bg-primary/30" />
                <div className="h-3 w-3 rounded-sm bg-primary/60" />
                <div className="h-3 w-3 rounded-sm bg-primary" />
              </div>
              <span>More</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Section>
  );
}
