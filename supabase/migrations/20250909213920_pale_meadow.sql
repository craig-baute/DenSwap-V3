/*
  # Create storage bucket for media uploads

  1. Storage Setup
    - Create 'media-uploads' bucket for images and files
    - Enable public access for uploaded media
    - Set up RLS policies for secure uploads

  2. Security
    - Enable RLS on storage objects
    - Allow public read access for media files
    - Restrict upload/delete to authenticated users only
*/

-- Create the storage bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'media-uploads',
  'media-uploads', 
  true, 
  10485760, -- 10MB limit
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
) ON CONFLICT (id) DO NOTHING;

-- Enable RLS on storage objects
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Allow public read access to media files
CREATE POLICY "Public read access for media files"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'media-uploads');

-- Allow authenticated users to upload files
CREATE POLICY "Authenticated users can upload media"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'media-uploads');

-- Allow authenticated users to update their uploads
CREATE POLICY "Authenticated users can update media"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'media-uploads');

-- Allow authenticated users to delete files
CREATE POLICY "Authenticated users can delete media"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'media-uploads');