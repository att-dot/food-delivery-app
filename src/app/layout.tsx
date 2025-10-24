import type { Metadata } from "next";
import { Geist, Geist_Mono, Sen } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sen = Sen({
  variable: "--font-sen",
});
export const metadata: Metadata = {
  title: "Food delivery app",
  description: "application built by att-dot(github) to test skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-[100vh] min-w-[100vw]">
      <body
        className={`${sen.className} bg-white antialiased min-h-[100vh] w-full`}
      >
        {children}
      </body>
    </html>
  );
}
