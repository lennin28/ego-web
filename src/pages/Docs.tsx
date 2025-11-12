import { useState } from "react";
import Navigation from "@/components/Navigation";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Book, Search, ChevronRight, Home, FileText, Zap, Settings, Code, Cloud } from "lucide-react";
import { useTranslation } from "react-i18next";

const Docs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useTranslation();

  const docSections = [
    {
      id: 'getting-started',
      title: t('docs.sections.gettingStarted.title'),
      icon: Home,
      items: [
        { title: t('docs.sections.gettingStarted.introduction'), href: "#intro" },
        { title: t('docs.sections.gettingStarted.quickStart'), href: "#quickstart" },
        { title: t('docs.sections.gettingStarted.installation'), href: "#installation" },
      ]
    },
    {
      id: 'features',
      title: t('docs.sections.features.title'),
      icon: Book,
      items: [
        { title: t('docs.sections.features.workflows'), href: "#workflows" },
        { title: t('docs.sections.features.gitops'), href: "#gitops" },
        { title: t('docs.sections.features.monitoring'), href: "#monitoring" },
      ]
    },
    {
      id: 'integrations',
      title: t('docs.sections.integrations.title'),
      icon: Zap,
      items: [
        { title: t('docs.sections.integrations.github'), href: "#github" },
        { title: t('docs.sections.integrations.kubernetes'), href: "#kubernetes" },
        { title: t('docs.sections.integrations.aws'), href: "#aws" },
      ]
    },
    {
      id: 'api',
      title: t('docs.sections.api.title'),
      icon: Code,
      items: [
        { title: t('docs.sections.api.authentication'), href: "#auth-api" },
        { title: t('docs.sections.api.endpoints'), href: "#endpoints" },
        { title: t('docs.sections.api.webhooks'), href: "#webhooks" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBanner />
      <Navigation />
      
      {/* Header */}
      <div className="border-b border-border/40 bg-card/50 backdrop-blur-sm pt-32 pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('docs.title')}</h1>
            <p className="text-xl text-muted-foreground mb-6">
              {t('docs.subtitle')}
            </p>
            
            {/* Search */}
            <div className="relative max-w-2xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder={t('docs.search')}
                className="pl-10 h-12 bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <ScrollArea className="h-[calc(100vh-300px)] pr-4">
              <nav className="space-y-6">
                {docSections.map((section) => (
                  <div key={section.id}>
                    <div className="flex items-center gap-2 mb-3">
                      <section.icon className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-sm uppercase tracking-wide text-foreground">
                        {section.title}
                      </h3>
                    </div>
                    <ul className="space-y-2 ml-7 border-l border-border/50 pl-4">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-1"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </ScrollArea>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9">
            <div className="max-w-4xl">
              {/* Introduction Section */}
              <section id="intro" className="mb-16">
                <h2 className="text-3xl font-bold mb-4">{t('docs.content.introduction.title')}</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {t('docs.content.introduction.welcome')}
                </p>
                <p className="text-muted-foreground text-lg mb-6">
                  {t('docs.content.introduction.description')}
                </p>
                
                <h3 className="text-xl font-semibold mb-4">{t('docs.content.introduction.whatYouLearn')}</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {(t('docs.content.introduction.points', { returnObjects: true }) as string[]).map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Quick Start */}
              <section id="quickstart" className="mb-16">
                <h2 className="text-3xl font-bold mb-4">{t('docs.content.quickStart.title')}</h2>
                <p className="text-muted-foreground mb-6">
                  {t('docs.content.quickStart.description')}
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t('docs.content.quickStart.step1Title')}</h3>
                      <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm">
                        npm install -g @ego/cli
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t('docs.content.quickStart.step2Title')}</h3>
                      <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm">
                        ego init my-portal
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t('docs.content.quickStart.step3Title')}</h3>
                      <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm">
                        cd my-portal && ego dev
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Architecture */}
              <section id="architecture" className="mb-16">
                <h2 className="text-3xl font-bold mb-4">{t('docs.content.architecture.title')}</h2>
                <p className="text-muted-foreground mb-6">
                  {t('docs.content.architecture.description')}
                </p>
              </section>

              {/* CTA */}
              <div className="mt-12 p-8 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <h3 className="text-2xl font-bold mb-2">{t('docs.cta.title')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('docs.cta.description')}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button>
                    <FileText className="w-4 h-4 mr-2" />
                    {t('docs.cta.viewGuides')}
                  </Button>
                  <Button variant="outline">
                    {t('docs.cta.joinCommunity')}
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Docs;
