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

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/refund-policy", label: "Refund Policy" },
] as const;
