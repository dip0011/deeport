export default function PaperBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-paper" />
      <div className="absolute inset-0 paper-grain opacity-[0.05]" />
      <div className="absolute inset-0 page-vignette" />
    </div>
  );
}
