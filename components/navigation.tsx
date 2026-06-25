"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { navigationItems } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "glass shadow-lg" : "bg-transparent",
          className
        )}
      >
        <nav className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-2 font-bold">
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
            <span className="text-lg font-semibold">DA</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navigationItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-accent"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex" aria-label="Command palette">
              <Command className="h-4 w-4" />
            </Button>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-72 bg-background p-6 shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">Menu</span>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close menu">
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="mt-8 flex flex-col gap-2">
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
