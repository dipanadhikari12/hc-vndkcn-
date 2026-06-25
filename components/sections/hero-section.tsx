"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profileData } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const typingPhrases = profileData.roles;

export function HeroSection() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const currentPhrase = typingPhrases[phraseIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentPhrase.length) {
            setCurrentText(currentPhrase.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (charIndex > 0) {
            setCurrentText(currentPhrase.substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setPhraseIndex((phraseIndex + 1) % typingPhrases.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="section-container relative z-10 py-20 text-center"
      >
        {/* Professional Portrait Placeholder */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="relative">
            <motion.div
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-cyan-500 to-emerald-500 opacity-75 blur-xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="relative h-40 w-40 overflow-hidden rounded-full bg-gradient-to-br from-primary to-cyan-500 p-1">
              <img
                src="/AZ7-Rroogo8yc4m7wo0yCw-AZ7-RrooRNuSwpzsfLihDw.jpg"
                alt={profileData.name}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="mb-4 text-lg font-medium text-muted-foreground"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          <span className="gradient-text">{profileData.name}</span>
        </motion.h1>

        {/* Typing Effect */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex items-center justify-center gap-1"
        >
          <span className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
            {currentText}
          </span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block h-8 w-[3px] rounded-full bg-primary sm:h-10"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground"
        >
          {profileData.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="gradient-shadow">
            <a href="#projects">
              View Portfolio
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/resume.pdf" download>
              Download CV
              <Download className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href="#contact">
              Contact Me
              <Mail className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="h-8 w-8 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export function Section({
  id,
  children,
  className
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative py-20 lg:py-32", className)}>
      <div className="section-container">{children}</div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}) {
  return (
    <div className={`mb-12 text-${align}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl text-lg text-muted-foreground"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
