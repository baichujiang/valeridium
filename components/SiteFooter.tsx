import Link from "next/link";
import { company, legalLinks, navLinks } from "@/lib/company";
import { LogoMark } from "@/components/LogoMark";

export function SiteFooter() {
  return (
    <footer className="border-t border-navy bg-navy text-navy-muted">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="flex items-start gap-3">
              <LogoMark variant="onDark" />
              <div>
                <p className="text-base font-semibold text-white">
                  {company.legalName}
                </p>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-navy-muted">
                  Software development, web development, and e-commerce operation
                  support for business clients. Registered in {company.country}.
                </p>
              </div>
            </div>
            <dl className="mt-6 space-y-2 text-sm">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-navy-muted">
                  Registry
                </dt>
                <dd className="text-white/90">{company.registryCode}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-navy-muted">
                  Email
                </dt>
                <dd>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-white hover:underline"
                  >
                    {company.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-navy-muted">
                Pages
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-white/85 transition-colors hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-navy-muted">
                Legal
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {legalLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-white/85 transition-colors hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-navy-muted">
                Registered office
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                {company.address}
              </p>
              <p className="mt-3 text-sm">
                <a
                  href={company.website}
                  className="text-sky-300 underline-offset-2 hover:text-sky-200 hover:underline"
                >
                  {company.website}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-navy-muted">
            © 2026 {company.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-navy-muted">
            NACE {company.nace} · EMTAK {company.emtak}
          </p>
        </div>
      </div>
    </footer>
  );
}
