import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chris Tycer - Data & Business Analyst",
  description:
    "Chris Tycer is a seasoned supply chain and data analytics professional specializing in forecasting, BI development, and systems design. Explore my portfolio to learn more.",
  keywords: [
    "Supply Chain Analyst",
    "Forecasting",
    "BI Developer",
    "Data Analytics",
    "Python",
    "SQL",
    "Systems Design",
    "Data Visualization",
    "Business Intelligence",
    "Data-Driven Decision Making",
    "Data Science",
    "Data Engineering",
    "Data Management",
    "Data Warehousing",
    "Data Modeling",
    "Data Analysis",
    "Business Analytics"
  ],
  creator: "Chris Tycer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tycer.dev",
    title: "Chris Tycer - Data & Supply Chain Analyst",
    description:
      "Explore the portfolio of Chris Tycer, a data-driven professional specializing in supply chain optimization, forecasting, and business intelligence.",
    siteName: "Chris Tycer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Tycer - Data & Supply Chain Analyst",
    description:
      "Data-driven professional specializing in supply chain optimization, forecasting, and BI development.",
    creator: "@tycerch",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Chris Tycer",
    "url": "https://tycer.dev",
    "sameAs": [
      "https://github.com/tycerch",
      "https://www.linkedin.com/in/christycer/"
    ],
    "jobTitle": "Data & Supply Chain Analyst",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Portland",
      "addressRegion": "OR",
      "addressCountry": "US"
    }
  };

  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="canonical" href="https://tycer.dev" />
        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify(structuredData)}
        </Script>
      </head>
      <body className="bg-background text-foreground font-sans antialiased">
        <NavBar />
        <SocialLinks />
        <main className="pt-[80px] min-h-screen max-w-[100vw] overflow-x-hidden">
          {children}
        </main>
        <footer className="py-6 text-center text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} Chris Tycer. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
