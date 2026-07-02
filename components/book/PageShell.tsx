import { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import PaperBackground from './PaperBackground';
import BookmarkProgress from './BookmarkProgress';

interface PageShellProps {
  children: ReactNode;
}

/**
 * The single page frame for the whole site. Renders the paper background,
 * the bookmark progress ribbon, the navigation, and the centered reading
 * column whose left/right borders are the continuous page-margin rules.
 * Every page composes its sections inside this shell. See DESIGN_GUIDE.md.
 */
export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PaperBackground />
      <BookmarkProgress />
      <div className="relative mx-auto w-full max-w-[720px] min-h-screen border-x border-rule">
        <Navigation />
        <main>{children}</main>
      </div>
    </div>
  );
}
