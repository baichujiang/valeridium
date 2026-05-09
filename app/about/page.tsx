import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Valeridium OÜ — Estonia-registered software and digital business services.",
};

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-b border-border py-3 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-4">
      <dt className="text-sm font-medium text-foreground">{label}</dt>
      <dd className="text-sm text-muted">{value}</dd>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        About {company.legalName}
      </h1>
      <div className="mt-8 space-y-4 text-base leading-relaxed text-muted">
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

      <h2 className="mt-14 text-lg font-semibold text-foreground">
        Company information
      </h2>
      <dl className="mt-4 rounded-xl border border-border bg-surface p-4 sm:p-6">
        <Row label="Company Name" value={company.legalName} />
        <Row label="Registry Code" value={company.registryCode} />
        <Row label="Legal Form" value={company.legalForm} />
        <Row label="Registered Address" value={company.address} />
        <Row label="Main Website" value={company.website} />
        <Row label="Main Business Activity" value={company.mainActivity} />
        <Row label="EMTAK Code" value={company.emtak} />
        <Row label="NACE Code" value={company.nace} />
        <Row label="Representative" value={company.representative} />
        <Row label="Contact Email" value={company.email} />
      </dl>
    </div>
  );
}
