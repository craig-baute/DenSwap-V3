import React, { useState, useEffect } from 'react';
import { Save, Plus, Edit3, Trash2, User, Mail, Linkedin, Camera, ArrowLeft } from 'lucide-react';

export interface Author {
  id: string;
  name: string;
  bio: string;
  photo: string;
  email?: string;
  linkedin?: string;
  createdAt: string;
}

interface AuthorManagerProps {
  onBack: () => void;
}

export const AuthorManager: React.FC<AuthorManagerProps> = ({ onBack }) => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [currentAuthor, setCurrentAuthor] = useState<Author | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedAuthors = localStorage.getItem('blogAuthors');
    if (savedAuthors) {
      setAuthors(JSON.parse(savedAuthors));
    } else {
      // Initialize with default authors
      const defaultAuthors: Author[] = [
        {
          id: '1',
          name: 'DenSwap Analytics Team',
          bio: 'Our team of coworking industry experts brings over 14 years of hands-on experience in developing, operating, and analyzing flexible workspace markets across multiple states.',
          photo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150',
          email: 'contact@denswap.com',
          linkedin: 'https://linkedin.com/company/denswap',
          createdAt: new Date().toISOString()
        },
        {
          id: '2',
          name: 'Sarah Chen',
          bio: 'Senior Market Analyst with 8+ years of experience in commercial real estate analytics and coworking market research. Specializes in demand forecasting and competitive analysis.',
          photo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150',
          email: 'sarah.chen@denswap.com',
          linkedin: 'https://linkedin.com/in/sarahchen-cre',
          createdAt: new Date().toISOString()
        },
        {
          id: '3',
          name: 'Mike Rodriguez',
          bio: 'Operations Director with extensive experience in coworking space development and management. Led the successful launch of 15+ coworking locations across Texas and California.',
          photo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150',
          email: 'mike.rodriguez@denswap.com',
          linkedin: 'https://linkedin.com/in/mikerodriguez-ops',
          createdAt: new Date().toISOString()
        },
        {
          id: '4',
          name: 'Jennifer Walsh',
          bio: 'Financial Modeling Expert and former investment banker turned coworking financial specialist. Creates accurate P&L projections based on real operational data.',
          photo: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=150',
          email: 'jennifer.walsh@denswap.com',
          linkedin: 'https://linkedin.com/in/jenniferwalsh-finance',
          createdAt: new Date().toISOString()
        },
        {
          id: '5',
          name: 'Alex Thompson',
          bio: 'Video Content Specialist and coworking industry educator. Produces educational content and training materials for coworking operators and property investors.',
          photo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=150',
          email: 'alex.thompson@denswap.com',
          linkedin: 'https://linkedin.com/in/alexthompson-video',
          createdAt: new Date().toISOString()
        },
        {
          id: '6',
          name: 'Lisa Chen',
          bio: 'Remote Work Trends Analyst specializing in the intersection of technology, workplace culture, and commercial real estate. Tracks emerging patterns in flexible work arrangements.',
          photo: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=150',
          email: 'lisa.chen@denswap.com',
          linkedin: 'https://linkedin.com/in/lisachen-trends',
          createdAt: new Date().toISOString()
        },
        {
          id: '7',
          name: 'David Park',
          bio: 'Financial Systems Architect with deep expertise in coworking revenue models and membership dynamics. Develops sophisticated financial frameworks for flexible workspace investments.',
          photo: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=150',
          email: 'david.park@denswap.com',
          linkedin: 'https://linkedin.com/in/davidpark-finance',
          createdAt: new Date().toISOString()
        },
        {
          id: '8',
          name: 'Craig Baute',
          bio: 'Senior Coworking Strategist with 12+ years of experience in flexible workspace development and operations. Specializes in identifying market opportunities and avoiding common pitfalls that lead to coworking failures.',
          photo: 'https://images.pexels.com/photos/3184330/pexels-photo-3184330.jpeg?auto=compress&cs=tinysrgb&w=150',
          email: 'craig.baute@denswap.com',
          linkedin: 'https://linkedin.com/in/craigbaute-coworking',
          createdAt: new Date().toISOString()
        }
      ];
      setAuthors(defaultAuthors);
      localStorage.setItem('blogAuthors', JSON.stringify(defaultAuthors));
    }
  }, []);

  const saveAuthors = (updatedAuthors: Author[]) => {
    setAuthors(updatedAuthors);
    localStorage.setItem('blogAuthors', JSON.stringify(updatedAuthors));
  };

  const createNewAuthor = () => {
    const newAuthor: Author = {
      id: Date.now().toString(),
      name: '',
      bio: '',
      photo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150',
      email: '',
      linkedin: '',
      createdAt: new Date().toISOString()
    };
    setCurrentAuthor(newAuthor);
    setIsEditing(true);
  };

  const editAuthor = (author: Author) => {
    setCurrentAuthor(author);
    setIsEditing(true);
  };

  const saveAuthor = () => {
    if (!currentAuthor || !currentAuthor.name.trim() || !currentAuthor.bio.trim()) {
      alert('Please fill in name and bio fields');
      return;
    }

    const existingIndex = authors.findIndex(a => a.id === currentAuthor.id);
    let updatedAuthors;

    if (existingIndex >= 0) {
      updatedAuthors = [...authors];
      updatedAuthors[existingIndex] = currentAuthor;
    } else {
      updatedAuthors = [...authors, currentAuthor];
    }

    saveAuthors(updatedAuthors);
    setIsEditing(false);
    setCurrentAuthor(null);
  };

  const deleteAuthor = (id: string) => {
    if (confirm('Are you sure you want to delete this author?')) {
      const updatedAuthors = authors.filter(a => a.id !== id);
      saveAuthors(updatedAuthors);
    }
  };

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
                    value={currentAuthor.linkedin || ''}
                    onChange={(e) => setCurrentAuthor({ ...currentAuthor, linkedin: e.target.value })}
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
                    value={currentAuthor.photo}
                    onChange={(e) => setCurrentAuthor({ ...currentAuthor, photo: e.target.value })}
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
                    value={currentAuthor.bio}
                    onChange={(e) => setCurrentAuthor({ ...currentAuthor, bio: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Write a brief bio about the author..."
                  />
                </div>

                {currentAuthor.photo && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Photo Preview
                    </label>
                    <div className="flex items-center gap-4">
                      <img
                        src={currentAuthor.photo}
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
                  src={author.photo}
                  alt={author.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{author.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    {author.email && (
                      <Mail className="h-4 w-4 text-gray-400" />
                    )}
                    {author.linkedin && (
                      <Linkedin className="h-4 w-4 text-blue-600" />
                    )}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{author.bio}</p>
              
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-500">
                  Created {new Date(author.createdAt).toLocaleDateString()}
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