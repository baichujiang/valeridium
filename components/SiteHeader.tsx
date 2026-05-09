"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, navLinks } from "@/lib/company";
import { LogoMark } from "@/components/LogoMark";

function linkClass(active: boolean) {
  return [
    "rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors",
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
        <div className="flex items-center gap-2 sm:gap-3">
          <nav
            className="flex items-center gap-0.5 sm:gap-1"
            aria-label="Primary"
          >
            {navLinks.map(({ href, label }) => {
              const active =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link key={href} href={href} className={linkClass(active)}>
                  {label}
                </Link>
              );
            })}
          </nav>
          <a
            href={`mailto:${company.email}`}
            className="ml-1 hidden rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 px-3.5 py-2 text-sm font-semibold text-white shadow-md shadow-sky-500/20 transition-opacity hover:opacity-95 sm:inline-flex"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
