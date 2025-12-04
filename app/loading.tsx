const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-page text-forest">
      <div className="flex flex-col items-center gap-2">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-forest border-t-transparent" />
        <p className="text-sm uppercase tracking-[0.4em]">Carregando</p>
      </div>
    </div>
  );
};

export default Loading;
