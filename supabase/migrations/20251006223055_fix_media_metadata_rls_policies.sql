/*
  # Fix Media Metadata RLS Policies

  1. Changes
    - Drop existing restrictive policies that require authentication
    - Add new policies that allow public access to media metadata
    - This allows the Media Library to work without authentication

  2. Security Note
    - These policies allow public access since the app doesn't have authentication
    - If authentication is added later, these policies should be updated
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Authenticated users can view media metadata" ON media_metadata;
DROP POLICY IF EXISTS "Authenticated users can insert media metadata" ON media_metadata;
DROP POLICY IF EXISTS "Authenticated users can update media metadata" ON media_metadata;
DROP POLICY IF EXISTS "Authenticated users can delete media metadata" ON media_metadata;

-- Create new public policies
CREATE POLICY "Public can view media metadata"
  ON media_metadata
  FOR SELECT
  USING (true);

CREATE POLICY "Public can insert media metadata"
  ON media_metadata
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Public can update media metadata"
  ON media_metadata
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Public can delete media metadata"
  ON media_metadata
  FOR DELETE
  USING (true);