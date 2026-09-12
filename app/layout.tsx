import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Viren Wankhade | Data Analyst & Data Scientist",
  description:
    "Portfolio of Viren Wankhade — Data Analyst, Data Scientist, and ML enthusiast building data analytics, machine learning, and AI solutions.",
  keywords: [
    "Viren Wankhade",
    "Data Analyst",
    "Data Scientist",
    "Machine Learning",
    "Python",
    "SQL",
    "Power BI",
    "Artificial Intelligence",
    "AI",
    "Portfolio",
  ],
  authors: [
    {
      name: "Viren Wankhade",
    },
  ],
  creator: "Viren Wankhade",
  openGraph: {
    title: "Viren Wankhade | Data Analyst & Data Scientist",
    description:
      "Explore Viren Wankhade's work in data analytics, machine learning, and AI.",
    type: "website",
    siteName: "Viren Wankhade Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viren Wankhade | Data Analyst & Data Scientist",
    description:
      "Data analytics, machine learning, and AI portfolio.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
 {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}