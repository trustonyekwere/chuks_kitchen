// Layout
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"

import { Inter } from "next/font/google"
import type { Metadata } from "next";
import "./globals.css";
import BackToTop from "./components/ui/BackToTop";

// font
const inter = Inter({subsets: ["latin"],})

export const metadata: Metadata = {
  title: "Chuks Kitchen",
  description: "Food order and delivery website for Chuks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
          <Header />
              {children}
              <BackToTop />
          <Footer />
      </body>
    </html>
  );
}
