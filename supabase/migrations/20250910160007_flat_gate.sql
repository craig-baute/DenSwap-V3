/*
  # Fix Storage Bucket Policies for Media Uploads

  1. Security Changes
    - Allow public uploads to media-uploads bucket
    - Allow public read access to uploaded files
    - Allow public delete/update for file management

  Note: This is configured for an admin panel where authentication
  is handled separately from Supabase auth.
*/

-- Drop existing policies if they exist
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'storage' AND tablename = 'objects' AND policyname = 'Public read access for media uploads') THEN
    DROP POLICY "Public read access for media uploads" ON storage.objects;
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'storage' AND tablename = 'objects' AND policyname = 'Authenticated users can upload media') THEN
    DROP POLICY "Authenticated users can upload media" ON storage.objects;
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'storage' AND tablename = 'objects' AND policyname = 'Authenticated users can update their media') THEN
    DROP POLICY "Authenticated users can update their media" ON storage.objects;
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'storage' AND tablename = 'objects' AND policyname = 'Authenticated users can delete their media') THEN
    DROP POLICY "Authenticated users can delete their media" ON storage.objects;
  END IF;
END $$;

-- Create new policies that allow public access for admin panel
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