
import { FadeIn, StaggeredFade } from './ui/Motion';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import { Link } from 'react-router-dom';

const Articles = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold">Blog</h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <Link to="/blog" className="flex items-center text-sm font-medium hover:text-primary transition-colors">
              View all <ArrowRight size={16} className="ml-2" />
            </Link>
          </FadeIn>
        </div>

        <StaggeredFade className="grid grid-cols-1 md:grid-cols-3 gap-8" baseDelay={0.1}>
          {blogPosts.map((post) => (
            <Link 
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group no-underline"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="image-container h-48">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium px-3 py-1 bg-muted rounded-full">{post.category}</span>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{post.title}</h3>
                  {post.excerpt && (
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </StaggeredFade>
      </div>
    </section>
  );
};

export default Articles;
