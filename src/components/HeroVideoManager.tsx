import React, { useState, useEffect } from 'react';
import { FileUpload } from './FileUpload';
import { ArrowLeft, Video, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface HeroVideoManagerProps {
  onBack: () => void;
}

const DEFAULT_VIDEO_URL = 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4';

export const HeroVideoManager: React.FC<HeroVideoManagerProps> = ({ onBack }) => {
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string>(DEFAULT_VIDEO_URL);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  useEffect(() => {
    loadCurrentVideo();
  }, []);

  const loadCurrentVideo = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('site_settings')
        .select('value')
        .eq('key', 'hero_video_url')
        .maybeSingle();

      if (error && error.code !== 'PGRST116') {
        console.error('Error loading video:', error);
      }

      if (data?.value) {
        setCurrentVideoUrl(data.value);
      } else {
        setCurrentVideoUrl(DEFAULT_VIDEO_URL);
      }
    } catch (error) {
      console.error('Error loading video:', error);
      setCurrentVideoUrl(DEFAULT_VIDEO_URL);
    } finally {
      setLoading(false);
    }
  };

  const handleVideoUpload = async (url: string, fileName: string) => {
    try {
      setSaving(true);
      setMessage(null);

      const { error } = await supabase
        .from('site_settings')
        .upsert({
          key: 'hero_video_url',
          value: url,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'key'
        });

      if (error) throw error;

      setCurrentVideoUrl(url);
      setMessage({ type: 'success', text: 'Hero video updated successfully!' });

      window.dispatchEvent(new Event('hero-video-updated'));
    } catch (error: any) {
      console.error('Error saving video:', error);
      setMessage({ type: 'error', text: error.message || 'Failed to save video' });
    } finally {
      setSaving(false);
    }
  };

  const handleResetToDefault = async () => {
    if (!confirm('Are you sure you want to reset to the default video?')) return;

    try {
      setSaving(true);
      setMessage(null);

      const { error } = await supabase
        .from('site_settings')
        .upsert({
          key: 'hero_video_url',
          value: DEFAULT_VIDEO_URL,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'key'
        });

      if (error) throw error;

      setCurrentVideoUrl(DEFAULT_VIDEO_URL);
      setMessage({ type: 'success', text: 'Reset to default video successfully!' });

      window.dispatchEvent(new Event('hero-video-updated'));
    } catch (error: any) {
      console.error('Error resetting video:', error);
      setMessage({ type: 'error', text: error.message || 'Failed to reset video' });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </button>
          <div className="flex items-center gap-3">
            <div className="bg-emerald-100 p-3 rounded-lg">
              <Video className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Hero Video Manager</h1>
              <p className="text-gray-600">Upload and manage the homepage hero background video</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {message && (
          <div className={`mb-6 p-4 rounded-lg border ${
            message.type === 'success'
              ? 'bg-green-50 border-green-200 text-green-800'
              : 'bg-red-50 border-red-200 text-red-800'
          }`}>
            <div className="flex items-center gap-2">
              {message.type === 'success' ? (
                <CheckCircle className="h-5 w-5" />
              ) : (
                <AlertCircle className="h-5 w-5" />
              )}
              <span className="font-medium">{message.text}</span>
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Hero Video</h2>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden border border-gray-200">
                <video
                  src={currentVideoUrl}
                  className="w-full h-64 object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-emerald-900/70 flex items-center justify-center">
                  <div className="text-white text-center">
                    <p className="text-lg font-semibold mb-2">Preview with Green Overlay</p>
                    <p className="text-sm opacity-90">This is how it appears on the homepage</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Video URL:</span>
                  <br />
                  <span className="break-all">{currentVideoUrl}</span>
                </div>
                <button
                  onClick={handleResetToDefault}
                  disabled={saving || currentVideoUrl === DEFAULT_VIDEO_URL}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <RefreshCw className="h-4 w-4" />
                  Reset to Default
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload New Video</h2>
          <p className="text-gray-600 mb-6">
            Upload a new MP4 video to replace the hero background. The video will autoplay with a green overlay on the homepage.
          </p>
          <FileUpload
            onUploadComplete={handleVideoUpload}
            acceptedTypes={['video/mp4', 'video/webm', 'video/quicktime']}
            maxSizeMB={100}
            folder="hero-videos"
            fileTypeLabel="video"
          />
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-sm font-semibold text-blue-900 mb-2">Video Guidelines</h3>
            <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
              <li>Recommended resolution: 1920x1080 or higher</li>
              <li>Recommended format: MP4 (H.264 codec)</li>
              <li>Keep file size under 100MB for best performance</li>
              <li>Video should be at least 10 seconds long for seamless looping</li>
              <li>Consider the green overlay when selecting video content</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
