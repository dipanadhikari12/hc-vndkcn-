"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  GraduationCap,
  Award,
  BookOpen,
  Target,
  Trophy,
  Calendar,
} from "lucide-react";
import { academicData } from "@/lib/portfolio-data";
import { Section, SectionHeader } from "./hero-section";

export function AcademicSection() {
  return (
    <Section id="academic">
      <SectionHeader
        title="Academic Profile"
        subtitle="Excellence in education with a focus on computer science and mathematics"
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Current Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <Card className="glass h-full">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">
                    {academicData.currentEducation.institution}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {academicData.currentEducation.level}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex flex-wrap gap-2">
                {academicData.currentEducation.focus.map((subject) => (
                  <Badge key={subject} variant="secondary">
                    {subject}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>
                  {academicData.currentEducation.startDate} -{" "}
                  {academicData.currentEducation.expectedGraduation}
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* GPA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Card className="gradient-border h-full">
            <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-cyan-500">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold gradient-text">3.9</div>
              <p className="text-lg text-muted-foreground">/ 4.0 GPA</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Equivalently scored
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-8"
      >
        <Card className="glass">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-primary" />
              <CardTitle>Academic Achievements</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {academicData.achievements.map((achievement, i) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 rounded-lg bg-accent/50 p-3"
                >
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-8"
      >
        <Card className="glass">
          <CardHeader>
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-primary" />
              <CardTitle>Certifications & Courses</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              {academicData.certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-lg border bg-card p-4"
                >
                  <div className="mb-2 flex items-start justify-between">
                    <h4 className="font-semibold">{cert.name}</h4>
                    <Badge
                      variant={
                        cert.status === "Completed"
                          ? "default"
                          : cert.status === "In Progress"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {cert.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} • {cert.year}
                  </p>
                  {cert.status === "In Progress" && (
                    <Progress value={35} className="mt-3 h-2" />
                  )}
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Learning Roadmap */}
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
              <Target className="h-5 w-5 text-primary" />
              <CardTitle>Learning Roadmap</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              {academicData.roadmap.map((phase, i) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-cyan-500 text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  <h4 className="mb-2 font-semibold">{phase.phase}</h4>
                  <ul className="space-y-1">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* University Goals */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-8"
      >
        <Card className="gradient-border bg-card">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">University Goals</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {academicData.universityGoals.map((goal, i) => (
                <motion.div
                  key={goal}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Badge
                    variant="outline"
                    className="border-primary/30 px-4 py-2 text-base"
                  >
                    {goal}
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
