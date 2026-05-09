import type { LegalDocument, LegalListItem, LegalSection } from "@/lib/legal-doc";
import { company } from "@/lib/company";
import privacyDe from "@/messages/legal/privacy.de.json";
import privacyEn from "@/messages/legal/privacy.en.json";
import refundDe from "@/messages/legal/refund.de.json";
import refundEn from "@/messages/legal/refund.en.json";
import termsDe from "@/messages/legal/terms.de.json";
import termsEn from "@/messages/legal/terms.en.json";

const vars = () =>
  ({
    companyName: company.legalName,
    registry: company.registryCode,
    email: company.email,
    website: company.website,
    address: company.address,
  }) as Record<string, string>;

function fill(str: string): string {
  const v = vars();
  return str.replace(/\{(\w+)\}/g, (_, key: string) => v[key] ?? `{${key}}`);
}

function mapItem(item: LegalListItem): LegalListItem {
  return {
    strong: item.strong ? fill(item.strong) : undefined,
    text: fill(item.text),
  };
}

function mapSection(s: LegalSection): LegalSection {
  return {
    title: fill(s.title),
    paragraphs: s.paragraphs?.map(fill),
    listItems: s.listItems?.map(mapItem),
    listPlain: s.listPlain?.map(fill),
    paragraphsTail: s.paragraphsTail?.map(fill),
  };
}

export function getLegalDocument(
  slug: "privacy" | "terms" | "refund",
  locale: string,
): LegalDocument {
  const useDe = locale === "de";
  const raw =
    slug === "privacy"
      ? useDe
        ? privacyDe
        : privacyEn
      : slug === "terms"
        ? useDe
          ? termsDe
          : termsEn
        : useDe
          ? refundDe
          : refundEn;

  const d = raw as LegalDocument;
  return {
    ...d,
    metaTitle: fill(d.metaTitle),
    metaDescription: fill(d.metaDescription),
    title: fill(d.title),
    description: fill(d.description),
    intro: fill(d.intro),
    backHome: d.backHome,
    sections: d.sections.map(mapSection),
  };
}
