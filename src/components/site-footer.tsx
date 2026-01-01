import Link from "next/link";
import { Container } from "@/components/container";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-surface-2">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-base font-extrabold tracking-tight text-slate-900">
              {site.name}
            </div>
            <div className="mt-2 text-sm text-slate-600">{site.tagline}</div>
            <div className="mt-4 text-sm text-slate-600">
              <div className="font-semibold text-slate-800">Address</div>
              <div className="mt-1">
                {site.contact.addressLines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-800">
              Quick Links
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-slate-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-800">
              Contact Us
            </div>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
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
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
        </div>
      </Container>
    </footer>
  );
}


