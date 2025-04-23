"use client";
import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import { useNProgress } from "@/lib/nprogress";
import CustomCursor from "@/components/MouseTrail";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useNProgress();

  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins bg-dark-gray relative`}
      >
        <CustomCursor />
        <Toaster />
        <Sidebar />
        <main className="min-h-[90vh] md:pl-16 md:ml-8 p-8 md:pb-0 md:pl-16 mb-8">
          {children}
        </main>
        <footer className="text-center text-sm text-white/70 py-4">
          Last Updated Feb 2025, &#169; Munir Siddiqui
        </footer>
      </body>
    </html>
  );
}
