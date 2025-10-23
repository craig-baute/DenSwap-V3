import React, { useState, useEffect } from 'react';
import { Save, Plus, Edit3, Trash2, User, Mail, Linkedin, Camera, ArrowLeft } from 'lucide-react';
import { supabase } from '../lib/supabase'; // Import supabase client

export interface Author {
  id: string;
  name: string;
  bio?: string;
  photo_url?: string; // Changed from 'photo' to 'photo_url'
  email?: string;
  linkedin_url?: string; // Changed from 'linkedin' to 'linkedin_url'
  created_at: string; // Changed from 'createdAt' to 'created_at'
  updated_at: string; // Added 'updated_at'
}

interface AuthorManagerProps {
  onBack: () => void;
}

export const AuthorManager: React.FC<AuthorManagerProps> = ({ onBack }) => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [currentAuthor, setCurrentAuthor] = useState<Author | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAuthors = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data, error } = await supabase
          .from('authors')
          .select('*');
        if (error) throw error;
        setAuthors(data || []);
      } catch (err: any) {
        console.error('Error fetching authors:', err.message);
        setError('Failed to load authors. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchAuthors();

    // Set up real-time subscription
    const authorsChannel = supabase
      .channel('public:authors_manager')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'authors' }, payload => {
        console.log('Author change received!', payload);
        fetchAuthors(); // Re-fetch data on any change
      })
      .subscribe();

    return () => {
      supabase.removeChannel(authorsChannel);
    };
  }, []);

  const saveAuthors = async (updatedAuthors: Author[]) => {
    // This function will be replaced by direct Supabase calls in saveAuthor, deleteAuthor
    setAuthors(updatedAuthors);
  };

  const createNewAuthor = () => {
    const newAuthor: Author = {
      id: '', // Supabase will generate UUID
      name: '',
      bio: '',
      photo_url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150',
      email: '',
      linkedin_url: '',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    setCurrentAuthor(newAuthor);
    setIsEditing(true);
  };

  const editAuthor = (author: Author) => {
    setCurrentAuthor(author);
    setIsEditing(true);
  };

  const saveAuthor = async () => {
    if (!currentAuthor || !currentAuthor.name.trim() || !currentAuthor.bio?.trim()) {
      alert('Please fill in name and bio fields');
      return;
    }

    const authorToSave = {
      ...currentAuthor,
      updated_at: new Date().toISOString(),
      photo_url: currentAuthor.photo_url || 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150',
      linkedin_url: currentAuthor.linkedin_url || '',
      email: currentAuthor.email || ''
    };

    try {
      let data, error;
      if (currentAuthor.id && authors.some(a => a.id === currentAuthor.id)) {
        // Update existing author
        ({ data, error } = await supabase
          .from('authors')
          .update(authorToSave)
          .eq('id', currentAuthor.id)
          .select());
      } else {
        // Insert new author
        ({ data, error } = await supabase
          .from('authors')
          .insert(authorToSave)
          .select());
      }

      if (error) throw error;
      console.log('Author saved:', data);
      // The useEffect real-time subscription will re-fetch and update `authors` state
      setIsEditing(false);
      setCurrentAuthor(null);
    } catch (err: any) {
      console.error('Error saving author:', err.message);
      alert('Failed to save author: ' + err.message);
    }
  };

  const deleteAuthor = async (id: string) => {
    if (confirm('Are you sure you want to delete this author?')) {
      try {
        const { error } = await supabase
          .from('authors')
          .delete()
          .eq('id', id);

        if (error) throw error;
        console.log('Author deleted:', id);
        // The useEffect real-time subscription will re-fetch and update `authors` state
      } catch (err: any) {
        console.error('Error deleting author:', err.message);
        alert('Failed to delete author: ' + err.message);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading authors...</p>
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

  if (isEditing && currentAuthor) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <button
              onClick={() => {
                setIsEditing(false);
                setCurrentAuthor(null);
              }}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Authors
            </button>
            <button
              onClick={saveAuthor}
              className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
            >
              <Save className="h-4 w-4" />
              Save Author
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {currentAuthor.name ? `Edit ${currentAuthor.name}` : 'New Author'}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={currentAuthor.name}
                    onChange={(e) => setCurrentAuthor({ ...currentAuthor, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Enter author name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={currentAuthor.email || ''}
                    onChange={(e) => setCurrentAuthor({ ...currentAuthor, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="author@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="url"
                    value={currentAuthor.linkedin_url || ''}
                    onChange={(e) => setCurrentAuthor({ ...currentAuthor, linkedin_url: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profile Photo URL *
                  </label>
                  <input
                    type="url"
                    value={currentAuthor.photo_url || ''}
                    onChange={(e) => setCurrentAuthor({ ...currentAuthor, photo_url: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="https://example.com/photo.jpg"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Recommended: Square image, at least 150x150px
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bio *
                  </label>
                  <textarea
                    value={currentAuthor.bio || ''}
                    onChange={(e) => setCurrentAuthor({ ...currentAuthor, bio: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Write a brief bio about the author..."
                  />
                </div>

                {currentAuthor.photo_url && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Photo Preview
                    </label>
                    <div className="flex items-center gap-4">
                      <img
                        src={currentAuthor.photo_url}
                        alt="Author preview"
                        className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                      />
                      <div className="text-sm text-gray-600">
                        This is how the author photo will appear on blog posts
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog Management
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Author Management</h1>
            <p className="text-gray-600">Manage blog authors and their profiles</p>
          </div>
          <button
            onClick={createNewAuthor}
            className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
          >
            <Plus className="h-4 w-4" />
            New Author
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {authors.map((author) => (
            <div key={author.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={author.photo_url || ''}
                  alt={author.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{author.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    {author.email && (
                      <Mail className="h-4 w-4 text-gray-400" />
                    )}
                    {author.linkedin_url && (
                      <Linkedin className="h-4 w-4 text-blue-600" />
                    )}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{author.bio}</p>
              
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-500">
                  Created {new Date(author.created_at).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => editAuthor(author)}
                    className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg"
                  >
                    <Edit3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => deleteAuthor(author.id)}
                    className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {authors.length === 0 && (
          <div className="text-center py-12">
            <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No authors yet</h3>
            <p className="text-gray-600 mb-4">Create your first author profile to get started.</p>
            <button
              onClick={createNewAuthor}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
            >
              Create First Author
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
