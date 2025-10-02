/*
  # Fix Storage Bucket Configuration
  
  1. Storage Setup
    - Create media-uploads bucket if it doesn't exist
    - Configure for public access with 10MB limit
    - Support common image formats
  
  2. Security Policies
    - Public read access to all files in bucket
    - Public upload, update, and delete access
    
  Note: Storage.objects table already has RLS enabled by default in Supabase.
  We only need to create the bucket and policies.
*/

-- Create the media-uploads bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'media-uploads',
  'media-uploads', 
  true,
  10485760, -- 10MB limit
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
)
ON CONFLICT (id) DO UPDATE SET
  public = EXCLUDED.public,
  file_size_limit = EXCLUDED.file_size_limit,
  allowed_mime_types = EXCLUDED.allowed_mime_types;

-- Drop existing policies safely
DROP POLICY IF EXISTS "Public read access for media uploads" ON storage.objects;
DROP POLICY IF EXISTS "Public upload access for media uploads" ON storage.objects;
DROP POLICY IF EXISTS "Public update access for media uploads" ON storage.objects;
DROP POLICY IF EXISTS "Public delete access for media uploads" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload media" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update their media" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete their media" ON storage.objects;
DROP POLICY IF EXISTS "Users can update their media uploads" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete their media uploads" ON storage.objects;
DROP POLICY IF EXISTS "Users can update media files" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete media files" ON storage.objects;

-- Create new policies for public access
CREATE POLICY "Public read access for media uploads"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'media-uploads');

CREATE POLICY "Public upload access for media uploads"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'media-uploads');

CREATE POLICY "Public update access for media uploads"
  ON storage.objects
  FOR UPDATE
  USING (bucket_id = 'media-uploads')
  WITH CHECK (bucket_id = 'media-uploads');

CREATE POLICY "Public delete access for media uploads"
  ON storage.objects
  FOR DELETE
  USING (bucket_id = 'media-uploads');