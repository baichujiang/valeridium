import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LegalSections } from "@/components/LegalSections";
import { PageHeader } from "@/components/PageHeader";
import { getLegalDocument } from "@/lib/legal-docs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const doc = getLegalDocument("terms", locale);
  return {
    title: doc.metaTitle,
    description: doc.metaDescription,
  };
}

export default async function TermsOfServicePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const doc = getLegalDocument("terms", locale);

  return (
    <>
      <PageHeader title={doc.title} description={doc.description} />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm leading-relaxed text-muted">{doc.intro}</p>
        <LegalSections sections={doc.sections} />
        <p className="mt-12 text-sm text-muted">
          <Link
            href="/"
            className="font-medium text-accent hover:text-accent-hover"
          >
            {doc.backHome}
          </Link>
        </p>
      </div>
    </>
  );
}
