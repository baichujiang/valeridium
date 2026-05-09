import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Valeridium OÜ digital services.",
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
      <h2 className="text-xl font-semibold tracking-tight text-foreground">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description={`Last updated: May 9, 2026. Data controller: ${company.legalName} (${company.registryCode}).`}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm leading-relaxed text-muted">
        This Privacy Policy describes how {company.legalName} (&quot;we&quot;,
        &quot;us&quot;, or &quot;our&quot;) collects, uses, stores, and protects
        personal information when you use our website at {company.website} and
        when you communicate with us in connection with our digital services.
      </p>

      <Section title="1. Information we collect">
        <p>
          We may collect the following categories of information, depending on
          how you interact with us:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-foreground">Identity and contact data:</strong>{" "}
            name, email address, company name, and similar details you provide
            voluntarily.
          </li>
          <li>
            <strong className="font-medium text-foreground">Technical data:</strong>{" "}
            such as IP address, browser type, device type, and general usage
            information related to our website (often through cookies or similar
            technologies, where applicable).
          </li>
          <li>
            <strong className="font-medium text-foreground">Communication content:</strong>{" "}
            messages you send to us by email or through forms, including
            attachments where relevant to a business inquiry.
          </li>
        </ul>
      </Section>

      <Section title="2. Inquiries through our website or email">
        <p>
          When you contact us (for example by email or by following contact
          details published on this website), we use the information you provide
          to respond to your inquiry, to assess whether we can provide the
          requested services, and to maintain a record of our business
          correspondence where appropriate. We do not use inquiry data for
          unrelated marketing unless we have obtained a valid legal basis and,
          where required, your consent.
        </p>
      </Section>

      <Section title="3. Email communication">
        <p>
          If you email us at {company.email}, we process the sender address,
          recipients, content, and technical metadata necessary to deliver and
          archive business-related messages. We use this information to provide
          services, manage client relationships, and comply with legal
          obligations (for example, accounting or regulatory record-keeping where
          applicable).
        </p>
      </Section>

      <Section title="4. How we use information">
        <p>We use personal information for purposes such as:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Providing and administering our digital services;</li>
          <li>Communicating with clients and prospective clients;</li>
          <li>Operating, securing, and improving our website;</li>
          <li>Complying with applicable laws and responding to lawful requests;</li>
          <li>
            Establishing, exercising, or defending legal claims where necessary.
          </li>
        </ul>
        <p>
          We process personal data only where we have a lawful basis under
          applicable data protection law, such as performance of a contract,
          legitimate interests that are not overridden by your rights, compliance
          with a legal obligation, or consent where required.
        </p>
      </Section>

      <Section title="5. Payment processing through third-party payment providers">
        <p>
          Where services involve payments, payment details are typically
          collected and processed directly by independent payment service
          providers (for example, card networks or payment platforms). We do
          not store full payment card numbers on our own systems when such
          processing is handled by a certified third party. The provider&apos;s
          privacy policy and terms apply to payment data they process on our
          behalf or in connection with transactions related to our services.
        </p>
      </Section>

      <Section title="6. Data retention">
        <p>
          We retain personal information for as long as necessary to fulfill the
          purposes described in this policy, including to manage client
          projects, meet legal, tax, and accounting requirements, and resolve
          disputes. Retention periods may vary depending on the nature of the
          data and our legal obligations. When data is no longer needed, we
          delete or anonymize it where feasible.
        </p>
      </Section>

      <Section title="7. User rights">
        <p>
          Depending on your location and applicable law (including the General
          Data Protection Regulation where it applies), you may have rights to:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Request access to your personal data;</li>
          <li>Request correction of inaccurate data;</li>
          <li>Request erasure in certain circumstances;</li>
          <li>Object to or request restriction of certain processing;</li>
          <li>Request data portability where applicable;</li>
          <li>Withdraw consent where processing is based on consent.</li>
        </ul>
        <p>
          To exercise these rights, contact us at{" "}
          <a
            href={`mailto:${company.email}`}
            className="font-medium text-accent hover:text-accent-hover"
          >
            {company.email}
          </a>
          . You may also have the right to lodge a complaint with a supervisory
          authority in your country or region.
        </p>
      </Section>

      <Section title="8. Cookies">
        <p>
          Our website may use cookies or similar technologies that are strictly
          necessary for the operation of the site (for example, security or
          load balancing), and, where we implement them, analytics or
          preference cookies. You can control cookies through your browser
          settings. Blocking certain cookies may affect how parts of the website
          function.
        </p>
      </Section>

      <Section title="9. International transfers">
        <p>
          If we transfer personal data outside the European Economic Area, we
          will do so in accordance with applicable law and using appropriate
          safeguards (such as standard contractual clauses) where required.
        </p>
      </Section>

      <Section title="10. Security">
        <p>
          We implement reasonable technical and organizational measures designed
          to protect personal information against unauthorized access, loss, or
          misuse. No method of transmission over the Internet is completely
          secure; we encourage you to use secure channels when sending sensitive
          information.
        </p>
      </Section>

      <Section title="11. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. The revised
          version will be posted on this page with an updated &quot;Last
          updated&quot; date where practicable.
        </p>
      </Section>

      <Section title="12. Contact">
        <p>
          Questions about this Privacy Policy or our data practices may be sent
          to{" "}
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
        <Link href="/" className="font-medium text-accent hover:text-accent-hover">
          ← Back to home
        </Link>
      </p>
    </div>
    </>
  );
}
