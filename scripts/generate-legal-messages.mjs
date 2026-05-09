import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const legalDir = path.join(root, "messages", "legal");

const privacyEn = {
  metaTitle: "Privacy Policy",
  metaDescription: "Privacy policy for Valeridium OÜ digital services.",
  title: "Privacy Policy",
  description:
    "Last updated: May 9, 2026. Data controller: {companyName} ({registry}).",
  intro:
    'This Privacy Policy describes how {companyName} ("we", "us", or "our") collects, uses, stores, and protects personal information when you use our website at {website} and when you communicate with us in connection with our digital services.',
  backHome: "← Back to home",
  sections: [
    {
      title: "1. Information we collect",
      paragraphs: [
        "We may collect the following categories of information, depending on how you interact with us:",
      ],
      listItems: [
        {
          strong: "Identity and contact data:",
          text: "name, email address, company name, and similar details you provide voluntarily.",
        },
        {
          strong: "Technical data:",
          text: "such as IP address, browser type, device type, and general usage information related to our website (often through cookies or similar technologies, where applicable).",
        },
        {
          strong: "Communication content:",
          text: "messages you send to us by email or through forms, including attachments where relevant to a business inquiry.",
        },
      ],
    },
    {
      title: "2. Inquiries through our website or email",
      paragraphs: [
        "When you contact us (for example by email or by following contact details published on this website), we use the information you provide to respond to your inquiry, to assess whether we can provide the requested services, and to maintain a record of our business correspondence where appropriate. We do not use inquiry data for unrelated marketing unless we have obtained a valid legal basis and, where required, your consent.",
      ],
    },
    {
      title: "3. Email communication",
      paragraphs: [
        "If you email us at {email}, we process the sender address, recipients, content, and technical metadata necessary to deliver and archive business-related messages. We use this information to provide services, manage client relationships, and comply with legal obligations (for example, accounting or regulatory record-keeping where applicable).",
      ],
    },
    {
      title: "4. How we use information",
      paragraphs: ["We use personal information for purposes such as:"],
      listPlain: [
        "Providing and administering our digital services;",
        "Communicating with clients and prospective clients;",
        "Operating, securing, and improving our website;",
        "Complying with applicable laws and responding to lawful requests;",
        "Establishing, exercising, or defending legal claims where necessary.",
      ],
      paragraphsTail: [
        "We process personal data only where we have a lawful basis under applicable data protection law, such as performance of a contract, legitimate interests that are not overridden by your rights, compliance with a legal obligation, or consent where required.",
      ],
    },
    {
      title: "5. Payment processing through third-party payment providers",
      paragraphs: [
        "Where services involve payments, payment details are typically collected and processed directly by independent payment service providers (for example, card networks or payment platforms). We do not store full payment card numbers on our own systems when such processing is handled by a certified third party. The provider's privacy policy and terms apply to payment data they process on our behalf or in connection with transactions related to our services.",
      ],
    },
    {
      title: "6. Data retention",
      paragraphs: [
        "We retain personal information for as long as necessary to fulfill the purposes described in this policy, including to manage client projects, meet legal, tax, and accounting requirements, and resolve disputes. Retention periods may vary depending on the nature of the data and our legal obligations. When data is no longer needed, we delete or anonymize it where feasible.",
      ],
    },
    {
      title: "7. User rights",
      paragraphs: [
        "Depending on your location and applicable law (including the General Data Protection Regulation where it applies), you may have rights to:",
      ],
      listPlain: [
        "Request access to your personal data;",
        "Request correction of inaccurate data;",
        "Request erasure in certain circumstances;",
        "Object to or request restriction of certain processing;",
        "Request data portability where applicable;",
        "Withdraw consent where processing is based on consent.",
      ],
      paragraphsTail: [
        "To exercise these rights, contact us at {email}. You may also have the right to lodge a complaint with a supervisory authority in your country or region.",
      ],
    },
    {
      title: "8. Cookies",
      paragraphs: [
        "Our website may use cookies or similar technologies that are strictly necessary for the operation of the site (for example, security or load balancing), and, where we implement them, analytics or preference cookies. You can control cookies through your browser settings. Blocking certain cookies may affect how parts of the website function.",
      ],
    },
    {
      title: "9. International transfers",
      paragraphs: [
        "If we transfer personal data outside the European Economic Area, we will do so in accordance with applicable law and using appropriate safeguards (such as standard contractual clauses) where required.",
      ],
    },
    {
      title: "10. Security",
      paragraphs: [
        "We implement reasonable technical and organizational measures designed to protect personal information against unauthorized access, loss, or misuse. No method of transmission over the Internet is completely secure; we encourage you to use secure channels when sending sensitive information.",
      ],
    },
    {
      title: "11. Changes to this policy",
      paragraphs: [
        'We may update this Privacy Policy from time to time. The revised version will be posted on this page with an updated "Last updated" date where practicable.',
      ],
    },
    {
      title: "12. Contact",
      paragraphs: [
        "Questions about this Privacy Policy or our data practices may be sent to {email}.",
      ],
    },
  ],
};

