import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BRO UNIVERSITY | Race Up Your Brain",
  description: "India's next-generation deep tech university focused on Artificial Intelligence, Neuroscience, Semiconductors, Nanotechnology, and Future Innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col font-body selection:bg-brand-orange-primary/30 selection:text-brand-text-main pb-20 md:pb-0 relative">
        {children}
        
        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-brand-surface/90 backdrop-blur-md border-t border-brand-surface-3 md:hidden z-50">
          <a href="#interest" className="block w-full text-center py-4 text-base bg-brand-orange-primary hover:bg-brand-orange-hover text-brand-surface font-display font-bold rounded-xl transition-colors shadow-lg">
            Join Early Access
          </a>
        </div>
      </body>
    </html>
  );
}
