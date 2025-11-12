import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Code2, Terminal, Boxes, FileText, Video } from "lucide-react";
import { useTranslation } from "react-i18next";

const Documentation = () => {
  const { t } = useTranslation();

  const docCategories = [
    {
      icon: BookOpen,
      title: t('documentation.gettingStarted.title'),
      description: t('documentation.gettingStarted.description'),
      color: "text-primary"
    },
    {
      icon: Code2,
      title: t('documentation.api.title'),
      description: t('documentation.api.description'),
      color: "text-accent"
    },
    {
      icon: Terminal,
      title: t('documentation.deployment.title'),
      description: t('documentation.deployment.description'),
      color: "text-success"
    },
    {
      icon: Boxes,
      title: t('documentation.integrations.title'),
      description: t('documentation.integrations.description'),
      color: "text-warning"
    },
    {
      icon: FileText,
      title: t('documentation.bestPractices.title'),
      description: t('documentation.bestPractices.description'),
      color: "text-primary"
    },
    {
      icon: Video,
      title: t('documentation.security.title'),
      description: t('documentation.security.description'),
      color: "text-accent"
    }
  ];

  return (
    <section id="docs" className="py-24 px-6 bg-card/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('documentation.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('documentation.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {docCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-card border-border/50 cursor-pointer group"
            >
              <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 ${category.color} group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {category.description}
              </p>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-br from-card to-primary/5 border-primary/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                {t('documentation.cta.title')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('documentation.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button>{t('documentation.cta.browse')}</Button>
                <Button variant="outline">{t('documentation.cta.community')}</Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <Card className="p-4 bg-card/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <div className="font-semibold">{t('documentation.cta.stats.articles')}</div>
                    <div className="text-sm text-muted-foreground">{t('documentation.gettingStarted.description')}</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 bg-card/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{t('documentation.cta.stats.examples')}</div>
                    <div className="text-sm text-muted-foreground">{t('documentation.api.description')}</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 bg-card/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Video className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">{t('documentation.cta.stats.videos')}</div>
                    <div className="text-sm text-muted-foreground">{t('documentation.deployment.description')}</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

const Check = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default Documentation;