const privacyDe = {
  metaTitle: "Datenschutzerklärung",
  metaDescription:
    "Datenschutzerklärung der Valeridium OÜ für digitale Dienstleistungen.",
  title: "Datenschutzerklärung",
  description:
    "Stand: 9. Mai 2026. Verantwortliche Stelle: {companyName} ({registry}).",
  intro:
    'Diese Datenschutzerklärung beschreibt, wie {companyName} („wir“, „uns“ oder „unser“) personenbezogene Daten erhebt, verwendet, speichert und schützt, wenn Sie unsere Website unter {website} nutzen oder mit uns im Zusammenhang mit unseren digitalen Dienstleistungen kommunizieren.',
  backHome: "← Zur Startseite",
  sections: [
    {
      title: "1. Welche Daten wir erheben",
      paragraphs: [
        "Je nach Art der Kontaktaufnahme können folgende Kategorien von Informationen verarbeitet werden:",
      ],
      listItems: [
        {
          strong: "Identitäts- und Kontaktdaten:",
          text: "Name, E-Mail-Adresse, Firmenname und ähnliche Angaben, die Sie freiwillig mitteilen.",
        },
        {
          strong: "Technische Daten:",
          text: "z. B. IP-Adresse, Browsertyp, Gerätetyp und allgemeine Nutzungsinformationen in Bezug auf unsere Website (ggf. über Cookies oder ähnliche Technologien).",
        },
        {
          strong: "Inhalte der Kommunikation:",
          text: "Nachrichten, die Sie uns per E-Mail oder über Formulare senden, einschließlich Anhänge, soweit dies für eine geschäftliche Anfrage relevant ist.",
        },
      ],
    },
    {
      title: "2. Anfragen über die Website oder E-Mail",
      paragraphs: [
        "Wenn Sie uns kontaktieren (z. B. per E-Mail oder über auf dieser Website veröffentlichte Kontaktdaten), verwenden wir die von Ihnen bereitgestellten Informationen, um Ihre Anfrage zu beantworten, zu prüfen, ob wir die gewünschten Leistungen erbringen können, und soweit angemessen eine geschäftliche Korrespondenz zu dokumentieren. Wir nutzen Anfragedaten nicht für unverwandtes Marketing, es sei denn, es liegt eine zulässige Rechtsgrundlage vor und ggf. Ihre Einwilligung.",
      ],
    },
    {
      title: "3. E-Mail-Kommunikation",
      paragraphs: [
        "Wenn Sie uns unter {email} eine E-Mail senden, verarbeiten wir Absender- und Empfängeradressen, Inhalte sowie technische Metadaten, die für Zustellung und Archivierung geschäftsbezogener Nachrichten erforderlich sind. Wir nutzen diese Informationen zur Erbringung von Leistungen, zur Kundenbeziehung und zur Erfüllung gesetzlicher Pflichten (z. B. buchhalterische oder aufsichtsrechtliche Aufbewahrung, soweit anwendbar).",
      ],
    },
    {
      title: "4. Zweck der Verarbeitung",
      paragraphs: ["Wir verarbeiten personenbezogene Daten insbesondere zu folgenden Zwecken:"],
      listPlain: [
        "Bereitstellung und Verwaltung unserer digitalen Dienstleistungen;",
        "Kommunikation mit Kunden und Interessenten;",
        "Betrieb, Sicherheit und Verbesserung unserer Website;",
        "Einhaltung geltender Rechtsvorschriften und Beantwortung rechtmäßiger Anfragen;",
        "Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen, soweit erforderlich.",
      ],
      paragraphsTail: [
        "Die Verarbeitung erfolgt nur, wenn eine Rechtsgrundlage nach anwendbarem Datenschutzrecht besteht — z. B. Vertragserfüllung, berechtigte Interessen (sofern nicht durch Ihre Rechte überwogen), rechtliche Verpflichtung oder — soweit erforderlich — Einwilligung.",
      ],
    },
    {
      title: "5. Zahlungsabwicklung durch Drittanbieter",
      paragraphs: [
        "Soweit Leistungen Zahlungen beinhalten, werden Zahlungsdaten in der Regel direkt von unabhängigen Zahlungsdienstleistern (z. B. Kartensysteme oder Zahlungsplattformen) erhoben und verarbeitet. Wir speichern keine vollständigen Kartennummern auf eigenen Systemen, wenn die Verarbeitung durch einen zertifizierten Dritten erfolgt. Für die dort verarbeiteten Daten gelten die Datenschutz- und Nutzungsbedingungen des jeweiligen Anbieters.",
      ],
    },
    {
      title: "6. Speicherdauer",
      paragraphs: [
        "Wir bewahren personenbezogene Daten nur so lange auf, wie es für die in dieser Erklärung genannten Zwecke erforderlich ist — einschließlich Projektabwicklung, steuerlicher und buchhalterischer Pflichten sowie Streitbeilegung. Die Dauer kann je nach Datenart und gesetzlichen Vorgaben variieren. Sind Daten nicht mehr erforderlich, löschen oder anonymisieren wir sie, soweit möglich.",
      ],
    },
    {
      title: "7. Ihre Rechte",
      paragraphs: [
        "Je nach Ihrem Wohnsitz und geltendem Recht (einschließlich der Datenschutz-Grundverordnung, soweit anwendbar) können Ihnen insbesondere folgende Rechte zustehen:",
      ],
      listPlain: [
        "Auskunft über Ihre personenbezogenen Daten;",
        "Berichtigung unrichtiger Daten;",
        "Löschung unter bestimmten Voraussetzungen;",
        "Widerspruch oder Einschränkung bestimmter Verarbeitungen;",
        "Datenübertragbarkeit, soweit anwendbar;",
        "Widerruf einer Einwilligung, sofern die Verarbeitung darauf beruht.",
      ],
      paragraphsTail: [
        "Zur Ausübung dieser Rechte kontaktieren Sie uns unter {email}. Sie können ferner Beschwerde bei einer Aufsichtsbehörde in Ihrem Land oder Ihrer Region einreichen.",
      ],
    },
    {
      title: "8. Cookies",
      paragraphs: [
        "Unsere Website kann Cookies oder ähnliche Technologien verwenden, die für den Betrieb der Seite erforderlich sind (z. B. Sicherheit oder Lastverteilung), sowie — sofern eingesetzt — Analyse- oder Präferenz-Cookies. Sie können Cookies in Ihren Browsereinstellungen steuern. Das Blockieren bestimmter Cookies kann die Funktionsweise einzelner Bereiche der Website beeinträchtigen.",
      ],
    },
    {
      title: "9. Internationale Übermittlungen",
      paragraphs: [
        "Übermitteln wir personenbezogene Daten außerhalb des Europäischen Wirtschaftsraums, erfolgt dies im Einklang mit geltendem Recht und unter geeigneten Garantien (z. B. Standardvertragsklauseln), soweit erforderlich.",
      ],
    },
    {
      title: "10. Sicherheit",
      paragraphs: [
        "Wir treffen angemessene technische und organisatorische Maßnahmen zum Schutz personenbezogener Daten vor unbefugtem Zugriff, Verlust oder Missbrauch. Die Übertragung über das Internet ist nicht vollständig risikofrei; wir empfehlen, sensible Informationen über sichere Kanäle zu senden.",
      ],
    },
    {
      title: "11. Änderungen dieser Erklärung",
      paragraphs: [
        "Wir können diese Datenschutzerklärung anpassen. Die jeweils aktuelle Fassung wird auf dieser Seite veröffentlicht; soweit möglich mit aktualisiertem Standdatum.",
      ],
    },
    {
      title: "12. Kontakt",
      paragraphs: [
        "Fragen zu dieser Datenschutzerklärung oder unseren Datenpraktiken richten Sie bitte an {email}.",
      ],
    },
  ],
};

