import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: t('pricing.starter.name'),
      price: t('pricing.starter.price'),
      period: t('pricing.starter.period'),
      description: t('pricing.starter.description'),
      popular: false,
      features: t('pricing.starter.features', { returnObjects: true }) as string[],
      cta: t('pricing.starter.cta')
    },
    {
      name: t('pricing.professional.name'),
      price: t('pricing.professional.price'),
      period: t('pricing.professional.period'),
      description: t('pricing.professional.description'),
      popular: true,
      badge: t('pricing.professional.badge'),
      features: t('pricing.professional.features', { returnObjects: true }) as string[],
      cta: t('pricing.professional.cta')
    },
    {
      name: t('pricing.enterprise.name'),
      price: t('pricing.enterprise.price'),
      description: t('pricing.enterprise.description'),
      popular: false,
      features: t('pricing.enterprise.features', { returnObjects: true }) as string[],
      cta: t('pricing.enterprise.cta')
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`p-8 relative ${
                plan.popular 
                  ? 'border-primary shadow-glow bg-gradient-to-b from-card to-primary/5' 
                  : 'bg-card border-border/50'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  {plan.badge}
                </Badge>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  {plan.price !== t('pricing.enterprise.price') ? (
                    <>
                      <span className="text-5xl font-bold text-gradient">{plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </>
                  ) : (
                    <span className="text-5xl font-bold text-gradient">{plan.price}</span>
                  )}
                </div>
              </div>

              <Button 
                className={`w-full mb-6 ${plan.popular ? 'shadow-glow' : ''}`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                {plan.cta}
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="text-primary font-medium hover:underline">
            {t('pricing.compareFeatures')} →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
