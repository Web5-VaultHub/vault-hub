import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import React, { createContext } from "react";

const raleway = Raleway({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "VaultHub",
  description: "Securely manage your data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
