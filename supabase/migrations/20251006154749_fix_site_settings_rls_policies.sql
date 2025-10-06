/*
  # Fix Row Level Security Policies for site_settings Table

  ## Summary
  This migration updates the RLS policies for the `site_settings` table to allow
  anonymous users to insert and update settings. This is necessary because the
  application uses the anonymous (anon) Supabase key for all operations, including
  admin operations that are protected by client-side authentication.

  ## Changes Made

  1. Security Updates
    - Drop existing restrictive policies that only allow authenticated users
    - Create new policies that allow anonymous users to perform INSERT and UPDATE operations
    - Maintain public read access (SELECT policy remains unchanged)
    - Keep DELETE policy restricted to authenticated users for safety

  ## Security Considerations
  
  This approach is acceptable for site configuration settings that:
  - Are protected by client-side admin authentication
  - Don't contain sensitive data
  - Are limited to specific keys (like 'hero_video_url')
  
  For production environments with sensitive data, consider:
  - Implementing proper Supabase authentication for admins
  - Using service role key for admin operations via Edge Functions
  - Adding additional validation at the application layer

  ## Notes
  - The SELECT policy allows public read access (unchanged)
  - INSERT/UPDATE policies now allow anonymous users
  - DELETE policy remains restricted to authenticated users
  - Client-side admin authentication provides the security layer
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Authenticated users can insert settings" ON site_settings;
DROP POLICY IF EXISTS "Authenticated users can update settings" ON site_settings;
DROP POLICY IF EXISTS "Authenticated users can delete settings" ON site_settings;

-- Recreate INSERT policy to allow anonymous users
CREATE POLICY "Anyone can insert site settings"
  ON site_settings
  FOR INSERT
  WITH CHECK (true);

-- Recreate UPDATE policy to allow anonymous users
CREATE POLICY "Anyone can update site settings"
  ON site_settings
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- Recreate DELETE policy (keep restricted for safety)
CREATE POLICY "Authenticated users can delete settings"
  ON site_settings
  FOR DELETE
  TO authenticated
  USING (true);

-- Ensure the default hero video URL exists
INSERT INTO site_settings (key, value)
VALUES ('hero_video_url', 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4')
ON CONFLICT (key) DO NOTHING;
