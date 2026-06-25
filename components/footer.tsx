"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal, Heart, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { navigationItems, socialLinks, profileData } from "@/lib/portfolio-data";

const socials = [
  { name: "GitHub", icon: Github, href: socialLinks.github },
  { name: "LinkedIn", icon: Linkedin, href: socialLinks.linkedin },
  { name: "Twitter", icon: Twitter, href: socialLinks.twitter },
  { name: "Email", icon: Mail, href: socialLinks.mail }, // Fixed to map correctly to socialLinks.mail
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t bg-card/50">
      <div className="section-container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="/" className="flex items-center gap-2 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-cyan-500 p-0.5"
              >
                <img
                  src="/AZ7-Rroogo8yc4m7wo0yCw-AZ7-RrooRNuSwpzsfLihDw.jpg"
                  alt="Dipan Adhikari"
                  className="h-full w-full rounded-md object-cover"
                />
              </motion.div>
              <span className="text-lg font-bold">{profileData.name}</span>
            </Link>
            <p className="mb-4 max-w-md text-muted-foreground">
              {profileData.tagline}
            </p>
            <div className="flex gap-3">
              {socials.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted transition-colors hover:bg-primary hover:text-primary-foreground"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {navigationItems.slice(0, 6).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* More Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-4 font-semibold">More</h4>
            <nav className="flex flex-col gap-2">
              {navigationItems.slice(6).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Download CV
              </a>
            </nav>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {profileData.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Built with <Heart className="h-4 w-4 text-rose-500" /> using Next.js
          </p>
        </div>

        {/* Branding Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 text-center text-sm text-muted-foreground"
        >
          "{profileData.tagline}"
        </motion.p>
      </div>

      {/* Decorative Top Border */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </footer>
  );
}
