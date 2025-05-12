// src/components/BlogCard.jsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import { formatDate } from '../utils/blogUtils';

export default function BlogCard({ post, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white overflow-hidden shadow-lg rounded-lg h-full"
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
  );
}