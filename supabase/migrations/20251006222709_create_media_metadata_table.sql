/*
  # Create Media Metadata Table

  1. New Tables
    - `media_metadata`
      - `id` (uuid, primary key)
      - `file_name` (text, unique) - Original file name in storage
      - `title` (text) - Custom display title for the file
      - `folder` (text) - Storage folder path (e.g., 'uploads')
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `media_metadata` table
    - Add policies for authenticated users to manage media metadata
*/

CREATE TABLE IF NOT EXISTS media_metadata (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  file_name text NOT NULL,
  title text DEFAULT '',
  folder text DEFAULT 'uploads',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(file_name, folder)
);

ALTER TABLE media_metadata ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view media metadata"
  ON media_metadata
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert media metadata"
  ON media_metadata
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update media metadata"
  ON media_metadata
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete media metadata"
  ON media_metadata
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_media_metadata_file_folder ON media_metadata(file_name, folder);