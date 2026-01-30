import { useState } from "react";
import { cn } from "@/lib/utils";
import { Wrench, Laptop, Shirt, Hammer, Palette, MoreHorizontal, Sparkles } from "lucide-react";

const categories = [
  { id: "all", label: "All", icon: Sparkles },
  { id: "services", label: "Services", icon: Wrench },
  { id: "digital", label: "Digital", icon: Laptop },
  { id: "fashion", label: "Fashion", icon: Shirt },
  { id: "construction", label: "Construction", icon: Hammer },
  { id: "art", label: "Art & Design", icon: Palette },
  { id: "other", label: "Other", icon: MoreHorizontal },
];

interface CategoryPillsProps {
  selected: string;
  onSelect: (category: string) => void;
}

export const CategoryPills = ({ selected, onSelect }: CategoryPillsProps) => {
  return (
    <div className="overflow-x-auto hide-scrollbar px-4 py-3">
      <div className="flex gap-2">
        {categories.map((category) => {
          const isSelected = selected === category.id;
          return (
            <button
              key={category.id}
              onClick={() => onSelect(category.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200",
                isSelected 
                  ? "bg-gradient-primary text-primary-foreground shadow-glow" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              )}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
