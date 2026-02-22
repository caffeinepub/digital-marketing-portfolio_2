import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/assets/generated/WhatsApp Image 2026-02-22 at 11.34.16 AM (1)-1.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-accent/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-balance">
            <span className="text-primary drop-shadow-[0_0_30px_rgba(139,69,69,0.5)]">Thanisha Ivana</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto text-balance leading-relaxed">
            Institute of crafting compelling Digital experience to strategic marketing, 
            create a content and data driven campaigns
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              onClick={scrollToPortfolio}
              className="text-lg px-8 py-6 rounded-xl shadow-burgundy-glow hover:shadow-burgundy-glow-lg transition-all duration-300"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6 rounded-xl border-primary/50 hover:border-primary hover:bg-primary/10"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
}
