export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const wrap =
    align === "center"
      ? "mx-auto max-w-2xl text-center"
      : "max-w-2xl";

  return (
    <div className={wrap}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-[1.75rem] sm:leading-snug">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}
