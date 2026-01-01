import { Container } from "@/components/container";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { site } from "@/lib/site";

export function AchievementsSection() {
  return (
    <section id="achievements" className="bg-white">
      <Container className="py-14 sm:py-18">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <FadeIn>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Achievements
              </div>
            </FadeIn>
            <FadeIn delay={0.06}>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Progress built on consistency and relationships
              </h2>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                We measure success through dependable supply, clean grading, and
                on-time dispatch—supported by a growing network of suppliers and
                customers.
              </p>
            </FadeIn>
          </div>

          <Stagger className="grid gap-4 sm:grid-cols-3">
            {site.stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="rounded-2xl border border-slate-200 bg-surface-2 p-6 shadow-card transition will-change-transform hover:-translate-y-1">
                  <div className="text-3xl font-extrabold tracking-tight text-slate-900">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-600">
                    {s.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}


