// src/utils/blogUtils.js
import fs from 'fs';
import path from 'path';

const blogDirectory = path.join(process.cwd(), 'data/blog-posts');

/**
 * Get all blog posts metadata
 */
export function getAllBlogPosts() {
  // Get all file names in the blog directory
  const fileNames = fs.readdirSync(blogDirectory);
  
  // Get the data from each file
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.json'))
    .map(fileName => {
      // Read the file content
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // Parse the JSON content
      const blogData = JSON.parse(fileContents);
      
      // Return the blog data
      return blogData;
    })
    // Sort posts by date
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  
  return allPostsData;
}

/**
 * Get all blog post slugs
 */
export function getAllBlogSlugs() {
  const fileNames = fs.readdirSync(blogDirectory);
  
  return fileNames
    .filter(fileName => fileName.endsWith('.json'))
    .map(fileName => {
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const blogData = JSON.parse(fileContents);
      
      return {
        params: {
          slug: blogData.slug
        }
      };
    });
}

/**
 * Get blog post data by slug
 */
export function getBlogPostBySlug(slug) {
  const fileNames = fs.readdirSync(blogDirectory);
  
  // Find the file that matches the given slug
  for (const fileName of fileNames) {
    if (!fileName.endsWith('.json')) continue;
    
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const blogData = JSON.parse(fileContents);
    
    if (blogData.slug === slug) {
      return blogData;
    }
  }
  
  return null;
}

/**
 * Format date for display
 */
export function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

/**
 * Save a blog post
 */
export function saveBlogPost(blogData) {
  const fileName = `${blogData.slug}.json`;
  const fullPath = path.join(blogDirectory, fileName);
  
  // Convert the blog data to a JSON string
  const jsonData = JSON.stringify(blogData, null, 2);
  
  // Write the JSON string to a file
  fs.writeFileSync(fullPath, jsonData, 'utf8');
  
  return true;
}