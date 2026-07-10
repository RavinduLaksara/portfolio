import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ravindu Laksara | Product-Minded Software Engineer",
  description:
    "I build scalable, end-to-end software ecosystems. From crafting clean, professional mobile interfaces to architecting robust, secure backends, I focus on delivering seamless digital products that solve real-world problems.",
  keywords: [
    "Software Engineer",
    "Flutter Developer",
    "Mobile App Developer",
    "Full-Stack Developer",
    "React Native",
    "NestJS",
    "Portfolio",
  ],
  authors: [{ name: "Ravindu Laksara" }],
  openGraph: {
    title: "Ravindu Laksara | Product-Minded Software Engineer",
    description:
      "I build scalable, end-to-end software ecosystems — from clean mobile interfaces to robust, secure backends.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#0A0A0A] text-white">{children}</body>
    </html>
  );
}
