import Link from "next/link";
import Section from "@/components/layout/Section";
import { buttonClasses } from "@/components/ui/Button";
import ScrollFlip from "@/components/ui/ScrollFlip";

const reasons = [
  "Porque seu filho merece uma mãe segura e amorosa.",
  "Porque Deus te deu essa missão e Ele te capacita para cumpri-la.",
  "Porque a paz que você tanto busca para o seu lar não precisa esperar até “um dia”.",
];

const FAQ = () => {
  return (
    <Section id="bonus" className="bg-page text-moss">
      <div className="space-y-10">
        <ScrollFlip>
          <div className="rounded-[32px] border border-white/20 bg-highlight p-8 text-center text-white shadow-card">
            <p className="text-sm uppercase tracking-[0.45em] text-white/70">
              Atenção: esse não é uma aula comum!
            </p>
            <p className="mt-4 text-lg text-white">
              Não é sobre teorias complicadas ou fórmulas mágicas. É sobre
              aprender a disciplinar como Deus nos ensina: com amor, sabedoria e
              autoridade verdadeira.
            </p>
            <p className="mt-2 text-lg text-white">
              Esse evento vai abrir os seus olhos para um novo jeito de ser mãe.
            </p>
          </div>
        </ScrollFlip>
        <div className="grid gap-6 lg:grid-cols-2">
          <ScrollFlip className="h-full">
            <div className="rounded-[32px] bg-[#336569] p-6 text-white h-full">
              <p className="text-lg font-display">Por que você não pode perder?</p>
              <ul className="mt-5 space-y-3 text-sm text-white/80">
                {reasons.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollFlip>
          <ScrollFlip className="h-full">
            <div className="rounded-[32px] border border-white/20 bg-highlight p-6 text-white h-full">
              <p className="text-lg font-display">Bônus exclusivo para inscritas</p>
              <p className="mt-4 text-sm text-white/90">
                Ao se inscrever, você vai receber gratuitamente a AULA 01 – O
                Propósito Bíblico da Maternidade e um PDF contendo o Guia Prático
                do Caos à Paz para começar a transformação hoje mesmo.
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-white">
                Inscreva-se agora e garanta sua vaga! As vagas são limitadas.
              </p>
              <Link
                href="#inscricao"
                className={`${buttonClasses("primary", "md")} mt-6`}
              >
                Quero sair do caos e trazer paz ao meu lar
              </Link>
            </div>
          </ScrollFlip>
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
