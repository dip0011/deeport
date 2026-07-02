export default function Cover() {
  return (
    <section className="relative min-h-[88vh] flex flex-col justify-center px-6 md:px-10 pt-24 pb-20">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <span className="small-caps t-meta">a short book by Dip Dhameliya</span>
          <span className="rule flex-1 max-w-[80px]" />
        </div>

        <h1 className="t-display text-balance">
          Most teams don&rsquo;t fail because of code.
        </h1>

        <p className="t-lead max-w-[34ch]">
          They fail because the{' '}
          <em className="text-accent not-italic font-medium">wrong product</em>{' '}
          gets shipped. I help early teams build the right thing, and make it
          last.
        </p>

        <div className="flex flex-col gap-1 pt-1">
          <span className="font-display text-lg text-ink">Dip Dhameliya</span>
          <span className="t-meta">Product-focused Full Stack Engineer</span>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a
          href="#founders-day"
          className="group flex flex-col items-center gap-2 text-ink-muted hover:text-ink transition-colors"
          aria-label="Begin reading"
        >
          <span className="small-caps text-xs">turn the page</span>
          <span className="text-base group-hover:translate-y-0.5 transition-transform">
            &darr;
          </span>
        </a>
      </div>
    </section>
  );
}
