import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { useParams, Navigate, Link } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <Badge className="mb-4">{post.category}</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {post.title}
        </h1>
        <div className="flex items-center text-muted-foreground mb-8">
          <span>By {post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.date}</span>
        </div>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />
      </section>

      {/* Article Content */}
      <article className="container mx-auto px-4 grid md:grid-cols-[1fr_300px] gap-8 mb-16">
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Sidebar */}
        <aside className="space-y-8">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">More Articles</h3>
            <div className="space-y-4">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 3)
                .map(relatedPost => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="block group no-underline"
                  >
                    <h4 className="font-medium group-hover:text-primary">{relatedPost.title}</h4>
                    <p className="text-sm text-muted-foreground">{relatedPost.date}</p>
                  </Link>
                ))}
            </div>
          </Card>
        </aside>
      </article>

      {/* CTA Section */}
      <section className="bg-muted py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Property Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore our properties or connect with our expert agents to find your perfect Dominican Republic home.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/properties">View Properties</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Contact an Agent</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
