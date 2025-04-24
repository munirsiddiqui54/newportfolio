"use client";

import { ReactNode } from "react";
import Sidebar from "@/components/sidebar";
import { useNProgress } from "@/lib/nprogress";
import CustomCursor from "@/components/MouseTrail";
import { Toaster } from "react-hot-toast";

export default function ClientLayout({ children }: { children: ReactNode }) {
  useNProgress();

  return (
    <>
      <CustomCursor />
      <Toaster />
      <Sidebar />
      <main className="min-h-[90vh] md:pl-16 md:ml-8 p-4 md:pb-0 md:pl-16 mb-8">
        {children}
      </main>
      <footer className="text-center text-sm text-white/70 py-4">
        Last Updated Feb 2025, &#169; Munir Siddiqui
      </footer>
    </>
  );
}
