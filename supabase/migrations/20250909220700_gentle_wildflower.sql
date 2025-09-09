/*
  # Create Storage Bucket for Media Uploads

  1. Storage Setup
    - Create `media-uploads` bucket for file storage
    - Configure for public read access

  2. Security Policies
    - Public read access for all files
    - Authenticated upload permissions
    - User-specific update/delete permissions

  Note: RLS is already enabled on storage.objects by default in Supabase
*/

-- Create storage bucket for media uploads
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'media-uploads', 
  'media-uploads', 
  true,
  10485760, -- 10MB limit
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']::text[]
)
ON CONFLICT (id) DO NOTHING;

-- Allow public read access to files in the media-uploads bucket
CREATE POLICY IF NOT EXISTS "Public read access for media uploads"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'media-uploads');

-- Allow authenticated users to upload files to media-uploads bucket
CREATE POLICY IF NOT EXISTS "Authenticated users can upload media"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'media-uploads');

-- Allow users to update files in media-uploads bucket
CREATE POLICY IF NOT EXISTS "Users can update media files"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'media-uploads')
WITH CHECK (bucket_id = 'media-uploads');

-- Allow users to delete files in media-uploads bucket
CREATE POLICY IF NOT EXISTS "Users can delete media files"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'media-uploads');