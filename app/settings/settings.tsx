"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { createClient } from "@/utils/lib/supabase/client";
import { useSettings } from "@/components/settings_provider";

type Profile = {
  username: string | null;
};

type Settings = {
  appearance: {
    theme: "system" | "light" | "dark";
    accent: string;
    fontSize: "small" | "medium" | "large";
    reducedMotion: boolean;
  };
  accessibility: {
    highContrast: boolean;
    screenReader: boolean;
  };
  account: {
    emailNotifications: boolean;
    marketingEmails: boolean;
  };
  publicProfile: {
    isVisible: boolean;
    showDisplayName: boolean;
    showAvatar: boolean;
  };
};

type Props = {
  email: string;
  profile: Profile | null;
  initialSettings: Partial<Settings> | null;
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
  account: {
    emailNotifications: true,
    marketingEmails: false,
  },
  publicProfile: {
    isVisible: true,
    showDisplayName: true,
    showAvatar: true,
  },
};

function mergeSettings(
  initialSettings: Partial<Settings> | null
): Settings {
  return {
    appearance: {
      ...defaultSettings.appearance,
      ...initialSettings?.appearance,
    },
    accessibility: {
      ...defaultSettings.accessibility,
      ...initialSettings?.accessibility,
    },
    account: {
      ...defaultSettings.account,
      ...initialSettings?.account,
    },
    publicProfile: {
      ...defaultSettings.publicProfile,
      ...initialSettings?.publicProfile,
    },
  };
}

