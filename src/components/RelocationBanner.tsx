"use client";

import { profile } from "@/lib/profile";
import { motion } from "framer-motion";
import { Globe, Plane, MapPin } from "lucide-react";

export function RelocationBanner() {
  if (!profile.relocation.openToRelocation) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 p-4"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-purple-500/5 animate-pulse" />
      
      <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="rounded-full bg-primary/20 p-2">
            <Plane className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-medium text-sm">
              🌍 Open to Relocation
            </p>
            <p className="text-xs text-muted-foreground">
              {profile.relocation.preferredLocations.join(" · ")}
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="flex items-center gap-1 rounded-full bg-secondary/50 px-3 py-1">
            <Globe className="h-3 w-3" />
            {profile.relocation.visaStatus}
          </span>
          <span className="flex items-center gap-1 rounded-full bg-secondary/50 px-3 py-1">
            <MapPin className="h-3 w-3" />
            Notice: {profile.relocation.noticePeriod}
          </span>
        </div>
      </div>
    </motion.div>
  );
}