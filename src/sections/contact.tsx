"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/motion";
import { site } from "@/lib/site";

function buildMailto(params: {
  name: string;
  phone: string;
  message: string;
}) {
  const subject = `Inquiry - ${site.name}`;
  const body = [
    `Name: ${params.name}`,
    `Phone: ${params.phone}`,
    "",
    params.message
  ].join("\n");
  const qs = new URLSearchParams({
    subject,
    body
  });
  return `mailto:${site.contact.email}?${qs.toString()}`;
}

export function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const canSubmit = useMemo(() => {
    return name.trim().length >= 2 && phone.trim().length >= 8 && message.trim().length >= 10;
  }, [name, phone, message]);

  return (
    <section id="contact" className="bg-white">
      <Container className="py-14 sm:py-18">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <FadeIn>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Contact
              </div>
            </FadeIn>
            <FadeIn delay={0.06}>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Let’s talk requirements and pricing
              </h2>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Share your material type, approximate quantity, and location. We’ll get back with
                grading and next steps.
              </p>
            </FadeIn>

            <FadeIn delay={0.18}>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-surface-2 p-6 shadow-card transition will-change-transform hover:-translate-y-1">
                <div className="text-sm font-semibold text-slate-800">
                  Location
                </div>
                <div className="mt-2 text-sm text-slate-600">
                  {site.contact.addressLines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>

                <div className="mt-5 grid gap-2 text-sm text-slate-600">
                  <div>
                    <span className="font-semibold text-slate-800">Phone:</span>{" "}
                    <Link
                      href={`tel:${site.contact.phone}`}
                      className="hover:text-slate-900"
                    >
                      {site.contact.phone}
                    </Link>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800">Email:</span>{" "}
                    <Link
                      href={`mailto:${site.contact.email}`}
                      className="hover:text-slate-900"
                    >
                      {site.contact.email}
                    </Link>
                  </div>
                </div>

                <div className="mt-5 text-xs font-semibold text-slate-500">
                  Available for calls and dispatch coordination.
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.12}>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition will-change-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/10">
            <div className="text-sm font-semibold text-slate-800">Send Message</div>
            <form
              className="mt-4 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                if (!canSubmit) return;
                window.location.href = buildMailto({ name, phone, message });
              }}
            >
              <div className="grid gap-2">
                <label className="text-xs font-semibold text-slate-600" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none ring-slate-300 focus:ring-2"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-xs font-semibold text-slate-600" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none ring-slate-300 focus:ring-2"
                  placeholder="+91 98XXXXXXXX"
                  autoComplete="tel"
                  inputMode="tel"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-xs font-semibold text-slate-600" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[120px] rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-slate-300 focus:ring-2"
                  placeholder="Material type, approx quantity, pickup/delivery location..."
                />
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                <Button type="submit" disabled={!canSubmit} className="w-full">
                  Send via Email
                </Button>
                <Link
                  href={`tel:${site.contact.phone}`}
                  className="inline-flex h-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 px-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Call Now
                </Link>
              </div>

              <div className="text-xs text-slate-500">
                This form opens your email client (no server required).
              </div>
            </form>
          </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}


