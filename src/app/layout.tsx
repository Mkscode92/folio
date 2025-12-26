import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";

const font = Raleway({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Mohan Krishna Srinivasula",
  description: "Mohan's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}
