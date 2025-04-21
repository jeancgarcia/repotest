import React from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

import { blogPosts } from "@/data/blogPosts";

// SEO metadata will be handled by your meta/head management system
const META = {
  title: "Real Estate Blog | Dominican Republic Property Insights | UpHoming",
  description: "Expert insights on Dominican Republic real estate: buying tips, investment guides, and market updates. Stay informed with UpHoming's trusted property resources.",
  slug: "real-estate-blog"
};

const CATEGORIES = ["All", "Buying", "Selling", "Investment", "Legal", "Market Updates"];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Dominican Republic Real Estate Insights
        </h1>
        <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Stay informed with expert advice, market insights, and comprehensive guides about Dominican Republic real estate. Your trusted source for property knowledge.
        </p>
        
        {/* Search and Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Input
            type="search"
            placeholder="Search articles..."
            className="max-w-sm"
          />
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 grid md:grid-cols-[1fr_300px] gap-8 mb-16">
        {/* Blog Posts Grid */}
        <section className="space-y-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="p-6">
              <article className="grid md:grid-cols-[250px_1fr] gap-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div>
                  <Badge className="mb-2">{post.category}</Badge>
                  <h2 className="text-2xl font-bold mb-2 hover:text-primary">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="text-sm text-muted-foreground">
                    By {post.author} • {post.date}
                  </div>
                </div>
              </article>
            </Card>
          ))}
        </section>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Newsletter Signup */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Get the latest real estate insights delivered to your inbox.
            </p>
            <Input
              type="email"
              placeholder="Your email address"
              className="mb-4"
            />
            <Button className="w-full">Subscribe</Button>
          </Card>

          {/* Categories */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <div className="space-y-2">
              {CATEGORIES.slice(1).map((category) => (
                <div key={category} className="flex justify-between items-center">
                  <Link to={`/blog/category/${category.toLowerCase()}`} className="hover:text-primary">
                    {category}
                  </Link>
                  <Badge variant="secondary">12</Badge>
                </div>
              ))}
            </div>
          </Card>
        </aside>
      </div>

      {/* Internal Linking CTA Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Dream Property?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore our carefully curated selection of properties or connect with our expert agents to start your real estate journey.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/properties">Explore Properties</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/agents">Meet Our Agents</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/investment-guide">Investment Guide</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
