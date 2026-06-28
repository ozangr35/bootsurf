type PageHeroProps = {
  kicker: string;
  title: string;
  titleAccent: string;
  description: string;
  bgImage?: string;
  bgAlt?: string;
};

export default function PageHero({
  kicker,
  title,
  titleAccent,
  description,
  bgImage,
  bgAlt = "",
}: PageHeroProps) {
  return (
    <section className="page-hero">
      {bgImage && (
        <div className="page-hero-bg" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={bgImage} alt={bgAlt} className="page-hero-bg-image" />
        </div>
      )}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="page-hero-content mx-auto max-w-3xl text-center">
          <span className="hero-kicker">{kicker}</span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {title}{" "}
            <span className="text-gradient-surf">{titleAccent}</span>
          </h1>
          <p className="lead mx-auto mt-6 max-w-2xl text-base leading-relaxed text-surf-mist sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
