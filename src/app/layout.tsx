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
        <Layout>
          <main className="min-h-screen lg:px-40 md:px-16 sm:px-12 px-4">
            {children}
          </main>
        </Layout>
      </body>
    </html>
  );
}
