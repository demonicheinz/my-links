import type { Metadata } from "next";
import { Chewy } from "next/font/google";
import "./globals.css";

const chewy = Chewy({
  variable: "--font-chewy",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
	title: "Heinz Links",
	description: "A simple and modern link in bio application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chewy.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
