import { Tabs } from "@/components/ui/tabs";

interface TabDef {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface SettingsTabsProps {
  value: string;
  onValueChange: (v: string) => void;
}

const tabDefs: TabDef[] = [
  {
    value: "genel",
    label: "Genel Sistem Ayarları",
    icon: <span className="material-symbols-outlined text-lg">business</span>,
  },
  {
    value: "planlama",
    label: "Planlama Varsayılanları",
    icon: (
      <span className="material-symbols-outlined text-lg">
        settings_suggest
      </span>
    ),
  },
  {
    value: "tercihler",
    label: "Kullanıcı Tercihleri",
    icon: <span className="material-symbols-outlined text-lg">settings</span>,
  },
];

export function SettingsTabs({ value, onValueChange }: SettingsTabsProps) {
  return <Tabs value={value} onValueChange={onValueChange} tabs={tabDefs} />;
}
