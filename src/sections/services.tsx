import { Container } from "@/components/container";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";

const services = [
  {
    title: "Trading Efficiently",
    desc: "Faster, connected supply chain for bulk and container trading of scrap materials."
  },
  {
    title: "Promises We Keep",
    desc: "Reputation-conscious trading with trusted suppliers and clear bids aligned to quality."
  },
  {
    title: "Sourcing & Aggregation",
    desc: "Material sourcing across categories with aggregation for consistent lot sizes."
  },
  {
    title: "Verification & Segregation",
    desc: "Inspection, grading, and segregation to reduce variance and improve reliability."
  }
] as const;

export function ServicesSection() {
  return (
    <section id="services" className="bg-surface-2">
      <Container className="py-14 sm:py-18">
        <div className="max-w-2xl">
          <FadeIn>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Services
            </div>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Sustainable trading with dependable execution
            </h2>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              We keep operations streamlined, transparent, and environmentally
              responsible—reducing waste and improving outcomes for everyone in
              the chain.
            </p>
          </FadeIn>
        </div>

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition will-change-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/10">
                <div className="text-lg font-extrabold text-slate-900">
                  {s.title}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">
                  {s.desc}
                </div>
                <div className="mt-5 rounded-xl bg-slate-50 p-4 text-xs font-semibold text-slate-600">
                  Focus: quality • communication • timely dispatch
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}


