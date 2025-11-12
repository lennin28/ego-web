import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import DemoRequestForm from "@/components/DemoRequestForm";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-48 pb-32 px-6 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)/0.05),transparent_50%)]" />
      </div>

      <div className="container mx-auto max-w-6xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">{t('hero.badge')}</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-[1.1]">
          {t('hero.title')}
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <DemoRequestForm 
            trigger={
              <Button size="lg" className="text-base px-8 shadow-glow group">
                {t('hero.requestDemo')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            }
          />
          <Button size="lg" variant="outline" className="text-base px-8" asChild>
            <a href="#features">{t('hero.exploreFeatures')}</a>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div>
            <div className="text-4xl font-bold text-gradient mb-2">100%</div>
            <div className="text-sm text-muted-foreground">{t('hero.stats.customizable')}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gradient mb-2">{t('hero.stats.integrations')}</div>
            <div className="text-sm text-muted-foreground">{t('hero.stats.integrations')}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gradient mb-2">{t('hero.stats.gitops')}</div>
            <div className="text-sm text-muted-foreground">{t('hero.stats.gitops')}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gradient mb-2">{t('hero.stats.multicloud')}</div>
            <div className="text-sm text-muted-foreground">{t('hero.stats.multicloud')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
