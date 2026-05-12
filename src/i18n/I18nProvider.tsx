import { useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { translations, type Locale } from "./translations";
import { I18nContext, type I18nContextValue } from "./context";

const STORAGE_KEY = "portfolio:locale";

function interpolate(template: string, vars?: Record<string, string>) {
  if (!vars) return template;
  return template.replaceAll(/\{\{(\w+)\}\}/g, (_match, key: string) => vars[key] ?? "");
}

function getInitialLocale(): Locale {
  // Check URL parameter first
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get("lang");
  if (langParam === "pt-BR" || langParam === "en") {
    return langParam;
  }

  // Fallback to stored preference or navigator language
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "pt-BR" || stored === "en") return stored;
  const nav = navigator.language?.toLowerCase() ?? "";
  return nav.startsWith("pt") ? "pt-BR" : "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => getInitialLocale());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => setLocaleState(next), []);

  const t = useCallback<I18nContextValue["t"]>(
    (key, vars) => {
      const entry = translations[key];
      const raw = entry?.[locale] ?? entry?.["pt-BR"] ?? String(key);
      return interpolate(raw, vars);
    },
    [locale],
  );

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

