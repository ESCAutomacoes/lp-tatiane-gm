import Section from "@/components/layout/Section";
import { buttonClasses } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const FinalCTA = () => {
  return (
    <Section id="mentora" className="bg-page">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.4em] text-clay">
            Quem será sua mentora?
          </p>
          <h2 className="font-display text-3xl text-forest">
            {siteConfig.mentor.name}
          </h2>
          <p className="text-base text-clay">{siteConfig.mentor.role}</p>
          <div className="space-y-4 text-sm text-forest/80">
            {siteConfig.mentor.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <Link
            href="#inscricao"
            className={buttonClasses("primary", "lg")}
          >
            Quero sair do caos e trazer paz ao meu lar
          </Link>
        </div>
        <div className="flex justify-center">
          <div className="relative h-[420px] w-[320px] overflow-hidden rounded-[48px] bg-gradient-to-b from-forest to-moss shadow-card">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-40 w-40 items-center justify-center rounded-full border-4 border-sand-light/40 text-4xl font-display text-sand-light/90">
                T
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest via-forest/60 to-transparent p-6 text-sand-light">
              <p className="text-lg font-display">{siteConfig.mentor.name}</p>
              <p className="text-sm text-sand-light/80">
                +300 mil mães impactadas diariamente
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FinalCTA;
