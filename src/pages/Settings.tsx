import { AppLayout } from "@/components/layout/AppLayout";
import { 
  User, Bell, Shield, Globe, CreditCard, HelpCircle, 
  LogOut, ChevronRight, Moon, Smartphone 
} from "lucide-react";
import { cn } from "@/lib/utils";

const settingsGroups = [
  {
    title: "Account",
    items: [
      { icon: User, label: "Edit Profile", description: "Update your info" },
      { icon: Bell, label: "Notifications", description: "Manage alerts" },
      { icon: Shield, label: "Privacy & Security", description: "Control your data" },
    ],
  },
  {
    title: "Preferences",
    items: [
      { icon: Globe, label: "Language", description: "English (US)" },
      { icon: Moon, label: "Appearance", description: "Light mode" },
      { icon: Smartphone, label: "App Settings", description: "Customize experience" },
    ],
  },
  {
    title: "Payments",
    items: [
      { icon: CreditCard, label: "Payment Methods", description: "Add or remove cards" },
    ],
  },
  {
    title: "Support",
    items: [
      { icon: HelpCircle, label: "Help Center", description: "Get assistance" },
    ],
  },
];

const Settings = () => {
  return (
    <AppLayout>
      <div className="animate-fade-in">
        {/* Header */}
        <div className="px-4 pt-4 pb-2">
          <h1 className="font-display font-bold text-2xl">Settings</h1>
        </div>

        {/* Settings Groups */}
        <div className="px-4 py-2 space-y-6">
          {settingsGroups.map((group, groupIndex) => (
            <div 
              key={group.title}
              className="animate-slide-up"
              style={{ animationDelay: `${groupIndex * 0.1}s` }}
            >
              <h2 className="text-sm font-medium text-muted-foreground mb-2 px-1">
                {group.title}
              </h2>
              <div className="bg-card rounded-2xl overflow-hidden border border-border divide-y divide-border">
                {group.items.map((item) => (
                  <button
                    key={item.label}
                    className="w-full flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors text-left"
                  >
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Logout */}
          <button className="w-full flex items-center gap-4 p-4 rounded-2xl bg-destructive/10 hover:bg-destructive/20 transition-colors text-left animate-slide-up">
            <div className="w-10 h-10 rounded-xl bg-destructive/20 flex items-center justify-center">
              <LogOut className="w-5 h-5 text-destructive" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-sm text-destructive">Log Out</p>
              <p className="text-xs text-destructive/70">Sign out of your account</p>
            </div>
          </button>
        </div>

        {/* Version */}
        <div className="text-center py-8 text-xs text-muted-foreground">
          <p>Calokaa v1.0.0</p>
          <p className="mt-1">Made with ❤️ for creators worldwide</p>
        </div>
      </div>
    </AppLayout>
  );
};

export default Settings;
