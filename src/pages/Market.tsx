import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { CategoryPills } from "@/components/market/CategoryPills";
import { MarketCard } from "@/components/market/MarketCard";
import { mockListings } from "@/data/mockData";
import { Search, SlidersHorizontal, TrendingUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Market = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredListings = mockListings.filter((listing) => {
    const matchesCategory = selectedCategory === "all" || 
      listing.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <AppLayout>
      <div className="animate-fade-in">
        {/* Header Section */}
        <div className="px-4 pt-4 pb-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="font-display font-bold text-2xl">Market</h1>
              <p className="text-sm text-muted-foreground">
                Buy & sell globally
              </p>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </Button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products & services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-12 pr-4 rounded-xl bg-muted border-0 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="px-4 py-3 flex gap-3 overflow-x-auto hide-scrollbar">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-light border border-primary/20 min-w-fit">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Top Sellers</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-muted min-w-fit">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">5-Star Rated</span>
          </div>
        </div>

        {/* Categories */}
        <CategoryPills 
          selected={selectedCategory} 
          onSelect={setSelectedCategory} 
        />

        {/* Listings Grid */}
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredListings.map((listing, index) => (
            <div 
              key={listing.id}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="animate-slide-up"
            >
              <MarketCard listing={listing} />
            </div>
          ))}
        </div>

        {filteredListings.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No listings found</p>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Market;
