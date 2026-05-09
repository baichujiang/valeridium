import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { CompanyRegistrySection } from "@/components/CompanyRegistrySection";
import { PageHeader } from "@/components/PageHeader";
import { company } from "@/lib/company";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });
  const companyName = company.legalName;
  return {
    title: t("title", { companyName }),
    description: t("description"),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("AboutPage");
  const companyName = company.legalName;

  return (
    <>
      <PageHeader
        title={t("title", { companyName })}
        description={t("description")}
      />
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-4 text-base leading-relaxed text-muted">
          <p>{t("p1", { companyName })}</p>
          <p>{t("p2")}</p>
        </div>

        <CompanyRegistrySection
          heading={t("companyInfoHeading")}
          hint={
            <>
              {t("companyInfoHint")}{" "}
              {t("contactLine")}{" "}
              <Link
                href="/contact"
                className="font-medium text-sky-400 hover:text-sky-300"
              >
                {t("contactLinkLabel")}
              </Link>
              .
            </>
          }
        />
      </div>
    </>
  );
}
