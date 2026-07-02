import Reveal from './Reveal';

interface ChapterHeadingProps {
  /** Roman or arabic numeral shown above the title, e.g. "I", "II" */
  numeral: string;
  /** small kicker above the numeral, e.g. "Chapter" */
  kicker?: string;
  title: string;
}

export default function ChapterHeading({
  numeral,
  kicker = 'Chapter',
  title,
}: ChapterHeadingProps) {
  return (
    <Reveal className="mb-9 md:mb-11">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="t-eyebrow">{kicker}</span>
          <span className="rule flex-1 max-w-[40px]" />
          <span className="font-display text-sm text-ink-muted">{numeral}</span>
        </div>
        <h2 className="t-h2">{title}</h2>
      </div>
    </Reveal>
  );
}
