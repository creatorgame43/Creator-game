import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swahili Loop - Twitter ya Elimu",
  description: "Jifunza na fundisha kwa Kiswahili",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sw">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
