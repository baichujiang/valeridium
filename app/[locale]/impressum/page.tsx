import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CompanyRegistrySection } from "@/components/CompanyRegistrySection";
import { PageHeader } from "@/components/PageHeader";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ImpressumPage" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ImpressumPage");
  const tAbout = await getTranslations("AboutPage");

  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm leading-relaxed text-muted">{t("intro")}</p>
        <CompanyRegistrySection heading={tAbout("companyInfoHeading")} />
      </div>
    </>
  );
}
