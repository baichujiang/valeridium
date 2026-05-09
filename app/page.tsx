import Link from "next/link";
import { HeroPattern } from "@/components/HeroPattern";
import { company } from "@/lib/company";

const services = [
  {
    title: "Software & Web Development",
    text: "We develop business websites, landing pages, web applications, and online tools tailored to client needs.",
  },
  {
    title: "E-commerce Setup",
    text: "We support businesses with online store setup, product page structure, payment integration, and basic e-commerce operations.",
  },
  {
    title: "Digital Operation Support",
    text: "We assist clients with digital workflows, content updates, product listing optimization, and online business management.",
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

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <HeroPattern />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <p className="text-sm font-medium text-accent">
            {company.legalName} · {company.country}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Digital Services for Modern Online Businesses
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {company.legalName} provides software, web development, and
            e-commerce operation support for business clients.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-accent-subtle"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold text-foreground">Company overview</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
          {company.legalName} helps businesses build, launch, and manage their
          online presence through practical and reliable digital solutions. Our
          services include website development, web-based business tools,
          e-commerce store setup, online operation support, and digital project
          management.
        </p>
      </section>

      <section className="border-y border-border bg-accent-subtle/50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-foreground">Services preview</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Practical digital services for companies that operate online.
          </p>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map(({ title, text }) => (
              <li
                key={title}
                className="rounded-xl border border-border bg-surface p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link
              href="/services"
              className="text-sm font-medium text-accent hover:text-accent-hover"
            >
              Read more about our services →
            </Link>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold text-foreground">How we work</h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, text }, i) => (
            <li key={title} className="relative">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
