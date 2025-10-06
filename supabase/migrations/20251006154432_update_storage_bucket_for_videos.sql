/*
  # Update Storage Bucket to Support Video Uploads
  
  1. Changes
    - Update media-uploads bucket to support video MIME types
    - Add support for video/mp4, video/webm, and video/quicktime
    - Increase file size limit from 10MB to 100MB (104857600 bytes)
    - Maintain existing image format support
  
  2. Rationale
    - Hero Video Manager needs to upload video files
    - Current configuration only allows image formats
    - Current 10MB limit is too small for video files
    - 100MB limit provides reasonable cap while supporting most videos
  
  3. Security
    - Maintains existing RLS policies for public access
    - No changes to authentication or authorization
*/

-- Update the media-uploads bucket to support videos and larger file sizes
UPDATE storage.buckets
SET 
  file_size_limit = 104857600, -- 100MB limit
  allowed_mime_types = ARRAY[
    'image/jpeg', 
    'image/jpg', 
    'image/png', 
    'image/webp', 
    'image/gif',
    'video/mp4',
    'video/webm',
    'video/quicktime'
  ]
WHERE id = 'media-uploads';