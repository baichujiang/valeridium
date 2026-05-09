/**
 * Company data — display rules:
 * - Home: services narrative only; no registry block in the hero.
 * - Contact: email only; point to footer + About for statutory detail.
 * - About: full structured company record (secondary page).
 * - Footer: compact imprint in small type at the very bottom; link to About for NACE/EMTAK/representative.
 */
export const company = {
  legalName: "Valeridium OÜ",
  registryCode: "17473866",
  legalForm: "Private Limited Company / Osaühing",
  address:
    "Harju maakond, Tallinn, Kesklinna linnaosa, Tartu mnt 67/1-13b, 10115, Estonia",
  country: "Estonia",
  website: "https://valeridium.com",
  email: "contact@valeridium.com",
  mainActivity: "Programming / Software development",
  emtak: "62101",
  nace: "62.10",
  representative: "Baichu Jiang, Management Board Member",
} as const;

/** Href paths without locale prefix — next-intl `Link` adds the active locale. */
export const mainNav = [
  { href: "/", labelKey: "home" },
  { href: "/services", labelKey: "services" },
  { href: "/about", labelKey: "about" },
  { href: "/contact", labelKey: "contact" },
] as const;

export const legalNav = [
  { href: "/privacy-policy", labelKey: "privacyPolicy" },
  { href: "/terms-of-service", labelKey: "termsOfService" },
  { href: "/refund-policy", labelKey: "refundPolicy" },
] as const;
