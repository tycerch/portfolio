import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chris Tycer",
  description:
    "Chris Tycer is a data analyst and full-stack developer specializing in data pipelines, analytics solutions, and machine learning applications.",
  keywords: [
    "Data Analyst",
    "Full Stack Developer",
    "Machine Learning",
    "Analytics",
    "Python",
    "Next.js",
  ],
  creator: "Chris Tycer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tycer.dev",
    title: "Chris Tycer",
    description: "Data analyst and full-stack developer specializing in analytics solutions",
    siteName: "Chris Tycer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Tycer",
    description: "Data analyst and full-stack developer specializing in analytics solutions",
    creator: "@tycerch",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-background text-foreground font-sans antialiased">
        <NavBar />
        <SocialLinks />
        <main className="pt-[80px] min-h-screen max-w-[100vw] overflow-x-hidden">
          {children}
        </main>
        <footer className="py-6 text-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Chris Tycer. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
