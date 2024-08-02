// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import "@/app/globals.css"; // Corrected import path

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "Starting point of my Next.js project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}
