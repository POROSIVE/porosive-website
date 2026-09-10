"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { createClient } from "@/utils/lib/supabase/client";

type Theme = "system" | "light" | "dark";

type Settings = {
  appearance: {
    theme: Theme;
    accent: string;
    fontSize: "small" | "medium" | "large";
    reducedMotion: boolean;
  };
  accessibility: {
    highContrast: boolean;
    screenReader: boolean;
  };
};

const defaultSettings: Settings = {
  appearance: {
    theme: "system",
    accent: "blue",
    fontSize: "medium",
    reducedMotion: false,
  },
  accessibility: {
    highContrast: false,
    screenReader: false,
  },
};

type SettingsContextValue = {
  settings: Settings;
  loaded: boolean;
  refreshSettings: () => Promise<void>;
};

const SettingsContext =
  createContext<SettingsContextValue | null>(null);

export function SettingsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [loaded, setLoaded] = useState(false);

  const supabase = createClient();

  async function refreshSettings() {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError) {
      console.error("Auth error:", userError);
      setSettings(defaultSettings);
      setLoaded(true);
      return;
    }

    if (!user) {
      setSettings(defaultSettings);
      setLoaded(true);
      return;
    }

    const { data, error } = await supabase
      .from("user_settings")
      .select("settings")
      .eq("user_id", user.id)
      .maybeSingle();

    if (error) {
      console.error("Settings error:", error);
      setSettings(defaultSettings);
      setLoaded(true);
      return;
    }

    const saved = (data?.settings ?? {}) as Partial<Settings>;

    setSettings({
      appearance: {
        ...defaultSettings.appearance,
        ...saved.appearance,
      },
      accessibility: {
        ...defaultSettings.accessibility,
        ...saved.accessibility,
      },
    });

    setLoaded(true);
  }

  useEffect(() => {
    refreshSettings();
  }, []);

  useEffect(() => {
    if (!settings) return;

    const root = document.documentElement;

    root.dataset.theme = settings.appearance.theme;
    root.dataset.reducedMotion = String(
      settings.appearance.reducedMotion
    );
    root.dataset.highContrast = String(
      settings.accessibility.highContrast
    );

    if (settings.appearance.fontSize === "small") {
      root.style.fontSize = "14px";
    } else if (settings.appearance.fontSize === "large") {
      root.style.fontSize = "18px";
    } else {
      root.style.fontSize = "16px";
    }
  }, [settings]);

  if (!loaded || !settings) {
    return (
      <div className="min-h-screen bg-background text-foreground" />
    );
  }

  return (
    <SettingsContext.Provider
      value={{
        settings,
        loaded,
        refreshSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error(
      "useSettings must be used inside SettingsProvider"
    );
  }

  return context;
}
