import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rihen Houli — Full Stack Engineer",
  description:
    "Full Stack Engineer with 5+ years building scalable web platforms and REST APIs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
