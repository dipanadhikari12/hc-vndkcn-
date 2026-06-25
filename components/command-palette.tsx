"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Command,
  Home,
  User,
  GraduationCap,
  Code2,
  FolderKanban,
  Shield,
  Globe,
  FileText,
  Trophy,
  Target,
  Mail,
  Download,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const commands = [
  { id: "home", label: "Go to Home", icon: Home, href: "#home", shortcut: "G H" },
  { id: "about", label: "Go to About", icon: User, href: "#about", shortcut: "G A" },
  { id: "academic", label: "Go to Academic", icon: GraduationCap, href: "#academic", shortcut: "G C" },
  { id: "skills", label: "Go to Skills", icon: Code2, href: "#skills", shortcut: "G S" },
  { id: "projects", label: "Go to Projects", icon: FolderKanban, href: "#projects", shortcut: "G P" },
  { id: "journey", label: "Go to Journey", icon: Shield, href: "#journey", shortcut: "G J" },
  { id: "mun", label: "Go to MUN", icon: Globe, href: "#mun", shortcut: "G M" },
  { id: "resume", label: "Go to Resume", icon: FileText, href: "#resume", shortcut: "G R" },
  { id: "achievements", label: "Go to Achievements", icon: Trophy, href: "#achievements", shortcut: "G T" },
  { id: "goals", label: "Go to Goals", icon: Target, href: "#goals", shortcut: "G O" },
  { id: "contact", label: "Go to Contact", icon: Mail, href: "#contact", shortcut: "G C" },
  { id: "download", label: "Download CV", icon: Download, href: "/resume.pdf", shortcut: "D" },
];

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { theme, setTheme } = useTheme();

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  const handleSelect = (cmd: typeof commands[0]) => {
    if (cmd.href.startsWith("#")) {
      document.querySelector(cmd.href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(cmd.href, "_blank");
    }
    setIsOpen(false);
    setSearch("");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.15 }}
          className="fixed left-1/2 top-1/4 w-full max-w-lg -translate-x-1/2 rounded-xl border bg-card shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Input */}
          <div className="flex items-center border-b px-4">
            <Command className="h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search commands..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setSelectedIndex((i) => Math.min(i + 1, filteredCommands.length - 1));
                }
                if (e.key === "ArrowUp") {
                  e.preventDefault();
                  setSelectedIndex((i) => Math.max(i - 1, 0));
                }
                if (e.key === "Enter" && filteredCommands[selectedIndex]) {
                  handleSelect(filteredCommands[selectedIndex]);
                }
              }}
              className="flex-1 bg-transparent px-3 py-4 outline-none placeholder:text-muted-foreground"
              autoFocus
            />
            <button
              onClick={() => setIsOpen(false)}
              className="rounded p-1 hover:bg-accent"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Commands List */}
          <div className="max-h-80 overflow-y-auto p-2">
            {filteredCommands.length === 0 ? (
              <p className="p-4 text-center text-muted-foreground">No commands found</p>
            ) : (
              filteredCommands.map((cmd, i) => (
                <button
                  key={cmd.id}
                  onClick={() => handleSelect(cmd)}
                  onMouseEnter={() => setSelectedIndex(i)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                    i === selectedIndex ? "bg-accent" : "hover:bg-accent/50"
                  )}
                >
                  <cmd.icon className="h-5 w-5 text-muted-foreground" />
                  <span className="flex-1">{cmd.label}</span>
                  <kbd className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                    {cmd.shortcut}
                  </kbd>
                </button>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t px-4 py-2 text-xs text-muted-foreground">
            <span>
              Press <kbd className="rounded bg-muted px-1">Enter</kbd> to select
            </span>
            <span>
              <kbd className="rounded bg-muted px-1">Esc</kbd> to close
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
