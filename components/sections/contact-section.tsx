"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle, Mail } from "lucide-react";
import { socialLinks } from "@/lib/portfolio-data";

const socials = [
  { name: "GitHub", icon: Github, href: socialLinks.github, color: "hover:bg-gray-700" },
  { name: "LinkedIn", icon: Linkedin, href: socialLinks.linkedin, color: "hover:bg-blue-600" },
  { name: "Discord", icon: MessageCircle, href: socialLinks.discord, color: "hover:bg-[#5865F2]" },
  { name: "Email", icon: Mail, href: socialLinks.email, color: "hover:bg-primary" },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="section-container max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you want to discuss a project, collaborate, or just say hello, feel free to reach out through any of the channels below!
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {socials.map((social) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl border bg-card text-card-foreground shadow-sm transition-colors ${social.color} hover:text-white`}
              >
                <IconComponent className="h-5 w-5" />
                <span className="font-medium">{social.name}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
