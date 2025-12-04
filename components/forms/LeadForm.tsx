"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { siteConfig } from "@/config/site";

const LeadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setSuccessMessage(null);

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage(
        "Inscrição realizada! Em instantes você receberá os detalhes no seu e-mail.",
      );
      form.reset();
    }, 800);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-3xl border border-white/20 bg-highlight p-8 text-white shadow-card"
    >
      <div>
        <label className="text-xl font-display text-white">Seu nome</label>
        <Input
          name="name"
          placeholder="Digite seu nome"
          required
          className="mt-2"
        />
      </div>

      <div>
        <label className="text-xl font-display text-white">
          Seu melhor e-mail
        </label>
        <Input
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          required
          className="mt-2"
        />
      </div>

      <div>
        <label className="text-xl font-display text-white">
          Seu WhatsApp
        </label>
        <Input
          name="whatsapp"
          placeholder="Digite o número com DDD (apenas números)"
          required
          pattern="[0-9]{10,11}"
          className="mt-2"
        />
      </div>

      <label className="mt-2 flex items-start gap-3 text-sm text-white/80">
        <input
          type="checkbox"
          required
          className="mt-[6px] h-4 w-4 rounded border border-white/40 bg-transparent text-accent focus:ring-accent"
        />
        {siteConfig.formDisclaimer}
      </label>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : siteConfig.ctaText}
      </Button>

      {successMessage && (
        <p className="rounded-2xl border border-white/30 bg-highlight/80 px-4 py-3 text-sm text-white">
          {successMessage}
        </p>
      )}
    </form>
  );
};

export default LeadForm;
