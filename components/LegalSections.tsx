import type { LegalSection } from "@/lib/legal-doc";

export function LegalSections({ sections }: { sections: LegalSection[] }) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.title} className="mt-10">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            {section.title}
          </h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
            {section.paragraphs?.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}
            {section.listItems && section.listItems.length > 0 ? (
              <ul className="list-disc space-y-2 pl-5">
                {section.listItems.map((item) => (
                  <li key={item.text.slice(0, 40)}>
                    {item.strong ? (
                      <>
                        <strong className="font-medium text-foreground">
                          {item.strong}
                        </strong>{" "}
                        {item.text}
                      </>
                    ) : (
                      item.text
                    )}
                  </li>
                ))}
              </ul>
            ) : null}
            {section.listPlain && section.listPlain.length > 0 ? (
              <ul className="list-disc space-y-2 pl-5">
                {section.listPlain.map((item) => (
                  <li key={item.slice(0, 40)}>{item}</li>
                ))}
              </ul>
            ) : null}
            {section.paragraphsTail?.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
