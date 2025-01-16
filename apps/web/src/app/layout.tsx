import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ourhub",
  description: "A social media for talk with a bunch of people",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-zinc-950 text-zinc-200`}
      >
        {children}
      </body>
    </html>
  );
}
