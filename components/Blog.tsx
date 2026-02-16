
import React from 'react';
import { BlogPost } from '../types';

const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'The Tap Revolution: Why NFC is Replacing the Business Card',
      category: 'NFC Technology Insights',
      excerpt: 'Static paper is dead. Explore how dynamic NFC nodes are changing the way we transmit identity...',
      date: 'Oct 12, 2024'
    },
    {
      id: '2',
      title: 'Logic Over Layout: The Engineering Approach to Web Design',
      category: 'Web Development Strategies',
      excerpt: 'Modern web development has become bloated. We strip the noise to focus on performance and conversion...',
      date: 'Oct 14, 2024'
    },
    {
      id: '3',
      title: 'Securing Your Digital Identity in a Mobile-First World',
      category: 'Business Identity Branding',
      excerpt: 'Your online identity is your most valuable asset. Learn how to protect and project it effectively...',
      date: 'Oct 16, 2024'
    }
  ];

  const categories = ['NFC Technology Insights', 'Web Development Strategies', 'Business Identity Branding'];

  return (
    <section id="blog" className="py-24 bg-[#1A1A1B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-[#F8F8F8]">Node Insights</h2>
            <p className="text-gray-400">Thought leadership in physical and digital engineering.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <span key={cat} className="px-3 py-1 bg-white/5 border border-white/5 text-[10px] uppercase font-black tracking-widest text-gray-500 hover:text-[#E5B1B1] hover:border-[#E5B1B1] cursor-pointer transition-all">
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map(post => (
            <article key={post.id} className="group cursor-pointer">
              <div className="p-8 bg-[#0F0F0F] border border-white/5 h-full flex flex-col hover:bg-black transition-all shadow-xl">
                <div className="text-[#E5B1B1] text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                  {post.category}
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#F8F8F8] group-hover:text-[#E5B1B1] transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-8 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-600">
                  <span>{post.date}</span>
                  <span className="text-[#E5B1B1] group-hover:translate-x-2 transition-transform">Read Node &rarr;</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
