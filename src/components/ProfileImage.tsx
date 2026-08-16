"use client";

import Image from "next/image";
import { useState } from "react";

interface ProfileImageProps {
  name: string;
}

export function ProfileImage({ name }: ProfileImageProps) {
  const [imageError, setImageError] = useState(false);

  // Replace this with your actual image path
  // Option 1: Put your image in public/ folder and use: /profile.jpg
  // Option 2: Use an external URL
  const imagePath = "public/Rihen_HOULI.png"; // Change this to your image path

  return (
    <div className="relative mx-auto">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-400 blur-2xl opacity-30 animate-pulse-glow" />
      <div className="relative h-28 w-28 rounded-full overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
        {!imageError ? (
          <Image
            src="/Rihen_HOULI.png"
            alt={name}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="text-4xl font-bold text-gradient">
            {name.split(" ").map(n => n[0]).join("")}
          </span>
        )}
      </div>
    </div>
  );
}