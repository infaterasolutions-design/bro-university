export function Footer() {
  return (
    <footer className="bg-brand-surface-2 py-12 md:py-16 border-t border-brand-surface-3">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col items-center justify-center text-center gap-6">
        <a href="#" className="font-display font-bold text-3xl tracking-tighter text-brand-text-main opacity-80 hover:opacity-100 transition-opacity">
          BRO<span className="text-brand-orange-primary">.</span>
        </a>
        <p className="text-brand-text-muted font-body max-w-md">
          A research-led future education ecosystem built for pre-seed fundraising and early traction.
        </p>
        <div className="mt-8 pt-8 border-t border-brand-surface/30 w-full flex flex-col md:flex-row items-center justify-between gap-4 text-brand-text-faint text-sm">
          <p>© {new Date().getFullYear()} BRO UNIVERSITY. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-text-main transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-text-main transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
