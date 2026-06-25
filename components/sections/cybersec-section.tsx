"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Shield,
  Network,
  Server,
  Globe,
  Cloud,
  Code,
  Search,
  Award,
  BookOpen,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { cybersecurityJourney } from "@/lib/portfolio-data";
import { Section, SectionHeader } from "./hero-section";
import { cn } from "@/lib/utils";

const roadmapIcons = {
  "Networking Fundamentals": Network,
  "Linux Mastery": Server,
  "Security Foundations": Shield,
  "Web Security": Globe,
  "Cloud Security": Cloud,
  "Secure Development": Code,
  "Security Research": Search,
};

const roadmapColors = {
  "Networking Fundamentals": "from-blue-500 to-cyan-500",
  "Linux Mastery": "from-cyan-500 to-teal-500",
  "Security Foundations": "from-teal-500 to-emerald-500",
  "Web Security": "from-emerald-500 to-amber-500",
  "Cloud Security": "from-amber-500 to-orange-500",
  "Secure Development": "from-orange-500 to-rose-500",
  "Security Research": "from-rose-500 to-pink-500",
};

export function CybersecuritySection() {
  return (
    <Section id="journey">
      <SectionHeader
        title="Cybersecurity Journey"
        subtitle="My structured path through the world of security, from fundamentals to advanced research"
      />

      {/* Roadmap */}
      <div className="relative mb-12">
        {/* Progress Line */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-primary via-cyan-500 to-transparent" />

        <div className="space-y-8 lg:space-y-12">
          {cybersecurityJourney.roadmap.map((phase, index) => {
            const IconComponent = roadmapIcons[phase.phase as keyof typeof roadmapIcons] || Shield;
            const colorClass = roadmapColors[phase.phase as keyof typeof roadmapColors] || "from-primary to-cyan-500";
            const isComplete = phase.progress === 100;
            const isInProgress = phase.progress > 0 && phase.progress < 100;

            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative flex items-center gap-8",
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                )}
              >
                {/* Content */}
                <div className={cn(
                  "flex-1",
                  index % 2 === 0 ? "text-right" : "text-left"
                )}>
                  <Card className={cn(
                    "glass inline-block max-w-md transition-all hover:shadow-lg",
                    isComplete && "border-emerald-500/30",
                    isInProgress && "border-primary/30"
                  )}>
                    <CardHeader className="pb-2">
                      <div className={cn(
                        "flex items-center gap-3",
                        index % 2 === 0 ? "justify-end" : "justify-start"
                      )}>
                        {isComplete && <CheckCircle2 className="h-5 w-5 text-emerald-500" />}
                        <div className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br",
                          colorClass
                        )}>
                          <IconComponent className="h-4 w-4 text-white" />
                        </div>
                        <CardTitle className="text-lg">{phase.phase}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="mb-3">
                        <div className="mb-1 flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{phase.progress}%</span>
                        </div>
                        <Progress value={phase.progress} className="h-2" />
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {phase.topics.map((topic) => (
                          <Badge key={topic} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Center Node */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br",
                      colorClass,
                      "ring-4 ring-background shadow-lg"
                    )}
                  >
                    <span className="text-sm font-bold text-white">{index + 1}</span>
                  </motion.div>
                </div>

                {/* Empty side for alternating layout */}
                <div className="flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Certifications Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <Card className="glass">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-primary" />
              <CardTitle>Security Certifications</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              {cybersecurityJourney.certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-cyan-500 mx-auto">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold">{cert.name}</h4>
                  <Badge variant="outline" className="mt-2">
                    {cert.status}
                  </Badge>
                  {cert.status === "In Progress" && (
                    <div className="mt-3">
                      <Progress value={cert.completion} className="h-2" />
                      <p className="mt-1 text-xs text-muted-foreground">
                        {cert.completion}% Complete
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Learning Resources */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-8"
      >
        <Card className="gradient-border bg-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Learning Resources</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {cybersecurityJourney.resources.map((resource, i) => (
                <motion.div
                  key={resource}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2 rounded-lg bg-accent/50 p-3"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span className="text-sm">{resource}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center"
      >
        <p className="text-lg text-muted-foreground">
          Follow my security journey as I work towards becoming a certified security professional.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <Badge variant="secondary" className="px-4 py-2">
            <Shield className="mr-2 h-4 w-4" />
            Active Learner
          </Badge>
          <Badge variant="secondary" className="px-4 py-2">
            <ExternalLink className="mr-2 h-4 w-4" />
            CTF Participant
          </Badge>
        </div>
      </motion.div>
    </Section>
  );
}
