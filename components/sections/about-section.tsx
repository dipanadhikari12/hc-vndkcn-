"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { profileData } from "@/lib/portfolio-data";
import { Section, SectionHeader } from "./hero-section";
import { Target, Users, Lightbulb, Shield } from "lucide-react";

const valueIcons = {
  Integrity: Shield,
  Innovation: Lightbulb,
  Growth: Target,
  Collaboration: Users,
};

export function AboutSection() {
  return (
    <Section id="about">
      <SectionHeader
        title="About Me"
        subtitle="Computer Science enthusiast with a passion for building secure, innovative solutions"
      />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="glass h-full">
            <CardContent className="p-6 lg:p-8">
              <h3 className="mb-6 text-2xl font-semibold">My Story</h3>
              <div className="space-y-4 text-muted-foreground">
                {profileData.bio.long.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Mission & Values */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Mission Statement */}
          <Card className="gradient-border overflow-hidden">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Mission Statement</h3>
              </div>
              <p className="italic text-muted-foreground">
                "{profileData.missionStatement}"
              </p>
            </CardContent>
          </Card>

          {/* Core Values */}
          <div className="grid gap-4 sm:grid-cols-2">
            {profileData.coreValues.map((value, index) => {
              const IconComponent =
                valueIcons[value.title as keyof typeof valueIcons] || Target;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="group h-full transition-all hover:shadow-lg hover:shadow-primary/5">
                    <CardContent className="p-5">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="mb-2 font-semibold">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-16"
      >
        <h3 className="mb-8 text-center text-2xl font-semibold">My Journey</h3>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary via-cyan-500 to-emerald-500" />

          <div className="space-y-8">
            {profileData.timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <Card className="inline-block glass">
                    <CardContent className="p-4">
                      <Badge variant="outline" className="mb-2">
                        {item.year}
                      </Badge>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="z-10 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary ring-4 ring-background" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {[
          { label: "Projects Completed", value: "15+" },
          { label: "Technologies Mastered", value: "20+" },
          { label: "Years Coding", value: "4+" },
          { label: "MUN Awards", value: "5+" },
        ].map((stat, i) => (
          <Card key={stat.label} className="text-center">
            <CardContent className="p-6">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
                className="text-3xl font-bold gradient-text"
              >
                {stat.value}
              </motion.div>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </Section>
  );
}
