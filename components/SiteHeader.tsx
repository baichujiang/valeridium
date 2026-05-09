"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, navLinks } from "@/lib/company";

function linkClass(active: boolean) {
  return [
    "text-sm font-medium transition-colors",
    active
      ? "text-accent"
      : "text-foreground/80 hover:text-accent",
  ].join(" ");
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="shrink-0 text-lg font-semibold tracking-tight text-foreground"
        >
          {company.legalName}
        </Link>
        <nav
          className="flex flex-wrap items-center justify-end gap-x-3 gap-y-1 sm:gap-x-5"
          aria-label="Primary"
        >
          {navLinks.map(({ href, label }) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`${linkClass(active)} text-xs sm:text-sm`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
