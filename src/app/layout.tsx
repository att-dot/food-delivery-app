import type { Metadata } from "next";
import {  Sen } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const sen = Sen({
  variable: "--font-sen",
});
export const metadata: Metadata = {
  title: "Food delivery app",
  description: "application built by att-dot(github) to test skills",
};

export default function RootLayout({
  children,
  htmlCl = "",
}: Readonly<{
  children: React.ReactNode;
  htmlCl?: string;
}>) {
  return (
    <html
      lang="en"
      className={`min-h-[100vh] min-w-[100vw] overflow-x-hidden ` + htmlCl}
    >
      <body
        className={`${sen.className} bg-white antialiased min-h-[100vh] w-full box-border p-[50px_24px_0px_24px] flex flex-col items-center jus `}
      >
        {children}
      </body>
    </html>
  );
}
