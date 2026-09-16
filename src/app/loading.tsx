export default function Loading() {
  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center bg-canvas">
      <div
        role="status"
        aria-label="Carregando"
        className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-gold-primary"
      />
    </div>
  );
}
