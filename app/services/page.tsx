import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

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
    <>
      <PageHeader
        title="Our services"
        description="Clear, documented service areas for business clients. Engagements are typically scoped in writing before work begins."
      />
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-5">
          {sections.map(({ title, body }, i) => (
            <section
              key={title}
              className="rounded-2xl border border-white/[0.08] bg-surface p-6 shadow-[var(--card-shadow)] backdrop-blur-sm sm:p-8"
            >
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sm font-bold text-sky-400 ring-1 ring-sky-500/20">
                  {i + 1}
                </span>
                <div>
                  <h2 className="text-lg font-semibold tracking-tight text-foreground">
                    {title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {body}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
