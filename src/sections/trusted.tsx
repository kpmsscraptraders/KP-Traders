import { Container } from "@/components/container";
import { Marquee } from "@/components/marquee";
import { FadeIn } from "@/components/motion";

const trusted = [
  "Steel & SS Buyers",
  "Industrial Fabricators",
  "Scrap Processors",
  "Warehousing Partners",
  "Logistics Operators",
  "Foundries & Mills",
  "Manufacturing Units",
  "Recycling Facilities"
] as const;

export function TrustedSection() {
  return (
    <section aria-label="Trusted by" className="bg-white">
      <Container className="pb-10">
        <FadeIn>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm font-extrabold text-slate-900">
              Trusted by partners across the supply chain
            </div>
            <div className="text-xs font-semibold text-slate-500">
              Consistent grades • transparent dealing • timely dispatch
            </div>
          </div>
        </FadeIn>
        <div className="mt-4 overflow-hidden rounded-3xl border border-slate-200 bg-surface-2 py-3">
          <Marquee items={[...trusted]} fadeFromClassName="from-surface-2" />
        </div>
      </Container>
    </section>
  );
}


