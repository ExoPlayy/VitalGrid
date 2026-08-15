import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://vitalgridgames.com"),
  title: "Vital Grid — Independent Game Studio",
  description: "We craft games with character — from the first idea to the final pixel.",
  openGraph: {
    title: "Vital Grid — Independent Game Studio",
    description: "We build worlds worth getting lost in.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Vital Grid — We build worlds worth getting lost in." }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
