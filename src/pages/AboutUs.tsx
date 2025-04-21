import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { cn } from "@/lib/utils";

const milestones = [
  {
    year: 2020,
    title: "UpHoming Founded",
    description: "Launched with a vision to transform real estate experiences in the Dominican Republic."
  },
  {
    year: 2021,
    title: "Platform Launch",
    description: "Released our innovative property search platform, connecting international buyers with local opportunities."
  },
  {
    year: 2022,
    title: "Strategic Partnerships",
    description: "Established key partnerships with leading real estate agencies and property developers across the country."
  },
  {
    year: 2023,
    title: "Market Leadership",
    description: "Became the #1 platform for foreign investors and retirees seeking properties in the Dominican Republic."
  },
  {
    year: 2024,
    title: "International Expansion",
    description: "Extended our services to cater to investors from multiple countries, with support in multiple languages."
  }
];

const teamMembers = [
  {
    name: "Maria Rodriguez",
    role: "Chief Executive Officer",
    description: "Leading UpHoming's vision to transform real estate experiences."
  },
  {
    name: "David Thompson",
    role: "Head of International Relations",
    description: "Bridging global investors with local opportunities."
  },
  {
    name: "Ana Gómez",
    role: "Chief Technology Officer",
    description: "Driving innovation in our digital platforms."
  },
  {
    name: "John Martinez",
    role: "Director of Property Services",
    description: "Ensuring exceptional service quality for all clients."
  }
];

const values = [
  {
    title: "Trust & Transparency",
    description: "We believe in complete honesty and clarity in every transaction and interaction.",
    icon: "🤝"
  },
  {
    title: "Innovation",
    description: "Continuously improving our platform and services to provide the best real estate experience.",
    icon: "💡"
  },
  {
    title: "Global Perspective",
    description: "Understanding and serving the unique needs of international property buyers.",
    icon: "🌎"
  },
  {
    title: "Local Expertise",
    description: "Deep knowledge of the Dominican Republic real estate market and regulations.",
    icon: "🏠"
  }
];

const carouselImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&h=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=600&h=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&h=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=600&h=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&h=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&h=600&auto=format&fit=crop"
];

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16 mt-20">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Transforming Dreams into Addresses
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your trusted partner in finding the perfect property in the Dominican Republic
          </p>
          <div className="relative w-full overflow-hidden mb-16">
            <div 
              className="flex w-full overflow-hidden group [--gap:1rem] [gap:var(--gap)] [--duration:30s]"
              style={{ willChange: 'transform' }}
            >
              <div 
                className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee"
                style={{ 
                  willChange: 'transform',
                  backfaceVisibility: 'hidden'
                }}
              >
                {carouselImages.map((image, i) => (
                  <div key={i} className="relative w-60 aspect-square group hover:scale-105 transition-transform duration-300">
                    <img 
                      src={image} 
                      alt="Property" 
                      className="object-cover w-full h-full rounded-lg shadow-md"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent to-black/20 group-hover:to-black/40 transition-all duration-300" />
                  </div>
                ))}
                {carouselImages.map((image, i) => (
                  <div key={`clone-${i}`} className="relative w-60 aspect-square group hover:scale-105 transition-transform duration-300">
                    <img 
                      src={image} 
                      alt="Property" 
                      className="object-cover w-full h-full rounded-lg shadow-md"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent to-black/20 group-hover:to-black/40 transition-all duration-300" />
                  </div>
                ))}
              </div>
              <div 
                aria-hidden="true"
                className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee"
                style={{ 
                  willChange: 'transform',
                  backfaceVisibility: 'hidden'
                }}
              >
                {carouselImages.map((image, i) => (
                  <div key={`clone2-${i}`} className="relative w-60 aspect-square group hover:scale-105 transition-transform duration-300">
                    <img 
                      src={image} 
                      alt="Property" 
                      className="object-cover w-full h-full rounded-lg shadow-md"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent to-black/20 group-hover:to-black/40 transition-all duration-300" />
                  </div>
                ))}
                {carouselImages.map((image, i) => (
                  <div key={`clone3-${i}`} className="relative w-60 aspect-square group hover:scale-105 transition-transform duration-300">
                    <img 
                      src={image} 
                      alt="Property" 
                      className="object-cover w-full h-full rounded-lg shadow-md"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent to-black/20 group-hover:to-black/40 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-0 md:w-1/3 bg-gradient-to-r from-background hidden md:block" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-0 md:w-1/3 bg-gradient-to-l from-background hidden md:block" />
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-card p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-muted-foreground">
              To be the leading platform connecting international investors and retirees 
              with their perfect properties in the Dominican Republic, making the journey 
              of property ownership seamless and rewarding.
            </p>
          </div>
          <div className="bg-card p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              To provide innovative, transparent, and reliable real estate solutions 
              that empower our clients to make informed decisions while offering 
              exceptional service and local expertise.
            </p>
          </div>
        </section>

        {/* Company Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="grid grid-cols-[1fr_auto_1fr] gap-4 mb-8 items-center"
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="text-right text-2xl font-bold pr-4">{milestone.year}</div>
                    <div className="w-px h-full bg-border self-stretch" />
                    <div className="bg-card p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-card p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                    <div className="w-px h-full bg-border self-stretch" />
                    <div className="text-left text-2xl font-bold pl-4">{milestone.year}</div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Find Your Dream Property?</h2>
          <p className="text-muted-foreground mb-8">
            Let's start your journey to finding the perfect property in the Dominican Republic
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button size="lg">Browse Properties</Button>
            <Button size="lg" variant="outline">Contact Us</Button>
          </div>
        </section>
      </div>
    </>
  );
}
