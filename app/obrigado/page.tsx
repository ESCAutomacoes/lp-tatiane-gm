// app/obrigado/page.tsx
export default function ObrigadoPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">
        Obrigado!
      </p>
      <h1 className="text-4xl md:text-5xl font-semibold text-primary mb-6">
        Sua solicitação foi enviada.
      </h1>
      <p className="text-base text-muted max-w-xl">
        Em breve nossa equipe entrará em contato com você para continuar o processo.
      </p>
    </main>
  );
}
