import { getTranslations } from "next-intl/server";
import { company, legalNav, mainNav } from "@/lib/company";
import { LogoMark } from "@/components/LogoMark";
import { Link } from "@/i18n/navigation";

export async function SiteFooter() {
  const t = await getTranslations("Footer");
  const tNav = await getTranslations("Nav");

  return (
    <footer className="relative border-t border-white/[0.06] bg-navy">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="flex max-w-sm items-start gap-3">
            <LogoMark variant="onDark" />
            <div>
              <p className="text-base font-semibold text-white">
                {company.legalName}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-navy-muted">
                {t("tagline")}
              </p>
              <p className="mt-4">
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm font-medium text-sky-300 hover:text-sky-200"
                >
                  {company.email}
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 sm:gap-16 lg:gap-20">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-navy-muted">
                {t("pagesHeading")}
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {mainNav.map(({ href, labelKey }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                      {tNav(labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-navy-muted">
                {t("legalHeading")}
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {legalNav.map(({ href, labelKey }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                      {tNav(labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.06] pt-8">
          <p className="text-xs text-navy-muted">
            © 2026 {company.legalName}. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
