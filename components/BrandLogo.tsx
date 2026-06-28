import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/site";

type BrandLogoProps = {
  variant?: "header" | "footer-icon";
  className?: string;
  onClick?: () => void;
};

export default function BrandLogo({
  variant = "header",
  className = "",
  onClick,
}: BrandLogoProps) {
  const isHeader = variant === "header";

  return (
    <Link
      href="/"
      className={`site-brand ${isHeader ? "site-brand--header" : "site-brand--footer"} ${className}`}
      aria-label={`${company.name} home`}
      onClick={onClick}
    >
      {isHeader && (
        <span className="site-brand-name" aria-hidden>
          <span className="site-brand-name-primary">Boot</span>
          <span className="site-brand-name-accent">Surf</span>
        </span>
      )}
      <Image
        src="/branding/logo-transparent.png"
        alt=""
        width={203}
        height={253}
        className="site-brand-logo"
        priority={isHeader}
      />
    </Link>
  );
}
