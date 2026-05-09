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
        <section className="rounded-2xl border border-white/[0.08] bg-surface p-6 shadow-[var(--card-shadow)] backdrop-blur-sm sm:p-8">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-light">
            Email
          </h2>
          <p className="mt-3">
            <a
              href={`mailto:${company.email}`}
              className="text-lg font-semibold tracking-tight text-sky-400 transition-colors hover:text-sky-300 sm:text-xl"
            >
              {company.email}
            </a>
          </p>
        </section>
      </div>
    </>
  );
}
