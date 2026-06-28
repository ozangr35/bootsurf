import BrandLogo from "@/components/BrandLogo";
import Link from "next/link";
import { company, contactEmail, siteUrl, synapliftUrl } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-navy-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="footer-intro-row">
              <BrandLogo variant="footer-icon" />
              <div className="footer-intro-meta">
                <p className="text-sm font-semibold text-white">About</p>
                <p className="max-w-xs text-sm leading-relaxed text-surf-mist">
                  Engineering resilient AI-native products. From concept to App
                  Store, we are your dedicated mobile and software partners.
                </p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="mt-2 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-surf-mist transition hover:border-surf-teal/40 hover:text-surf-teal"
                  aria-label="Email"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Company</p>
            <ul className="mt-4 space-y-2.5 text-sm text-surf-mist">
              <li>
                <Link href="/" className="transition hover:text-surf-teal">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-surf-teal">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/projects" className="transition hover:text-surf-teal">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/technology" className="transition hover:text-surf-teal">
                  Technology
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Services</p>
            <ul className="mt-4 space-y-2.5 text-sm text-surf-mist">
              <li>
                <Link href="/#expertise" className="transition hover:text-surf-teal">
                  Software Engineering
                </Link>
              </li>
              <li>
                <Link href="/#expertise" className="transition hover:text-surf-teal">
                  Mobile Design & UX
                </Link>
              </li>
              <li>
                <Link href="/#expertise" className="transition hover:text-surf-teal">
                  Privacy-First AI
                </Link>
              </li>
              <li>
                <Link href="/process" className="transition hover:text-surf-teal">
                  App Store Engineering
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-surf-mist">
              <li>
                <strong className="text-white">{company.name}</strong>
              </li>
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="transition hover:text-surf-teal"
                >
                  {contactEmail}
                </a>
              </li>
              <li>{company.country}</li>
              <li>
                <a
                  href={synapliftUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-surf-teal"
                >
                  SynapLift
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/8 pt-8 text-xs text-surf-mist sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <p className="text-surf-mist/80">
            <a href={siteUrl} className="hover:text-surf-teal">
              {siteUrl.replace("https://", "")}
            </a>
            {" · "}
            Elevating mobile standards.
          </p>
        </div>
      </div>
    </footer>
  );
}
