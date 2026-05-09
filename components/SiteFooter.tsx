import Link from "next/link";
import { company, legalLinks, navLinks } from "@/lib/company";
import { LogoMark } from "@/components/LogoMark";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-navy">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="flex items-start gap-3 lg:col-span-4">
            <LogoMark variant="onDark" />
            <div>
              <p className="text-base font-semibold text-white">
                {company.legalName}
              </p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-navy-muted">
                Software and web development for business clients.
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
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-navy-muted">
                Pages
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-white/80 transition-colors hover:text-white"
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
                      className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-navy-muted">
                Company record
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                Full registry and statutory details (NACE, EMTAK, representative)
                are on the{" "}
                <Link href="/about" className="text-sky-400 hover:text-sky-300">
                  About
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-4 border-t border-white/[0.06] pt-8">
          <p className="text-[11px] leading-relaxed text-navy-muted">
            <span className="text-white/50">Legal imprint.</span>{" "}
            {company.legalName}. Commercial register:{" "}
            <span className="font-mono text-white/45">{company.registryCode}</span>
            . {company.country}. Registered office: {company.address} ·{" "}
            <a
              href={`mailto:${company.email}`}
              className="text-sky-500/80 hover:text-sky-400"
            >
              {company.email}
            </a>{" "}
            ·{" "}
            <a
              href={company.website}
              className="text-sky-500/80 hover:text-sky-400"
            >
              {company.website.replace(/^https?:\/\//, "")}
            </a>
          </p>
          <p className="text-xs text-navy-muted">
            © 2026 {company.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