const termsEn = {
  metaTitle: "Terms of Service",
  metaDescription: "Terms of service for Valeridium OÜ digital services.",
  title: "Terms of Service",
  description:
    "Last updated: May 9, 2026 · {companyName} · Registry {registry}",
  intro:
    'These Terms of Service ("Terms") govern your use of the website at {website} and the procurement of digital services from {companyName} ("Valeridium", "we", "us", or "our"). By accessing the website or engaging our services, you agree to these Terms.',
  backHome: "← Back to home",
  sections: [
    {
      title: "1. Scope of services",
      paragraphs: [
        "Valeridium provides software development, web development, e-commerce setup support, digital operation support, and related digital services for business clients, as described in proposals, statements of work, order confirmations, or other written agreements. Website content is for general information; specific obligations are defined only in a separate agreement between you and Valeridium.",
      ],
    },
    {
      title: "2. Client responsibilities",
      paragraphs: ["You agree to:"],
      listPlain: [
        "Provide accurate information and timely access, materials, and approvals reasonably required for delivery;",
        "Ensure you have the rights and permissions for any content, branding, or third-party assets you supply;",
        "Comply with applicable laws and platform rules applicable to your business and online presence;",
        "Maintain the confidentiality of credentials and notify us if you suspect unauthorized access.",
      ],
    },
    {
      title: "3. Payments and invoices",
      paragraphs: [
        "Fees, invoicing schedules, taxes, and payment methods are set out in the applicable agreement or invoice. Unless otherwise agreed, amounts are due in the currency and timeframe stated on the invoice. Late payment may result in suspension of work or services until payment is received. You are responsible for any bank or payment processing fees charged to you by your financial institution unless otherwise agreed in writing.",
      ],
    },
    {
      title: "4. Service delivery",
      paragraphs: [
        "Delivery timelines are estimates unless expressly guaranteed in writing. Digital deliverables are typically supplied online (for example, by repository access, file transfer, or deployment to agreed environments). Acceptance criteria, revision rounds, and support periods, if any, are defined in the relevant project agreement.",
      ],
    },
    {
      title: "5. Intellectual property",
      paragraphs: [
        "Unless otherwise agreed in writing, ownership of deliverables and license grants are defined in the project agreement. Pre-existing materials, tools, libraries, and know-how used across multiple clients remain the property of Valeridium or their respective licensors, and you receive the license scope agreed for your project.",
      ],
    },
    {
      title: "6. Limitation of liability",
      paragraphs: [
        "To the maximum extent permitted by applicable law, Valeridium is not liable for any indirect, incidental, consequential, special, or punitive damages, or for loss of profits, revenue, data, or goodwill, arising from or related to these Terms or our services. Our aggregate liability arising out of or relating to a specific engagement is, to the extent permitted by law, limited to the fees paid by you to Valeridium for that engagement during the six (6) months preceding the event giving rise to the claim, unless mandatory law provides otherwise.",
        "Nothing in these Terms excludes or limits liability that cannot be limited under applicable law.",
      ],
    },
    {
      title: "7. Changes to terms",
      paragraphs: [
        "We may update these Terms from time to time. The current version will be posted on this page with an updated date. Material changes may require additional notice where required by law. Continued use of the website after changes become effective constitutes acceptance of the revised Terms, except where ongoing services are governed by a separate written agreement that takes precedence.",
      ],
    },
    {
      title: "8. Governing business entity and disputes",
      paragraphs: [
        "The contracting legal entity is {companyName}, registry code {registry}, registered in Estonia at {address}.",
        "These Terms are governed by the laws applicable to {companyName} in Estonia, without regard to conflict-of-law rules that would require another jurisdiction's laws to apply. Courts located in Estonia shall have exclusive jurisdiction over disputes arising from these Terms or non-contractual matters related to them, subject to any mandatory rights you may have as a consumer where applicable.",
      ],
    },
    {
      title: "9. Contact",
      paragraphs: [
        "For questions about these Terms, contact {email}.",
      ],
    },
  ],
};

