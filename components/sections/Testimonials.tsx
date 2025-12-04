import Link from "next/link";
import Section from "@/components/layout/Section";
import { buttonClasses } from "@/components/ui/Button";

const learnings = [
  "Como aplicar princípios bíblicos práticos para disciplinar com amor e sabedoria.",
  "O segredo para lidar com birras e comportamentos desafiadores sem perder o controle.",
  "Como conquistar o coração do seu filho, estabelecendo limites claros e firmes.",
  "Ferramentas para transformar sua maternidade em uma missão cheia de propósito.",
];

const Testimonials = () => {
  return (
    <Section id="conteudo" className="bg-page text-moss">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden rounded-[40px] bg-[#336569] p-8 text-white shadow-card">
          <div className="text-sm uppercase tracking-[0.5em] text-white">
            Sua mentora
          </div>
          <p className="mt-3 font-display text-3xl">Tatiane Joslin</p>
          <p className="mt-3 text-base text-white/80">
            Pastora e mentora de mães cristãs, com uma mensagem fundamentada na
            Bíblia para restaurar famílias.
          </p>
          <div className="mt-8 flex flex-col gap-4 rounded-[32px] bg-[#336569]/80 p-6 text-center text-white">
            <p className="text-sm uppercase tracking-[0.4em] text-white/70">
              Ao vivo
            </p>
            <p className="text-2xl font-display text-white">20 de Maio</p>
            <p className="text-sm text-white/80">
              Uma aula com direcionamentos práticos e espirituais.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="font-display text-3xl leading-snug">
            O que você vai aprender na aula?
          </h2>
          <ul className="space-y-4 text-base text-moss/90">
            {learnings.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 text-2xl text-[#336569]">✶</span>
                {item}
              </li>
            ))}
          </ul>
          <Link href="#inscricao" className={buttonClasses("primary", "lg")}>
            Quero sair do caos e trazer paz ao meu lar
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
