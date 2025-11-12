import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

const Integrations = () => {
  const { t } = useTranslation();

  const integrations = [
    {
      id: 'github',
      name: "GitHub",
      category: t('integrations.categories.versionControl'),
      description: t('integrations.github'),
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/512px-Octicons-mark-github.svg.png"
    },
    {
      id: 'azure-devops',
      name: "Azure DevOps",
      category: t('integrations.categories.cicd'),
      description: t('integrations.azureDevops'),
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Azure_DevOps_Logo.svg/512px-Azure_DevOps_Logo.svg.png"
    },
    {
      id: 'kubernetes',
      name: "Kubernetes",
      category: t('integrations.categories.orchestration'),
      description: t('integrations.kubernetes'),
      logo: "https://cdn.simpleicons.org/kubernetes/326CE5"
    },
    {
      id: 'argocd',
      name: "ArgoCD",
      category: t('integrations.categories.gitops'),
      description: t('integrations.argocd'),
      logo: "https://landscape.cncf.io/logos/argo.svg"
    },
    {
      id: 'docker',
      name: "Docker",
      category: t('integrations.categories.container'),
      description: t('integrations.docker'),
      logo: "https://cdn.simpleicons.org/docker/2496ED"
    },
    {
      id: 'aws',
      name: "AWS",
      category: t('integrations.categories.cloud'),
      description: t('integrations.aws'),
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png"
    },
    {
      id: 'azure',
      name: "Azure",
      category: t('integrations.categories.cloud'),
      description: t('integrations.azure'),
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/512px-Microsoft_Azure.svg.png"
    },
    {
      id: 'prometheus',
      name: "Prometheus",
      category: t('integrations.categories.monitoring'),
      description: t('integrations.prometheus'),
      logo: "https://cdn.simpleicons.org/prometheus/E6522C"
    },
    {
      id: 'kafka',
      name: "Kafka",
      category: t('integrations.categories.messaging'),
      description: t('integrations.kafka'),
      logo: "https://cdn.simpleicons.org/apachekafka/231F20"
    },
    {
      id: 'postgresql',
      name: "PostgreSQL",
      category: t('integrations.categories.database'),
      description: t('integrations.postgres'),
      logo: "https://cdn.simpleicons.org/postgresql/4169E1"
    },
    {
      id: 'keda',
      name: "KEDA",
      category: t('integrations.categories.autoscaling'),
      description: t('integrations.keda'),
      logo: "https://landscape.cncf.io/logos/keda.svg"
    },
    {
      id: 'cert-manager',
      name: "Cert Manager",
      category: t('integrations.categories.certificates'),
      description: t('integrations.certManager'),
      logo: "https://raw.githubusercontent.com/cert-manager/cert-manager/master/logo/logo.svg"
    },
    {
      id: 'opa-gatekeeper',
      name: "OPA Gatekeeper",
      category: t('integrations.categories.policy'),
      description: t('integrations.opa'),
      logo: "https://landscape.cncf.io/logos/open-policy-agent-opa.svg"
    }
  ];

  return (
    <section id="integrations" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('integrations.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('integrations.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {integrations.map((integration) => (
            <Card
              key={integration.id}
              className="p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-card border-border/50 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-xl bg-white dark:bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform p-2">
                  <img 
                    src={integration.logo} 
                    alt={`${integration.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{integration.name}</h3>
                
                <Badge variant="secondary" className="mb-3">
                  {integration.category}
                </Badge>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {integration.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
