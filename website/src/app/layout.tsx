import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Varun Kamath - AI Engineer & Machine Learning Specialist",
  description: "AI Engineer with proven expertise in computer vision, NLP, and deep learning. Building intelligent solutions that drive innovation.",
  keywords: ["AI Engineer", "Machine Learning", "Computer Vision", "NLP", "Deep Learning", "Python", "TensorFlow", "PyTorch"],
  authors: [{ name: "Varun Kamath" }],
  creator: "Varun Kamath",
  openGraph: {
    title: "Varun Kamath - AI Engineer & Machine Learning Specialist",
    description: "AI Engineer with proven expertise in computer vision, NLP, and deep learning. Building intelligent solutions that drive innovation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Varun Kamath - AI Engineer & Machine Learning Specialist",
    description: "AI Engineer with proven expertise in computer vision, NLP, and deep learning.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
