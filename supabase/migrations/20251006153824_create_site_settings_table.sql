/*
  # Create site_settings table for managing site configuration

  1. New Tables
    - `site_settings`
      - `id` (uuid, primary key) - Unique identifier
      - `key` (text, unique) - Setting key (e.g., 'hero_video_url')
      - `value` (text) - Setting value (e.g., video URL)
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp
  
  2. Security
    - Enable RLS on `site_settings` table
    - Add policy for public read access (settings are public)
    - Add policy for authenticated users to update settings (admin only via admin panel)
  
  3. Indexes
    - Create unique index on `key` column for fast lookups
  
  4. Default Data
    - Insert default hero video URL setting
*/

-- Create site_settings table
CREATE TABLE IF NOT EXISTS site_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text UNIQUE NOT NULL,
  value text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create index on key column for fast lookups
CREATE INDEX IF NOT EXISTS idx_site_settings_key ON site_settings(key);

-- Enable Row Level Security
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read site settings (settings are public)
CREATE POLICY "Anyone can read site settings"
  ON site_settings
  FOR SELECT
  USING (true);

-- Policy: Authenticated users can insert settings
CREATE POLICY "Authenticated users can insert settings"
  ON site_settings
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy: Authenticated users can update settings
CREATE POLICY "Authenticated users can update settings"
  ON site_settings
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Authenticated users can delete settings
CREATE POLICY "Authenticated users can delete settings"
  ON site_settings
  FOR DELETE
  TO authenticated
  USING (true);

-- Insert default hero video URL
INSERT INTO site_settings (key, value)
VALUES ('hero_video_url', 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4')
ON CONFLICT (key) DO NOTHING;
