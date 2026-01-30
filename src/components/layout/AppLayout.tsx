import { ReactNode } from "react";
import { Header } from "./Header";
import { BottomNav } from "./BottomNav";
import { DesktopSidebar } from "./DesktopSidebar";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <DesktopSidebar />
      <main className="pt-14 pb-20 md:pb-0 md:pl-64 lg:pl-72">
        <div className="max-w-2xl mx-auto">
          {children}
        </div>
      </main>
      <BottomNav />
    </div>
  );
};
