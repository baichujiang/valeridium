import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { HeroPattern } from "@/components/HeroPattern";
import { HeroVisual } from "@/components/HeroVisual";
import { SectionHeading } from "@/components/SectionHeading";
import { IconCart, IconCode, IconOps } from "@/components/ServiceIcons";
import { company } from "@/lib/company";

const services = [
  { titleKey: "service1Title", textKey: "service1Text", icon: IconCode },
  { titleKey: "service2Title", textKey: "service2Text", icon: IconCart },
  { titleKey: "service3Title", textKey: "service3Text", icon: IconOps },
] as const;

const steps = [
  { titleKey: "step1Title", textKey: "step1Text" },
  { titleKey: "step2Title", textKey: "step2Text" },
  { titleKey: "step3Title", textKey: "step3Text" },
  { titleKey: "step4Title", textKey: "step4Text" },
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });
  return {
    title: t("heroTitle"),
    description: t("heroLead", { companyName: company.legalName }),
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");
  const companyName = company.legalName;

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.06] bg-surface">
        <HeroPattern />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-[1.08]">
              {t("heroTitle")}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              {t("heroLead", { companyName })}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-opacity hover:opacity-95"
              >
                {t("ctaServices")}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.04] px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-sky-500/30 hover:bg-white/[0.07]"
              >
                {t("ctaContact")}
              </Link>
            </div>
          </div>
          <HeroVisual chromeLabel={t("heroChrome")} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={t("overviewEyebrow")}
              title={t("overviewTitle")}
            />
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-muted">
              {t("overviewBody", { companyName })}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/[0.08] bg-surface p-5 shadow-[var(--card-shadow)]">
                <p className="text-sm font-semibold text-foreground">
                  {t("cardDeliveryTitle")}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t("cardDeliveryBody")}
                </p>
              </div>
              <div className="rounded-xl border border-white/[0.08] bg-surface p-5 shadow-[var(--card-shadow)]">
                <p className="text-sm font-semibold text-foreground">
                  {t("cardB2bTitle")}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t("cardB2bBody")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-surface-highlight py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t("capabilitiesEyebrow")}
            title={t("capabilitiesTitle")}
            description={t("capabilitiesDesc")}
          />
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map(({ titleKey, textKey, icon: Icon }) => (
              <li
                key={titleKey}
                className="group flex flex-col rounded-2xl border border-white/[0.08] bg-surface/90 p-6 shadow-[var(--card-shadow)] backdrop-blur-sm transition-all duration-300 hover:border-sky-500/25 hover:shadow-[var(--card-shadow-hover)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 ring-1 ring-sky-400/20 transition-colors group-hover:bg-sky-500/15">
                  <Icon />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {t(titleKey)}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {t(textKey)}
                </p>
                <span className="mt-5 text-xs font-medium text-muted-light">
                  {t("serviceFootnote")}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-semibold text-sky-400 transition-colors hover:text-sky-300"
            >
              {t("servicesLink")}
              <span aria-hidden>→</span>
            </Link>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("processEyebrow")}
          title={t("processTitle")}
          description={t("processDesc")}
        />
        <div className="relative mt-14">
          <div
            className="pointer-events-none absolute left-0 right-0 top-[1.125rem] hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block"
            aria-hidden
          />
          <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map(({ titleKey, textKey }, i) => (
              <li key={titleKey} className="relative">
                <div className="flex items-start gap-4 lg:flex-col lg:gap-0">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-sm font-bold text-white shadow-lg shadow-sky-500/30 ring-4 ring-background">
                    {i + 1}
                  </span>
                  <div className="lg:mt-5">
                    <h3 className="text-base font-semibold text-foreground">
                      {t(titleKey)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {t(textKey)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative border-t border-white/[0.06] py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(56,189,248,0.08),transparent_55%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400/90">
            {t("ctaBandEyebrow")}
          </p>
          <h2 className="mx-auto mt-3 max-w-xl text-2xl font-semibold tracking-tight text-foreground">
            {t("ctaBandTitle")}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted">
            {t("ctaBandLead")}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-opacity hover:opacity-95"
          >
            {t("ctaBandButton")}
          </Link>
        </div>
      </section>
    </>
  );
}
