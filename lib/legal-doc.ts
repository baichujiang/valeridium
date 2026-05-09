/** Shared shape for localized legal pages (loaded from messages/legal/*.json). */
export type LegalListItem = {
  strong?: string;
  text: string;
};

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  listItems?: LegalListItem[];
  /** Simple bullet strings (no bold label) */
  listPlain?: string[];
  /** Paragraphs rendered after lists */
  paragraphsTail?: string[];
};

export type LegalDocument = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  description: string;
  intro: string;
  backHome: string;
  sections: LegalSection[];
};
