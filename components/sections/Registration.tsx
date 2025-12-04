import Section from "@/components/layout/Section";
import LeadForm from "@/components/forms/LeadForm";

const RegistrationSection = () => {
  return (
    <Section id="inscricao" className="bg-page text-moss">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-moss/70">
            Inscreva-se agora
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">
            Garanta sua vaga gratuita
          </h2>
          <p className="mt-3 text-base text-moss/80">
            Basta preencher o formulário abaixo para receber o link do workshop
            ao vivo no seu e-mail e WhatsApp.
          </p>
        </div>
        <LeadForm />
      </div>
    </Section>
  );
};

export default RegistrationSection;
