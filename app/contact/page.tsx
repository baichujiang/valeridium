import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Valeridium OÜ for business inquiries and support.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact us"
        description="For business inquiries, service questions, or support requests, please contact us by email. We aim to respond to relevant business messages in order of receipt."
      />
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/[0.08] bg-surface p-6 shadow-[var(--card-shadow)] backdrop-blur-sm sm:p-10">
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-light">
              Primary contact
            </h2>
            <p className="mt-3">
              <a
                href={`mailto:${company.email}`}
                className="text-lg font-semibold text-sky-400 transition-colors hover:text-sky-300"
              >
                {company.email}
              </a>
            </p>
          </section>

          <section className="mt-10 border-t border-white/[0.06] pt-10">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-light">
              Legal entity (for your records)
            </h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="text-muted-light">Company name</dt>
                <dd className="mt-1 font-medium text-foreground">
                  {company.legalName}
                </dd>
              </div>
              <div>
                <dt className="text-muted-light">Legal form</dt>
                <dd className="mt-1 text-foreground/95">{company.legalForm}</dd>
              </div>
              <div>
                <dt className="text-muted-light">Registry code</dt>
                <dd className="mt-1 font-mono text-foreground">
                  {company.registryCode}
                </dd>
              </div>
            </dl>
          </section>

          <section className="mt-10 border-t border-white/[0.06] pt-10">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-light">
              Registered office
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {company.address}
            </p>
            <p className="mt-3 text-xs text-muted-light">
              Full statutory details (activity codes, representative):{" "}
              <Link
                href="/about"
                className="font-medium text-sky-400 hover:text-sky-300"
              >
                Company information
              </Link>
              .
            </p>
          </section>

          <section className="mt-10 border-t border-white/[0.06] pt-10">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-light">
              Website
            </h2>
            <p className="mt-3">
              <a
                href={company.website}
                className="text-sm font-medium text-sky-400 transition-colors hover:text-sky-300"
              >
                {company.website}
              </a>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
