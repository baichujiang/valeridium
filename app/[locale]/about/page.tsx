import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
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

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-b border-white/[0.06] py-3.5 last:border-0 sm:grid-cols-[minmax(0,200px)_1fr] sm:gap-6">
      <dt className="text-xs font-semibold uppercase tracking-wider text-muted-light">
        {label}
      </dt>
      <dd className="text-sm leading-relaxed text-foreground/95">{value}</dd>
    </div>
  );
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

        <h2 className="mt-14 text-xs font-semibold uppercase tracking-wider text-muted-light">
          {t("companyInfoHeading")}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          {t("companyInfoHint")}{" "}
          {t("contactLine")}{" "}
          <Link
            href="/contact"
            className="font-medium text-sky-400 hover:text-sky-300"
          >
            {t("contactLinkLabel")}
          </Link>
          .
        </p>
        <dl className="mt-6 rounded-2xl border border-white/[0.08] bg-surface p-5 shadow-[var(--card-shadow)] backdrop-blur-sm sm:p-8">
          <Row label={t("rowCompanyName")} value={company.legalName} />
          <Row label={t("rowRegistryCode")} value={company.registryCode} />
          <Row label={t("rowLegalForm")} value={company.legalForm} />
          <Row label={t("rowAddress")} value={company.address} />
          <Row label={t("rowWebsite")} value={company.website} />
          <Row label={t("rowActivity")} value={company.mainActivity} />
          <Row label={t("rowEmtak")} value={company.emtak} />
          <Row label={t("rowNace")} value={company.nace} />
          <Row label={t("rowRepresentative")} value={company.representative} />
          <Row label={t("rowEmail")} value={company.email} />
        </dl>
      </div>
    </>
  );
}
