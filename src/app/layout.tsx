import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmashCourt — Book Badminton Courts Instantly",
  description: "The fastest way to book badminton courts in Thailand. Real-time availability, instant confirmation, zero hassle.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
