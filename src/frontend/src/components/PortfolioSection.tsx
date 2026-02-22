import { ExternalLink, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Project } from '../backend';

interface PortfolioSectionProps {
  title: string;
  description: string;
  projects: Project[] | undefined;
  isLoading: boolean;
  icon: React.ReactNode;
}

export function PortfolioSection({ title, description, projects, isLoading, icon }: PortfolioSectionProps) {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            {icon}
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              {title}
            </h2>
            <p className="text-muted-foreground mt-1">{description}</p>
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : projects && projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group hover:shadow-steel-glow transition-all duration-300 hover:border-secondary/50"
              >
                <CardHeader>
                  <CardTitle className="font-display text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {project.link && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                      asChild
                    >
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        View Project
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-6 rounded-2xl bg-muted/30 border border-dashed border-border">
            <p className="text-muted-foreground text-lg">
              Projects coming soon. Check back later!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