const termsDe = {
  metaTitle: "Nutzungsbedingungen",
  metaDescription:
    "Nutzungsbedingungen der Valeridium OÜ für digitale Dienstleistungen.",
  title: "Nutzungsbedingungen",
  description:
    "Stand: 9. Mai 2026 · {companyName} · Register {registry}",
  intro:
    'Diese Nutzungsbedingungen („Bedingungen“) regeln die Nutzung der Website unter {website} sowie die Inanspruchnahme digitaler Dienstleistungen von {companyName} („Valeridium“, „wir“, „uns“ oder „unser“). Mit dem Zugriff auf die Website oder der Beauftragung unserer Leistungen erklären Sie sich mit diesen Bedingungen einverstanden.',
  backHome: "← Zur Startseite",
  sections: [
    {
      title: "1. Leistungsumfang",
      paragraphs: [
        "Valeridium erbringt Softwareentwicklung, Webentwicklung, E-Commerce-Setup-Support, digitalen Betriebs-Support und verwandte digitale Dienstleistungen für Geschäftskunden, wie in Angeboten, Leistungsbeschreibungen, Auftragsbestätigungen oder sonstigen schriftlichen Vereinbarungen beschrieben. Website-Inhalte dienen der allgemeinen Information; verbindliche Pflichten ergeben sich nur aus einer gesonderten Vereinbarung zwischen Ihnen und Valeridium.",
      ],
    },
    {
      title: "2. Pflichten des Kunden",
      paragraphs: ["Sie verpflichten sich insbesondere:"],
      listPlain: [
        "wahrheitsgemäße Angaben sowie rechtzeitige Zugänge, Materialien und Freigaben bereitzustellen, die für die Erbringung der Leistung erforderlich sind;",
        "sicherzustellen, dass Sie über Rechte an Inhalten, Marken oder Drittmaterialien verfügen, die Sie einreichen;",
        "geltende Gesetze und Plattformregeln für Ihr Geschäft und Ihre Online-Präsenz einzuhalten;",
        "Zugangsdaten vertraulich zu behandeln und uns bei Verdacht auf unbefugten Zugriff zu informieren.",
      ],
    },
    {
      title: "3. Zahlungen und Rechnungen",
      paragraphs: [
        "Honorare, Rechnungsstellung, Steuern und Zahlungsmodalitäten ergeben sich aus der jeweiligen Vereinbarung oder Rechnung. Sofern nicht anders vereinbart, sind Beträge in der auf der Rechnung genannten Währung und Frist fällig. Bei Zahlungsverzug können Arbeiten oder Leistungen bis zum Zahlungseingang ausgesetzt werden. Bank- oder Zahlungsgebühren Ihres Instituts tragen Sie, sofern nicht schriftlich anders vereinbart.",
      ],
    },
    {
      title: "4. Leistungserbringung",
      paragraphs: [
        "Liefertermine sind Schätzungen, sofern nicht ausdrücklich schriftlich garantiert. Digitale Ergebnisse werden in der Regel online bereitgestellt (z. B. Repository-Zugang, Dateitransfer oder Deployment in vereinbarte Umgebungen). Abnahmekriterien, Korrekturrunden und Supportfristen ergeben sich — soweit vorhanden — aus der jeweiligen Projektvereinbarung.",
      ],
    },
    {
      title: "5. Geistiges Eigentum",
      paragraphs: [
        "Sofern nicht schriftlich anders vereinbart, ergeben sich Eigentum an Ergebnisleistungen und Lizenzumfänge aus der Projektvereinbarung. Bereits bestehende Materialien, Tools, Bibliotheken und Know-how, die für mehrere Kunden genutzt werden, verbleiben im Eigentum von Valeridium oder deren Lizenzgebern; Sie erhalten den vereinbarten Lizenzumfang für Ihr Projekt.",
      ],
    },
    {
      title: "6. Haftungsbeschränkung",
      paragraphs: [
        "Soweit gesetzlich zulässig, haftet Valeridium nicht für mittelbare, beiläufige, Folge-, besondere oder Strafschäden sowie entgangenen Gewinn, Umsatz, Daten oder Goodwill aus oder im Zusammenhang mit diesen Bedingungen oder unseren Leistungen. Die Gesamthaftung aus oder im Zusammenhang mit einem bestimmten Auftrag ist — soweit gesetzlich zulässig — auf die in den sechs (6) Monaten vor dem auslösenden Ereignis an Valeridium gezahlten Honorare begrenzt, sofern zwingendes Recht nichts anderes vorsieht.",
        "Nichts in diesen Bedingungen schließt oder beschränkt eine Haftung aus, die nach geltendem Recht nicht ausgeschlossen oder beschränkt werden darf.",
      ],
    },
    {
      title: "7. Änderungen der Bedingungen",
      paragraphs: [
        "Wir können diese Bedingungen anpassen. Die jeweils gültige Fassung wird auf dieser Seite mit aktualisiertem Datum veröffentlicht. Wesentliche Änderungen können — soweit gesetzlich erforderlich — zusätzliche Hinweise erfordern. Die weitere Nutzung der Website nach Inkrafttreten von Änderungen gilt als Zustimmung, sofern nicht laufende Leistungen durch eine gesonderte schriftliche Vereinbarung Vorrang haben.",
      ],
    },
    {
      title: "8. Vertragspartner und Streitigkeiten",
      paragraphs: [
        "Vertragspartner ist {companyName}, Registernummer {registry}, eingetragen in Estland unter der Adresse {address}.",
        "Es gilt estnisches Recht für {companyName}, unter Ausschluss von Kollisionsnormen, die auf ein anderes Recht verweisen würden. Für Streitigkeiten aus oder im Zusammenhang mit diesen Bedingungen sind die Gerichte in Estland zuständig, vorbehaltlich zwingender Verbraucherschutzvorschriften, soweit anwendbar.",
      ],
    },
    {
      title: "9. Kontakt",
      paragraphs: [
        "Fragen zu diesen Bedingungen richten Sie bitte an {email}.",
      ],
    },
  ],
};

