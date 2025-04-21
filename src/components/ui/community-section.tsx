import React from "react";
import { Button } from "./button";

const communityCellStyle = {
  clipPath: "polygon(50% 0%, 98% 29%, 100% 32%, 100% 100%, 0 100%, 0 32%, 2% 29%)",
  transform: "scale(0.75)"
};

interface CommunityImage {
  url: string;
  alt: string;
}

interface CommunitySectionProps {
  title?: string;
  subtitle?: string;
  images: CommunityImage[];
  onJoinClick?: () => void;
}

export function CommunitySection({
  title = "Join Our Community",
  subtitle = "Connect with fellow travelers and share your Dominican Republic experiences",
  images = [],
  onJoinClick,
}: CommunitySectionProps) {
  const communityCells = React.useMemo(() => {
    return [...Array(15)].map((_, index) => (
      <div key={index} className="aspect-square relative overflow-hidden group rounded-xl" style={communityCellStyle}>
        <img
          loading="lazy"
          decoding="async"
          src={images[index]?.url ? `${images[index].url}?w=300` : "placeholder.svg"}
          srcSet={images[index]?.url ? `${images[index].url}?w=150 150w, ${images[index].url}?w=300 300w` : undefined}
          sizes="(max-width: 580px) 100vw, 580px"
          alt={images[index]?.alt || "Community member"}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    ));
  }, [images]);
  return (
    <section className="py-16 px-4 container mx-auto max-w-5xl">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold tracking-tight mb-4">{title}</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-[2px] sm:gap-2 md:gap-3 mb-12 max-w-[580px] mx-auto px-1 sm:px-2">
        {communityCells}
        <div 
          className="aspect-square bg-lime-500 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-white hover:bg-lime-600 transition-colors cursor-pointer rounded-xl"
          style={communityCellStyle}
        >
          +
        </div>
      </div>

      <div className="text-center">
        <Button
          onClick={onJoinClick}
          size="lg"
          className="text-lg px-8 py-6"
        >
          Join Now
        </Button>
      </div>
    </section>
  );
}
