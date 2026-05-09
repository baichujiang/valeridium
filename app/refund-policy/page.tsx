import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund policy for Valeridium OÜ project-based digital services.",
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

export default function RefundPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        Refund Policy
      </h1>
      <p className="mt-2 text-sm text-muted">
        Last updated: May 9, 2026 · {company.legalName}
      </p>
      <p className="mt-6 text-sm leading-relaxed text-muted">
        This Refund Policy applies to project-based software and digital services
        provided by {company.legalName}. Specific engagements may include
        additional terms in a written agreement.
      </p>

      <Section title="1. Case-by-case review">
        <p>
          Refund requests are reviewed on a case-by-case basis. We assess the
          status of the work, amounts paid, any costs already incurred, and the
          terms of the applicable agreement before determining an outcome.
        </p>
      </Section>

      <Section title="2. Work not yet started">
        <p>
          If you have paid fees for agreed services and work has not yet
          commenced, a refund may be possible after deducting any non-recoverable
          third-party costs or administrative fees that were disclosed in advance,
          where applicable.
        </p>
      </Section>

      <Section title="3. Work in progress or delivered">
        <p>
          If work has already started or has been delivered, fees may be
          partially or fully non-refundable, depending on milestones completed,
          time spent, licenses or subscriptions procured on your behalf, and the
          terms of your agreement. Completed deliverables generally remain
          subject to the intellectual property and license terms agreed for the
          project.
        </p>
      </Section>

      <Section title="4. Subscriptions and recurring services">
        <p>
          Where services include subscription or recurring billing, cancellation
          and refund eligibility follow the billing terms agreed in writing (for
          example, notice periods, renewal dates, and minimum commitment). Unless
          otherwise stated, recurring charges may continue until a valid
          cancellation is received in accordance with those terms.
        </p>
      </Section>

      <Section title="5. How to request a refund">
        <p>
          Send refund requests to{" "}
          <a
            href={`mailto:${company.email}`}
            className="font-medium text-accent hover:text-accent-hover"
          >
            {company.email}
          </a>{" "}
          from the email address associated with your account or agreement, and
          include your company name, invoice or agreement reference, and a brief
          description of the reason for the request. We aim to respond within a
          reasonable business timeframe.
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
