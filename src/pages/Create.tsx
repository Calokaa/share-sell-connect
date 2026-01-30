import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Image, Video, MapPin, Hash, AtSign, X, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PostType = "post" | "listing";

const Create = () => {
  const [postType, setPostType] = useState<PostType>("post");
  const [caption, setCaption] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const sampleImages = [
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop",
  ];

  return (
    <AppLayout>
      <div className="animate-fade-in min-h-[calc(100vh-8rem)]">
        {/* Header */}
        <div className="px-4 pt-4 pb-2 flex items-center justify-between">
          <h1 className="font-display font-bold text-2xl">Create</h1>
          <Button variant="gradient" disabled={!selectedImage}>
            Share
          </Button>
        </div>

        {/* Post Type Toggle */}
        <div className="px-4 py-3">
          <div className="flex bg-muted rounded-xl p-1">
            <button
              onClick={() => setPostType("post")}
              className={cn(
                "flex-1 py-2.5 rounded-lg text-sm font-medium transition-all",
                postType === "post" 
                  ? "bg-background shadow-sm text-foreground" 
                  : "text-muted-foreground"
              )}
            >
              Post
            </button>
            <button
              onClick={() => setPostType("listing")}
              className={cn(
                "flex-1 py-2.5 rounded-lg text-sm font-medium transition-all",
                postType === "listing" 
                  ? "bg-background shadow-sm text-foreground" 
                  : "text-muted-foreground"
              )}
            >
              Sell Something
            </button>
          </div>
        </div>

        {/* Media Upload */}
        <div className="px-4 py-2">
          {selectedImage ? (
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-foreground/80 text-background flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="aspect-square rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-4 bg-muted/30">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Camera className="w-8 h-8 text-primary" />
              </div>
              <div className="text-center">
                <p className="font-medium">Add photos or videos</p>
                <p className="text-sm text-muted-foreground">
                  Share your moments with the world
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Image className="w-4 h-4" />
                  Photo
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Video className="w-4 h-4" />
                  Video
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Quick Select from Gallery */}
        <div className="px-4 py-3">
          <p className="text-sm text-muted-foreground mb-2">Recent</p>
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {sampleImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(img)}
                className={cn(
                  "flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all",
                  selectedImage === img ? "border-primary" : "border-transparent"
                )}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Caption */}
        <div className="px-4 py-2">
          <textarea
            placeholder={postType === "post" 
              ? "Write a caption..." 
              : "Describe what you're selling..."
            }
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full h-32 p-4 rounded-xl bg-muted border-0 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
          />
        </div>

        {/* Additional Options */}
        <div className="px-4 py-2 space-y-2">
          <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
            <MapPin className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm">Add location</span>
          </button>
          <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
            <Hash className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm">Add hashtags</span>
          </button>
          <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
            <AtSign className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm">Tag people</span>
          </button>
        </div>

        {/* Price Input for Listings */}
        {postType === "listing" && (
          <div className="px-4 py-2">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-orange-light border border-primary/20">
              <span className="text-2xl font-bold text-primary">$</span>
              <input
                type="number"
                placeholder="0.00"
                className="flex-1 bg-transparent text-2xl font-bold placeholder:text-primary/40 focus:outline-none"
              />
              <span className="text-sm text-muted-foreground">USD</span>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Create;
