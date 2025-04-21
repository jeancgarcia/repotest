import React, { useState, useRef, useEffect, useCallback } from "react";
import { Compass, Building, Umbrella, Sun } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils"; // Import cn utility

const featuresData = [
  {
    icon: Compass,
    title: "Local Expertise",
    description: "Our experienced local guides ensure you get authentic insights and the best Dominican experience.",
    colSpanDesktop: "lg:col-span-2",
  },
  {
    icon: Building,
    title: "Premium Properties",
    description: "Access to exclusive luxury properties and accommodations throughout the Dominican Republic.",
    colSpanDesktop: "",
  },
  {
    icon: Umbrella,
    title: "Full Support",
    description: "24/7 concierge service to assist with any needs during your stay in the Dominican Republic.",
    colSpanDesktop: "",
  },
  {
    icon: Sun,
    title: "Lifestyle Benefits",
    description: "Exclusive access to premium amenities, events, and experiences throughout your stay.",
    colSpanDesktop: "lg:col-span-2",
  },
];

function Feature() {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Ensure cardRefs array has the correct size
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, featuresData.length);
  }, []);

  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current || !isMobile) return;

    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const containerCenter = scrollLeft + container.offsetWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    cardRefs.current.forEach((card, index) => {
      if (card) {
        const cardLeft = card.offsetLeft;
        const cardWidth = card.offsetWidth;
        const cardCenter = cardLeft + cardWidth / 2;
        const distance = Math.abs(containerCenter - cardCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      }
    });

    setActiveIndex(closestIndex);
  }, [isMobile]);

  // Debounce scroll handler
  const debouncedScrollHandler = useCallback(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        handleScroll();
      }, 100); // Adjust debounce delay as needed
    };
  }, [handleScroll])();


  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container && isMobile) {
      container.addEventListener("scroll", debouncedScrollHandler, { passive: true });
      // Initial check in case the component mounts already scrolled
      handleScroll();
      return () => {
        container.removeEventListener("scroll", debouncedScrollHandler);
      };
    }
  }, [isMobile, debouncedScrollHandler, handleScroll]);

  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current || !cardRefs.current[index]) return;

    const container = scrollContainerRef.current;
    const card = cardRefs.current[index];
    if (!card) return;

    const cardLeft = card.offsetLeft;
    const cardWidth = card.offsetWidth;
    const containerWidth = container.offsetWidth;

    // Calculate the scroll position to center the card
    const scrollTarget = cardLeft - (containerWidth / 2) + (cardWidth / 2);

    container.scrollTo({
      left: scrollTarget,
      behavior: "smooth",
    });
    // setActiveIndex(index); // Update immediately for better UX, scroll handler will confirm
  };

  return (
    <div className="w-full section-padding">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Dominican Republic</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Your Expert Guide
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                Discover why Dominican Republic is the ultimate destination for your property investment journey
              </p>
            </div>
          </div>

          {/* Features Grid/Carousel */}
          <div
            ref={scrollContainerRef}
            className={cn(
              "gap-4 md:gap-8", // Common gap
              isMobile
                ? "flex overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory no-scrollbar" // Mobile: flex scroll + hide scrollbar class
                : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" // Desktop: grid
            )}
            // Removed the inline style causing the TS error
          >
            {featuresData.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = isMobile && index === activeIndex;
              return (
                <div
                  key={feature.title}
                  ref={el => cardRefs.current[index] = el}
                  className={cn(
                    "bg-muted rounded-md p-8 flex justify-between flex-col", // Base styles
                    "aspect-square lg:aspect-auto", // Aspect ratio
                    isMobile ? "min-w-[300px] snap-center" : feature.colSpanDesktop, // Mobile width & snap / Desktop span
                    "border-2 transition-colors duration-300 ease-in-out", // Border base for transition
                    isActive ? "border-blue-500" : "border-transparent" // Active border style
                  )}
                >
                  <Icon className="w-8 h-8 stroke-1" />
                  <div className="flex flex-col mt-4"> {/* Added mt-4 for spacing */}
                    <h3 className="text-xl tracking-tight">{feature.title}</h3>
                    <p className="text-muted-foreground max-w-xs text-base mt-1"> {/* Added mt-1 */}
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Dots (Mobile Only) */}
          {isMobile && (
            <div className="flex justify-center mt-4" role="tablist" aria-label="Features Navigation">
              {featuresData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToCard(index)}
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-controls={`feature-card-${index}`} // Assuming cards could have IDs like this
                  aria-label={`Go to feature ${index + 1}: ${featuresData[index].title}`}
                  className={cn(
                    "rounded-full mx-1 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                    index === activeIndex
                      ? "bg-blue-500 w-3 h-3" // Active dot style
                      : "bg-gray-300 w-2 h-2 hover:bg-gray-400" // Inactive dot style
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { Feature };
