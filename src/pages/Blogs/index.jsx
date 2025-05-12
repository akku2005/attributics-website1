// src/pages/blogs/index.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAllBlogPosts, formatDate } from '../../utils/blogUtils';

export default function BlogIndex({ posts }) {
  const [filter, setFilter] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  
  // Get all unique tags
  const allTags = [...new Set(posts.flatMap(post => post.tags))];
  
  // Filter posts based on search and tag selection
  const filteredPosts = posts.filter(post => {
    const matchesSearch = filter === '' || 
      post.title.toLowerCase().includes(filter.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(filter.toLowerCase());
    
    const matchesTag = selectedTag === '' || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
          >
            Our Blog
          </motion.h1>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            The latest insights, tips, and tutorials on web development and design.
          </p>
        </div>

        {/* Filter and search */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-64 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <div className="w-full md:w-auto flex flex-wrap gap-2">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                selectedTag === '' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedTag('')}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  selectedTag === tag 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Blog list */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white overflow-hidden shadow-lg rounded-lg"
              >
                <Link href={`/blogs/${post.slug}`}>
                  <div className="cursor-pointer h-full flex flex-col">
                    <div className="h-48 w-full relative">
                      <img
                        src={post.coverImage || '/images/blog/default-cover.jpg'}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-600">
                          <span>{formatDate(post.date)}</span>
                          <span className="mx-1">•</span>
                          <span>{post.readingTime} min read</span>
                        </p>
                        <h3 className="mt-2 text-xl font-semibold text-gray-900">
                          {post.title}
                        </h3>
                        <p className="mt-3 text-base text-gray-500 line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={post.author.avatar || '/images/authors/default-avatar.jpg'}
                            alt={post.author.name}
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            {post.author.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-500 text-lg">
                No blog posts found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllBlogPosts();
  return {
    props: {
      posts
    }
  };
}