import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/partials/Header";
import { Footer } from "@/partials/Footer";
import SnowCursor from "@/shared/SnowCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Awlad - Software Engineer",
  description:
    "Awlad, Dhaka-based software engineer specializing in web development. Leading innovative shopify SEO app building at DocTime &amp; Media365 Limited.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="relative min-h-screen overflow-x-hidden px-4 pb-8 pt-28 mx-auto w-full max-w-6xl">
          <SnowCursor />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
