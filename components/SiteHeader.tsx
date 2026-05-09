"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, navLinks } from "@/lib/company";
import { LogoMark } from "@/components/LogoMark";

/** Shared styles for primary nav links only (not the CTA). */
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

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-background/75 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3 text-foreground"
        >
          <LogoMark className="transition-transform group-hover:scale-[1.03]" />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold tracking-tight text-foreground">
              {company.legalName}
            </span>
            <span className="text-[11px] font-medium text-muted">
              Software & digital services · {company.country}
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
            {navLinks.map(({ href, label }) => {
              const active =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link key={href} href={href} className={navLinkClass(active)}>
                  {label}
                </Link>
              );
            })}
          </nav>
          <a
            href={`mailto:${company.email}`}
            className="ml-1 hidden h-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 px-4 text-sm font-semibold text-white shadow-md shadow-sky-500/20 transition-opacity hover:opacity-95 sm:inline-flex"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
