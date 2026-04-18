import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { supportedLanguages } from '@/i18n';

interface LanguageSelectorProps {
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('app_language', langCode);
  };

  const current =
    supportedLanguages.find(
      (l) => i18n.language === l.code || i18n.language.startsWith(l.code + '-')
    )?.code ?? 'en';

  return (
    <div className={cn('flex items-center justify-between gap-4', className)}>
      <div className="min-w-0 flex-1">
        <Label className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          {t('settings.general.language')}
        </Label>
        <p className="text-caption text-muted-foreground mt-1">
          {t('settings.general.languageDesc')}
        </p>
      </div>
      <Select value={current} onValueChange={changeLanguage}>
        <SelectTrigger className="w-[180px] shrink-0">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {supportedLanguages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              <span className="flex items-center gap-2">
                <span>{lang.nativeName}</span>
                <span className="text-xs text-muted-foreground">{lang.name}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
