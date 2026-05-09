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
      <div className="mx-auto max-w-lg px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/[0.08] bg-surface p-8 shadow-[var(--card-shadow)] backdrop-blur-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-light">
            Email
          </p>
          <p className="mt-3">
            <a
              href={`mailto:${company.email}`}
              className="text-xl font-semibold text-sky-400 transition-colors hover:text-sky-300"
            >
              {company.email}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
