import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";

const sectionIds = ["s1", "s2", "s3", "s4"] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ServicesPage" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ServicesPage");

  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-5">
          {sectionIds.map((id, i) => (
            <section
              key={id}
              className="rounded-2xl border border-white/[0.08] bg-surface p-6 shadow-[var(--card-shadow)] backdrop-blur-sm sm:p-8"
            >
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sm font-bold text-sky-400 ring-1 ring-sky-500/20">
                  {i + 1}
                </span>
                <div>
                  <h2 className="text-lg font-semibold tracking-tight text-foreground">
                    {t(`item.${id}.title`)}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {t(`item.${id}.body`)}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
