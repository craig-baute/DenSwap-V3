import React, { useState, useEffect } from 'react';
import { AdminLogin } from '../components/AdminLogin';
import { MediaLibrary } from '../components/MediaLibrary';
import { AuthorManager } from '../components/AuthorManager';
import { CaseStudyCMS } from '../components/CaseStudyCMS';
import { HeroVideoManager } from '../components/HeroVideoManager';
import { TeamMemberCMS } from '../components/TeamMemberCMS';
import { Save, Plus, CreditCard as Edit3, Trash2, Eye, EyeOff, Calendar, User, FileText, BarChart3, Users, Building, Settings, LogOut, ArrowLeft, Search, Share, Twitter, Code, Target, Video } from 'lucide-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { supabase } from '../lib/supabase'; // Import supabase client

// Define interfaces for Supabase data
interface Author {
  id: string;
  name: string;
  bio?: string;
  photo_url?: string;
  email?: string;
  linkedin_url?: string;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt?: string;
  content: string;
  publish_date?: string;
  read_time?: number;
  category?: string;
  image_url?: string;
  author_id?: string;
  slug: string;
  is_video?: boolean;
  status: 'draft' | 'published';
  tags?: string[];
  created_at: string;
  updated_at: string;
  seo_title?: string;
  seo_description?: string;
  seo_focus_keyword?: string;
  seo_og_title?: string;
  seo_og_description?: string;
  seo_og_image?: string;
  seo_twitter_title?: string;
  seo_twitter_description?: string;
  seo_twitter_image?: string;
  seo_canonical_url?: string;
  seo_robots?: string;
  seo_schema?: string;
}

