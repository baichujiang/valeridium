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
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="flex items-start gap-3">
              <LogoMark variant="onDark" />
              <div>
                <p className="text-base font-semibold text-white">
                  {company.legalName}
                </p>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-navy-muted">
                  Software and web development for business clients.
                </p>
              </div>
            </div>
            <dl className="mt-6 space-y-3 text-sm">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-navy-muted">
                  Registry
                </dt>
                <dd className="font-mono text-sm text-white/90">
                  {company.registryCode} · {company.country}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-navy-muted">
                  Email
                </dt>
                <dd>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-sky-300 transition-colors hover:text-sky-200"
                  >
                    {company.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-navy-muted">
                  Registered office
                </dt>
                <dd className="text-sm leading-relaxed text-white/75">
                  {company.address}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-navy-muted">
                  Website
                </dt>
                <dd>
                  <a
                    href={company.website}
                    className="text-sky-400 underline-offset-2 hover:text-sky-300 hover:underline"
                  >
                    {company.website}
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-5 text-xs text-navy-muted">
              Industry codes (NACE / EMTAK) and management details:{" "}
              <Link href="/about" className="text-sky-400/90 hover:text-sky-300">
                About — Company information
              </Link>
            </p>
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
                Verification
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                For payment providers and platforms: use{" "}
                <Link href="/about" className="text-sky-400 hover:text-sky-300">
                  About
                </Link>{" "}
                for the complete company record; use{" "}
                <Link href="/contact" className="text-sky-400 hover:text-sky-300">
                  Contact
                </Link>{" "}
                for inquiries.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/[0.06] pt-8 text-center sm:text-left">
          <p className="text-xs text-navy-muted">
            © 2026 {company.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
