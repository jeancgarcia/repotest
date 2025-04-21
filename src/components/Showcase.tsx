
import { Button } from "@/components/ui/button";
import { FadeIn } from './ui/Motion';

const Showcase = () => {
  return (
    <section id="showcase" className="section-padding">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-primary">Discover</span> paradise.
            </h2>
            <p className="text-lg text-muted-foreground md:max-w-lg mt-4 md:mt-0">
              Award-winning agency specializing in connecting international buyers with their dream Dominican Republic properties.
            </p>
          </div>
        </FadeIn>

        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8">Amazing destinations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=75&fm=webp",
                title: "Samaná Peninsula",
                category: "Beach Paradise"
              },
              {
                image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=75&fm=webp",
                title: "Las Terrenas",
                category: "Seaside Living"
              },
              {
                image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=75&fm=webp",
                title: "Punta Cana",
                category: "Resort Lifestyle"
              },
              {
                image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=75&fm=webp",
                title: "Santo Domingo",
                category: "Historic Capital"
              },
              {
                image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=75&fm=webp",
                title: "Jarabacoa",
                category: "Mountain Retreat"
              },
              {
                image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=75&fm=webp",
                title: "Cabarete",
                category: "Surfing Paradise"
              }
            ].map((item, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.1}>
                <div className="image-container rounded-md overflow-hidden group cursor-pointer h-64 relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    loading="lazy"
                    width={800}
                    height={533}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 text-white opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium mb-1 opacity-80">{item.category}</p>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
