"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Mic,
  Globe,
  Users,
  FileText,
  Zap,
  Award,
  Target,
  Heart,
} from "lucide-react";
import { munData } from "@/lib/portfolio-data";
import { Section, SectionHeader } from "./hero-section";

const skillIcons = {
  "Public Speaking": Mic,
  "Research": Target,
  "Diplomacy": Heart,
  "Resolution Drafting": FileText,
  "Crisis Management": Zap,
};

export function MUNSection() {
  return (
    <Section id="mun">
      <SectionHeader
        title="Model United Nations"
        subtitle="Developing leadership, diplomacy, and global awareness through debate"
      />

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card className="glass mb-8">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-cyan-500 shrink-0">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <p className="text-lg text-muted-foreground">
                {munData.description}
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Experience Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <Card className="glass mb-8">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-primary" />
              <CardTitle>Conference Experience</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {munData.experience.map((exp, i) => (
                <motion.div
                  key={exp.event}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col gap-4 rounded-lg border bg-card p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-cyan-500 text-white">
                        {exp.country.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{exp.event}</h4>
                      <p className="text-sm text-muted-foreground">
                        {exp.committee} • {exp.country}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant={exp.award === "Outstanding Delegate" ? "default" : "secondary"}
                    className="self-start sm:self-center"
                  >
                    {exp.award}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Skills Developed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <Card className="glass mb-8">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-primary" />
              <CardTitle>Skills Developed</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {munData.skills.map((skill, i) => {
                const IconComponent = skillIcons[skill.name as keyof typeof skillIcons] || Mic;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group text-center"
                  >
                    <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-cyan-500 mx-auto transition-transform group-hover:scale-110">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <h4 className="font-semibold">{skill.name}</h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {skill.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Policy Interests */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <Card className="gradient-border bg-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Policy Interests</h3>
            </div>
            <p className="mb-4 text-muted-foreground">
              Areas of international policy that I'm most passionate about exploring:
            </p>
            <div className="flex flex-wrap gap-3">
              {munData.interests.map((interest, i) => (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Badge
                    variant="outline"
                    className="border-primary/30 px-4 py-2 text-base transition-colors hover:bg-primary/10"
                  >
                    {interest}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Speech Gallery Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-8"
      >
        <Card className="glass">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Mic className="h-5 w-5 text-primary" />
              <CardTitle>Speech Gallery</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {["Opening Speech - Security Council 2024", "Position Paper Presentation", "Resolution Defense Highlights"].map((speech, i) => (
                <motion.div
                  key={speech}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-video rounded-lg bg-gradient-to-br from-muted to-accent flex items-center justify-center"
                >
                  <div className="text-center">
                    <Mic className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">{speech}</p>
                    <Badge variant="outline" className="mt-2">Coming Soon</Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Section>
  );
}
