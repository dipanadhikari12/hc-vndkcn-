"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Code2,
  Trophy,
  Users,
  Heart,
  Star,
} from "lucide-react";
import { achievementsData } from "@/lib/portfolio-data";
import { Section, SectionHeader } from "./hero-section";
import { cn } from "@/lib/utils";

const categoryIcons = {
  Academic: GraduationCap,
  Technology: Code2,
  Leadership: Trophy,
  Community: Heart,
};

const categoryColors = {
  Academic: "from-blue-500 to-cyan-500",
  Technology: "from-cyan-500 to-emerald-500",
  Leadership: "from-emerald-500 to-amber-500",
  Community: "from-amber-500 to-rose-500",
};

export function AchievementsSection() {
  return (
    <Section id="achievements">
      <SectionHeader
        title="Achievement Gallery"
        subtitle="Recognition and milestones marking my journey"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {achievementsData.map((achievement, i) => {
          const IconComponent = categoryIcons[achievement.category as keyof typeof categoryIcons] || Star;
          const colorClass = categoryColors[achievement.category as keyof typeof categoryColors] || "from-primary to-cyan-500";

          return (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
              <Card className="group h-full transition-all hover:shadow-lg hover:shadow-primary/5 glass">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br transition-transform group-hover:scale-110",
                      colorClass
                    )}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {achievement.year}
                    </Badge>
                  </div>
                  <h3 className="mb-2 font-semibold">{achievement.title}</h3>
                  <p className="mt-auto text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                  <Badge variant="secondary" className="mt-4 self-start">
                    {achievement.category}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Statistics Summary */}
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
              Achievement Summary
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {Object.entries(categoryIcons).map(([category, Icon]) => {
                const count = achievementsData.filter((a) => a.category === category).length;
                const colorClass = categoryColors[category as keyof typeof categoryColors];
                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className={cn(
                      "mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br",
                      colorClass
                    )}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-2xl font-bold">{count}</div>
                    <div className="text-sm text-muted-foreground">{category}</div>
                  </motion.div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Section>
  );
}
