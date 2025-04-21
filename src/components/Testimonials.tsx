
import { TestimonialsSection } from './ui/testimonials-with-marquee';
import { FadeIn } from './ui/Motion';

const testimonials = [
  {
    author: {
      name: "Michael Thompson",
      handle: "@michael_t",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Working with this team was the best decision we made. They guided us through every step of purchasing our beachfront property in Punta Cana. Their knowledge of local laws saved us countless headaches.",
    href: "#"
  },
  {
    author: {
      name: "Sarah Johnson",
      handle: "@sarahj",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "After months of research online, I was still confused about Dominican Republic property laws. Their subscription service provided clarity and confidence. Within 3 months, I found and purchased my dream vacation home.",
    href: "#"
  },
  {
    author: {
      name: "Jean-Pierre Dubois",
      handle: "@jpdubois",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    text: "The virtual tours saved me so much time. I was able to narrow down my choices before even visiting the Dominican Republic. Their service is worth every penny for serious international investors."
  }
];

const Testimonials = () => {
  return (
    <FadeIn direction="up">
      <TestimonialsSection
        title="What our clients say"
        description="Hear from international investors who found their perfect Dominican property with our guidance"
        testimonials={testimonials}
        className="section-padding"
      />
    </FadeIn>
  );
};

export default Testimonials;
