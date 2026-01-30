import { Home, Search, PlusSquare, ShoppingBag, MessageCircle, User, Settings, TrendingUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Search, label: "Search", path: "/search" },
  { icon: ShoppingBag, label: "Market", path: "/market" },
  { icon: MessageCircle, label: "Messages", path: "/messages" },
  { icon: TrendingUp, label: "Trending", path: "/trending" },
  { icon: User, label: "Profile", path: "/profile" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export const DesktopSidebar = () => {
  const location = useLocation();

  return (
    <aside className="hidden md:flex fixed left-0 top-14 bottom-0 w-64 lg:w-72 border-r border-border bg-background flex-col p-4">
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                isActive 
                  ? "bg-primary/10 text-primary font-medium" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon 
                className={cn(
                  "w-5 h-5 transition-transform duration-200",
                  isActive && "scale-110",
                  "group-hover:scale-105"
                )} 
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className="text-sm">{item.label}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
              )}
            </Link>
          );
        })}
      </nav>
      
      <div className="pt-4 border-t border-border">
        <Link to="/create">
          <Button variant="gradient" size="lg" className="w-full">
            <PlusSquare className="w-5 h-5" />
            Create Post
          </Button>
        </Link>
      </div>
    </aside>
  );
};
