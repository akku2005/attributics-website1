// src/pages/blogs/[slug].jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getAllBlogSlugs, getBlogPostBySlug, formatDate, saveBlogPost } from '../../utils/blogUtils';

export default function BlogPost({ post }) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [editedPost, setEditedPost] = useState(post);

  if (router.isFallback) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Blog Post Not Found</h1>
          <p className="mt-4 text-gray-600">The blog post you're looking for doesn't exist.</p>
          <Link href="/blogs">
            <div className="mt-8 inline-block bg-indigo-600 text-white px-6 py-3 rounded-md cursor-pointer">
              Back to Blog
            </div>
          </Link>
        </div>
      </div>
    );
  }

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setEditedPost(JSON.parse(JSON.stringify(post)));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedPost({
      ...editedPost,
      [name]: value
    });
  };

  const handleAuthorChange = (e) => {
    const { name, value } = e.target;
    setEditedPost({
      ...editedPost,
      author: {
        ...editedPost.author,
        [name]: value
      }
    });
  };

  const handleTagsChange = (e) => {
    const tagsString = e.target.value;
    const tagsArray = tagsString.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
    setEditedPost({
      ...editedPost,
      tags: tagsArray
    });
  };

  const handleContentChange = (index, field, value) => {
    const newContent = [...editedPost.content];
    newContent[index] = {
      ...newContent[index],
      [field]: value
    };

    setEditedPost({
      ...editedPost,
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

    setEditedPost({
      ...editedPost,
      content: [...editedPost.content, newBlock]
    });
  };

  const handleRemoveContentBlock = (index) => {
    const newContent = [...editedPost.content];
    newContent.splice(index, 1);

    setEditedPost({
      ...editedPost,
      content: newContent
    });
  };

  const handleListItemChange = (contentIndex, itemIndex, value) => {
    const newContent = [...editedPost.content];
    const newItems = [...newContent[contentIndex].items];
    newItems[itemIndex] = value;

    newContent[contentIndex] = {
      ...newContent[contentIndex],
      items: newItems
    };

    setEditedPost({
      ...editedPost,
      content: newContent
    });
  };

  const handleAddListItem = (contentIndex) => {
    const newContent = [...editedPost.content];
    newContent[contentIndex].items.push('');

    setEditedPost({
      ...editedPost,
      content: newContent
    });
  };

  const handleRemoveListItem = (contentIndex, itemIndex) => {
    const newContent = [...editedPost.content];
    newContent[contentIndex].items.splice(itemIndex, 1);

    setEditedPost({
      ...editedPost,
      content: newContent
    });
  };

  const handleSave = async () => {
    try {
      const updatedPost = {
        ...editedPost,
        lastUpdated: new Date().toISOString()
      };

      await saveBlogPost(updatedPost);
      router.reload();
    } catch (error) {
      console.error('Error saving blog post:', error);
      alert('Failed to save blog post. Please try again.');
    }
  };

  const renderContentBlock = (block, index) => {
    if (isEditing) {
      switch (block.type) {
        case 'paragraph':
          return (
            <div key={index} className="mb-4 relative group">
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                value={block.text}
                onChange={(e) => handleContentChange(index, 'text', e.target.value)}
                rows={4}
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
    } else {
      switch (block.type) {
        case 'paragraph':
          return (
            <motion.p
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="mb-6 text-lg text-gray-700 leading-relaxed"
            >
              {block.text}
            </motion.p>
          );

        case 'heading':
          const HeadingTag = `h${block.level}`;
          const headingClasses = {
            1: 'text-3xl font-bold mt-12 mb-6',
            2: 'text-2xl font-bold mt-10 mb-4',
            3: 'text-xl font-bold mt-8 mb-3',
            4: 'text-lg font-bold mt-6 mb-2'
          };

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <HeadingTag className={headingClasses[block.level]}>
                {block.text}
              </HeadingTag>
            </motion.div>
          );

        case 'code':
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="mb-6"
            >
              <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
                <code className={`language-${block.language}`}>
                  {block.text}
                </code>
              </pre>
            </motion.div>
          );

        case 'image':
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="mb-6"
            >
              <figure>
                <img
                  src={block.src}
                  alt={block.alt}
                  className="w-full rounded-lg shadow-lg"
                />
                {block.caption && (
                  <figcaption className="mt-2 text-center text-sm text-gray-500">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            </motion.div>
          );

        case 'list':
          if (block.style === 'bullet') {
            return (
              <motion.ul
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="mb-6 pl-5 list-disc space-y-2"
              >
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-lg text-gray-700">
                    {item}
                  </li>
                ))}
              </motion.ul>
            );
          } else {
            return (
              <motion.ol
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="mb-6 pl-5 list-decimal space-y-2"
              >
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-lg text-gray-700">
                    {item}
                  </li>
                ))}
              </motion.ol>
            );
          }

        default:
          return null;
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {isEditing ? (
            <div className="mb-8">
              <input
                type="text"
                name="title"
                className="w-full text-4xl font-bold text-center border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500 pb-2"
                value={editedPost.title}
                onChange={handleInputChange}
              />
            </div>
          ) : (
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-900 sm:text-5xl"
            >
              {post.title}
            </motion.h1>
          )}

          <div className="mt-6 flex justify-center items-center space-x-4">
            <div className="flex items-center">
              {isEditing ? (
                <div className="flex items-center">
                  <input
                    type="text"
                    name="name"
                    className="w-full pl-12 border border-gray-300 rounded-md p-2"
                    value={editedPost.author.name}
                    onChange={handleAuthorChange}
                    placeholder="Author name"
                  />
                </div>
              ) : (
                <>
                  <img
                    className="h-10 w-10 rounded-full"
                    src={post.author.avatar || '/images/authors/default-avatar.jpg'}
                    alt={post.author.name}
                  />
                  <span className="ml-2 text-gray-700">{post.author.name}</span>
                </>
              )}
            </div>
            <span className="text-gray-400">•</span>
            <span className="text-gray-700">{formatDate(post.date)}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-700">{post.readingTime} min read</span>
          </div>

          {isEditing ? (
            <div className="mt-4">
              <textarea
                name="excerpt"
                className="w-full p-3 border border-gray-300 rounded-md"
                value={editedPost.excerpt}
                onChange={handleInputChange}
                rows={3}
                placeholder="Excerpt"
              />
            </div>
          ) : (
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              {post.excerpt}
            </p>
          )}

          {isEditing ? (
            <div className="mt-4">
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md"
                value={editedPost.tags.join(', ')}
                onChange={handleTagsChange}
                placeholder="Tags (comma separated)"
              />
            </div>
          ) : (
            <div className="mt-6 flex justify-center flex-wrap gap-2">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {isEditing ? (
          <div className="mb-12">
            <input
              type="text"
              name="coverImage"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={editedPost.coverImage}
              onChange={handleInputChange}
              placeholder="Cover image URL"
            />
            {editedPost.coverImage && (
              <img
                src={editedPost.coverImage}
                alt={editedPost.title}
                className="mt-4 w-full h-64 object-cover rounded-lg shadow-lg"
              />
            )}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <img
              src={post.coverImage || '/images/blog/default-cover.jpg'}
              alt={post.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        )}

        <div className="mb-12 flex justify-end">
          {isEditing ? (
            <div className="flex space-x-4">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Save
              </button>
            </div>
          ) : (
            <button
              onClick={handleEditToggle}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Edit
            </button>
          )}
        </div>

        <div className="prose prose-lg max-w-none">
          {post.content.map((block, index) => renderContentBlock(block, index))}
        </div>

        {isEditing && (
          <div className="mt-12 p-6 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Add Content Block</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleAddContentBlock('paragraph')}
                className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Paragraph
              </button>
              <button
                onClick={() => handleAddContentBlock('heading')}
                className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Heading
              </button>
              <button
                onClick={() => handleAddContentBlock('code')}
                className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Code
              </button>
              <button
                onClick={() => handleAddContentBlock('image')}
                className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Image
              </button>
              <button
                onClick={() => handleAddContentBlock('list')}
                className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                List
              </button>
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link href="/blogs">
            <div className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 cursor-pointer">
              Back to Blog
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllBlogSlugs();
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const post = getBlogPostBySlug(params.slug);
  return {
    props: {
      post
    },
    revalidate: 60 // Re-generate the page at most once per minute
  };
}
