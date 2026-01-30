import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const stories = [
  { id: "add", name: "Add Story", image: null, isAdd: true },
  { id: "1", name: "Sarah", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop", hasNew: true },
  { id: "2", name: "Marcus", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop", hasNew: true },
  { id: "3", name: "Elena", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop", hasNew: true },
  { id: "4", name: "James", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop", hasNew: false },
  { id: "5", name: "Aisha", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop", hasNew: true },
  { id: "6", name: "David", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop", hasNew: false },
];

export const StoryBar = () => {
  return (
    <div className="px-4 py-4 overflow-x-auto hide-scrollbar">
      <div className="flex gap-4">
        {stories.map((story) => (
          <button
            key={story.id}
            className="flex flex-col items-center gap-1.5 min-w-[72px] group"
          >
            <div
              className={cn(
                "relative w-16 h-16 rounded-full p-0.5",
                story.hasNew && "bg-gradient-primary",
                !story.hasNew && !story.isAdd && "bg-muted"
              )}
            >
              <div className="w-full h-full rounded-full bg-background p-0.5">
                {story.isAdd ? (
                  <div className="w-full h-full rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Plus className="w-6 h-6 text-primary" />
                  </div>
                ) : (
                  <img
                    src={story.image!}
                    alt={story.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                )}
              </div>
            </div>
            <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors truncate max-w-[72px]">
              {story.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
