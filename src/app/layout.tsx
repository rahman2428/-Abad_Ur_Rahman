import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-context";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abadurrahman — Developer, Entrepreneur & Technology Builder",
  description:
    "Official digital headquarters of Abadurrahman — Computer Science Engineering student, web developer, startup founder of TECHVIMAN, building WebAR products, AI tools, SaaS apps, and publishing daily SEO technology insights.",
  keywords: [
    "Abadurrahman",
    "TECHVIMAN",
    "WebAR Menu",
    "Computer Science Engineer",
    "Web Developer Portfolio",
    "AI Background Remover",
    "Startup Founder India",
    "Next.js Developer",
    "AI Agents Developer",
  ],
  authors: [{ name: "Abadurrahman", url: "https://abad-ur-rahman.vercel.app/" }],
  creator: "Abadurrahman",
  publisher: "TECHVIMAN",
  metadataBase: new URL("https://abad-ur-rahman.vercel.app"),
  alternates: {
    canonical: "https://abad-ur-rahman.vercel.app",
  },
  openGraph: {
    title: "Abadurrahman — Developer, Entrepreneur & Startup Founder",
    description:
      "Digital Headquarters of Abadurrahman. Founder of TECHVIMAN, creator of AR Menu and AI applications.",
    url: "https://abad-ur-rahman.vercel.app/",
    siteName: "Abadurrahman Platform & TECHVIMAN",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abadurrahman — Developer & Startup Founder",
    description: "Building WebAR products, AI tools, SaaS apps, and scaling TECHVIMAN.",
    creator: "@abadurrahman",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-blue-500 selection:text-white">
        <ThemeProvider>
          <CustomCursor />
          <Navbar />
          <main className="flex-1 pt-24">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
