export default function Loading() {
  return (
    <div className="min-h-screen bg-canvas pb-24 lg:pb-16 text-ink">
      <div className="border-b border-line bg-canvas-alt/70 py-3.5">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 sm:px-6 lg:px-8">
          <div className="h-3 w-40 animate-pulse rounded bg-elevated" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-line">
          <div className="space-y-3">
            <div className="h-5 w-40 animate-pulse rounded bg-elevated" />
            <div className="h-10 w-96 max-w-full animate-pulse rounded bg-elevated" />
            <div className="h-4 w-56 animate-pulse rounded bg-elevated" />
          </div>
          <div className="h-10 w-48 animate-pulse rounded-xl bg-elevated" />
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="aspect-[16/10] w-full animate-pulse rounded-2xl border border-line bg-surface" />
            <div className="grid grid-cols-4 gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square animate-pulse rounded-xl border border-line bg-surface"
                />
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-40 animate-pulse rounded-2xl border border-line bg-surface" />
            <div className="h-52 animate-pulse rounded-2xl border border-line bg-surface" />
          </div>
        </div>
      </div>
    </div>
  );
}
