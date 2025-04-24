import type React from "react";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout"; // We'll create this

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Munir Siddiqui - Portfolio",
  description: "Munir Siddiqui - Developer Portfolio",
  icons: {
    icon: "/icon.png", // Path from /public
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins bg-dark-gray relative`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
