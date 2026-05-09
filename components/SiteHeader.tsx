"use client";

import { useTranslations } from "next-intl";
import { company, mainNav } from "@/lib/company";
import { LogoMark } from "@/components/LogoMark";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Link, usePathname } from "@/i18n/navigation";

const navLinkBase =
  "inline-flex h-9 shrink-0 items-center justify-center rounded-lg px-3 text-sm font-medium transition-colors";

function navLinkClass(active: boolean) {
  return [
    navLinkBase,
    active
      ? "bg-white/10 text-white"
      : "text-muted hover:bg-white/5 hover:text-foreground",
  ].join(" ");
}

export function SiteHeader() {
  const pathname = usePathname();
  const t = useTranslations("Nav");
  const tBrand = useTranslations("Brand");

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-background/75 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex min-w-0 shrink-0 items-center gap-3 text-foreground"
        >
          <LogoMark className="transition-transform group-hover:scale-[1.03]" />
          <span className="hidden min-w-0 flex-col leading-tight sm:flex">
            <span className="truncate text-sm font-semibold tracking-tight text-foreground">
              {company.legalName}
            </span>
            <span className="text-[11px] font-medium text-muted">
              {tBrand("tagline")} · {company.country}
            </span>
          </span>
          <span className="max-w-[10rem] truncate text-sm font-semibold tracking-tight text-foreground sm:hidden">
            {company.legalName}
          </span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <nav
            className="flex items-center gap-1"
            aria-label="Primary"
          >
            {mainNav.map(({ href, labelKey }) => {
              const active =
                href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(href);
              return (
                <Link key={href} href={href} className={navLinkClass(active)}>
                  {t(labelKey)}
                </Link>
              );
            })}
          </nav>
          <LanguageSwitcher />
          <a
            href={`mailto:${company.email}`}
            className="ml-0.5 hidden h-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 px-4 text-sm font-semibold text-white shadow-md shadow-sky-500/20 transition-opacity hover:opacity-95 sm:inline-flex"
          >
            {t("getInTouch")}
          </a>
        </div>
      </div>
    </header>
  );
}
