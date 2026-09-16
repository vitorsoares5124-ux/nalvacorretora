export default function Loading() {
  return (
    <div className="min-h-screen bg-canvas pb-24 text-ink">
      <div className="border-b border-line bg-canvas-alt/70 py-3.5">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 sm:px-6 lg:px-8">
          <div className="h-3 w-24 animate-pulse rounded bg-elevated" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-line">
          <div className="space-y-3">
            <div className="h-3 w-32 animate-pulse rounded bg-elevated" />
            <div className="h-9 w-64 animate-pulse rounded bg-elevated" />
            <div className="h-4 w-80 max-w-full animate-pulse rounded bg-elevated" />
          </div>
          <div className="h-9 w-40 animate-pulse rounded-xl bg-elevated" />
        </div>

        <div className="pt-6">
          <div className="h-12 w-full animate-pulse rounded-full bg-surface" />
        </div>

        <div className="py-4">
          <div className="h-3 w-56 animate-pulse rounded bg-elevated" />
        </div>

        <div className="mt-2 flex gap-8 lg:gap-10 items-start">
          <div className="hidden lg:block w-72 shrink-0 space-y-4">
            <div className="h-64 animate-pulse rounded-2xl border border-line bg-surface" />
          </div>
          <div className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-line bg-surface"
              >
                <div className="aspect-[4/3] w-full animate-pulse bg-elevated" />
                <div className="space-y-3 p-5">
                  <div className="h-4 w-3/4 animate-pulse rounded bg-elevated" />
                  <div className="h-3 w-1/2 animate-pulse rounded bg-elevated" />
                  <div className="h-6 w-1/3 animate-pulse rounded bg-elevated" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
