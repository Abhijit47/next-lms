import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NXT LMS",
  description: "A Learning Management System built with Next.js. 🚀",
  keywords: ["Next.js", "LMS", "Vercel", "React"],
  robots: "index, follow",
  creator: "NXT LMS",
  publisher: "NXT LMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-0VKQ44984D"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0VKQ44984D');`}
        </Script>
      </body>
    </html>
  );
}
