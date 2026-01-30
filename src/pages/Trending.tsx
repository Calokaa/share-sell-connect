import { AppLayout } from "@/components/layout/AppLayout";
import { PostCard } from "@/components/feed/PostCard";
import { MarketCard } from "@/components/market/MarketCard";
import { mockPosts, mockListings } from "@/data/mockData";
import { Flame, TrendingUp, Crown, Star } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Tab = "posts" | "sellers";

const Trending = () => {
  const [activeTab, setActiveTab] = useState<Tab>("posts");

  const topSellers = mockListings.slice(0, 4);
  const trendingPosts = [...mockPosts].sort((a, b) => b.likes - a.likes);

  return (
    <AppLayout>
      <div className="animate-fade-in">
        {/* Header */}
        <div className="px-4 pt-4 pb-2">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="w-6 h-6 text-primary" />
            <h1 className="font-display font-bold text-2xl">Trending</h1>
          </div>
          <p className="text-sm text-muted-foreground">
            What's hot on Calokaa right now
          </p>
        </div>

        {/* Tabs */}
        <div className="px-4 py-3">
          <div className="flex bg-muted rounded-xl p-1">
            <button
              onClick={() => setActiveTab("posts")}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all",
                activeTab === "posts" 
                  ? "bg-background shadow-sm text-foreground" 
                  : "text-muted-foreground"
              )}
            >
              <TrendingUp className="w-4 h-4" />
              Trending Posts
            </button>
            <button
              onClick={() => setActiveTab("sellers")}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all",
                activeTab === "sellers" 
                  ? "bg-background shadow-sm text-foreground" 
                  : "text-muted-foreground"
              )}
            >
              <Crown className="w-4 h-4" />
              Top Sellers
            </button>
          </div>
        </div>

        {activeTab === "posts" ? (
          <div className="divide-y divide-border">
            {trendingPosts.map((post, index) => (
              <div 
                key={post.id} 
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {index < 3 && (
                  <div className="absolute top-6 left-6 z-10 flex items-center gap-1 px-2 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    <Star className="w-3 h-3 fill-current" />
                    #{index + 1}
                  </div>
                )}
                <PostCard post={post} />
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4 space-y-4">
            {topSellers.map((listing, index) => (
              <div 
                key={listing.id}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {index < 3 && (
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    <Crown className="w-3 h-3" />
                    #{index + 1} Seller
                  </div>
                )}
                <MarketCard listing={listing} />
              </div>
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Trending;
