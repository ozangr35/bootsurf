import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { company, contactEmail, siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "BootSurf — AI-Native Software & Mobile App Studio",
  description:
    "BootSurf delivers custom software engineering, mobile app design & UX, privacy-first AI, and App Store–grade release engineering from the Netherlands.",
  keywords: [
    "BootSurf",
    "AI developer",
    "custom software engineering",
    "mobile app design",
    "UX design",
    "AI apps",
    "LLM integration",
    "mobile app studio",
    "App Store",
    "iOS",
    "privacy-first",
    "Netherlands",
  ],
  referrer: "strict-origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  icons: {
    icon: "/branding/logo-transparent.png",
    apple: "/branding/logo-transparent.png",
  },
  openGraph: {
    title: "BootSurf — AI-Native Software & Mobile App Studio",
    description: company.tagline,
    type: "website",
    locale: "en_US",
    siteName: "BootSurf",
    url: siteUrl,
    images: [{ url: "/branding/logo-transparent.png", alt: "BootSurf" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.legalName,
  url: siteUrl,
  logo: `${siteUrl}/branding/logo-transparent.png`,
  description: company.tagline,
  email: contactEmail,
  address: {
    "@type": "PostalAddress",
    addressCountry: "NL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} overflow-x-hidden font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
