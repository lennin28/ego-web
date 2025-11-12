import { Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border/40 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
                <Zap className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">EGO</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">{t('footer.product.title')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">{t('footer.product.features')}</a></li>
              <li><a href="#integrations" className="hover:text-foreground transition-colors">{t('footer.product.integrations')}</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">{t('footer.product.pricing')}</a></li>
              <li><a href="/docs" className="hover:text-foreground transition-colors">{t('footer.product.documentation')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">{t('footer.resources.title')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.resources.blog')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.resources.guides')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.resources.help')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.resources.community')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">{t('footer.company.title')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.company.about')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.company.careers')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.company.contact')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.company.partners')}</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-foreground transition-colors">{t('footer.terms')}</a>
            <a href="#" className="hover:text-foreground transition-colors">{t('footer.security')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
