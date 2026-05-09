import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Valeridium OÜ digital services.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
        {children}
      </div>
    </section>
  );
}

export default function TermsOfServicePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-muted">
        Last updated: May 9, 2026 · {company.legalName} · Registry Code:{" "}
        {company.registryCode}
      </p>
      <p className="mt-6 text-sm leading-relaxed text-muted">
        These Terms of Service (&quot;Terms&quot;) govern your use of the
        website at {company.website} and the procurement of digital services from{" "}
        {company.legalName} (&quot;Valeridium&quot;, &quot;we&quot;,
        &quot;us&quot;, or &quot;our&quot;). By accessing the website or engaging
        our services, you agree to these Terms.
      </p>

      <Section title="1. Scope of services">
        <p>
          Valeridium provides software development, web development, e-commerce
          setup support, digital operation support, and related digital services
          for business clients, as described in proposals, statements of work,
          order confirmations, or other written agreements. Website content is
          for general information; specific obligations are defined only in a
          separate agreement between you and Valeridium.
        </p>
      </Section>

      <Section title="2. Client responsibilities">
        <p>You agree to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Provide accurate information and timely access, materials, and
            approvals reasonably required for delivery;
          </li>
          <li>
            Ensure you have the rights and permissions for any content, branding,
            or third-party assets you supply;
          </li>
          <li>
            Comply with applicable laws and platform rules applicable to your
            business and online presence;
          </li>
          <li>
            Maintain the confidentiality of credentials and notify us if you
            suspect unauthorized access.
          </li>
        </ul>
      </Section>

      <Section title="3. Payments and invoices">
        <p>
          Fees, invoicing schedules, taxes, and payment methods are set out in
          the applicable agreement or invoice. Unless otherwise agreed, amounts
          are due in the currency and timeframe stated on the invoice. Late
          payment may result in suspension of work or services until payment is
          received. You are responsible for any bank or payment processing fees
          charged to you by your financial institution unless otherwise agreed in
          writing.
        </p>
      </Section>

      <Section title="4. Service delivery">
        <p>
          Delivery timelines are estimates unless expressly guaranteed in
          writing. Digital deliverables are typically supplied online (for
          example, by repository access, file transfer, or deployment to agreed
          environments). Acceptance criteria, revision rounds, and support
          periods, if any, are defined in the relevant project agreement.
        </p>
      </Section>

      <Section title="5. Intellectual property">
        <p>
          Unless otherwise agreed in writing, ownership of deliverables and
          license grants are defined in the project agreement. Pre-existing
          materials, tools, libraries, and know-how used across multiple clients
          remain the property of Valeridium or their respective licensors, and
          you receive the license scope agreed for your project.
        </p>
      </Section>

      <Section title="6. Limitation of liability">
        <p>
          To the maximum extent permitted by applicable law, Valeridium is not
          liable for any indirect, incidental, consequential, special, or
          punitive damages, or for loss of profits, revenue, data, or goodwill,
          arising from or related to these Terms or our services. Our aggregate
          liability arising out of or relating to a specific engagement is, to
          the extent permitted by law, limited to the fees paid by you to
          Valeridium for that engagement during the six (6) months preceding the
          event giving rise to the claim, unless mandatory law provides
          otherwise.
        </p>
        <p>
          Nothing in these Terms excludes or limits liability that cannot be
          limited under applicable law.
        </p>
      </Section>

      <Section title="7. Changes to terms">
        <p>
          We may update these Terms from time to time. The current version will
          be posted on this page with an updated date. Material changes may
          require additional notice where required by law. Continued use of the
          website after changes become effective constitutes acceptance of the
          revised Terms, except where ongoing services are governed by a separate
          written agreement that takes precedence.
        </p>
      </Section>

      <Section title="8. Governing business entity and disputes">
        <p>
          The contracting legal entity is {company.legalName}, registry code{" "}
          {company.registryCode}, registered in Estonia at {company.address}.
        </p>
        <p>
          These Terms are governed by the laws applicable to {company.legalName}{" "}
          in Estonia, without regard to conflict-of-law rules that would require
          another jurisdiction&apos;s laws to apply. Courts located in Estonia
          shall have exclusive jurisdiction over disputes arising from these
          Terms or non-contractual matters related to them, subject to any
          mandatory rights you may have as a consumer where applicable.
        </p>
      </Section>

      <Section title="9. Contact">
        <p>
          For questions about these Terms, contact{" "}
          <a
            href={`mailto:${company.email}`}
            className="font-medium text-accent hover:text-accent-hover"
          >
            {company.email}
          </a>
          .
        </p>
      </Section>

      <p className="mt-12 text-sm text-muted">
        <Link href="/" className="text-accent hover:text-accent-hover">
          ← Back to Home
        </Link>
      </p>
    </div>
  );
}
