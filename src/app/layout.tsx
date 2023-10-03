import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import dynamic from "next/dynamic";
const inter = Montserrat({ subsets: ["latin-ext"] });
const Layout = dynamic(() => import("@/components/Layouts/Layout"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Mohammad Awlad",
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
          <main className="min-h-screen lg:px-28 md:px-12 sm:px-8 px-4">
            {children}
          </main>
        </Layout>
      </body>
    </html>
  );
}
