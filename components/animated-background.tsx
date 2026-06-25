"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface GridBackgroundProps {
  className?: string;
}

export function GridBackground({ className = "" }: GridBackgroundProps) {
  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`}>
      <div className="animated-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <motion.div
        className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/10 to-cyan-500/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-1/4 right-0 h-[600px] w-[600px] translate-x-1/4 rounded-full bg-gradient-to-l from-emerald-500/10 to-primary/10 blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export function ParticleField() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 100, stiffness: 50 };
  const particleX = useSpring(mouseX, springConfig);
  const particleY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
  }));

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 -z-5 hidden overflow-hidden lg:block"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5 + particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
      <motion.div
        className="absolute h-16 w-16 rounded-full bg-gradient-to-r from-primary/30 to-cyan-500/30 blur-xl"
        style={{
          x: particleX,
          y: particleY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}

export function ScrollProgress() {
  const progress = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      progress.set(currentProgress * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [progress]);

  return (
    <motion.div
      className="reading-progress"
      style={{ width: useTransform(progress, (v) => `${v}%`) }}
    />
  );
}
