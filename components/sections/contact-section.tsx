"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Github,
  Linkedin,
  MessageCircle,
  Send,
  MapPin,
  Clock,
} from "lucide-react";
import { socialLinks } from "@/lib/portfolio-data";
import { Section, SectionHeader } from "./hero-section";

const socialPlatforms = [
  { name: "GitHub", icon: Github, href: socialLinks.github, color: "hover:bg-gray-700" },
  { name: "LinkedIn", icon: Linkedin, href: socialLinks.linkedin, color: "hover:bg-blue-600" },
  { name: "Discord", icon: MessageCircle, href: socialLinks.discord, color: "hover:bg-[#5865F2]" },
  { name: "Email", icon: Mail, href: socialLinks.email, color: "hover:bg-primary" },
];

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Section id="contact">
      <SectionHeader
        title="Get In Touch"
        subtitle="Have a question or want to connect? I'd love to hear from you."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card className="glass h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-cyan-500">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full gradient-shadow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Info & Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Contact Info */}
          <Card className="gradient-border bg-card">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">Kathmandu, Nepal</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a
                      href={socialLinks.email}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contact@dipan-adhikari.dev
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Time Zone</h4>
                    <p className="text-muted-foreground">NPT (UTC+5:45)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="text-lg">Connect With Me</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {socialPlatforms.map((platform, i) => (
                  <motion.a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-3 rounded-lg border bg-card p-3 transition-colors ${platform.color} hover:text-white`}
                  >
                    <platform.icon className="h-5 w-5" />
                    <span className="font-medium">{platform.name}</span>
                  </motion.a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Availability Status */}
          <Card className="glass">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-3 w-3 rounded-full bg-emerald-500" />
                  <div className="absolute inset-0 animate-ping h-3 w-3 rounded-full bg-emerald-500 opacity-50" />
                </div>
                <div>
                  <h4 className="font-semibold">Open for Opportunities</h4>
                  <p className="text-sm text-muted-foreground">
                    Currently accepting internships and collaboration requests
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
