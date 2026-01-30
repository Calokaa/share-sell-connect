import { AppLayout } from "@/components/layout/AppLayout";
import { StoryBar } from "@/components/feed/StoryBar";
import { PostCard } from "@/components/feed/PostCard";
import { mockPosts } from "@/data/mockData";

const Index = () => {
  return (
    <AppLayout>
      <div className="animate-fade-in">
        {/* Stories */}
        <StoryBar />
        
        {/* Divider */}
        <div className="h-px bg-border" />
        
        {/* Feed */}
        <div className="divide-y divide-border">
          {mockPosts.map((post, index) => (
            <div 
              key={post.id}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="animate-slide-up"
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
