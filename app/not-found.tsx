"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mb-8 text-9xl font-bold gradient-text"
        >
          404
        </motion.div>
        <h1 className="mb-4 text-4xl font-bold">Page Not Found</h1>
        <p className="mb-8 max-w-md text-muted-foreground">
          The page you're looking for doesn't exist or has been moved to another location.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="javascript:history.back()">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
