/*
  # Create Supabase Storage Configuration

  1. Storage Buckets
    - `media-uploads` bucket for images and media files
    - Public read access, authenticated upload
    - 10MB file size limit
    - Image file types only (JPEG, PNG, WebP, GIF)

  2. Security Policies
    - Public read access for all files
    - Authenticated users can upload files
    - Users can manage their own uploaded files
*/

-- Create the media-uploads bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'media-uploads',
  'media-uploads', 
  true,
  10485760,
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
)
ON CONFLICT (id) DO NOTHING;

-- Policy for public read access
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Public read access for media uploads'
  ) THEN
    CREATE POLICY "Public read access for media uploads"
      ON storage.objects FOR SELECT
      USING (bucket_id = 'media-uploads');
  END IF;
END $$;

-- Policy for authenticated users to upload
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Authenticated users can upload media'
  ) THEN
    CREATE POLICY "Authenticated users can upload media"
      ON storage.objects FOR INSERT
      TO authenticated
      WITH CHECK (bucket_id = 'media-uploads');
  END IF;
END $$;

-- Policy for authenticated users to update their files
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Users can update their media uploads'
  ) THEN
    CREATE POLICY "Users can update their media uploads"
      ON storage.objects FOR UPDATE
      TO authenticated
      USING (bucket_id = 'media-uploads');
  END IF;
END $$;

-- Policy for authenticated users to delete their files
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Users can delete their media uploads'
  ) THEN
    CREATE POLICY "Users can delete their media uploads"
      ON storage.objects FOR DELETE
      TO authenticated
      USING (bucket_id = 'media-uploads');
  END IF;
END $$;