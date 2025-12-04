import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import Section from "@/components/layout/Section";
import { buttonClasses } from "@/components/ui/Button";

const highlights = [
  "Aprenda a lidar com birras sem gritos.",
  "Transforme desobediência em respeito.",
  "Traga paz para o seu lar com princípios bíblicos.",
];

const Hero = () => {
  return (
    <Section className="bg-page" id="topo" fullWidth>
      <div className="bg-page">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:py-16">
          <div className="order-2 flex flex-1 flex-col gap-6 lg:order-1">
            <div className="text-sm uppercase tracking-[0.5em] text-[#336569]">
              Workshop Exclusivo
            </div>
            <h1 className="font-display text-4xl leading-tight text-[#336569] sm:text-5xl lg:text-6xl">
              Do Caos à Paz
            </h1>
            <p className="max-w-2xl text-lg text-[#336569]">
              Descubra o caminho bíblico para disciplinar com amor e sabedoria.
              Aprenda a lidar com birras, transforme desobediência em respeito e
              convide a paz para cada cômodo do seu lar.
            </p>
            <div className="rounded-3xl border border-forest/40 bg-[#336569] p-6 text-white shadow-card">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/80">
                {siteConfig.eventDate}
              </p>
              <ul className="mt-4 space-y-2 text-base text-white">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#inscricao"
                className={buttonClasses("primary", "lg")}
              >
                {siteConfig.ctaText}
              </Link>
            </div>
          </div>
          <div className="order-1 flex flex-1 justify-center lg:order-2">
            <div className="relative flex h-[360px] w-[360px] items-center justify-center rounded-full bg-[#bf9579] shadow-card">
              <div className="absolute inset-6 rounded-full border-4 border-[#bf9579]/60" />
              <Image
                src="/images/desenho-tati.webp"
                alt="Ilustração de mãe e filho abraçados"
                fill
                sizes="(min-width: 1024px) 360px, 280px"
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
