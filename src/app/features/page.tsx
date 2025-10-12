export default function FeaturesPage() {
  return (
    <main className="min-h-[200vh] px-6 py-24 bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold tracking-tight">Features</h1>
        <p className="mt-2 text-neutral-300">
          Scroll this page to verify the navbar resizing and blur behavior.
        </p>
      </section>

      <section className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
          >
            <h2 className="text-xl font-semibold">Feature {i + 1}</h2>
            <p className="mt-2 text-sm text-neutral-300">
              This is placeholder content to add scrollable height.
            </p>
          </div>
        ))}
      </section>
    </main>
  )
}
