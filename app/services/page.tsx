import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software and web development, e-commerce setup, digital operation support, and project-based digital services.",
};

const sections = [
  {
    title: "Software & Web Development",
    body: "We provide website development, landing page creation, web application development, and online business tools for companies and digital projects.",
  },
  {
    title: "E-commerce Store Setup",
    body: "We help clients set up online stores, structure product pages, configure basic payment flows, and prepare their online sales channels.",
  },
  {
    title: "Digital Operation Support",
    body: "We support clients with website updates, product listing optimization, content management, digital workflows, and general online operation tasks.",
  },
  {
    title: "Project-Based Digital Services",
    body: "Our services are usually provided on a project or service-fee basis. Clients pay for agreed digital services, and delivery is completed online.",
  },
] as const;

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        Our Services
      </h1>
      <p className="mt-4 text-sm text-muted">
        Clear, documented service areas for business clients.
      </p>
      <div className="mt-12 space-y-12">
        {sections.map(({ title, body }, i) => (
          <section key={title}>
            <h2 className="text-lg font-semibold text-foreground">
              {i + 1}. {title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">{body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
