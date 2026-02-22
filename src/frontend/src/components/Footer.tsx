import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname)
    : 'unknown-app';

  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Thanisha Ivana Portfolio · Built with{' '}
            <Heart className="h-4 w-4 text-primary fill-primary" />
            {' '}using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-primary transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
