import { supabase } from './supabase';
import { v4 as uuidv4 } from 'uuid';

// --- Type Definitions (assuming localStorage structure) ---
interface LocalStorageBlogPost {
  id?: string;
  title: string;
  excerpt?: string;
  content: string;
  date?: string;
  readTime?: number;
  category?: string;
  imageUrl?: string;
  authorId?: string;
  slug: string;
  is_video?: boolean;
  status?: 'draft' | 'published';
  tags?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

interface LocalStorageAuthor {
  id?: string;
  name: string;
  bio?: string;
  photoUrl?: string;
  email?: string;
  linkedinUrl?: string;
}

interface LocalStorageCaseStudy {
  id?: string;
  title: string;
  subtitle?: string;
  description: string;
  metrics?: any; // JSONB
  challenge?: string;
  solution?: string;
  results?: string;
  clientInfo?: any; // JSONB
  imageUrl?: string;
  category?: string;
  tags?: string[];
  status?: 'draft' | 'published';
}

// --- Migration Functions ---

export const migrateBlogPosts = async () => {
  const localPostsString = localStorage.getItem('blogPosts'); // Assuming key 'blogPosts'
  if (!localPostsString) {
    console.log('No blog posts found in localStorage to migrate.');
    return;
  }

  try {
    const localPosts: LocalStorageBlogPost[] = JSON.parse(localPostsString);
    console.log(`Found ${localPosts.length} blog posts in localStorage. Migrating...`);

    for (const post of localPosts) {
      const { data, error } = await supabase
        .from('blog_posts')
        .upsert({
          id: post.id || uuidv4(), // Use existing ID or generate new
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          publish_date: post.date ? new Date(post.date).toISOString() : null,
          read_time: post.readTime,
          category: post.category,
          image_url: post.imageUrl,
          author_id: post.authorId,
          slug: post.slug,
          is_video: post.is_video,
          status: post.status || 'draft',
          tags: post.tags,
          seo_title: post.seoTitle,
          seo_description: post.seoDescription,
          created_at: new Date().toISOString(), // Assuming creation time is now if not in local storage
          updated_at: new Date().toISOString(),
        }, { onConflict: 'slug' }) // Conflict on slug to prevent duplicates
        .select();

      if (error) {
        console.error('Error migrating blog post:', post.title, error);
      } else {
        console.log('Migrated blog post:', data);
      }
    }
    console.log('Blog post migration complete.');
    localStorage.removeItem('blogPosts'); // Clear localStorage after successful migration
  } catch (e) {
    console.error('Failed to parse or migrate blog posts from localStorage:', e);
  }
};

export const migrateAuthors = async () => {
  const localAuthorsString = localStorage.getItem('authors'); // Assuming key 'authors'
  if (!localAuthorsString) {
    console.log('No authors found in localStorage to migrate.');
    return;
  }

  try {
    const localAuthors: LocalStorageAuthor[] = JSON.parse(localAuthorsString);
    console.log(`Found ${localAuthors.length} authors in localStorage. Migrating...`);

    for (const author of localAuthors) {
      const { data, error } = await supabase
        .from('authors')
        .upsert({
          id: author.id || uuidv4(),
          name: author.name,
          bio: author.bio,
          photo_url: author.photoUrl,
          email: author.email,
          linkedin_url: author.linkedinUrl,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }, { onConflict: 'email' }) // Conflict on email to prevent duplicates
        .select();

      if (error) {
        console.error('Error migrating author:', author.name, error);
      } else {
        console.log('Migrated author:', data);
      }
    }
    console.log('Author migration complete.');
    localStorage.removeItem('authors'); // Clear localStorage after successful migration
  } catch (e) {
    console.error('Failed to parse or migrate authors from localStorage:', e);
  }
};

export const migrateCaseStudies = async () => {
  const localCaseStudiesString = localStorage.getItem('caseStudies'); // Assuming key 'caseStudies'
  if (!localCaseStudiesString) {
    console.log('No case studies found in localStorage to migrate.');
    return;
  }

  try {
    const localCaseStudies: LocalStorageCaseStudy[] = JSON.parse(localCaseStudiesString);
    console.log(`Found ${localCaseStudies.length} case studies in localStorage. Migrating...`);

    for (const cs of localCaseStudies) {
      const { data, error } = await supabase
        .from('case_studies')
        .upsert({
          id: cs.id || uuidv4(),
          title: cs.title,
          subtitle: cs.subtitle,
          description: cs.description,
          metrics: cs.metrics,
          challenge: cs.challenge,
          solution: cs.solution,
          results: cs.results,
          client_info: cs.clientInfo,
          image_url: cs.imageUrl,
          category: cs.category,
          tags: cs.tags,
          status: cs.status || 'draft',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }, { onConflict: 'title' }) // Conflict on title to prevent duplicates (adjust if a better unique field exists)
        .select();

      if (error) {
        console.error('Error migrating case study:', cs.title, error);
      } else {
        console.log('Migrated case study:', data);
      }
    }
    console.log('Case study migration complete.');
    localStorage.removeItem('caseStudies'); // Clear localStorage after successful migration
  } catch (e) {
    console.error('Failed to parse or migrate case studies from localStorage:', e);
  }
};

export const runAllMigrations = async () => {
  console.log('Running all localStorage to Supabase migrations...');
  await migrateAuthors(); // Authors first, as blog_posts references them
  await migrateBlogPosts();
  await migrateCaseStudies();
  console.log('All migrations attempted.');
};
