import Section from "@/components/layout/Section";
import { buttonClasses } from "@/components/ui/Button";
import Link from "next/link";

const audienceChecks = [
  "Você já tentou de tudo, mas ainda se sente sobrecarregada e sem controle.",
  "Você acredita que Deus te chamou para uma missão maior na maternidade.",
  "Você deseja criar filhos obedientes e amorosos sem abrir mão da sua autoridade.",
];

const Benefits = () => {
  return (
    <Section id="chega-de-caos" className="bg-page">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-6">
          <div>
            <p className="text-center text-sm uppercase tracking-[0.4em] text-clay">
              chega de caos!
            </p>
            <h2 className="mt-2 font-display text-3xl text-forest">
              Transforme o relacionamento com seus filhos em paz e propósito
            </h2>
          </div>
          <p className="text-lg text-clay">
            Você se sente cansada, frustrada e perdida diante das birras, da
            desobediência e da bagunça diária?
          </p>
          <p className="text-base text-forest/80">
            E se eu te disser que existe um caminho prático, bíblico e amoroso
            para trazer paz ao seu lar, sem gritos, sem culpa e sem se sentir
            uma péssima mãe?
          </p>
          <div className="rounded-3xl border border-forest/40 bg-highlight p-6 text-white shadow-card">
            <p className="text-lg font-display text-white">
              Esse evento é para você, mamãe cristã...
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {audienceChecks.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-highlight text-white">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-6 rounded-3xl bg-highlight p-6 text-white shadow-card">
          <p className="text-lg">
            Se você está cansada de gritar, de chorar escondida no banheiro ou
            de sentir culpa no fim do dia, eu quero te mostrar um caminho
            diferente:
          </p>
          <p className="rounded-3xl bg-highlight/80 p-4 text-base text-white">
            Um caminho bíblico que transforma birras e desobediência em
            respeito, conexão e paz.
          </p>
          <Link href="#inscricao" className={buttonClasses("primary", "lg")}>
            Quero sair do caos e trazer paz ao meu lar
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
