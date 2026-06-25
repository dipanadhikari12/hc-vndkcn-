"use client";

import {
  GridBackground,
  ParticleField,
  ScrollProgress,
} from "@/components/animated-background";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { AcademicSection } from "@/components/sections/academic-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { CybersecuritySection } from "@/components/sections/cybersec-section";
import { MUNSection } from "@/components/sections/mun-section";
import { ResumeSection } from "@/components/sections/resume-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { GoalsSection } from "@/components/sections/goals-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";
import { CommandPalette } from "@/components/command-palette";

export default function Home() {
  return (
    <>
      {/* Global Effects */}
      <ScrollProgress />
      <GridBackground />
      <ParticleField />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <AcademicSection />
        <SkillsSection />
        <ProjectsSection />
        <CybersecuritySection />
        <MUNSection />
        <ResumeSection />
        <AchievementsSection />
        <GoalsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Command Palette */}
      <CommandPalette />
    </>
  );
}
