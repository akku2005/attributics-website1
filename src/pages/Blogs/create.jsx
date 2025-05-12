// src/pages/blogs/create.jsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { saveBlogPost } from '../../utils/blogUtils';

export default function CreateBlogPost() {
  const router = useRouter();
  const [post, setPost] = useState({
    id: Date.now().toString(),
    title: '',
    slug: '',
    author: {
      name: '',
      avatar: ''
    },
    date: new Date().toISOString(),
    lastUpdated: new Date().toISOString(),
    excerpt: '',
    coverImage: '',
    tags: [],
    content: [
      {
        type: 'paragraph',
        text: ''
      }
    ],
    readingTime: 1,
    relatedPosts: []
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value
    });
  };
  
  const handleAuthorChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      author: {
        ...post.author,
        [name]: value
      }
    });
  };
  
  const handleTagsChange = (e) => {
    const tagsString = e.target.value;
    const tagsArray = tagsString.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
    setPost({
      ...post,
      tags: tagsArray
    });
  };
  
  const handleContentChange = (index, field, value) => {
    const newContent = [...post.content];
    newContent[index] = {
      ...newContent[index],
      [field]: value
    };
    
    setPost({
      ...post,
      content: newContent
    });
  };
  
  const handleAddContentBlock = (type) => {
    let newBlock;
    
    switch (type) {
      case 'paragraph':
        newBlock = { type: 'paragraph', text: '' };
        break;
      case 'heading':
        newBlock = { type: 'heading', level: 2, text: '' };
        break;
      case 'code':
        newBlock = { type: 'code', language: 'javascript', text: '' };
        break;
      case 'image':
        newBlock = { type: 'image', src: '', alt: '', caption: '' };
        break;
      case 'list':
        newBlock = { type: 'list', style: 'bullet', items: [''] };
        break;
      default:
        return;
    }
    
    setPost({
      ...post,
      content: [...post.content, newBlock]
    });
  };
  
  const handleRemoveContentBlock = (index) => {
    const newContent = [...post.content];
    newContent.splice(index, 1);
    
    setPost({
      ...post,
      content: newContent
    });
  };
  
  const handleListItemChange = (contentIndex, itemIndex, value) => {
    const newContent = [...post.content];
    const newItems = [...newContent[contentIndex].items];
    newItems[itemIndex] = value;
    
    newContent[contentIndex] = {
      ...newContent[contentIndex],
      items: newItems
    };
    
    setPost({
      ...post,
      content: newContent
    });
  };
  
  const handleAddListItem = (contentIndex) => {
    const newContent = [...post.content];
    newContent[contentIndex].items.push('');
    
    setPost({
      ...post,
      content: newContent
    });
  };
  
  const handleRemoveListItem = (contentIndex, itemIndex) => {
    const newContent = [...post.content];
    newContent[contentIndex].items.splice(itemIndex, 1);
    
    setPost({
      ...post,
      content: newContent
    });
  };
  
  const handleSlugGeneration = () => {
    if (!post.title) return;
    
    const slug = post.title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');
    
    setPost({
      ...post,
      slug
    });
  };
  
  const handleReadingTimeCalculation = () => {
    // Calculate reading time based on content length
    // Average reading speed: 200 words per minute
    const text = post.content
      .map(block => {
        if (block.type === 'paragraph' || block.type === 'heading') {
          return block.text;
        } else if (block.type === 'list') {
          return block.items.join(' ');
        }
        return '';
      })
      .join(' ');
    
    const words = text.split(/\s+/).filter(Boolean).length;
    const readingTime = Math.max(1, Math.ceil(words / 200));
    
    setPost({
      ...post,
      readingTime
    });
  };
  
  const handleSave = async () => {
    try {
      // Generate slug if empty
      if (!post.slug) {
        handleSlugGeneration();
      }
      
      // Calculate reading time
      handleReadingTimeCalculation();
      
      // Save the post
      await saveBlogPost(post);
      
      // Redirect to the blog post
      router.push(`/blogs/${post.slug}`);
    } catch (error) {
      console.error('Error saving blog post:', error);
      alert('Failed to save blog post. Please try again.');
    }
  };
  
  const renderContentBlock = (block, index) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <div key={index} className="mb-4 relative group">
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              value={block.text}
              onChange={(e) => handleContentChange(index, 'text', e.target.value)}
              rows={4}
              placeholder="Paragraph text"
            />
            <button
              className="absolute top-2 right-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => handleRemoveContentBlock(index)}
            >
              ✕
            </button>
          </div>
        );
      
      case 'heading':
        return (
          <div key={index} className="mb-4 relative group">
            <div className="flex gap-2 mb-2">
              <select
                className="p-2 border border-gray-300 rounded-md"
                value={block.level}
                onChange={(e) => handleContentChange(index, 'level', Number(e.target.value))}
              >
                <option value={1}>H1</option>
                <option value={2}>H2</option>
                <option value={3}>H3</option>
                <option value={4}>H4</option>
              </select>
              <input
                type="text"
                className="flex-1 p-2 border border-gray-300 rounded-md"
                value={block.text}
                onChange={(e) => handleContentChange(index, 'text', e.target.value)}
                placeholder="Heading text"
              />
            </div>
            <button
              className="absolute top-2 right-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => handleRemoveContentBlock(index)}
            >
              ✕
            </button>
          </div>
        );
      
      case 'code':
        return (
          <div key={index} className="mb-4 relative group">
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                className="w-32 p-2 border border-gray-300 rounded-md"
                placeholder="Language"
                value={block.language}
                onChange={(e) => handleContentChange(index, 'language', e.target.value)}
              />
            </div>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md font-mono"
              value={block.text}
              onChange={(e) => handleContentChange(index, 'text', e.target.value)}
              rows={8}
              placeholder="Code snippet"
            />
            <button
              className="absolute top-2 right-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => handleRemoveContentBlock(index)}
            >
              ✕
            </button>
          </div>
        );
      
      case 'image':
        return (
          <div key={index} className="mb-4 relative group">
            <div className="grid grid-cols-1 gap-2 mb-2">
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Image URL"
                value={block.src}
                onChange={(e) => handleContentChange(index, 'src', e.target.value)}
              />
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Alt text"
                value={block.alt}
                onChange={(e) => handleContentChange(index, 'alt', e.target.value)}
              />
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Caption"
                value={block.caption}
                onChange={(e) => handleContentChange(index, 'caption', e.target.value)}
              />
            </div>
            <button
              className="absolute top-2 right-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => handleRemoveContentBlock(index)}
            >
              ✕
            </button>
          </div>
        );
      
      case 'list':
        return (
          <div key={index} className="mb-4 relative group">
            <div className="flex gap-2 mb-2">
              <select
                className="p-2 border border-gray-300 rounded-md"
                value={block.style}
                onChange={(e) => handleContentChange(index, 'style', e.target.value)}
              >
                <option value="bullet">Bullet</option>
                <option value="number">Numbered</option>
              </select>
            </div>
            {block.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex gap-2 mb-2">
                <input
                  type="text"
                  className="flex-1 p-2 border border-gray-300 rounded-md"
                  value={item}
                  onChange={(e) => handleListItemChange(index, itemIndex, e.target.value)}
                  placeholder="List item"
                />
                <button
                  className="p-2 bg-red-100 text-red-700 rounded-md"
                  onClick={() => handleRemoveListItem(index, itemIndex)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              className="p-2 bg-green-100 text-green-700 rounded-md"
              onClick={() => handleAddListItem(index)}
            >
              Add Item
            </button>
            <button
              className="absolute top-2 right-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => handleRemoveContentBlock(index)}
            >
              ✕
            </button>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-12">Create New Blog Post</h1>
        
        {/* Blog post basic info */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
          
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={post.title}
                onChange={handleInputChange}
                onBlur={handleSlugGeneration}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Slug
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="slug"
                  className="flex-1 p-2 border border-gray-300 rounded-md"
                  value={post.slug}
                  onChange={handleInputChange}
                />
                <button
                  onClick={handleSlugGeneration}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                >
                  Generate
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Excerpt
              </label>
              <textarea
                name="excerpt"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={post.excerpt}
                onChange={handleInputChange}
                rows={3}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cover Image URL
              </label>
              <input
                type="text"
                name="coverImage"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={post.coverImage}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tags (comma separated)
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={post.tags.join(', ')}
                onChange={handleTagsChange}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Author Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={post.author.name}
                onChange={handleAuthorChange}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Author Avatar URL
              </label>
              <input
                type="text"
                name="avatar"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={post.author.avatar}
                onChange={handleAuthorChange}
              />
            </div>
          </div>
        </div>
        
        {/* Blog content */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Content</h2>
          
          {post.content.map((block, index) => renderContentBlock(block, index))}
          
          {/* Add content block controls */}
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Add Content Block</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleAddContentBlock('paragraph')}
                className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
              >
                Paragraph
              </button>
              <button
                onClick={() => handleAddContentBlock('heading')}
                className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
              >
                Heading
              </button>
              <button
                onClick={() => handleAddContentBlock('code')}
                className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
              >
                Code
              </button>
              <button
                onClick={() => handleAddContentBlock('image')}
                className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
              >
                Image
              </button>
              <button
                onClick={() => handleAddContentBlock('list')}
                className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
              >
                List
              </button>
            </div>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex justify-end space-x-4">
          <Link href="/blogs">
            <div className="px-6 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 cursor-pointer">
              Cancel
            </div>
          </Link>
          <button
            onClick={handleSave}
            className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Create Post
          </button>
        </div>
      </div>
    </div>
  );
}