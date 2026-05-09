import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { company } from "@/lib/company";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(company.website),
  other: { "color-scheme": "dark" },
  title: {
    default: `${company.legalName} — Digital services`,
    template: `%s | ${company.legalName}`,
  },
  description:
    "Estonia-registered digital services company: software development, web development, and e-commerce operation support for business clients.",
  openGraph: {
    type: "website",
    locale: "en_EE",
    url: company.website,
    siteName: company.legalName,
    title: `${company.legalName} — Digital services`,
    description:
      "Software, web development, and e-commerce operation support for business clients.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${geistMono.variable} h-full scroll-smooth antialiased dark`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
