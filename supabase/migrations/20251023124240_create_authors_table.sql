-- Create authors table
CREATE TABLE public.authors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    name TEXT NOT NULL,
    bio TEXT,
    photo_url TEXT,
    email TEXT UNIQUE,
    linkedin_url TEXT
);

-- Enable Row Level Security
ALTER TABLE public.authors ENABLE ROW LEVEL SECURITY;

-- Policy for public read access to authors
CREATE POLICY "Public authors are viewable by everyone." ON public.authors
  FOR SELECT USING (TRUE);

-- Policy for authenticated users to manage authors
CREATE POLICY "Authenticated users can create authors." ON public.authors
  FOR INSERT WITH CHECK (auth.role() = 'authenticated'); -- Adjust role as needed

CREATE POLICY "Authenticated users can update authors." ON public.authors
  FOR UPDATE USING (auth.role() = 'authenticated'); -- Adjust role as needed

CREATE POLICY "Authenticated users can delete authors." ON public.authors
  FOR DELETE USING (auth.role() = 'authenticated'); -- Adjust role as needed
