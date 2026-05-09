import Link from "next/link";
import { HeroPattern } from "@/components/HeroPattern";
import { HeroVisual } from "@/components/HeroVisual";
import { SectionHeading } from "@/components/SectionHeading";
import { IconCart, IconCode, IconOps } from "@/components/ServiceIcons";
import { company } from "@/lib/company";

const services = [
  {
    title: "Software & Web Development",
    text: "We develop business websites, landing pages, web applications, and online tools tailored to client needs.",
    icon: IconCode,
  },
  {
    title: "E-commerce Setup",
    text: "We support businesses with online store setup, product page structure, payment integration, and basic e-commerce operations.",
    icon: IconCart,
  },
  {
    title: "Digital Operation Support",
    text: "We assist clients with digital workflows, content updates, product listing optimization, and online business management.",
    icon: IconOps,
  },
] as const;

const steps = [
  {
    title: "Consultation",
    text: "We discuss the client’s needs, goals, and project scope.",
  },
  {
    title: "Planning",
    text: "We define the website, software, or digital operation requirements.",
  },
  {
    title: "Implementation",
    text: "We build, configure, or support the digital solution.",
  },
  {
    title: "Delivery & Support",
    text: "We deliver the agreed service online and provide follow-up support when needed.",
  },
] as const;

const trustItems = [
  { label: "Estonia OÜ", detail: company.registryCode },
  { label: "NACE", detail: company.nace },
  { label: "EMTAK", detail: company.emtak },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.06] bg-surface">
        <HeroPattern />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1 text-xs font-medium text-muted backdrop-blur-sm">
                {company.legalName}
              </span>
              <span className="text-xs font-medium text-muted-light">
                {company.country}
              </span>
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-[1.08]">
              Digital services for modern online businesses
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              {company.legalName} provides software, web development, and
              e-commerce operation support for business clients.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-opacity hover:opacity-95"
              >
                View services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.04] px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-sky-500/30 hover:bg-white/[0.07]"
              >
                Contact us
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-3">
              {trustItems.map(({ label, detail }) => (
                <li
                  key={label}
                  className="flex items-baseline gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm backdrop-blur-sm"
                >
                  <span className="font-semibold text-foreground">{label}</span>
                  <span className="font-mono text-xs text-muted">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Overview"
              title="Practical digital solutions for established and growing companies"
            />
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-muted">
              {company.legalName} helps businesses build, launch, and manage their
              online presence through practical and reliable digital solutions.
              Our services include website development, web-based business tools,
              e-commerce store setup, online operation support, and digital
              project management.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/[0.08] bg-surface p-5 shadow-[var(--card-shadow)]">
                <p className="text-sm font-semibold text-foreground">
                  Project-based delivery
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Clear scope, agreed milestones, and online handover.
                </p>
              </div>
              <div className="rounded-xl border border-white/[0.08] bg-surface p-5 shadow-[var(--card-shadow)]">
                <p className="text-sm font-semibold text-foreground">
                  B2B focus
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  We work with business clients on websites, tools, and store
                  operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-surface-highlight py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="What we help you with"
            description="Practical digital services for companies that operate online — documented, predictable, and aligned to your operations."
          />
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map(({ title, text, icon: Icon }) => (
              <li
                key={title}
                className="group flex flex-col rounded-2xl border border-white/[0.08] bg-surface/90 p-6 shadow-[var(--card-shadow)] backdrop-blur-sm transition-all duration-300 hover:border-sky-500/25 hover:shadow-[var(--card-shadow-hover)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 ring-1 ring-sky-400/20 transition-colors group-hover:bg-sky-500/15">
                  <Icon />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {text}
                </p>
                <span className="mt-5 text-xs font-medium text-muted-light">
                  Business clients
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-semibold text-sky-400 transition-colors hover:text-sky-300"
            >
              Full service descriptions
              <span aria-hidden>→</span>
            </Link>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title="How we work"
          description="A straightforward engagement model from first conversation to delivery and follow-up."
        />
        <div className="relative mt-14">
          <div
            className="pointer-events-none absolute left-0 right-0 top-[1.125rem] hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block"
            aria-hidden
          />
          <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map(({ title, text }, i) => (
              <li key={title} className="relative">
                <div className="flex items-start gap-4 lg:flex-col lg:gap-0">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-sm font-bold text-white shadow-lg shadow-sky-500/30 ring-4 ring-background">
                    {i + 1}
                  </span>
                  <div className="lg:mt-5">
                    <h3 className="text-base font-semibold text-foreground">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {text}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative border-t border-white/[0.06] py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(56,189,248,0.08),transparent_55%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400/90">
            Business inquiries
          </p>
          <h2 className="mx-auto mt-3 max-w-xl text-2xl font-semibold tracking-tight text-foreground">
            Discuss a project or request company details
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted">
            We respond to relevant business messages in order of receipt.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-opacity hover:opacity-95"
          >
            Go to contact
          </Link>
        </div>
      </section>
    </>
  );
}
