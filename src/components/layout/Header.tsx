import { Bell, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
      <div className="flex items-center justify-between h-14 px-4 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
            <span className="text-primary-foreground font-display font-bold text-lg">C</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            Calo<span className="text-primary">kaa</span>
          </span>
        </Link>
        
        <div className="flex items-center gap-1">
          <Button variant="icon" size="icon" className="relative">
            <Heart className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
              3
            </span>
          </Button>
          <Button variant="icon" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
              5
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};
