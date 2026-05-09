"use client";

import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const pill =
  "inline-flex h-9 min-w-[2.25rem] items-center justify-center rounded-lg px-2.5 text-xs font-semibold transition-colors";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div
      className="flex items-center rounded-lg border border-white/[0.1] bg-white/[0.04] p-0.5"
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((loc) => {
        const active = loc === locale;
        return (
          <Link
            key={loc}
            href={pathname}
            locale={loc}
            className={[
              pill,
              active
                ? "bg-white/15 text-white"
                : "text-muted hover:bg-white/5 hover:text-foreground",
            ].join(" ")}
            hrefLang={loc}
            lang={loc}
          >
            {loc.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
