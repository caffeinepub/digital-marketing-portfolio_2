import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { useMarketingProjects, useSocialMediaProjects, useWebDevProjects } from './hooks/useQueries';
import { Megaphone, Share2, Code } from 'lucide-react';

function App() {
  const { data: marketingProjects, isLoading: isLoadingMarketing } = useMarketingProjects();
  const { data: socialMediaProjects, isLoading: isLoadingSocial } = useSocialMediaProjects();
  const { data: webDevProjects, isLoading: isLoadingWeb } = useWebDevProjects();

  return (
    <div className="min-h-screen">
      <Hero />
      <SkillsSection />
      
      <section id="portfolio" className="py-12 bg-background">
        <div className="container mx-auto px-6 mb-12">
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of projects demonstrating strategic thinking, creative execution, 
              and measurable impact across digital marketing channels
            </p>
          </div>
        </div>

        <div className="space-y-0 divide-y divide-border">
          <PortfolioSection
            title="Marketing Campaigns"
            description="Strategic campaigns that drive brand awareness and conversions"
            projects={marketingProjects}
            isLoading={isLoadingMarketing}
            icon={<Megaphone className="h-6 w-6" />}
          />
          
          <PortfolioSection
            title="Social Media Projects"
            description="Engaging social content that builds communities and sparks conversations"
            projects={socialMediaProjects}
            isLoading={isLoadingSocial}
            icon={<Share2 className="h-6 w-6" />}
          />
          
          <PortfolioSection
            title="Web Development"
            description="Digital experiences that combine aesthetics with functionality"
            projects={webDevProjects}
            isLoading={isLoadingWeb}
            icon={<Code className="h-6 w-6" />}
          />
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
