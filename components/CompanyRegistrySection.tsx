import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { company } from "@/lib/company";

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

export async function CompanyRegistrySection({
  heading,
  hint,
}: {
  heading: string;
  hint?: ReactNode;
}) {
  const t = await getTranslations("AboutPage");

  return (
    <>
      <h2 className="mt-14 text-xs font-semibold uppercase tracking-wider text-muted-light">
        {heading}
      </h2>
      {hint ? (
        <div className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          {hint}
        </div>
      ) : null}
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
    </>
  );
}
