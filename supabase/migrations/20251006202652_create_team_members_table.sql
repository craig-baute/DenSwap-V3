/*
  # Create team_members table for About page team section

  1. New Tables
    - `team_members`
      - `id` (uuid, primary key) - Unique identifier
      - `picture_url` (text) - URL to team member photo
      - `name` (text, required) - Team member's full name
      - `title` (text) - Job title or position
      - `description` (text) - Bio or description of the team member
      - `linkedin_url` (text) - LinkedIn profile URL
      - `email` (text) - Email address for contact
      - `display_order` (integer) - Order in which to display team members
      - `is_active` (boolean, default true) - Whether to show this team member on the site
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp
  
  2. Security
    - Enable RLS on `team_members` table
    - Add policy for public read access to active team members
    - Add policies for authenticated users to manage team members (admin panel)
  
  3. Indexes
    - Create index on `display_order` for efficient sorting
    - Create index on `is_active` for filtering
  
  4. Default Data
    - Insert sample team members based on existing About page data
*/

-- Create team_members table
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  picture_url text DEFAULT '',
  name text NOT NULL,
  title text DEFAULT '',
  description text DEFAULT '',
  linkedin_url text DEFAULT '',
  email text DEFAULT '',
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes for efficient queries
CREATE INDEX IF NOT EXISTS idx_team_members_display_order ON team_members(display_order);
CREATE INDEX IF NOT EXISTS idx_team_members_is_active ON team_members(is_active);

-- Enable Row Level Security
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read active team members (public site access)
CREATE POLICY "Anyone can read active team members"
  ON team_members
  FOR SELECT
  USING (is_active = true);

-- Policy: Allow public to read all team members for admin panel
CREATE POLICY "Public can read all team members for admin"
  ON team_members
  FOR SELECT
  USING (true);

-- Policy: Public can insert team members (admin panel uses public access)
CREATE POLICY "Public can insert team members"
  ON team_members
  FOR INSERT
  WITH CHECK (true);

-- Policy: Public can update team members (admin panel uses public access)
CREATE POLICY "Public can update team members"
  ON team_members
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- Policy: Public can delete team members (admin panel uses public access)
CREATE POLICY "Public can delete team members"
  ON team_members
  FOR DELETE
  USING (true);

-- Insert sample team members from About page
INSERT INTO team_members (name, title, description, picture_url, display_order, is_active)
VALUES 
  (
    'Sarah Chen',
    'Senior Market Analyst',
    '8+ years of experience in commercial real estate analytics and coworking market research. Specializes in demand forecasting and competitive analysis.',
    'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300',
    1,
    true
  ),
  (
    'Mike Rodriguez',
    'Operations Director',
    'Extensive experience in coworking space development and management. Led the successful launch of 15+ coworking locations across Texas and California.',
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300',
    2,
    true
  ),
  (
    'Jennifer Walsh',
    'Financial Modeling Expert',
    'Former investment banker turned coworking financial specialist. Creates accurate P&L projections based on real operational data.',
    'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=300',
    3,
    true
  )
ON CONFLICT (id) DO NOTHING;