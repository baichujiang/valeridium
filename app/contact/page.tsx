import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Valeridium OÜ for business inquiries and support.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        Contact Us
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted">
        For business inquiries, service questions, or support requests, please
        contact us by email. We aim to respond to relevant business messages in
        order of receipt.
      </p>

      <div className="mt-10 rounded-xl border border-border bg-surface p-6 shadow-sm sm:p-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
          Contact information
        </h2>
        <ul className="mt-6 space-y-4 text-sm text-muted">
          <li>
            <span className="block font-medium text-foreground">Email</span>
            <a
              href={`mailto:${company.email}`}
              className="mt-1 inline-block text-accent hover:text-accent-hover"
            >
              {company.email}
            </a>
          </li>
          <li>
            <span className="block font-medium text-foreground">Company</span>
            <span className="mt-1 block">{company.legalName}</span>
          </li>
          <li>
            <span className="block font-medium text-foreground">Registry Code</span>
            <span className="mt-1 block">{company.registryCode}</span>
          </li>
          <li>
            <span className="block font-medium text-foreground">Registered address</span>
            <span className="mt-1 block leading-relaxed">{company.address}</span>
          </li>
          <li>
            <span className="block font-medium text-foreground">Website</span>
            <a
              href={company.website}
              className="mt-1 inline-block text-accent hover:text-accent-hover"
            >
              {company.website}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
