import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Valeridium OÜ — Estonia-registered software and digital business services.",
};

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-b border-white/[0.06] py-3.5 last:border-0 sm:grid-cols-[minmax(0,200px)_1fr] sm:gap-6">
      <dt className="text-xs font-semibold uppercase tracking-wider text-muted-light">
        {label}
      </dt>
      <dd className="text-sm leading-relaxed text-foreground/95">{value}</dd>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title={`About ${company.legalName}`}
        description="Estonia-registered private limited company focused on software development, web development, and digital business services."
      />
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-4 text-base leading-relaxed text-muted">
          <p>
            {company.legalName} is an Estonia-registered private limited company
            focused on software development, web development, and digital business
            services. We work with business clients that need practical online
            solutions, including company websites, web-based tools, e-commerce
            setup, and digital operation support.
          </p>
          <p>
            Our goal is to help businesses establish and manage a clear, reliable,
            and professional online presence through software and digital services.
          </p>
        </div>

        <h2 className="mt-14 text-xs font-semibold uppercase tracking-wider text-muted-light">
          Company information
        </h2>
        <dl className="mt-4 rounded-2xl border border-white/[0.08] bg-surface p-5 shadow-[var(--card-shadow)] backdrop-blur-sm sm:p-8">
          <Row label="Company name" value={company.legalName} />
          <Row label="Registry code" value={company.registryCode} />
          <Row label="Legal form" value={company.legalForm} />
          <Row label="Registered address" value={company.address} />
          <Row label="Main website" value={company.website} />
          <Row label="Main business activity" value={company.mainActivity} />
          <Row label="EMTAK code" value={company.emtak} />
          <Row label="NACE code" value={company.nace} />
          <Row label="Representative" value={company.representative} />
          <Row label="Contact email" value={company.email} />
        </dl>
      </div>
    </>
  );
}
