import { Container } from "@/components/container";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";

const products = [
  {
    title: "Sheet Metal Scrap",
    subtitle: "Sheets & cutouts",
    desc: "High-quality sheet metal scrap with various industrial cutouts."
  },
  {
    title: "Tubes & Pipes",
    subtitle: "SS / Aluminum",
    desc: "Stainless and other mixed-metal tubes of various diameters and lengths."
  },
  {
    title: "Bars & Strips",
    subtitle: "Fragments & strips",
    desc: "Industrial grade bars, strips, and fragments suitable for recycling."
  },
  {
    title: "Industrial Pipes & Rods",
    subtitle: "Heavy-duty",
    desc: "Rods and pipes sourced from manufacturing and fabrication units."
  },
  {
    title: "Sheet Metal Waste",
    subtitle: "Precision cut waste",
    desc: "Offcuts and precision-cut waste from industrial processes."
  },
  {
    title: "Mixed Metal Scrap",
    subtitle: "Bulk lots",
    desc: "Bulk mixed metal scrap and offcuts for large-volume trading."
  }
] as const;

export function ProductsSection() {
  return (
    <section id="products" className="bg-surface-2">
      <Container className="py-14 sm:py-18">
        <div className="max-w-2xl">
          <FadeIn>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Our Products
            </div>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Scrap materials we trade
            </h2>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              We source a wide range of scrap and scrapable engineering goods with
              dependable supply and consistent grading.
            </p>
          </FadeIn>
        </div>

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <StaggerItem key={p.title}>
              <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition will-change-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/10">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {p.subtitle}
                </div>
                <div className="mt-2 text-lg font-extrabold text-slate-900">
                  {p.title}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">
                  {p.desc}
                </div>
                <div className="mt-5 h-px w-full bg-slate-100" />
                <div className="mt-4 text-xs font-semibold text-slate-500">
                  Available on request • Graded lots
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}


