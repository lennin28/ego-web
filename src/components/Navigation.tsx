import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-12 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/95">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">EGO</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.features')}
            </a>
            <a href="#integrations" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.integrations')}
            </a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.pricing')}
            </a>
            <a href="/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.docs')}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Button variant="ghost" size="sm">
              {t('nav.signIn')}
            </Button>
            <Button size="sm" className="shadow-glow">
              {t('nav.getStarted')}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
