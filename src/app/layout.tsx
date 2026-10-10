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
  verification: {
    google: "gPPd8o-tkNTQATYNxiVGTdLDcDcejFSWZki-OLEh-uM",
  },
  title: "Abadurrahman | TECHVIMAN CEO, Developer & Entrepreneur",
  description:
    "Meet Abadurrahman, CEO of TECHVIMAN, computer science engineering student, developer, and entrepreneur building WebAR products, AI tools, and SaaS applications.",
  keywords: [
    "Abadurrahman",
    "ABADURRAHMAN",
    "abadurrahman",
    "Abadurahman",
    "ABAD UR RAHMAN",
    "abad ur rahman",
    "abadur rahman",
    "TECHVIMAN CEO",
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
  metadataBase: new URL("https://techviman.com"),
  alternates: {
    canonical: "https://techviman.com",
  },
  openGraph: {
    title: "Abadurrahman | TECHVIMAN CEO, Developer & Entrepreneur",
    description:
      "Abadurrahman is CEO of TECHVIMAN, building WebAR products, AI tools, and SaaS applications.",
    url: "https://techviman.com/",
    siteName: "Abadurrahman Platform & TECHVIMAN",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abadurrahman | TECHVIMAN CEO",
    description: "CEO of TECHVIMAN, building WebAR products, AI tools, and SaaS applications.",
    creator: "@abadurrahman",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: ["/icon.png"],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="any" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="shortcut icon" href="/icon.png" />
      </head>
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
