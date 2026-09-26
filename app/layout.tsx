import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Univo | Environmental Awareness",
  description: "Youth climate collective and environmental social organization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        {/* Spacer to prevent content from hiding under fixed navbar */}
        <div className="h-20 w-full shrink-0" aria-hidden="true"></div>
        
        {/* Main content takes up remaining vertical space */}
        <div className="flex-grow">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}