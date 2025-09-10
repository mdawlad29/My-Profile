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
        <main className="relative min-h-screen overflow-x-hidden px-4 pb-8 pt-28 md:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
