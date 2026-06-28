import Image from "next/image";

type PhoneMockupProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  size?: "md" | "lg";
};

const sizeClass = {
  md: "w-[200px]",
  lg: "w-[240px]",
} as const;

export default function PhoneMockup({
  src,
  alt,
  className = "",
  priority = false,
  size = "md",
}: PhoneMockupProps) {
  return (
    <div className={`relative shrink-0 ${sizeClass[size]} ${className}`}>
      <div className="relative rounded-[2.25rem] border border-white/12 bg-gradient-to-b from-[#1a2a3a] via-[#0f1f2e] to-[#0a1520] p-[3px] shadow-glow">
        <div className="relative overflow-hidden rounded-[2rem] bg-black p-[5px]">
          <div className="relative aspect-[473/948] w-full overflow-hidden rounded-[1.65rem] bg-navy ring-1 ring-white/5">
            <Image
              src={src}
              alt={alt}
              fill
              sizes={size === "lg" ? "240px" : "200px"}
              className="object-cover object-top"
              priority={priority}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute top-[1.1%] left-1/2 z-10 h-[3.4%] w-[30%] min-h-[9px] -translate-x-1/2 rounded-full bg-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
