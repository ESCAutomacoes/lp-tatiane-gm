import Link from "next/link";
import { buttonClasses } from "@/components/ui/Button";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-page text-center text-forest">
      <div>
        <p className="text-sm uppercase tracking-[0.4em] text-clay">ops!</p>
        <h1 className="mt-2 font-display text-4xl">Página não encontrada</h1>
        <p className="mt-3 max-w-md text-forest/80">
          A página que você tentou acessar não existe ou foi removida. Mas você
          pode voltar para o conteúdo principal e garantir sua inscrição.
        </p>
      </div>
      <Link href="/" className={buttonClasses("primary", "md")}>
        Voltar para o início
      </Link>
    </div>
  );
};

export default NotFound;
