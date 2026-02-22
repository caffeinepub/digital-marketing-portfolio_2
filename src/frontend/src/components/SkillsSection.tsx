import { BarChart3, Megaphone, PenTool, Target, TrendingUp, Users } from 'lucide-react';

const skills = [
  {
    icon: Target,
    title: 'Strategy',
    description: 'Data-driven marketing strategies that deliver measurable results'
  },
  {
    icon: PenTool,
    title: 'Content Creation',
    description: 'Engaging content that resonates with target audiences'
  },
  {
    icon: Users,
    title: 'Social Media',
    description: 'Building communities and driving engagement across platforms'
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description: 'Turning data into actionable insights and optimization'
  },
  {
    icon: Megaphone,
    title: 'Campaign Management',
    description: 'End-to-end campaign execution and performance tracking'
  },
  {
    icon: TrendingUp,
    title: 'Growth Marketing',
    description: 'Scaling brands through innovative growth tactics'
  }
];

export function SkillsSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Core Competencies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set built through hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-burgundy-glow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
