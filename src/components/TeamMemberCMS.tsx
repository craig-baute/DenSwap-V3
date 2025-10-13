import React, { useState, useEffect } from 'react';
import { Save, Plus, CreditCard as Edit3, Trash2, ArrowLeft, User, Mail, Linkedin, Image, Eye, EyeOff, ArrowUp, ArrowDown } from 'lucide-react';
import { supabase } from '../lib/supabase';

export interface TeamMember {
  id: string;
  picture_url: string;
  name: string;
  title: string;
  description: string;
  linkedin_url: string;
  email: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at?: string;
}

interface TeamMemberCMSProps {
  onBack: () => void;
}

export const TeamMemberCMS: React.FC<TeamMemberCMSProps> = ({ onBack }) => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [currentMember, setCurrentMember] = useState<TeamMember | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from('team_members')
        .select('*')
        .order('display_order', { ascending: true });

      if (fetchError) throw fetchError;

      setTeamMembers(data || []);
    } catch (err) {
      console.error('Error fetching team members:', err);
      setError('Failed to load team members. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const createNewMember = () => {
    const maxOrder = teamMembers.length > 0
      ? Math.max(...teamMembers.map(m => m.display_order))
      : 0;

    const newMember: TeamMember = {
      id: crypto.randomUUID(),
      picture_url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300',
      name: '',
      title: '',
      description: '',
      linkedin_url: '',
      email: '',
      display_order: maxOrder + 1,
      is_active: true,
      created_at: new Date().toISOString()
    };
    setCurrentMember(newMember);
    setIsEditing(true);
  };

  const editMember = (member: TeamMember) => {
    setCurrentMember({ ...member });
    setIsEditing(true);
  };

  const validateEmail = (email: string): boolean => {
    if (!email) return true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateUrl = (url: string): boolean => {
    if (!url) return true;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const saveMember = async () => {
    if (!currentMember || !currentMember.name.trim()) {
      alert('Please enter a name for the team member.');
      return;
    }

    if (currentMember.email && !validateEmail(currentMember.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (currentMember.linkedin_url && !validateUrl(currentMember.linkedin_url)) {
      alert('Please enter a valid LinkedIn URL.');
      return;
    }

    if (currentMember.picture_url && !validateUrl(currentMember.picture_url)) {
      alert('Please enter a valid image URL.');
      return;
    }

    try {
      setSaving(true);
      setError(null);

      const memberData = {
        picture_url: currentMember.picture_url,
        name: currentMember.name,
        title: currentMember.title,
        description: currentMember.description,
        linkedin_url: currentMember.linkedin_url,
        email: currentMember.email,
        display_order: currentMember.display_order,
        is_active: currentMember.is_active,
        updated_at: new Date().toISOString()
      };

      const existingMember = teamMembers.find(m => m.id === currentMember.id);

      if (existingMember) {
        const { error: updateError } = await supabase
          .from('team_members')
          .update(memberData)
          .eq('id', currentMember.id);

        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase
          .from('team_members')
          .insert([{ id: currentMember.id, ...memberData, created_at: currentMember.created_at }]);

        if (insertError) throw insertError;
      }

      await fetchTeamMembers();
      setIsEditing(false);
      setCurrentMember(null);
    } catch (err) {
      console.error('Error saving team member:', err);
      setError('Failed to save team member. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const deleteMember = async (id: string) => {
    if (!confirm('Are you sure you want to delete this team member?')) {
      return;
    }

    try {
      setError(null);

      const { error: deleteError } = await supabase
        .from('team_members')
        .delete()
        .eq('id', id);

      if (deleteError) throw deleteError;

      await fetchTeamMembers();
    } catch (err) {
      console.error('Error deleting team member:', err);
      setError('Failed to delete team member. Please try again.');
    }
  };

  const toggleActive = async (id: string, currentStatus: boolean) => {
    try {
      setError(null);

      const { error: updateError } = await supabase
        .from('team_members')
        .update({ is_active: !currentStatus, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (updateError) throw updateError;

      await fetchTeamMembers();
    } catch (err) {
      console.error('Error toggling active status:', err);
      setError('Failed to update team member status. Please try again.');
    }
  };

  const moveUp = async (member: TeamMember) => {
    const currentIndex = teamMembers.findIndex(m => m.id === member.id);
    if (currentIndex <= 0) return;

    const previousMember = teamMembers[currentIndex - 1];

    try {
      setError(null);

      await supabase
        .from('team_members')
        .update({ display_order: previousMember.display_order, updated_at: new Date().toISOString() })
        .eq('id', member.id);

      await supabase
        .from('team_members')
        .update({ display_order: member.display_order, updated_at: new Date().toISOString() })
        .eq('id', previousMember.id);

      await fetchTeamMembers();
    } catch (err) {
      console.error('Error reordering team members:', err);
      setError('Failed to reorder team members. Please try again.');
    }
  };

  const moveDown = async (member: TeamMember) => {
    const currentIndex = teamMembers.findIndex(m => m.id === member.id);
    if (currentIndex >= teamMembers.length - 1) return;

    const nextMember = teamMembers[currentIndex + 1];

    try {
      setError(null);

      await supabase
        .from('team_members')
        .update({ display_order: nextMember.display_order, updated_at: new Date().toISOString() })
        .eq('id', member.id);

      await supabase
        .from('team_members')
        .update({ display_order: member.display_order, updated_at: new Date().toISOString() })
        .eq('id', nextMember.id);

      await fetchTeamMembers();
    } catch (err) {
      console.error('Error reordering team members:', err);
      setError('Failed to reorder team members. Please try again.');
    }
  };

  if (isEditing && currentMember) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <button
              onClick={() => {
                setIsEditing(false);
                setCurrentMember(null);
              }}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Team Members
            </button>
            <button
              onClick={saveMember}
              disabled={saving}
              className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="h-4 w-4" />
              {saving ? 'Saving...' : 'Save Team Member'}
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {currentMember.name ? `Edit ${currentMember.name}` : 'New Team Member'}
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  value={currentMember.name}
                  onChange={(e) => setCurrentMember({ ...currentMember, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title / Position
                </label>
                <input
                  type="text"
                  value={currentMember.title}
                  onChange={(e) => setCurrentMember({ ...currentMember, title: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="e.g., Senior Market Analyst"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description / Bio
                </label>
                <textarea
                  value={currentMember.description}
                  onChange={(e) => setCurrentMember({ ...currentMember, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Brief bio or description..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Picture URL
                </label>
                <input
                  type="url"
                  value={currentMember.picture_url}
                  onChange={(e) => setCurrentMember({ ...currentMember, picture_url: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="https://example.com/photo.jpg"
                />
                {currentMember.picture_url && (
                  <div className="mt-3">
                    <img
                      src={currentMember.picture_url}
                      alt="Preview"
                      className="w-32 h-32 object-cover rounded-lg border border-gray-200"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300';
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="url"
                    value={currentMember.linkedin_url}
                    onChange={(e) => setCurrentMember({ ...currentMember, linkedin_url: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={currentMember.email}
                    onChange={(e) => setCurrentMember({ ...currentMember, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={currentMember.is_active}
                    onChange={(e) => setCurrentMember({ ...currentMember, is_active: e.target.checked })}
                    className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-sm font-medium text-gray-700">Show on website</span>
                </label>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Preview</h3>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <img
                    src={currentMember.picture_url || 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300'}
                    alt={currentMember.name}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300';
                    }}
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {currentMember.name || 'Team Member Name'}
                    </h4>
                    <div className="text-emerald-600 font-semibold mb-4">
                      {currentMember.title || 'Title'}
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {currentMember.description || 'Description will appear here...'}
                    </p>
                    {(currentMember.linkedin_url || currentMember.email) && (
                      <div className="flex items-center gap-3 pt-4 border-t">
                        {currentMember.linkedin_url && (
                          <a
                            href={currentMember.linkedin_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700"
                          >
                            <Linkedin className="h-4 w-4" />
                            LinkedIn
                          </a>
                        )}
                        {currentMember.email && (
                          <a
                            href={`mailto:${currentMember.email}`}
                            className="flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700"
                          >
                            <Mail className="h-4 w-4" />
                            Email
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
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
              Back to Dashboard
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Team Member Management</h1>
            <p className="text-gray-600">Manage team members displayed on the About page</p>
          </div>
          <button
            onClick={createNewMember}
            className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
          >
            <Plus className="h-4 w-4" />
            New Team Member
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-emerald-600 border-t-transparent"></div>
            <p className="mt-4 text-gray-600">Loading team members...</p>
          </div>
        ) : (
          <>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className={`bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow ${
                    member.is_active ? 'border-gray-200' : 'border-gray-300 opacity-60'
                  }`}
                >
                  <div className="relative">
                    <img
                      src={member.picture_url || 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300'}
                      alt={member.name}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300';
                      }}
                    />
                    {!member.is_active && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-gray-800 bg-opacity-75 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Hidden
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    {member.title && (
                      <div className="text-emerald-600 font-semibold text-sm mb-3">{member.title}</div>
                    )}
                    {member.description && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.description}</p>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => moveUp(member)}
                          disabled={index === 0}
                          className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed"
                          title="Move up"
                        >
                          <ArrowUp className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => moveDown(member)}
                          disabled={index === teamMembers.length - 1}
                          className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed"
                          title="Move down"
                        >
                          <ArrowDown className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => toggleActive(member.id, member.is_active)}
                          className={`p-2 rounded-lg ${
                            member.is_active
                              ? 'text-green-600 bg-green-50 hover:bg-green-100'
                              : 'text-gray-400 hover:text-green-600 hover:bg-green-50'
                          }`}
                          title={member.is_active ? 'Hide from website' : 'Show on website'}
                        >
                          {member.is_active ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => editMember(member)}
                          className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg"
                          title="Edit"
                        >
                          <Edit3 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => deleteMember(member.id)}
                          className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg"
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {teamMembers.length === 0 && (
              <div className="text-center py-12">
                <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No team members yet</h3>
                <p className="text-gray-600 mb-4">Add your first team member to get started.</p>
                <button
                  onClick={createNewMember}
                  className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
                >
                  Add First Team Member
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
