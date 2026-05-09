import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { company } from "@/lib/company";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import "../globals.css";

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const ogLocale = locale === "de" ? "de_EE" : "en_EE";
  return {
    metadataBase: new URL(company.website),
    other: { "color-scheme": "dark" },
    title: {
      default: `${company.legalName} — ${locale === "de" ? "Digitale Dienstleistungen" : "Digital services"}`,
      template: `%s | ${company.legalName}`,
    },
    description:
      locale === "de"
        ? "In Estland eingetragenes Unternehmen für Softwareentwicklung, Webentwicklung und E-Commerce-Unterstützung."
        : "Estonia-registered digital services company: software development, web development, and e-commerce operation support for business clients.",
    openGraph: {
      type: "website",
      locale: ogLocale,
      url: company.website,
      siteName: company.legalName,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${plusJakarta.variable} ${geistMono.variable} h-full scroll-smooth antialiased dark`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <NextIntlClientProvider messages={messages}>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
