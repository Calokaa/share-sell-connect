import { AppLayout } from "@/components/layout/AppLayout";
import { mockUser, mockPosts } from "@/data/mockData";
import { Settings, Grid3X3, Bookmark, ShoppingBag, MapPin, Link as LinkIcon, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Tab = "posts" | "saved" | "listings";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<Tab>("posts");

  return (
    <AppLayout>
      <div className="animate-fade-in">
        {/* Header */}
        <div className="px-4 pt-4 pb-2 flex items-center justify-between">
          <h1 className="font-display font-bold text-xl">@{mockUser.username}</h1>
          <Button variant="icon" size="icon">
            <Settings className="w-5 h-5" />
          </Button>
        </div>

        {/* Profile Info */}
        <div className="px-4 py-4">
          <div className="flex items-start gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-primary p-0.5">
                <img
                  src={mockUser.avatar}
                  alt={mockUser.name}
                  className="w-full h-full rounded-full object-cover bg-background"
                />
              </div>
              {mockUser.verified && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center border-2 border-background">
                  <BadgeCheck className="w-3.5 h-3.5 text-primary-foreground" />
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="flex-1 grid grid-cols-3 gap-4 pt-2">
              <div className="text-center">
                <p className="font-bold text-lg font-display">{mockUser.posts}</p>
                <p className="text-xs text-muted-foreground">Posts</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-lg font-display">
                  {(mockUser.followers / 1000).toFixed(1)}K
                </p>
                <p className="text-xs text-muted-foreground">Followers</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-lg font-display">{mockUser.following}</p>
                <p className="text-xs text-muted-foreground">Following</p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="mt-4">
            <h2 className="font-semibold">{mockUser.name}</h2>
            <p className="text-sm text-muted-foreground whitespace-pre-line mt-1">
              {mockUser.bio}
            </p>
            <div className="flex flex-wrap gap-3 mt-2 text-sm">
              <span className="flex items-center gap-1 text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" />
                {mockUser.location}
              </span>
              <a href={`https://${mockUser.website}`} className="flex items-center gap-1 text-primary hover:underline">
                <LinkIcon className="w-3.5 h-3.5" />
                {mockUser.website}
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-4">
            <Button variant="gradient" className="flex-1">
              Edit Profile
            </Button>
            <Button variant="outline" className="flex-1">
              Share Profile
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-t border-border">
          <button
            onClick={() => setActiveTab("posts")}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-3 border-b-2 transition-colors",
              activeTab === "posts" 
                ? "border-foreground text-foreground" 
                : "border-transparent text-muted-foreground"
            )}
          >
            <Grid3X3 className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-3 border-b-2 transition-colors",
              activeTab === "saved" 
                ? "border-foreground text-foreground" 
                : "border-transparent text-muted-foreground"
            )}
          >
            <Bookmark className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveTab("listings")}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-3 border-b-2 transition-colors",
              activeTab === "listings" 
                ? "border-foreground text-foreground" 
                : "border-transparent text-muted-foreground"
            )}
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-0.5">
          {mockPosts.map((post, index) => (
            <button 
              key={post.id} 
              className="aspect-square relative group animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={post.image}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-background font-semibold text-sm">
                  ❤️ {(post.likes / 1000).toFixed(1)}K
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;
