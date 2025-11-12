import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Zap, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navigation = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: t('nav.features') },
    { href: "#integrations", label: t('nav.integrations') },
    { href: "#pricing", label: t('nav.pricing') },
    { href: "/docs", label: t('nav.docs') },
  ];

  const handleLinkClick = () => {
    setOpen(false);
  };

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <Button variant="ghost" size="sm">
              {t('nav.signIn')}
            </Button>
            <Button size="sm" className="shadow-glow">
              {t('nav.getStarted')}
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary">
                      <Zap className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-xl font-bold">EGO</span>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-4 mt-8">
                  {/* Navigation Links */}
                  <div className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={handleLinkClick}
                        className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-md hover:bg-accent"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-border my-4" />

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3">
                    <Button variant="ghost" className="w-full justify-start" onClick={handleLinkClick}>
                      {t('nav.signIn')}
                    </Button>
                    <Button className="w-full shadow-glow" onClick={handleLinkClick}>
                      {t('nav.getStarted')}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
