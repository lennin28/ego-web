import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { 
  Rocket, 
  Clock, 
  DollarSign, 
  Users, 
  Zap 
} from "lucide-react";

const Solutions = () => {
  const { t } = useTranslation();

  const solutions = [
    {
      icon: Rocket,
      title: t('solutions.deployment.title'),
      description: t('solutions.deployment.description'),
      metric: t('solutions.deployment.metric'),
      color: "text-primary"
    },
    {
      icon: DollarSign,
      title: t('solutions.cost.title'),
      description: t('solutions.cost.description'),
      metric: t('solutions.cost.metric'),
      color: "text-success"
    },
    {
      icon: Clock,
      title: t('solutions.reliability.title'),
      description: t('solutions.reliability.description'),
      metric: t('solutions.reliability.metric'),
      color: "text-accent"
    },
    {
      icon: Users,
      title: t('solutions.productivity.title'),
      description: t('solutions.productivity.description'),
      metric: t('solutions.productivity.metric'),
      color: "text-info"
    }
  ];

  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('solutions.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((item, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-card border-border/50 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${item.color}`}>
                <item.icon className="w-8 h-8" />
              </div>
              
              <div className="mb-4">
                <div className={`text-2xl font-bold mb-2 ${item.color}`}>{item.metric}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <h3 className="text-2xl font-bold mb-3">
              <span className="text-gradient">{t('solutions.metrics.title')}</span>
            </h3>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div>
                <div className="text-3xl font-bold text-primary">{t('solutions.metrics.deploy')}</div>
              </div>
              <div className="h-12 w-px bg-border hidden md:block" />
              <div>
                <div className="text-3xl font-bold text-success">{t('solutions.metrics.optimize')}</div>
              </div>
              <div className="h-12 w-px bg-border hidden md:block" />
              <div>
                <div className="text-3xl font-bold text-accent">{t('solutions.metrics.boost')}</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
