import { Mail, Phone, Linkedin, User, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useContactInfo } from '../hooks/useQueries';

export function ContactSection() {
  const { data: contactInfo, isLoading } = useContactInfo();

  if (isLoading) {
    return (
      <section id="contact" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        </div>
      </section>
    );
  }

  if (!contactInfo) {
    return (
      <section id="contact" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground">
              Contact information will be available soon.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const contactItems = [
    {
      icon: User,
      label: 'Name',
      value: contactInfo.name,
      href: null
    },
    {
      icon: Mail,
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`
    },
    {
      icon: Phone,
      label: 'Phone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: contactInfo.linkedin,
      href: contactInfo.linkedin.startsWith('http') ? contactInfo.linkedin : `https://linkedin.com/in/${contactInfo.linkedin}`
    }
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating or learning more about my work? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-large border-2">
            <CardHeader className="text-center pb-8">
              <CardTitle className="font-display text-2xl">
                Get In Touch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-6 rounded-xl bg-secondary/30 hover:bg-secondary/50 hover:shadow-steel-glow transition-all duration-300">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-muted-foreground mb-1">
                          {item.label}
                        </p>
                        <p className="font-medium text-foreground break-words">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  if (item.href) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.label === 'LinkedIn' ? '_blank' : undefined}
                        rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                        className="block hover:scale-105 transition-transform duration-300"
                      >
                        {content}
                      </a>
                    );
                  }

                  return <div key={item.label}>{content}</div>;
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
