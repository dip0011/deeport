import PageShell from '@/components/book/PageShell';
import Cover from '@/components/book/Cover';
import FoundersDay from '@/components/book/FoundersDay';
import WhatIDo from '@/components/book/WhatIDo';
import HowIThink from '@/components/book/HowIThink';
import Missions from '@/components/book/Missions';
import StorySoFar from '@/components/book/StorySoFar';
import WhatIGotWrong from '@/components/book/WhatIGotWrong';
import IfIJoined from '@/components/book/IfIJoined';
import Disagreements from '@/components/book/Disagreements';
import DearFounder from '@/components/book/DearFounder';

function ChapterBreak() {
  return (
    <div className="flex justify-center py-2" aria-hidden="true">
      <span className="chapter-ornament text-ink-muted text-sm">✦ ✦ ✦</span>
    </div>
  );
}

export default function Home() {
  return (
    <PageShell>
      <Cover />
      <FoundersDay />
      <ChapterBreak />
      <WhatIDo />
      <ChapterBreak />
      <HowIThink />
      <ChapterBreak />
      <Missions />
      <ChapterBreak />
      <StorySoFar />
      <ChapterBreak />
      <WhatIGotWrong />
      <ChapterBreak />
      <IfIJoined />
      <ChapterBreak />
      <Disagreements />
      <ChapterBreak />
      <DearFounder />
    </PageShell>
  );
}
