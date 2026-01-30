import { MapPin, Star, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MarketCardProps {
  listing: {
    id: string;
    title: string;
    price: number;
    image: string;
    seller: {
      name: string;
      avatar: string;
      verified: boolean;
      rating: number;
    };
    location: string;
    category: string;
    isService: boolean;
  };
}

export const MarketCard = ({ listing }: MarketCardProps) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card card-hover border border-border">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className={cn(
            "px-3 py-1 rounded-full text-xs font-medium",
            listing.isService 
              ? "bg-primary text-primary-foreground" 
              : "bg-background/90 text-foreground backdrop-blur-sm"
          )}>
            {listing.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {listing.title}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <img
            src={listing.seller.avatar}
            alt={listing.seller.name}
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            {listing.seller.name}
            {listing.seller.verified && (
              <BadgeCheck className="w-4 h-4 text-primary" />
            )}
          </span>
          <div className="flex items-center gap-1 ml-auto">
            <Star className="w-3.5 h-3.5 fill-primary text-primary" />
            <span className="text-sm font-medium">{listing.seller.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
          <MapPin className="w-3.5 h-3.5" />
          {listing.location}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold font-display text-gradient">
              ${listing.price}
            </span>
            {listing.isService && (
              <span className="text-sm text-muted-foreground"> / project</span>
            )}
          </div>
          <Button size="sm" variant="gradient">
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};
