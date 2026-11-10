// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "@/components/ui/theme-context";
// import { Navbar } from "@/components/navigation/navbar";
// import { Footer } from "@/components/navigation/footer";
// import { CustomCursor } from "@/components/ui/custom-cursor";
// import { SiteJsonLd } from "@/components/seo/json-ld";
// import {
//   SITE_AUTHOR,
//   SITE_DESCRIPTION,
//   SITE_NAME,
//   SITE_OG_DESCRIPTION,
//   SITE_TITLE,
//   SITE_URL,
//   absoluteUrl,
// } from "@/lib/site";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   metadataBase: new URL(SITE_URL),
//   applicationName: SITE_NAME,
//   title: SITE_TITLE,
//   description: SITE_DESCRIPTION,
//   keywords: [
//     "Abadurrahman",
//     "ABADURRAHMAN",
//     "Abad Ur Rahman",
//     "TECHVIMAN CEO",
//     "TECHVIMAN",
//     "WebAR Menu",
//     "Computer Science Engineer",
//     "Web Developer Portfolio",
//     "AI Background Remover",
//     "Startup Founder India",
//     "Next.js Developer",
//     "AI Agents Developer",
//   ],
//   authors: [{ name: SITE_AUTHOR, url: `${SITE_URL}/` }],
//   creator: SITE_AUTHOR,
//   publisher: SITE_AUTHOR,
//   category: "portfolio",
//   verification: {
//     google: "gPPd8o-tkNTQATYNxiVGTdLDcDcejFSWZki-OLEh-uM",
//   },
//   alternates: {
//     canonical: `${SITE_URL}/`,
//   },
//   openGraph: {
//     title: SITE_TITLE,
//     description: SITE_OG_DESCRIPTION,
//     url: `${SITE_URL}/`,
//     siteName: SITE_NAME,
//     locale: "en_IN",
//     type: "website",
//     images: [
//       {
//         url: absoluteUrl("/android-chrome-512x512.png"),
//         width: 512,
//         height: 512,
//         alt: "Abadurrahman personal brand logo",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: SITE_TITLE,
//     description: SITE_DESCRIPTION,
//     creator: "@abadurrahman",
//     images: [absoluteUrl("/android-chrome-512x512.png")],
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   icons: {
//     icon: [
//       { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
//       { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
//       { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
//       { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
//     ],
//     apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
//     shortcut: ["/favicon-32x32.png"],
//   },
//   manifest: "/site.webmanifest",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html
//       lang="en"
//       className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
//       suppressHydrationWarning
//     >
//       <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-blue-500 selection:text-white">
//         <SiteJsonLd />
//         <ThemeProvider>
//           <CustomCursor />
//           <Navbar />
//           <main className="flex-1 pt-24">{children}</main>
//           <Footer />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
















import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/ui/theme-context";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { SiteJsonLd } from "@/components/seo/json-ld";

import {
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_OG_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
  absoluteUrl,
} from "@/lib/site";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),

  applicationName: "Abadurrahman",

  title: {
    default: "Abadurrahman | TECHVIMAN CEO, Developer & Entrepreneur",
    template: "%s | Abadurrahman",
  },

  description: SITE_DESCRIPTION,

  keywords: [
    "Abadurrahman",
    "ABADURRAHMAN",
    "Abad Ur Rahman",
    "Abadur Rahman",
    "TECHVIMAN CEO",
    "TECHVIMAN Founder",
    "WebAR Developer",
    "Computer Science Engineer",
    "Software Developer India",
    "Web Developer Portfolio",
    "AI Developer",
    "AI Background Remover",
    "Startup Founder India",
    "Next.js Developer",
    "AI Agents Developer",
    "Entrepreneur India",
  ],

  authors: [
    {
      name: SITE_AUTHOR,
      url: absoluteUrl("/"),
    },
  ],

  creator: "ABADURRAHMAN",
  publisher: "ABADURRAHMAN",
  category: "portfolio",

  verification: {
    google: "gPPd8o-tkNTQATYNxiVGTdLDcDcejFSWZki-OLEh-uM",
  },

  // Canonical URL
  alternates: {
    canonical: absoluteUrl("/"),
    languages: {
      "en-IN": absoluteUrl("/"),
    },
  },

  // Open Graph
  openGraph: {
    title: SITE_TITLE,
    description: SITE_OG_DESCRIPTION,
    url: absoluteUrl("/"),
    siteName: "Abadurrahman",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: absoluteUrl("/android-chrome-512x512.png"),
        width: 512,
        height: 512,
        alt: "Abadurrahman Official Personal Brand",
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@abadurrahman",
    images: [absoluteUrl("/android-chrome-512x512.png")],
  },

  // Search Engine Indexing
  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Favicon
  icons: {
    icon: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],

    shortcut: ["/favicon-32x32.png"],
  },

  manifest: "/site.webmanifest",
};

// Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-blue-500 selection:text-white">

        {/* Google Website and Person Structured Data */}
        <SiteJsonLd />

        <ThemeProvider>
          <CustomCursor />

          <Navbar />

          <main className="flex-1 pt-24">
            {children}
          </main>

          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}