const refundEn = {
  metaTitle: "Refund Policy",
  metaDescription:
    "Refund policy for Valeridium OÜ project-based digital services.",
  title: "Refund Policy",
  description: "Last updated: May 9, 2026 · {companyName}",
  intro:
    "This Refund Policy applies to project-based software and digital services provided by {companyName}. Specific engagements may include additional terms in a written agreement.",
  backHome: "← Back to home",
  sections: [
    {
      title: "1. Case-by-case review",
      paragraphs: [
        "Refund requests are reviewed on a case-by-case basis. We assess the status of the work, amounts paid, any costs already incurred, and the terms of the applicable agreement before determining an outcome.",
      ],
    },
    {
      title: "2. Work not yet started",
      paragraphs: [
        "If you have paid fees for agreed services and work has not yet commenced, a refund may be possible after deducting any non-recoverable third-party costs or administrative fees that were disclosed in advance, where applicable.",
      ],
    },
    {
      title: "3. Work in progress or delivered",
      paragraphs: [
        "If work has already started or has been delivered, fees may be partially or fully non-refundable, depending on milestones completed, time spent, licenses or subscriptions procured on your behalf, and the terms of your agreement. Completed deliverables generally remain subject to the intellectual property and license terms agreed for the project.",
      ],
    },
    {
      title: "4. Subscriptions and recurring services",
      paragraphs: [
        "Where services include subscription or recurring billing, cancellation and refund eligibility follow the billing terms agreed in writing (for example, notice periods, renewal dates, and minimum commitment). Unless otherwise stated, recurring charges may continue until a valid cancellation is received in accordance with those terms.",
      ],
    },
    {
      title: "5. How to request a refund",
      paragraphs: [
        "Send refund requests to {email} from the email address associated with your account or agreement, and include your company name, invoice or agreement reference, and a brief description of the reason for the request. We aim to respond within a reasonable business timeframe.",
      ],
    },
  ],
};

