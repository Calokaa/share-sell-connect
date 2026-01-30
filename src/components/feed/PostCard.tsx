import { useState } from "react";
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PostCardProps {
  post: {
    id: string;
    user: {
      name: string;
      username: string;
      avatar: string;
      verified: boolean;
    };
    image: string;
    caption: string;
    likes: number;
    comments: number;
    location?: string;
    timestamp: string;
    isLiked?: boolean;
    isSaved?: boolean;
  };
}

export const PostCard = ({ post }: PostCardProps) => {
  const [isLiked, setIsLiked] = useState(post.isLiked || false);
  const [isSaved, setIsSaved] = useState(post.isSaved || false);
  const [likes, setLikes] = useState(post.likes);
  const [showFullCaption, setShowFullCaption] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleDoubleClick = () => {
    if (!isLiked) {
      setIsLiked(true);
      setLikes(prev => prev + 1);
    }
  };

  return (
    <article className="border-b border-border animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-primary p-0.5">
            <img
              src={post.user.avatar}
              alt={post.user.name}
              className="w-full h-full rounded-full object-cover bg-background"
            />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-sm">{post.user.username}</span>
              {post.user.verified && (
                <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-[10px] text-primary-foreground">✓</span>
                </div>
              )}
            </div>
            {post.location && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3" />
                {post.location}
              </div>
            )}
          </div>
        </div>
        <Button variant="icon" size="iconSm">
          <MoreHorizontal className="w-5 h-5" />
        </Button>
      </div>

      {/* Image */}
      <div 
        className="relative aspect-square bg-muted cursor-pointer"
        onDoubleClick={handleDoubleClick}
      >
        <img
          src={post.image}
          alt="Post"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <Button 
              variant="icon" 
              size="icon"
              onClick={handleLike}
              className={cn(isLiked && "text-destructive")}
            >
              <Heart 
                className={cn(
                  "w-6 h-6 transition-all",
                  isLiked && "fill-current animate-heart-pop"
                )} 
              />
            </Button>
            <Button variant="icon" size="icon">
              <MessageCircle className="w-6 h-6" />
            </Button>
            <Button variant="icon" size="icon">
              <Share2 className="w-6 h-6" />
            </Button>
          </div>
          <Button 
            variant="icon" 
            size="icon"
            onClick={() => setIsSaved(!isSaved)}
          >
            <Bookmark 
              className={cn(
                "w-6 h-6 transition-all",
                isSaved && "fill-current"
              )} 
            />
          </Button>
        </div>

        {/* Likes */}
        <p className="font-semibold text-sm mb-2">
          {likes.toLocaleString()} likes
        </p>

        {/* Caption */}
        <div className="text-sm">
          <span className="font-semibold mr-2">{post.user.username}</span>
          <span className={cn(!showFullCaption && "line-clamp-2")}>
            {post.caption}
          </span>
          {post.caption.length > 100 && !showFullCaption && (
            <button 
              className="text-muted-foreground ml-1"
              onClick={() => setShowFullCaption(true)}
            >
              more
            </button>
          )}
        </div>

        {/* Comments preview */}
        {post.comments > 0 && (
          <button className="text-sm text-muted-foreground mt-2">
            View all {post.comments} comments
          </button>
        )}

        {/* Timestamp */}
        <p className="text-xs text-muted-foreground mt-2 uppercase">
          {post.timestamp}
        </p>
      </div>
    </article>
  );
};
