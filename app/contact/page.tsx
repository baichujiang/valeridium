import type { Metadata } from "next";
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
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-light">
            Contact information
          </h2>
          <ul className="mt-8 space-y-6">
            <li>
              <span className="block text-xs font-semibold uppercase tracking-wider text-muted-light">
                Email
              </span>
              <a
                href={`mailto:${company.email}`}
                className="mt-2 inline-block text-lg font-semibold text-sky-400 transition-colors hover:text-sky-300"
              >
                {company.email}
              </a>
            </li>
            <li className="grid gap-6 border-t border-white/[0.06] pt-6 sm:grid-cols-2">
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-muted-light">
                  Company
                </span>
                <span className="mt-2 block text-sm font-medium text-foreground">
                  {company.legalName}
                </span>
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-muted-light">
                  Registry code
                </span>
                <span className="mt-2 block font-mono text-sm font-medium text-foreground">
                  {company.registryCode}
                </span>
              </div>
            </li>
            <li className="border-t border-white/[0.06] pt-6">
              <span className="block text-xs font-semibold uppercase tracking-wider text-muted-light">
                Registered address
              </span>
              <span className="mt-2 block text-sm leading-relaxed text-muted">
                {company.address}
              </span>
            </li>
            <li className="border-t border-white/[0.06] pt-6">
              <span className="block text-xs font-semibold uppercase tracking-wider text-muted-light">
                Website
              </span>
              <a
                href={company.website}
                className="mt-2 inline-block text-sm font-medium text-sky-400 transition-colors hover:text-sky-300"
              >
                {company.website}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
