import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NXT LMS | Admin",
  description: "A Learning Management System built with Next.js. 🚀",
  keywords: ["Next.js", "LMS", "Vercel", "React"],
  robots: "index, follow",
  creator: "NXT LMS",
  publisher: "NXT LMS",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>ADMIN NAVBAR</header>
      {children}
      <footer>ADMIN FOOTER</footer>
    </>
  );
}
