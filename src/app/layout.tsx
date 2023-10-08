import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import dynamic from "next/dynamic";
const inter = Montserrat({ subsets: ["latin"] });
const Message = dynamic(() => import("@/components/Message/Message"), {
  ssr: false,
});
const Layout = dynamic(() => import("@/components/Layouts/Layout"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: {
    template: "%s | Mohammad Awlad",
    default: "Mohammad Awlad | Home",
  },
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
          <main className="min-h-screen">{children}</main>
          <Message />
        </Layout>
      </body>
    </html>
  );
}
