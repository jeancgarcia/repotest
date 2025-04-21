import { CommunitySection } from "./ui/community-section";
import { toast } from "@/components/ui/use-toast";

const sampleImages = [
  {
    url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
    alt: "Beach gathering"
  },
  {
    url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
    alt: "Travel friends"
  },
  {
    url: "https://images.unsplash.com/photo-1530789253388-582c481c54b0",
    alt: "Community event"
  },
  {
    url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
    alt: "Group activity"
  },
  {
    url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
    alt: "Friends traveling"
  },
  {
    url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846",
    alt: "Beach party"
  },
  {
    url: "https://images.unsplash.com/photo-1526485856375-9110812fbf35",
    alt: "Travel group"
  }
];

export default function CommunityDemo() {
  const handleJoinClick = () => {
    toast({
      title: "Join Community",
      description: "Thanks for your interest! This is a demo action.",
    });
  };

  return (
    <CommunitySection
      images={sampleImages}
      onJoinClick={handleJoinClick}
    />
  );
}