const refundDe = {
  metaTitle: "Rückerstattungsrichtlinie",
  metaDescription:
    "Rückerstattungsrichtlinie der Valeridium OÜ für projektbasierte digitale Dienstleistungen.",
  title: "Rückerstattungsrichtlinie",
  description: "Stand: 9. Mai 2026 · {companyName}",
  intro:
    "Diese Rückerstattungsrichtlinie gilt für projektbasierte Software- und digitale Dienstleistungen von {companyName}. Einzelaufträge können durch schriftliche Vereinbarungen ergänzt werden.",
  backHome: "← Zur Startseite",
  sections: [
    {
      title: "1. Einzelfallprüfung",
      paragraphs: [
        "Rückerstattungsanträge werden im Einzelfall geprüft. Wir bewerten den Bearbeitungsstand, gezahlte Beträge, bereits angefallene Kosten und die Bedingungen der jeweiligen Vereinbarung, bevor wir entscheiden.",
      ],
    },
    {
      title: "2. Arbeit noch nicht begonnen",
      paragraphs: [
        "Wenn Sie Honorare für vereinbarte Leistungen gezahlt haben und die Arbeit noch nicht begonnen wurde, kann unter Abzug nicht erstattungsfähiger Drittkosten oder vorab mitgeteilter Verwaltungsgebühren — soweit anwendbar — eine Rückerstattung möglich sein.",
      ],
    },
    {
      title: "3. Laufende oder erbrachte Arbeit",
      paragraphs: [
        "Wenn die Arbeit begonnen oder bereits erbracht wurde, können Gebühren teilweise oder vollständig nicht erstattungsfähig sein — abhängig von erreichten Meilensteinen, eingesetzter Zeit, in Ihrem Auftrag beschafften Lizenzen oder Abonnements und den Vertragsbedingungen. Erbrachte Ergebnisse unterliegen in der Regel den vereinbarten Regeln zu geistigem Eigentum und Lizenzen.",
      ],
    },
    {
      title: "4. Abonnements und wiederkehrende Leistungen",
      paragraphs: [
        "Bei Abonnements oder wiederkehrender Abrechnung gelten Kündigung und Erstattungsansprüche nach den schriftlich vereinbarten Abrechnungsbedingungen (z. B. Kündigungsfristen, Verlängerung, Mindestlaufzeit). Sofern nicht anders geregelt, können laufende Gebühren bis zu einer wirksamen Kündigung nach diesen Bedingungen weiterhin anfallen.",
      ],
    },
    {
      title: "5. Rückerstattung beantragen",
      paragraphs: [
        "Senden Sie Rückerstattungsanträge an {email} von der mit Ihrem Konto oder Vertrag verknüpften E-Mail-Adresse und nennen Sie Firmenname, Rechnungs- oder Vertragsreferenz sowie eine kurze Begründung. Wir bemühen uns um Antwort in angemessener geschäftlicher Frist.",
      ],
    },
  ],
};

fs.mkdirSync(legalDir, { recursive: true });
const write = (name, data) =>
  fs.writeFileSync(
    path.join(legalDir, name),
    JSON.stringify(data, null, 2),
    "utf8",
  );

write("privacy.en.json", privacyEn);
write("privacy.de.json", privacyDe);
write("terms.en.json", termsEn);
write("terms.de.json", termsDe);
write("refund.en.json", refundEn);
write("refund.de.json", refundDe);

console.log("Legal message files written.");