export const BlogAdmin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState<'dashboard' | 'posts' | 'authors' | 'caseStudies' | 'media' | 'heroVideo' | 'teamMembers'>('dashboard');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [availableTags, setAvailableTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');
  const [showTagInput, setShowTagInput] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [authors, setAuthors] = useState<Author[]>([]); // To fetch authors for dropdown

  useEffect(() => {
    const adminStatus = localStorage.getItem('blogAdmin');
    if (adminStatus === 'true') {
      setIsAuthenticated(true);
    }

    const fetchBlogAdminData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch authors for selection in post editor
        const { data: authorsData, error: authorsError } = await supabase
          .from('authors')
          .select('*');
        if (authorsError) throw authorsError;
        setAuthors(authorsData || []);

        // Fetch blog posts
        const { data: postsData, error: postsError } = await supabase
          .from('blog_posts')
          .select('*'); // Fetch all posts (draft and published) for admin view
        if (postsError) throw postsError;
        setPosts(postsData || []);

        // Extract unique tags from all posts
        const allTags = Array.from(new Set(postsData?.flatMap(post => post.tags || []) || []));
        setAvailableTags(allTags);

      } catch (err: any) {
        console.error('Error fetching blog admin data:', err.message);
        setError('Failed to load admin content. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchBlogAdminData();

      // Set up real-time subscriptions for admin panel
      const postsChannel = supabase
        .channel('public:blog_posts_admin')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'blog_posts' }, payload => {
          console.log('Change received in admin!', payload);
          fetchBlogAdminData(); // Re-fetch data on any change
        })
        .subscribe();

      const authorsChannel = supabase
        .channel('public:authors_admin')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'authors' }, payload => {
          console.log('Change received in admin!', payload);
          fetchBlogAdminData(); // Re-fetch data on any change
        })
        .subscribe();

      return () => {
        supabase.removeChannel(postsChannel);
        supabase.removeChannel(authorsChannel);
      };
    }
  }, [isAuthenticated]);

  const handleLogin = (success: boolean) => {
    setIsAuthenticated(success);
  };

  const handleLogout = () => {
    localStorage.removeItem('blogAdmin'); // Keep this for admin login status
    setIsAuthenticated(false);
    setCurrentView('dashboard');
  };

  // These functions will be replaced with Supabase calls
  const savePosts = async (updatedPosts: BlogPost[]) => {
    // This function will be replaced by direct Supabase calls in savePost, deletePost, togglePostStatus
    setPosts(updatedPosts);
  };

  const saveTags = async (updatedTags: string[]) => {
    // For now, tags are extracted from posts. If tags need to be managed separately,
    // a dedicated tags table in Supabase would be needed.
    setAvailableTags(updatedTags);
  };

  const addNewTag = () => {
    if (newTag.trim() && !availableTags.includes(newTag.trim().toLowerCase())) {
      const updatedTags = [...availableTags, newTag.trim().toLowerCase()].sort();
      setAvailableTags(updatedTags); // Update local state
      setNewTag('');
      setShowTagInput(false);
      // No direct Supabase call for tags as they are derived from posts
    }
  };

  const removeTag = (tagToRemove: string) => {
    const updatedTags = availableTags.filter(tag => tag !== tagToRemove);
    setAvailableTags(updatedTags); // Update local state
    
    // Remove tag from all posts in Supabase
    const updatedPosts = posts.map(post => ({
      ...post,
      tags: (post.tags || []).filter(tag => tag !== tagToRemove)
    }));
    // This would ideally be a batch update to Supabase
    updatedPosts.forEach(async (post) => {
      await supabase.from('blog_posts').update({ tags: post.tags }).eq('id', post.id);
    });
    setPosts(updatedPosts); // Update local state
  };

  const togglePostTag = (tag: string) => {
    if (!currentPost) return;
    
    const currentTags = currentPost.tags || [];
    const updatedTags = currentTags.includes(tag)
      ? currentTags.filter(t => t !== tag)
      : [...currentTags, tag];
    
    setCurrentPost({ ...currentPost, tags: updatedTags });
  };
  const createNewPost = () => {
    const newPost: BlogPost = {
      id: '', // Supabase will generate UUID
      title: '',
      excerpt: '',
      content: '',
      publish_date: new Date().toISOString(),
      read_time: 5,
      category: 'Trends and Insights',
      image_url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      author_id: authors.length > 0 ? authors[0].id : undefined, // Default to first author if available
      slug: '',
      is_video: false,
      status: 'draft',
      tags: [],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      seo_title: '',
      seo_description: '',
      seo_focus_keyword: '',
      seo_og_title: '',
      seo_og_description: '',
      seo_og_image: '',
      seo_twitter_title: '',
      seo_twitter_description: '',
      seo_twitter_image: '',
      seo_canonical_url: '',
      seo_robots: 'index,follow',
      seo_schema: ''
    };
    setCurrentPost(newPost);
    setIsEditing(true);
  };

  const editPost = (post: BlogPost) => {
    // Ensure all properties are properly initialized to prevent undefined errors
    const safePost: BlogPost = {
      ...post,
      title: post.title || '',
      excerpt: post.excerpt || '',
      content: post.content || '',
      slug: post.slug || '',
      status: post.status || 'draft',
      tags: post.tags || [],
      created_at: post.created_at || new Date().toISOString(),
      updated_at: post.updated_at || new Date().toISOString(),
      publish_date: post.publish_date || new Date().toISOString(),
      read_time: post.read_time || 5,
      category: post.category || 'Trends and Insights',
      image_url: post.image_url || 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      author_id: post.author_id || (authors.length > 0 ? authors[0].id : undefined),
      is_video: post.is_video || false,
      seo_title: post.seo_title || '',
      seo_description: post.seo_description || '',
      seo_focus_keyword: post.seo_focus_keyword || '',
      seo_og_title: post.seo_og_title || '',
      seo_og_description: post.seo_og_description || '',
      seo_og_image: post.seo_og_image || '',
      seo_twitter_title: post.seo_twitter_title || '',
      seo_twitter_description: post.seo_twitter_description || '',
      seo_twitter_image: post.seo_twitter_image || '',
      seo_canonical_url: post.seo_canonical_url || '',
      seo_robots: post.seo_robots || 'index,follow',
      seo_schema: post.seo_schema || ''
    };
    setCurrentPost(safePost);
    setIsEditing(true);
  };

  const savePost = async () => {
    if (!currentPost || !currentPost.title.trim()) {
      alert('Please fill in the title field');
      return;
    }

    // Generate slug from title if empty
    let postSlug = currentPost.slug.trim();
    if (!postSlug) {
      postSlug = currentPost.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    }

    const postToSave = {
      ...currentPost,
      slug: postSlug,
      updated_at: new Date().toISOString(),
      // Ensure all fields match Supabase schema
      publish_date: currentPost.publish_date || new Date().toISOString(),
      read_time: currentPost.read_time || 5,
      category: currentPost.category || 'Trends and Insights',
      image_url: currentPost.image_url || 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      author_id: currentPost.author_id || (authors.length > 0 ? authors[0].id : undefined),
      is_video: currentPost.is_video || false,
      tags: currentPost.tags || [],
      seo_title: currentPost.seo_title || '',
      seo_description: currentPost.seo_description || '',
      seo_focus_keyword: currentPost.seo_focus_keyword || '',
      seo_og_title: currentPost.seo_og_title || '',
      seo_og_description: currentPost.seo_og_description || '',
      seo_og_image: currentPost.seo_og_image || '',
      seo_twitter_title: currentPost.seo_twitter_title || '',
      seo_twitter_description: currentPost.seo_twitter_description || '',
      seo_twitter_image: currentPost.seo_twitter_image || '',
      seo_canonical_url: currentPost.seo_canonical_url || '',
      seo_robots: currentPost.seo_robots || 'index,follow',
      seo_schema: currentPost.seo_schema || ''
    };

    try {
      let data, error;
      if (currentPost.id && posts.some(p => p.id === currentPost.id)) {
        // Update existing post
        ({ data, error } = await supabase
          .from('blog_posts')
          .update(postToSave)
          .eq('id', currentPost.id)
          .select());
      } else {
        // Insert new post
        ({ data, error } = await supabase
          .from('blog_posts')
          .insert(postToSave)
          .select());
      }

      if (error) throw error;
      console.log('Post saved:', data);
      // The useEffect real-time subscription will re-fetch and update `posts` state
      setIsEditing(false);
      setCurrentPost(null);
    } catch (err: any) {
      console.error('Error saving post:', err.message);
      alert('Failed to save post: ' + err.message);
    }
  };

  const deletePost = async (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      try {
        const { error } = await supabase
          .from('blog_posts')
          .delete()
          .eq('id', id);

        if (error) throw error;
        console.log('Post deleted:', id);
        // The useEffect real-time subscription will re-fetch and update `posts` state
      } catch (err: any) {
        console.error('Error deleting post:', err.message);
        alert('Failed to delete post: ' + err.message);
      }
    }
  };

  const togglePostStatus = async (id: string, currentStatus: 'draft' | 'published') => {
    const newStatus = currentStatus === 'published' ? 'draft' : 'published';
    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;
      console.log(`Post ${id} status updated to ${newStatus}`);
      // The useEffect real-time subscription will re-fetch and update `posts` state
    } catch (err: any) {
      console.error('Error updating post status:', err.message);
      alert('Failed to update post status: ' + err.message);
    }
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading blog admin data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

  // Post Editor View
  if (isEditing && currentPost) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <button
              onClick={() => {
                setIsEditing(false);
                setCurrentPost(null);
              }}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Posts
            </button>
            <div className="flex items-center gap-4">
              <select
                value={currentPost.status}
                onChange={(e) => setCurrentPost({ ...currentPost, status: e.target.value as 'draft' | 'published' })}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
              <button
                onClick={savePost}
                className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
              >
                <Save className="h-4 w-4" />
                Save Post
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={currentPost.title}
                  onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-xl font-semibold"
                  placeholder="Enter post title"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={currentPost.category || ''}
                    onChange={(e) => setCurrentPost({ ...currentPost, category: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="Demand Analysis">Demand Analysis</option>
                    <option value="Trends and Insights">Trends and Insights</option>
                    <option value="Videos">Videos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Read Time (minutes)
                  </label>
                  <input
                    type="number"
                    value={currentPost.read_time || ''}
                    onChange={(e) => setCurrentPost({ ...currentPost, read_time: parseInt(e.target.value) || undefined })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="e.g., 5"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Excerpt
                </label>
                <textarea
                  value={currentPost.excerpt || ''}
                  onChange={(e) => setCurrentPost({ ...currentPost, excerpt: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Brief description of the post..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Featured Image URL
                </label>
                <div className="space-y-3">
                  <input
                    type="url"
                    value={currentPost.image_url || ''}
                    onChange={(e) => setCurrentPost({ ...currentPost, image_url: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="https://example.com/image.jpg"
                  />
                  <button
                    type="button"
                    onClick={() => setCurrentView('media')}
                    className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Or select from Media Library →
                  </button>
                  {currentPost.image_url && (
                    <div className="mt-3">
                      <img
                        src={currentPost.image_url}
                        alt="Featured image preview"
                        className="w-full h-48 object-cover rounded-lg border border-gray-200"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <ReactQuill
                    value={currentPost.content}
                    onChange={(content) => setCurrentPost({ ...currentPost, content })}
                    modules={{
                      toolbar: [
                        [{ 'header': [1, 2, 3, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                        ['blockquote', 'code-block'],
                        ['link'],
                        ['clean']
                      ],
                    }}
                    style={{ minHeight: '300px' }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={currentPost.is_video || false}
                    onChange={(e) => setCurrentPost({ ...currentPost, is_video: e.target.checked })}
                    className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-sm font-medium text-gray-700">This is a video post</span>
                </label>
              </div>

              {/* Tags Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Tags
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowTagInput(!showTagInput)}
                    className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    + Add New Tag
                  </button>
                </div>
                
                {showTagInput && (
                  <div className="flex gap-2 mb-4">
                    <input
                      type="text"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addNewTag())}
                      placeholder="Enter new tag"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                    />
                    <button
                      type="button"
                      onClick={addNewTag}
                      className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 text-sm font-medium"
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowTagInput(false);
                        setNewTag('');
                      }}
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 text-sm font-medium"
                    >
                      Cancel
                    </button>
                  </div>
                )}
                
                <div className="border border-gray-300 rounded-lg p-4 max-h-48 overflow-y-auto">
                  <div className="flex flex-wrap gap-2">
                    {availableTags.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => togglePostTag(tag)}
                        className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors ${
                          (currentPost.tags || []).includes(tag)
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                  
                  {availableTags.length === 0 && (
                    <p className="text-gray-500 text-sm text-center py-4">
                      No tags available. Create your first tag above.
                    </p>
                  )}
                </div>
                
                {(currentPost.tags || []).length > 0 && (
                  <div className="mt-3">
                    <p className="text-sm text-gray-600 mb-2">Selected tags ({(currentPost.tags || []).length}):</p>
                    <div className="flex flex-wrap gap-2">
                      {(currentPost.tags || []).map((tag) => (
                        <span
                          key={tag}
                          className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium border border-emerald-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* SEO Section */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <Search className="h-5 w-5 text-emerald-600" />
                  SEO Optimization
                </h3>
                
                <div className="space-y-6">
                  {/* Focus Keyword */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Focus Keyword
                    </label>
                    <input
                      type="text"
                      value={currentPost.seo_focus_keyword || ''}
                      onChange={(e) => setCurrentPost({ 
                        ...currentPost, 
                        seo_focus_keyword: e.target.value 
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Main keyword for this post"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      The primary keyword you want this post to rank for
                    </p>
                  </div>

                  {/* Meta Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Meta Title
                      <span className={`ml-2 text-xs ${
                        (currentPost.seo_title || currentPost.title).length > 60 ? 'text-red-500' : 'text-gray-500'
                      }`}>
                        ({(currentPost.seo_title || currentPost.title).length}/60)
                      </span>
                    </label>
                    <input
                      type="text"
                      value={currentPost.seo_title || ''}
                      onChange={(e) => setCurrentPost({ 
                        ...currentPost, 
                        seo_title: e.target.value 
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder={currentPost.title || "Enter meta title"}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Title that appears in search results. Leave empty to use post title.
                    </p>
                  </div>

                  {/* Meta Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Meta Description
                      <span className={`ml-2 text-xs ${
                        (currentPost.seo_description || currentPost.excerpt || '').length > 160 ? 'text-red-500' : 'text-gray-500'
                      }`}>
                        ({(currentPost.seo_description || currentPost.excerpt || '').length}/160)
                      </span>
                    </label>
                    <textarea
                      value={currentPost.seo_description || ''}
                      onChange={(e) => setCurrentPost({ 
                        ...currentPost, 
                        seo_description: e.target.value 
                      })}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder={currentPost.excerpt || "Enter meta description"}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Description that appears in search results. Leave empty to use excerpt.
                    </p>
                  </div>

                  {/* SEO Preview */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Search Result Preview</h4>
                    <div className="bg-white rounded border p-4">
                      <div className="text-blue-600 text-lg font-medium hover:underline cursor-pointer">
                        {currentPost.seo_title || currentPost.title || 'Your Post Title'}
                      </div>
                      <div className="text-green-600 text-sm">
                        denswap.com/blog/{currentPost.slug || 'your-post-slug'}
                      </div>
                      <div className="text-gray-600 text-sm mt-1">
                        {currentPost.seo_description || currentPost.excerpt || 'Your post description will appear here...'}
                      </div>
                    </div>
                  </div>

                  {/* Open Graph Settings */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Open Graph (Facebook/LinkedIn)</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">
                            OG Title
                            <span className={`ml-1 ${
                              (currentPost.seo_og_title || currentPost.title).length > 95 ? 'text-red-500' : 'text-gray-500'
                            }`}>
                              ({(currentPost.seo_og_title || currentPost.title).length}/95)
                            </span>
                          </label>
                          <input
                            type="text"
                            value={currentPost.seo_og_title || ''}
                            onChange={(e) => setCurrentPost({ 
                              ...currentPost, 
                              seo_og_title: e.target.value 
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                            placeholder={currentPost.title || "OG Title"}
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">
                            OG Description
                            <span className={`ml-1 ${
                              (currentPost.seo_og_description || currentPost.excerpt || '').length > 300 ? 'text-red-500' : 'text-gray-500'
                            }`}>
                              ({(currentPost.seo_og_description || currentPost.excerpt || '').length}/300)
                            </span>
                          </label>
                          <textarea
                            value={currentPost.seo_og_description || ''}
                            onChange={(e) => setCurrentPost({ 
                              ...currentPost, 
                              seo_og_description: e.target.value 
                            })}
                            rows={2}
                            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                            placeholder={currentPost.excerpt || "OG Description"}
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">OG Image URL</label>
                          <input
                            type="url"
                            value={currentPost.seo_og_image || ''}
                            onChange={(e) => setCurrentPost({ 
                              ...currentPost, 
                              seo_og_image: e.target.value 
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                            placeholder={currentPost.image_url || "OG Image URL"}
                          />
                          <p className="text-xs text-gray-500 mt-1">Recommended: 1200x630px</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Twitter Card</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">
                            Twitter Title
                            <span className={`ml-1 ${
                              (currentPost.seo_twitter_title || currentPost.title).length > 70 ? 'text-red-500' : 'text-gray-500'
                            }`}>
                              ({(currentPost.seo_twitter_title || currentPost.title).length}/70)
                            </span>
                          </label>
                          <input
                            type="text"
                            value={currentPost.seo_twitter_title || ''}
                            onChange={(e) => setCurrentPost({ 
                              ...currentPost, 
                              seo_twitter_title: e.target.value 
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                            placeholder={currentPost.title || "Twitter Title"}
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">
                            Twitter Description
                            <span className={`ml-1 ${
                              (currentPost.seo_twitter_description || currentPost.excerpt || '').length > 200 ? 'text-red-500' : 'text-gray-500'
                            }`}>
                              ({(currentPost.seo_twitter_description || currentPost.excerpt || '').length}/200)
                            </span>
                          </label>
                          <textarea
                            value={currentPost.seo_twitter_description || ''}
                            onChange={(e) => setCurrentPost({ 
                              ...currentPost, 
                              seo_twitter_description: e.target.value 
                            })}
                            rows={2}
                            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                            placeholder={currentPost.excerpt || "Twitter Description"}
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Twitter Image URL</label>
                          <input
                            type="url"
                            value={currentPost.seo_twitter_image || ''}
                            onChange={(e) => setCurrentPost({ 
                              ...currentPost, 
                              seo_twitter_image: e.target.value 
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                            placeholder={currentPost.image_url || "Twitter Image URL"}
                          />
                          <p className="text-xs text-gray-500 mt-1">Recommended: 1200x600px</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Advanced SEO */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Canonical URL
                      </label>
                      <input
                        type="url"
                        value={currentPost.seo_canonical_url || ''}
                        onChange={(e) => setCurrentPost({ 
                          ...currentPost, 
                          seo_canonical_url: e.target.value 
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder={`https://denswap.com/blog/${currentPost.slug || 'post-slug'}`}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Leave empty to use default URL
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Robots Meta
                      </label>
                      <select
                        value={currentPost.seo_robots || 'index,follow'}
                        onChange={(e) => setCurrentPost({ 
                          ...currentPost, 
                          seo_robots: e.target.value 
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      >
                        <option value="index,follow">Index, Follow (Default)</option>
                        <option value="noindex,follow">No Index, Follow</option>
                        <option value="index,nofollow">Index, No Follow</option>
                        <option value="noindex,nofollow">No Index, No Follow</option>
                      </select>
                    </div>
                  </div>

                  {/* Schema Markup */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Schema Markup (JSON-LD)
                    </label>
                    <textarea
                      value={currentPost.seo_schema || ''}
                      onChange={(e) => setCurrentPost({ 
                        ...currentPost, 
                        seo_schema: e.target.value 
                      })}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-mono text-sm"
                      placeholder='{"@context": "https://schema.org", "@type": "Article", ...}'
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Optional: Add structured data for rich snippets
                    </p>
                  </div>

                  {/* SEO Score */}
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-emerald-800 mb-2">SEO Score</h4>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-3 rounded-full transition-all duration-300"
                          style={{ 
                            width: `${Math.min(100, (
                              (currentPost.title ? 20 : 0) +
                              (currentPost.excerpt ? 20 : 0) +
                              (currentPost.seo_focus_keyword ? 20 : 0) +
                              (currentPost.seo_description || currentPost.excerpt ? 20 : 0) +
                              ((currentPost.tags || []).length > 0 ? 20 : 0)
                            ))}%` 
                          }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-emerald-700">
                        {Math.min(100, (
                          (currentPost.title ? 20 : 0) +
                          (currentPost.excerpt ? 20 : 0) +
                          (currentPost.seo_focus_keyword ? 20 : 0) +
                          (currentPost.seo_description || currentPost.excerpt ? 20 : 0) +
                          ((currentPost.tags || []).length > 0 ? 20 : 0)
                        ))}/100
                      </span>
                    </div>
                    <div className="mt-2 text-xs text-emerald-700">
                      <div className="grid grid-cols-2 gap-2">
                        <div className={currentPost.title ? 'text-green-600' : 'text-gray-500'}>
                          ✓ Title: {currentPost.title ? 'Good' : 'Missing'}
                        </div>
                        <div className={currentPost.excerpt ? 'text-green-600' : 'text-gray-500'}>
                          ✓ Excerpt: {currentPost.excerpt ? 'Good' : 'Missing'}
                        </div>
                        <div className={currentPost.seo_focus_keyword ? 'text-green-600' : 'text-gray-500'}>
                          ✓ Focus Keyword: {currentPost.seo_focus_keyword ? 'Set' : 'Missing'}
                        </div>
                        <div className={currentPost.seo_description || currentPost.excerpt ? 'text-green-600' : 'text-gray-500'}>
                          ✓ Meta Description: {currentPost.seo_description || currentPost.excerpt ? 'Good' : 'Missing'}
                        </div>
                        <div className={(currentPost.tags || []).length > 0 ? 'text-green-600' : 'text-gray-500'}>
                          ✓ Tags: {(currentPost.tags || []).length > 0 ? `${(currentPost.tags || []).length} tags` : 'None'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Case Studies View
  if (currentView === 'caseStudies') {
    return <CaseStudyCMS onBack={() => setCurrentView('dashboard')} />;
  }

  // Hero Video View
  if (currentView === 'heroVideo') {
    return <HeroVideoManager onBack={() => setCurrentView('dashboard')} />;
  }

  // Team Members View
  if (currentView === 'teamMembers') {
    return <TeamMemberCMS onBack={() => setCurrentView('dashboard')} />;
  }

  // Media Library View
  if (currentView === 'media') {
    const handleMediaSelect = (url: string, fileName: string) => {
      if (currentPost) {
        setCurrentPost({ ...currentPost, image_url: url });
        setIsEditing(true);
      }
    };

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div>
              <button
                onClick={() => {
                  if (currentPost) {
                    setIsEditing(true);
                  } else {
                    setCurrentView('dashboard');
                  }
                }}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-2"
              >
                <ArrowLeft className="h-4 w-4" />
                {currentPost ? 'Back to Post Editor' : 'Back to Dashboard'}
              </button>
              <h1 className="text-2xl font-bold text-gray-900">Media Library</h1>
              <p className="text-gray-600">
                {currentPost ? 'Select an image for your blog post' : 'Upload and manage media files'}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-600 hover:text-red-600 px-4 py-2 rounded-lg hover:bg-red-50"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <MediaLibrary
            onSelectMedia={currentPost ? handleMediaSelect : undefined}
          />
        </div>
      </div>
    );
  }

  // Authors View
  if (currentView === 'authors') {
    return <AuthorManager onBack={() => setCurrentView('dashboard')} />;
  }

  // Posts Management View
  if (currentView === 'posts') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div>
              <button
                onClick={() => setCurrentView('dashboard')}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </button>
              <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
              <p className="text-gray-600">Manage your blog content</p>
            </div>
            <button
              onClick={createNewPost}
              className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
            >
              <Plus className="h-4 w-4" />
              New Post
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Title</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Category</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tags</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {posts.map((post) => (
                    <tr key={post.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img src={post.image_url || ''} alt="" className="w-12 h-12 rounded-lg object-cover" />
                          <div>
                            <div className="font-medium text-gray-900">{post.title}</div>
                            <div className="text-sm text-gray-500">{(post.excerpt || '').substring(0, 60)}...</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{post.category}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {(post.tags || []).slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                          {(post.tags || []).length > 3 && (
                            <span className="text-xs text-gray-500">
                              +{(post.tags || []).length - 3} more
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          post.status === 'published' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {post.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {post.publish_date ? new Date(post.publish_date).toLocaleDateString() : 'N/A'}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => togglePostStatus(post.id, post.status)}
                            className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                            title={post.status === 'published' ? 'Unpublish' : 'Publish'}
                          >
                            {post.status === 'published' ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                          <button
                            onClick={() => editPost(post)}
                            className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg"
                          >
                            <Edit3 className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => deletePost(post.id)}
                            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {posts.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No posts yet</h3>
              <p className="text-gray-600 mb-4">Create your first blog post to get started.</p>
              <button
                onClick={createNewPost}
                className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
              >
                Create First Post
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Dashboard View
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Blog Admin Dashboard</h1>
            <p className="text-gray-600">Manage your blog content and settings</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-600 hover:text-red-600 px-4 py-2 rounded-lg hover:bg-red-50"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{posts.length}</div>
                <div className="text-sm text-gray-600">Total Posts</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {posts.filter(p => p.status === 'published').length}
                </div>
                <div className="text-sm text-gray-600">Published</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Edit3 className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {posts.filter(p => p.status === 'draft').length}
                </div>
                <div className="text-sm text-gray-600">Drafts</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{authors.length}</div>
                <div className="text-sm text-gray-600">Authors</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <button
            onClick={() => setCurrentView('posts')}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow text-left group"
          >
            <div className="bg-emerald-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
              <FileText className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Manage Posts</h3>
            <p className="text-gray-600 text-sm">Create, edit, and publish blog posts</p>
          </button>

          <button
            onClick={() => setCurrentView('authors')}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow text-left group"
          >
            <div className="bg-blue-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
              <User className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Manage Authors</h3>
            <p className="text-gray-600 text-sm">Add and edit author profiles</p>
          </button>

          <button
            onClick={() => setCurrentView('media')}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow text-left group"
          >
            <div className="bg-indigo-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
              <FileText className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Media Library</h3>
            <p className="text-gray-600 text-sm">Upload and manage images</p>
          </button>

          <button
            onClick={() => setCurrentView('caseStudies')}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow text-left group"
          >
            <div className="bg-purple-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
              <Building className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Case Study Projects</h3>
            <p className="text-gray-600 text-sm">Manage case study project content</p>
          </button>

          <button
            onClick={() => setCurrentView('heroVideo')}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow text-left group"
          >
            <div className="bg-teal-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors">
              <Video className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Hero Video</h3>
            <p className="text-gray-600 text-sm">Manage homepage background video</p>
          </button>

          <button
            onClick={() => setCurrentView('teamMembers')}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow text-left group"
          >
            <div className="bg-orange-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
              <Users className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Members</h3>
            <p className="text-gray-600 text-sm">Manage About page team section</p>
          </button>

          <button
            onClick={createNewPost}
            className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow text-left group"
          >
            <div className="bg-white/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
              <Plus className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">New Post</h3>
            <p className="text-emerald-100 text-sm">Create a new blog post</p>
          </button>
        </div>
      </div>
    </div>
  );
};
