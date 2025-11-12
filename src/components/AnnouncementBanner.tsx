import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const AnnouncementBanner = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-primary/90 via-primary to-primary/90 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-3">
        <a 
          href="#case-study" 
          className="flex items-center justify-center gap-2 text-sm text-primary-foreground hover:opacity-90 transition-opacity group"
        >
          <span className="font-medium">
            {t('announcement.banner')}
          </span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
