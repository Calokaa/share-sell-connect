import { AppLayout } from "@/components/layout/AppLayout";
import { mockMessages } from "@/data/mockData";
import { Search, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Messages = () => {
  return (
    <AppLayout>
      <div className="animate-fade-in">
        {/* Header */}
        <div className="px-4 pt-4 pb-2">
          <div className="flex items-center justify-between mb-4">
            <h1 className="font-display font-bold text-2xl">Messages</h1>
            <Button variant="icon" size="icon">
              <Edit className="w-5 h-5" />
            </Button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full h-11 pl-12 pr-4 rounded-xl bg-muted border-0 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Online Now */}
        <div className="px-4 py-4">
          <p className="text-sm font-medium text-muted-foreground mb-3">Online Now</p>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
            {mockMessages
              .filter((m) => m.user.online)
              .map((message) => (
                <button key={message.id} className="flex flex-col items-center gap-1.5 min-w-[64px]">
                  <div className="relative">
                    <img
                      src={message.user.avatar}
                      alt={message.user.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-background" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground truncate max-w-[64px]">
                    {message.user.name.split(" ")[0]}
                  </span>
                </button>
              ))}
          </div>
        </div>

        {/* Message List */}
        <div className="divide-y divide-border">
          {mockMessages.map((message, index) => (
            <button
              key={message.id}
              className={cn(
                "w-full flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors text-left animate-slide-up",
              )}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative">
                <img
                  src={message.user.avatar}
                  alt={message.user.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                {message.user.online && (
                  <div className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-background" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className={cn(
                    "font-semibold text-sm",
                    message.unread > 0 && "text-foreground"
                  )}>
                    {message.user.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {message.timestamp}
                  </span>
                </div>
                <p className={cn(
                  "text-sm truncate",
                  message.unread > 0 ? "text-foreground font-medium" : "text-muted-foreground"
                )}>
                  {message.lastMessage}
                </p>
              </div>
              {message.unread > 0 && (
                <div className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {message.unread}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Messages;
