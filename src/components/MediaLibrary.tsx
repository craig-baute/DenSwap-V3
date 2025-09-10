import React, { useState, useEffect } from 'react';
import { FileUpload } from './FileUpload';
import { listFiles, getPublicUrl, deleteFile } from '../lib/supabase';
import { Image, Trash2, Copy, CheckCircle, Folder, Search, Grid, List, Loader2 } from 'lucide-react';

interface MediaFile {
  name: string;
  id: string;
  updated_at: string;
  created_at: string;
  last_accessed_at: string;
  metadata: {
    size: number;
    mimetype: string;
  };
}

interface MediaLibraryProps {
  onSelectMedia?: (url: string, fileName: string) => void;
  folder?: string;
  className?: string;
}

export const MediaLibrary: React.FC<MediaLibraryProps> = ({
  onSelectMedia,
  folder = 'uploads',
  className = ''
}) => {
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  useEffect(() => {
    loadFiles();
  }, [folder]);

  const loadFiles = async () => {
    try {
      setLoading(true);
      const fileList = await listFiles(folder);
      setFiles(fileList || []);
    } catch (error) {
      console.error('Error loading files:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUploadComplete = (url: string, fileName: string) => {
    loadFiles(); // Refresh the file list
    if (onSelectMedia) {
      onSelectMedia(url, fileName);
    }
  };

  const handleDeleteFile = async (fileName: string) => {
    if (!confirm('Are you sure you want to delete this file?')) return;

    try {
      await deleteFile(`${folder}/${fileName}`);
      await loadFiles();
    } catch (error) {
      console.error('Error deleting file:', error);
      alert('Failed to delete file');
    }
  };

  const copyUrlToClipboard = async (fileName: string) => {
    const url = getPublicUrl(`${folder}/${fileName}`);
    await navigator.clipboard.writeText(url);
    setCopiedUrl(fileName);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getFileUrl = (fileName: string) => getPublicUrl(`${folder}/${fileName}`);

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Upload Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload New Media</h3>
        <FileUpload
          onUploadComplete={handleUploadComplete}
          folder={folder}
          acceptedTypes={['image/jpeg', 'image/png', 'image/webp', 'image/gif']}
          maxSizeMB={10}
        />
      </div>

      {/* Media Library */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Media Library</h3>
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search files..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            {/* View Toggle */}
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-emerald-100 text-emerald-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-emerald-100 text-emerald-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 text-emerald-600 animate-spin" />
            <span className="ml-3 text-gray-600">Loading media files...</span>
          </div>
        ) : filteredFiles.length === 0 ? (
          <div className="text-center py-12">
            <Folder className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-900 mb-2">No files found</h4>
            <p className="text-gray-600">
              {searchTerm ? 'Try adjusting your search terms' : 'Upload your first media file to get started'}
            </p>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4' : 'space-y-2'}>
            {filteredFiles.map((file) => (
              <div
                key={file.name}
                className={`group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow ${
                  viewMode === 'list' ? 'flex items-center p-4' : 'aspect-square'
                }`}
              >
                {viewMode === 'grid' ? (
                  <>
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={getFileUrl(file.name)}
                        alt={file.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200">
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => handleDeleteFile(file.name)}
                            className="p-1 bg-red-600 text-white rounded-lg hover:bg-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="text-sm font-medium text-gray-900 truncate mb-1">
                        {file.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {formatFileSize(file.metadata?.size || 0)}
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => copyUrlToClipboard(file.name)}
                          className={`flex-1 text-xs px-2 py-1 rounded transition-colors ${
                            copiedUrl === file.name
                              ? 'bg-emerald-100 text-emerald-700'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          {copiedUrl === file.name ? (
                            <CheckCircle className="h-3 w-3 mx-auto" />
                          ) : (
                            <Copy className="h-3 w-3 mx-auto" />
                          )}
                        </button>
                        {onSelectMedia && (
                          <button
                            onClick={() => onSelectMedia(getFileUrl(file.name), file.name)}
                            className="flex-1 text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded hover:bg-emerald-200 transition-colors"
                          >
                            Use
                          </button>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-16 h-16 flex-shrink-0">
                      <img
                        src={getFileUrl(file.name)}
                        alt={file.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1 ml-4">
                      <div className="font-medium text-gray-900">{file.name}</div>
                      <div className="text-sm text-gray-500">
                        {formatFileSize(file.metadata?.size || 0)} • {new Date(file.updated_at).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => copyUrlToClipboard(file.name)}
                        className={`p-2 rounded-lg transition-colors ${
                          copiedUrl === file.name
                            ? 'bg-emerald-100 text-emerald-600'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                        title="Copy URL"
                      >
                        {copiedUrl === file.name ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </button>
                      {onSelectMedia && (
                        <button
                          onClick={() => onSelectMedia(getFileUrl(file.name), file.name)}
                          className="p-2 bg-emerald-100 text-emerald-600 rounded-lg hover:bg-emerald-200 transition-colors"
                          title="Use Image"
                        >
                          <Image className="h-4 w-4" />
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteFile(file.name)}
                        className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};