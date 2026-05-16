import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grace & Faith R&D - AI & Automation Solutions",
  description:
    "Leading provider of AI solutions, automation, and cutting-edge technology partnerships",
  icons: {
    icon: "/favicon.png",
  },
  other: {
    "format-detection": "telephone=no,date=no,email=no,address=no,url=no",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`min-h-screen bg-white ${inter.className}`}>{children}</body>
    </html>
  );
}