export default function SettingsUI({
  email,
  profile,
  initialSettings,
}: Props) {
  const supabase = createClient();
  const [settings, setSettings] = useState<Settings>(() =>
    mergeSettings(initialSettings)
  );
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const { refreshSettings } = useSettings();

  function updateSetting< Section extends keyof Settings, Key extends keyof Settings[Section]>
    (
    section: Section,
    key: Key,
    value: Settings[Section][Key]
    ) 
    {
    setSettings((current) => ({
      ...current,
      [section]: {
        ...current[section],
        [key]: value,
      },
    }));

    setMessage("");
  }

  async function saveSection(section: keyof Settings) {
    setSaving(true);
    setMessage("");

    const sectionSettings = settings[section];

    for (const [settingName, settingValue] of Object.entries(
      sectionSettings
    )) {
      const { error } = await supabase.rpc("set_user_setting", {
        section_name: section,
        setting_name: settingName,
        setting_value: settingValue,
      });

      if (error) {
        setMessage(error.message);
        setSaving(false);
        return;
      }
    }
    
    await refreshSettings();
    setMessage("Settings saved.");
    setSaving(false);
  }

  return (
    <main className="p-3.5 w-full portrait:max-w-[100vh] min-h-lvh flex flex-col items-center gap-0.5 overflow-x-hidden">
      <div className="mt-25 px-4 w-[75%] portrait:max-w-[100vh] flex justify-between overflow-hidden bg-(--subBG) border border-solid border-zinc-600 rounded-lg shadow-lg">
        <h2 className="text-2xl leading-15 tracking-tight text-foreground">
          Settings
        </h2>
        {message && (
          <p className="my-auto text-lg leading-15 tracking-tight foreground">
            {message}
          </p>
        )}
      </div>

      <div className="mt-5 w-[75%] portrait:max-w-[100vh] flex flex-col gap-3">
        <section className="p-6 w-full flex flex-col gap-5 overflow-hidden bg-(--subBG) border border-solid border-zinc-600 rounded-lg shadow-lg">
          <div>
            <h2 className="text-xl font-bold foreground">
              Account
            </h2>

            <p className="mt-1 text-sm text-subFG">
              {profile?.username
                ? `@${profile.username}`
                : "No username set"}
            </p>

            <p className="text-sm text-subFG">{email}</p>
          </div>

          <label className="flex items-center justify-between gap-4 foreground">
            <span>Email notifications</span>
            <input
              type="checkbox"
              checked={settings.account.emailNotifications}
              onChange={(event) =>
                updateSetting(
                  "account",
                  "emailNotifications",
                  event.target.checked
                )
              }
              className="h-5 w-5 accent-blue-600"
            />
          </label>

          <label className="flex items-center justify-between gap-4 foreground">
            <span>Marketing emails</span>
            <input
              type="checkbox"
              checked={settings.account.marketingEmails}
              onChange={(event) =>
                updateSetting(
                  "account",
                  "marketingEmails",
                  event.target.checked
                )
              }
              className="h-5 w-5 accent-blue-600"
            />
          </label>

          <SaveButton
            saving={saving}
            onClick={() => saveSection("account")}
          />
        </section>

        <section className="p-6 w-full flex flex-col gap-5 overflow-hidden bg-(--subBG) border border-solid border-zinc-600 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold foreground">
            Appearance
          </h2>

          <label className="flex flex-col gap-2 foreground">
            <span>Theme</span>
            <select
              value={settings.appearance.theme}
              onChange={(event) =>
                updateSetting(
                  "appearance",
                  "theme",
                  event.target.value as Settings["appearance"]["theme"]
                )
              }
              className="bg-(--background) rounded-md border border-zinc-500 px-3 py-2"
            >
              <option value="system">System</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>

          <label className="flex flex-col gap-2 foreground">
            <span>Font size</span>
            <select
              value={settings.appearance.fontSize}
              onChange={(event) =>
                updateSetting(
                  "appearance",
                  "fontSize",
                  event.target.value as Settings["appearance"]["fontSize"]
                )
              }
              className="rounded-md border border-zinc-500 bg-(--background) px-3 py-2"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </label>

          <label className="flex items-center justify-between gap-4 foreground">
            <span>Reduce motion</span>
            <input
              type="checkbox"
              checked={settings.appearance.reducedMotion}
              onChange={(event) =>
                updateSetting(
                  "appearance",
                  "reducedMotion",
                  event.target.checked
                )
              }
              className="h-5 w-5 accent-blue-600"
            />
          </label>

          <SaveButton
            saving={saving}
            onClick={() => saveSection("appearance")}
          />
        </section>

        <section className="p-6 w-full flex flex-col gap-5 overflow-hidden bg-(--subBG) border border-solid border-zinc-600 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold foreground">
            Accessibility
          </h2>

          <label className="flex items-center justify-between gap-4 foreground">
            <span>High contrast</span>
            <input
              type="checkbox"
              checked={settings.accessibility.highContrast}
              onChange={(event) =>
                updateSetting(
                  "accessibility",
                  "highContrast",
                  event.target.checked
                )
              }
              className="h-5 w-5 accent-blue-600"
            />
          </label>

          <label className="flex items-center justify-between gap-4 foreground">
            <span>Screen reader optimizations</span>
            <input
              type="checkbox"
              checked={settings.accessibility.screenReader}
              onChange={(event) =>
                updateSetting(
                  "accessibility",
                  "screenReader",
                  event.target.checked
                )
              }
              className="h-5 w-5 accent-blue-600"
            />
          </label>

          <SaveButton
            saving={saving}
            onClick={() => saveSection("accessibility")}
          />
        </section>

        <section className="p-6 w-full flex flex-col gap-5 overflow-hidden bg-(--subBG) border border-solid border-zinc-600 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold foreground">
            Public profile
          </h2>

          <label className="flex items-center justify-between gap-4 foreground">
            <span>Make profile visible</span>
            <input
              type="checkbox"
              checked={settings.publicProfile.isVisible}
              onChange={(event) =>
                updateSetting(
                  "publicProfile",
                  "isVisible",
                  event.target.checked
                )
              }
              className="h-5 w-5 accent-blue-600"
            />
          </label>

          <label className="flex items-center justify-between gap-4 foreground">
            <span>Show display name</span>
            <input
              type="checkbox"
              checked={settings.publicProfile.showDisplayName}
              onChange={(event) =>
                updateSetting(
                  "publicProfile",
                  "showDisplayName",
                  event.target.checked
                )
              }
              className="h-5 w-5 accent-blue-600"
            />
          </label>

          <label className="flex items-center justify-between gap-4 foreground">
            <span>Show avatar</span>
            <input
              type="checkbox"
              checked={settings.publicProfile.showAvatar}
              onChange={(event) =>
                updateSetting(
                  "publicProfile",
                  "showAvatar",
                  event.target.checked
                )
              }
              className="h-5 w-5 accent-blue-600"
            />
          </label>

          <SaveButton
            saving={saving}
            onClick={() => saveSection("publicProfile")}
          />
        </section>
      </div>
    </main>
  );
}

function SaveButton({
  saving,
  onClick,
}: {
  saving: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={saving}
      className="mt-2 self-start rounded-md border border-zinc-700 bg-(--background) px-4 py-2 text-sm font-semibold foreground transition hover:bg-(--subBG) disabled:cursor-not-allowed disabled:opacity-50"
    >
      {saving ? "Saving..." : "Save changes"}
    </button>
  );
}
