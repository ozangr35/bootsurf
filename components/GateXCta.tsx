import Link from "next/link";

type GateXCtaProps = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  external?: boolean;
};

export default function GateXCta({
  title,
  description,
  buttonLabel,
  buttonHref,
  external = false,
}: GateXCtaProps) {
  const buttonClass =
    "inline-flex rounded-xl bg-surf-teal px-7 py-3.5 text-sm font-bold text-navy transition hover:bg-surf-teal/90";

  return (
    <section className="border-t border-white/8 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="cta-box">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-[2.2rem]">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-surf-mist sm:text-lg">
            {description}
          </p>
          {external ? (
            <a href={buttonHref} className={`mt-8 ${buttonClass}`}>
              {buttonLabel}
            </a>
          ) : (
            <Link href={buttonHref} className={`mt-8 ${buttonClass}`}>
              {buttonLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
