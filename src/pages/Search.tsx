import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { mockPosts, mockListings } from "@/data/mockData";
import { Search as SearchIcon, TrendingUp, Hash, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const trendingTags = [
  { tag: "photography", posts: "2.1M" },
  { tag: "travel", posts: "1.8M" },
  { tag: "art", posts: "950K" },
  { tag: "fashion", posts: "780K" },
  { tag: "tech", posts: "620K" },
  { tag: "food", posts: "540K" },
];

const suggestedUsers = [
  {
    name: "Sarah Chen",
    username: "sarahchen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    followers: "12.5K",
  },
  {
    name: "Marcus Johnson",
    username: "marcus.creates",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    followers: "8.2K",
  },
  {
    name: "Elena Rivera",
    username: "elena.art",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    followers: "15.1K",
  },
];

const Search = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const allImages = [...mockPosts.map(p => p.image), ...mockListings.map(l => l.image)];

  return (
    <AppLayout>
      <div className="animate-fade-in">
        {/* Search Bar */}
        <div className="sticky top-14 z-40 bg-background px-4 py-3 border-b border-border">
          <div className={cn(
            "relative transition-all duration-200",
            isFocused && "scale-[1.02]"
          )}>
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search people, posts, products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full h-12 pl-12 pr-4 rounded-xl bg-muted border-0 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {query === "" ? (
          <>
            {/* Trending Section */}
            <div className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h2 className="font-display font-bold text-lg">Trending</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {trendingTags.map((item, index) => (
                  <button
                    key={item.tag}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 transition-colors animate-slide-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <Hash className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{item.tag}</span>
                    <span className="text-xs text-muted-foreground">{item.posts}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Suggested Users */}
            <div className="p-4 border-t border-border">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-primary" />
                <h2 className="font-display font-bold text-lg">Suggested</h2>
              </div>
              <div className="space-y-3">
                {suggestedUsers.map((user, index) => (
                  <div
                    key={user.username}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{user.name}</p>
                      <p className="text-sm text-muted-foreground">@{user.username}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{user.followers}</p>
                      <p className="text-xs text-muted-foreground">followers</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Explore Grid */}
            <div className="p-4 border-t border-border">
              <h2 className="font-display font-bold text-lg mb-4">Explore</h2>
              <div className="grid grid-cols-3 gap-0.5">
                {allImages.map((image, index) => (
                  <button 
                    key={index}
                    className="aspect-square relative group animate-scale-in"
                    style={{ animationDelay: `${index * 0.03}s` }}
                  >
                    <img
                      src={image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="p-4">
            <p className="text-muted-foreground text-center py-8">
              Search results for "{query}"
            </p>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Search;
