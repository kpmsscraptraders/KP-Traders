import { Container } from "@/components/container";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { site } from "@/lib/site";

const values = [
  {
    title: "Focus on High Quality",
    desc: "Reliable and consistent sourcing of scrap and metals that meets industry expectations."
  },
  {
    title: "Customer Service",
    desc: "Prompt coordination and timely fulfillment to build long-term trust with clients."
  },
  {
    title: "Competitive Pricing",
    desc: "Market-aligned pricing backed by transparent grades, weights, and terms."
  },
  {
    title: "Convenient Logistics",
    desc: "Operational support for transport planning and smooth material movement."
  },
  {
    title: "Environment Responsibility",
    desc: "Responsible recycling practices that support sustainable waste management."
  },
  {
    title: "Verification & Segregation",
    desc: "Careful grading and segregation to deliver consistent lots and fewer surprises."
  }
] as const;

export function AboutSection() {
  return (
    <section id="about" className="bg-white">
      <Container className="py-14 sm:py-18">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <FadeIn>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                About Us
              </div>
            </FadeIn>
            <FadeIn delay={0.06}>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Turning scrap into value with disciplined trading
              </h2>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {site.about}
              </p>
            </FadeIn>
            <FadeIn delay={0.18}>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-surface-2 p-5 shadow-card transition will-change-transform hover:-translate-y-1">
                <div className="text-sm font-semibold text-slate-800">
                  Why clients choose us
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Consistent grades, clear communication, and dependable dispatch.
                  We optimize for long-term relationships, not one-off deals.
                </p>
              </div>
            </FadeIn>
          </div>

          <div>
            <FadeIn>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Core Values
              </div>
            </FadeIn>
            <Stagger className="mt-4 grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <StaggerItem key={v.title}>
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition will-change-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/10">
                    <div className="text-sm font-extrabold text-slate-900">
                      {v.title}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-slate-600">
                      {v.desc}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Container>
    </section>
  );
}


