import React, { useState, useRef } from 'react';
import { Upload, X, CheckCircle, AlertCircle, Image, Loader2 } from 'lucide-react';
import { uploadFile, getPublicUrl } from '../lib/supabase';

interface FileUploadProps {
  onUploadComplete: (url: string, fileName: string) => void;
  acceptedTypes?: string[];
  maxSizeMB?: number;
  folder?: string;
  className?: string;
  fileTypeLabel?: string;
}

interface UploadingFile {
  id: string;
  name: string;
  progress: number;
  status: 'uploading' | 'success' | 'error';
  error?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  onUploadComplete,
  acceptedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
  maxSizeMB = 5,
  folder = 'uploads',
  className = '',
  fileTypeLabel = 'files'
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadingFiles, setUploadingFiles] = useState<UploadingFile[]>([]);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    if (!acceptedTypes.includes(file.type)) {
      const fileExtensions = acceptedTypes.map(type => {
        const parts = type.split('/');
        return parts[1] || parts[0];
      }).join(', ');
      return `File type not supported. Please use: ${fileExtensions}`;
    }

    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      return `File too large. Maximum size is ${maxSizeMB}MB`;
    }

    return null;
  };

  const updateFileProgress = (id: string, updates: Partial<UploadingFile>) => {
    setUploadingFiles(prev => prev.map(f => f.id === id ? { ...f, ...updates } : f));
  };

  const removeFile = (id: string) => {
    setUploadingFiles(prev => prev.filter(f => f.id !== id));
  };

  const handleSingleFileUpload = async (file: File, fileId: string) => {
    const validationError = validateFile(file);
    if (validationError) {
      updateFileProgress(fileId, { status: 'error', error: validationError, progress: 0 });
      setTimeout(() => removeFile(fileId), 3000);
      return;
    }

    try {
      const timestamp = new Date().getTime();
      const fileExtension = file.name.split('.').pop();
      const fileName = `${folder}/${timestamp}-${Math.random().toString(36).substring(7)}.${fileExtension}`;

      const progressInterval = setInterval(() => {
        updateFileProgress(fileId, {
          progress: Math.min((uploadingFiles.find(f => f.id === fileId)?.progress || 0) + 10, 90)
        });
      }, 100);

      await uploadFile(file, fileName);

      clearInterval(progressInterval);
      updateFileProgress(fileId, { progress: 100, status: 'success' });

      const publicUrl = getPublicUrl(fileName);
      onUploadComplete(publicUrl, file.name);

      setTimeout(() => removeFile(fileId), 2000);

    } catch (err: any) {
      updateFileProgress(fileId, {
        status: 'error',
        error: err.message || 'Upload failed',
        progress: 0
      });
      setTimeout(() => removeFile(fileId), 3000);
    }
  };

  const handleMultipleFiles = async (files: File[]) => {
    setError(null);

    const newFiles: UploadingFile[] = files.map(file => ({
      id: `${Date.now()}-${Math.random()}`,
      name: file.name,
      progress: 0,
      status: 'uploading' as const
    }));

    setUploadingFiles(prev => [...prev, ...newFiles]);

    await Promise.all(
      files.map((file, index) => handleSingleFileUpload(file, newFiles[index].id))
    );
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      await handleMultipleFiles(files);
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      await handleMultipleFiles(files);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const isUploading = uploadingFiles.some(f => f.status === 'uploading');

  return (
    <div className={className}>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
        className={`
          relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200
          ${isDragging
            ? 'border-emerald-500 bg-emerald-50'
            : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
          }
          ${isUploading ? 'opacity-75' : ''}
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileSelect}
          accept={acceptedTypes.join(',')}
          className="hidden"
          multiple
        />

        <div className="space-y-4">
          <Upload className="h-12 w-12 text-gray-400 mx-auto" />
          <div>
            <div className="text-lg font-semibold text-gray-900 mb-1">
              Drop {fileTypeLabel} here or click to upload
            </div>
            <div className="text-sm text-gray-600">
              Supports: {acceptedTypes.map(type => {
                const parts = type.split('/');
                return parts[1] || parts[0];
              }).join(', ')} up to {maxSizeMB}MB
            </div>
            <div className="text-sm text-emerald-600 font-medium mt-1">
              You can select multiple files at once
            </div>
          </div>
        </div>

        {error && (
          <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
            <div className="flex items-center gap-2 text-red-600">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm font-medium">{error}</span>
            </div>
          </div>
        )}
      </div>

      {uploadingFiles.length > 0 && (
        <div className="mt-4 space-y-2">
          {uploadingFiles.map((file) => (
            <div
              key={file.id}
              className={`p-4 rounded-lg border ${
                file.status === 'success'
                  ? 'bg-emerald-50 border-emerald-200'
                  : file.status === 'error'
                  ? 'bg-red-50 border-red-200'
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex items-center gap-3">
                {file.status === 'uploading' && (
                  <Loader2 className="h-5 w-5 text-emerald-600 animate-spin flex-shrink-0" />
                )}
                {file.status === 'success' && (
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                )}
                {file.status === 'error' && (
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                )}

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900 truncate">
                      {file.name}
                    </span>
                    {file.status === 'uploading' && (
                      <span className="text-xs text-gray-600 ml-2">{file.progress}%</span>
                    )}
                  </div>

                  {file.status === 'uploading' && (
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 h-1.5 rounded-full transition-all duration-300"
                        style={{ width: `${file.progress}%` }}
                      ></div>
                    </div>
                  )}

                  {file.status === 'success' && (
                    <div className="text-xs text-emerald-600">Upload successful!</div>
                  )}

                  {file.status === 'error' && (
                    <div className="text-xs text-red-600">{file.error}</div>
                  )}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(file.id);
                  }}
                  className="p-1 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                >
                  <X className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
