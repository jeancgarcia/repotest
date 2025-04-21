import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";

const services = [
  {
    title: "Smart Property Search",
    description: "Advanced search algorithms that understand your preferences and lifestyle needs to find your ideal property.",
    icon: "🔍",
    features: [
      "Personalized property recommendations",
      "Real-time market data",
      "Virtual property tours",
      "Neighborhood insights"
    ]
  },
  {
    title: "Investment Analysis",
    description: "Comprehensive tools and data to help you make informed investment decisions in the Dominican real estate market.",
    icon: "📊",
    features: [
      "ROI calculator",
      "Market trend analysis",
      "Property value estimator",
      "Investment risk assessment"
    ]
  },
  {
    title: "Expert Guidance",
    description: "Connect with professional real estate agents who understand both local and international buyer needs.",
    icon: "🤝",
    features: [
      "Verified local agents",
      "Multilingual support",
      "Legal consultation",
      "Property inspection assistance"
    ]
  }
];

const userTypes = [
  {
    title: "For Buyers",
    description: "Find your dream property in the Dominican Republic with our comprehensive search tools and expert guidance.",
    features: [
      "Personalized property matching",
      "Virtual tours and detailed photos",
      "Local market insights",
      "Step-by-step buying guidance"
    ]
  },
  {
    title: "For Investors",
    description: "Make informed investment decisions with our market analysis tools and expert investment advice.",
    features: [
      "Investment opportunity alerts",
      "ROI analysis tools",
      "Market trend reports",
      "Portfolio management"
    ]
  },
  {
    title: "For Agents",
    description: "Join our network of professional agents and connect with qualified international buyers and investors.",
    features: [
      "International client matching",
      "Marketing tools and support",
      "Transaction management",
      "Professional development resources"
    ]
  }
];

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16 mt-20">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Your Gateway to Dominican Real Estate
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Innovative solutions for property buyers, investors, and real estate professionals
        </p>
      </section>

      {/* Core Services */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* User Paths */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-center mb-12">Tailored Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {userTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <h3 className="text-2xl font-semibold mb-4">{type.title}</h3>
                <p className="text-muted-foreground mb-6">{type.description}</p>
                <ul className="space-y-3 mb-6">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Learn More</Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-center mb-12">Why Choose UpHoming?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card p-8 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Local Expertise</h3>
            <p className="text-muted-foreground">
              Our deep understanding of the Dominican real estate market, combined 
              with years of experience serving international clients, ensures you 
              receive the most accurate and relevant guidance for your property journey.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card p-8 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Technology-Driven</h3>
            <p className="text-muted-foreground">
              Our innovative platform combines advanced technology with human expertise 
              to provide you with the most efficient and effective property search and 
              investment experience possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-card p-12 rounded-lg">
        <h2 className="text-3xl font-semibold mb-6">Start Your Property Journey Today</h2>
        <p className="text-muted-foreground mb-8">
          Whether you're buying, investing, or growing your real estate business,
          we're here to help you succeed
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button size="lg">Start Your Search</Button>
          <Button size="lg" variant="outline">Schedule a Call</Button>
        </div>
      </section>
      </div>
    </>
  );
}
