import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
const inter = Inter({ subsets: ["latin"] });
const Layout = dynamic(() => import("@/components/Layouts/Layout"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Home",
  description: "My personal portfolio website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
