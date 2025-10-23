-- Create case_studies table
CREATE TABLE public.case_studies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    title TEXT NOT NULL,
    subtitle TEXT,
    description TEXT NOT NULL,
    metrics JSONB,
    challenge TEXT,
    solution TEXT,
    results TEXT,
    client_info JSONB,
    image_url TEXT,
    category TEXT,
    tags TEXT[],
    status TEXT DEFAULT 'draft' NOT NULL -- 'draft', 'published'
);

-- Enable Row Level Security
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;

-- Policy for public read access to published case studies
CREATE POLICY "Public case studies are viewable by everyone." ON public.case_studies
  FOR SELECT USING (status = 'published');

-- Policy for authenticated users to manage case studies
CREATE POLICY "Authenticated users can create case studies." ON public.case_studies
  FOR INSERT WITH CHECK (auth.role() = 'authenticated'); -- Adjust role as needed

CREATE POLICY "Authenticated users can update case studies." ON public.case_studies
  FOR UPDATE USING (auth.role() = 'authenticated'); -- Adjust role as needed

CREATE POLICY "Authenticated users can delete case studies." ON public.case_studies
  FOR DELETE USING (auth.role() = 'authenticated'); -- Adjust role as needed

-- Add indexes for performance
CREATE INDEX idx_case_studies_category ON public.case_studies (category);
CREATE INDEX idx_case_studies_status ON public.case_studies (status);
