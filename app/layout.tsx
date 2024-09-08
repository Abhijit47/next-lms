import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import { ThemeProvider } from "./_components/ThemeProvider";
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
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} relative antialiased`}>
          <ThemeProvider
            enableSystem
            attribute="class"
            defaultTheme="light"
            themes={[
              "light",
              "dark",
              "instagram",
              "facebook",
              "discord",
              "netflix",
              "twilight",
              "reddit",
            ]}
          >
            <NextTopLoader
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              easing="ease"
              speed={200}
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"
              color="var(--primary)"
              showSpinner={false}
            />
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
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
