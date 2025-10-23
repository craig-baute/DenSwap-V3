-- Create blog_posts table
CREATE TABLE public.blog_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    publish_date TIMESTAMP WITH TIME ZONE,
    read_time INT,
    category TEXT,
    image_url TEXT,
    author_id UUID REFERENCES public.authors(id), -- Assuming authors table will be created
    slug TEXT UNIQUE NOT NULL,
    is_video BOOLEAN DEFAULT FALSE,
    status TEXT DEFAULT 'draft' NOT NULL, -- 'draft', 'published'
    tags TEXT[],
    seo_title TEXT,
    seo_description TEXT
);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Policy for public read access to published posts
CREATE POLICY "Public blog posts are viewable by everyone." ON public.blog_posts
  FOR SELECT USING (status = 'published');

-- Policy for authenticated users to manage their own posts (if applicable, or admin)
-- For now, assuming admin can do everything. This might need refinement based on actual admin auth.
CREATE POLICY "Authenticated users can create blog posts." ON public.blog_posts
  FOR INSERT WITH CHECK (auth.role() = 'authenticated'); -- Adjust role as needed

CREATE POLICY "Authenticated users can update blog posts." ON public.blog_posts
  FOR UPDATE USING (auth.role() = 'authenticated'); -- Adjust role as needed

CREATE POLICY "Authenticated users can delete blog posts." ON public.blog_posts
  FOR DELETE USING (auth.role() = 'authenticated'); -- Adjust role as needed

-- Add indexes for performance
CREATE INDEX idx_blog_posts_slug ON public.blog_posts (slug);
CREATE INDEX idx_blog_posts_author_id ON public.blog_posts (author_id);
CREATE INDEX idx_blog_posts_status ON public.blog_posts (status);
CREATE INDEX idx_blog_posts_category ON public.blog_posts (category);
