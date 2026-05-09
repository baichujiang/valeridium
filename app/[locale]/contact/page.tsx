import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { company } from "@/lib/company";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ContactPage");

  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="rounded-2xl border border-white/[0.08] bg-surface p-6 shadow-[var(--card-shadow)] backdrop-blur-sm sm:p-8">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-light">
            {t("emailLabel")}
          </h2>
          <p className="mt-3">
            <a
              href={`mailto:${company.email}`}
              className="text-lg font-semibold tracking-tight text-sky-400 transition-colors hover:text-sky-300 sm:text-xl"
            >
              {company.email}
            </a>
          </p>
        </section>
      </div>
    </>
  );
}
