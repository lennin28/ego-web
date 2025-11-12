import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { 
  Zap, 
  Shield, 
  Activity, 
  GitBranch, 
  Database, 
  Cloud,
  Lock,
  BarChart3,
  Workflow
} from "lucide-react";

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      id: 'workflow',
      icon: Workflow,
      title: t('features.workflow.title'),
      description: t('features.workflow.description'),
      color: "text-primary"
    },
    {
      id: 'performance',
      icon: Zap,
      title: t('features.performance.title'),
      description: t('features.performance.description'),
      color: "text-accent"
    },
    {
      id: 'gitops',
      icon: GitBranch,
      title: t('features.gitops.title'),
      description: t('features.gitops.description'),
      color: "text-success"
    },
    {
      id: 'security',
      icon: Shield,
      title: t('features.security.title'),
      description: t('features.security.description'),
      color: "text-destructive"
    },
    {
      id: 'monitoring',
      icon: Activity,
      title: t('features.monitoring.title'),
      description: t('features.monitoring.description'),
      color: "text-primary"
    },
    {
      id: 'scale',
      icon: Database,
      title: t('features.scale.title'),
      description: t('features.scale.description'),
      color: "text-warning"
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-card/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.id}
              className="p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-card border-border/50"
            >
              <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 ${feature.color}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
