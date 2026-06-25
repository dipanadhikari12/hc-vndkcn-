"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Target, Rocket, MapPin, CheckCircle2 } from "lucide-react";
import { goalsData } from "@/lib/portfolio-data";
import { Section, SectionHeader } from "./hero-section";

export function GoalsSection() {
  return (
    <Section id="goals">
      <SectionHeader
        title="Future Goals"
        subtitle="My roadmap for personal and professional growth"
      />

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Short-Term Goals */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card className="glass h-full">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-cyan-500">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle>Short-Term Goals</CardTitle>
                  <p className="text-sm text-muted-foreground">Current focus areas</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {goalsData.shortTerm.map((goal, i) => (
                <motion.div
                  key={goal.goal}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-lg border bg-card p-4"
                >
                  <div className="mb-2 flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      {goal.progress === 100 ? (
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-500 shrink-0" />
                      ) : (
                        <MapPin className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                      )}
                      <div>
                        <h4 className="font-semibold">{goal.goal}</h4>
                        <p className="text-sm text-muted-foreground">{goal.description}</p>
                      </div>
                    </div>
                    <Badge variant={goal.progress === 100 ? "default" : "secondary"} className="shrink-0">
                      {goal.progress}%
                    </Badge>
                  </div>
                  <Progress value={goal.progress} className="mt-3 h-2" />
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Long-Term Goals */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="gradient-border h-full bg-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-amber-500">
                  <Rocket className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle>Long-Term Vision</CardTitle>
                  <p className="text-sm text-muted-foreground">Where I'm headed</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {goalsData.longTerm.map((goal, i) => (
                <motion.div
                  key={goal.goal}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 rounded-lg bg-accent/50 p-4"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-primary to-cyan-500 text-xs font-bold text-white shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold">{goal.goal}</h4>
                    <p className="text-sm text-muted-foreground">{goal.description}</p>
                  </div>
                </motion.div>
              ))}

              {/* Timeline Visualization */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-6 rounded-lg bg-gradient-to-r from-primary/10 via-cyan-500/10 to-emerald-500/10 p-6"
              >
                <h4 className="mb-4 text-center font-semibold">Career Timeline</h4>
                <div className="flex items-center justify-between">
                  {[
                    { label: "2025", title: "University" },
                    { label: "2029", title: "CS Degree" },
                    { label: "2030", title: "Security Eng" },
                    { label: "2035", title: "Founder" },
                  ].map((milestone, i) => (
                    <div key={milestone.label} className="flex flex-col items-center">
                      <div className="h-3 w-3 rounded-full bg-primary" />
                      <span className="mt-1 text-xs text-muted-foreground">{milestone.label}</span>
                      <span className="mt-1 text-xs font-medium">{milestone.title}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Motivational Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 text-center"
      >
        <blockquote className="text-xl italic text-muted-foreground">
          "The future belongs to those who believe in the beauty of their dreams."
        </blockquote>
        <p className="mt-2 text-sm text-muted-foreground">— Eleanor Roosevelt</p>
      </motion.div>
    </Section>
  );
}
