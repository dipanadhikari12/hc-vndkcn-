"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  GraduationCap,
  Code2,
  Briefcase,
  FolderKanban,
  Award,
  Download,
  FileText,
  Mail,
} from "lucide-react";
import { resumeData, socialLinks } from "@/lib/portfolio-data";
import { Section, SectionHeader } from "./hero-section";

const sectionIcons = {
  education: GraduationCap,
  technical: Code2,
  soft: Briefcase,
  projects: FolderKanban,
  certifications: Award,
  languages: FileText,
};

export function ResumeSection() {
  return (
    <Section id="resume">
      <SectionHeader
        title="Resume / CV"
        subtitle="A comprehensive overview of my professional qualifications and experience"
      />

      {/* Download Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 flex flex-wrap justify-center gap-4"
      >
        <Button asChild size="lg" className="gradient-shadow">
          <a href="/resume.pdf" download>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href={socialLinks.email}>
            <Mail className="mr-2 h-4 w-4" />
            Request Full Resume
          </a>
        </Button>
      </motion.div>

      {/* Resume Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <Card className="glass">
          <CardContent className="p-0">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-cyan-500 p-8 text-white">
              <h2 className="text-3xl font-bold">Dipan Adhikari</h2>
              <p className="mt-1 text-white/80">
                Student • Developer • Cybersecurity Enthusiast
              </p>
              <p className="mt-1 text-sm text-white/60">
                contact@dipan-adhikari.dev • Nepal
              </p>
            </div>

            {/* Resume Sections */}
            <div className="p-8">
              {/* Education */}
              <SectionRow icon={GraduationCap} title="Education">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold">{resumeData.education.institution}</h4>
                      <p className="text-muted-foreground">{resumeData.education.level}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {resumeData.education.focus.map((subject) => (
                          <Badge key={subject} variant="secondary">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground shrink-0">
                      {resumeData.education.startDate} - {resumeData.education.expectedGraduation}
                    </span>
                  </div>
                </div>
              </SectionRow>

              <Separator className="my-6" />

              {/* Technical Skills */}
              <SectionRow icon={Code2} title="Technical Skills">
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.technical.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </SectionRow>

              <Separator className="my-6" />

              {/* Soft Skills */}
              <SectionRow icon={Briefcase} title="Soft Skills">
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.soft.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </SectionRow>

              <Separator className="my-6" />

              {/* Languages */}
              <SectionRow icon={FileText} title="Languages">
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.languages.map((lang) => (
                    <Badge key={lang} variant="outline">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </SectionRow>

              <Separator className="my-6" />

              {/* Projects */}
              <SectionRow icon={FolderKanban} title="Featured Projects">
                <div className="space-y-4">
                  {resumeData.projects.slice(0, 3).map((project) => (
                    <div key={project.name}>
                      <h4 className="font-semibold">{project.name}</h4>
                      <p className="text-sm text-muted-foreground">{project.tagline}</p>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </SectionRow>

              <Separator className="my-6" />

              {/* Certifications */}
              <SectionRow icon={Award} title="Certifications">
                <div className="space-y-2">
                  {resumeData.certifications.map((cert) => (
                    <div key={cert.name} className="flex items-center justify-between">
                      <span>{cert.name}</span>
                      <Badge variant={cert.status === "Completed" ? "default" : "secondary"}>
                        {cert.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </SectionRow>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* ATS-Friendly Notice */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-center text-sm text-muted-foreground"
      >
        <p>This resume is formatted for ATS compatibility.</p>
        <p>Download the PDF for a fully formatted version.</p>
      </motion.div>
    </Section>
  );
}

function SectionRow({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <Icon className="h-5 w-5 text-primary" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );
}
