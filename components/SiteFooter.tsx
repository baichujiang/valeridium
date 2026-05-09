import Link from "next/link";
import { company, legalLinks, navLinks } from "@/lib/company";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-foreground">
              {company.legalName}
            </p>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              Registered in {company.country}. Registry Code:{" "}
              {company.registryCode}.
            </p>
            <p className="mt-2 text-sm text-muted">
              Email:{" "}
              <a
                href={`mailto:${company.email}`}
                className="text-accent hover:text-accent-hover"
              >
                {company.email}
              </a>
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              Pages
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-foreground/90 hover:text-accent"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              Legal
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-foreground/90 hover:text-accent"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-border pt-8 text-center text-xs text-muted">
          © 2026 {company.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
