import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";
import { profile } from "@/lib/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: profile.seo.title,
  description: profile.seo.description,
  keywords: profile.seo.keywords.join(", "),
  authors: [{ name: profile.name }],
  openGraph: {
    title: profile.seo.title,
    description: profile.seo.description,
    url: "https://rihen-houli.vercel.app",
    siteName: `${profile.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: profile.seo.title,
    description: profile.seo.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}