-- Create user profiles table
CREATE TABLE public.profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  email text NOT NULL,
  full_name text,
  user_type text CHECK (user_type IN ('member', 'student')) NOT NULL DEFAULT 'member',
  phone text,
  bio text,
  avatar_url text,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  updated_at timestamp with time zone DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view all profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);

-- Create newsletter subscribers table
CREATE TABLE public.newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamp with time zone DEFAULT now() NOT NULL,
  is_active boolean DEFAULT true NOT NULL
);

-- Enable RLS
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Newsletter policies
CREATE POLICY "Anyone can subscribe to newsletter" ON public.newsletter_subscribers FOR INSERT WITH CHECK (true);
CREATE POLICY "Only authenticated users can view subscribers" ON public.newsletter_subscribers FOR SELECT USING (auth.role() = 'authenticated');

-- Create courses table
CREATE TABLE public.courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  price numeric(10,2) NOT NULL,
  original_price numeric(10,2),
  duration text,
  level text,
  category text,
  image_url text,
  syllabus_url text,
  is_active boolean DEFAULT true NOT NULL,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  updated_at timestamp with time zone DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

-- Courses policies
CREATE POLICY "Anyone can view active courses" ON public.courses FOR SELECT USING (is_active = true);
CREATE POLICY "Only admins can manage courses" ON public.courses FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() AND user_type = 'admin'
  )
);

-- Create enrollments table
CREATE TABLE public.enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  course_id uuid REFERENCES public.courses(id) ON DELETE CASCADE NOT NULL,
  enrolled_at timestamp with time zone DEFAULT now() NOT NULL,
  status text CHECK (status IN ('active', 'completed', 'cancelled')) DEFAULT 'active' NOT NULL,
  UNIQUE(user_id, course_id)
);

-- Enable RLS
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;

-- Enrollments policies
CREATE POLICY "Users can view their own enrollments" ON public.enrollments FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can enroll in courses" ON public.enrollments FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own enrollments" ON public.enrollments FOR UPDATE USING (auth.uid() = user_id);

-- Create services table
CREATE TABLE public.services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  category text NOT NULL,
  features text[],
  price_type text CHECK (price_type IN ('fixed', 'quote')) DEFAULT 'quote',
  base_price numeric(10,2),
  is_active boolean DEFAULT true NOT NULL,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  updated_at timestamp with time zone DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

-- Services policies
CREATE POLICY "Anyone can view active services" ON public.services FOR SELECT USING (is_active = true);
CREATE POLICY "Only admins can manage services" ON public.services FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() AND user_type = 'admin'
  )
);

-- Create quote requests table
CREATE TABLE public.quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  service_id uuid REFERENCES public.services(id) ON DELETE CASCADE NOT NULL,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text,
  status text CHECK (status IN ('pending', 'contacted', 'quoted', 'accepted', 'rejected')) DEFAULT 'pending' NOT NULL,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  updated_at timestamp with time zone DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

-- Quote requests policies
CREATE POLICY "Users can view their own quote requests" ON public.quote_requests FOR SELECT USING (auth.uid() = user_id OR user_id IS NULL);
CREATE POLICY "Anyone can create quote requests" ON public.quote_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can update their own quote requests" ON public.quote_requests FOR UPDATE USING (auth.uid() = user_id);

-- Create gadgets table
CREATE TABLE public.gadgets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price numeric(10,2) NOT NULL,
  category text NOT NULL,
  condition text CHECK (condition IN ('new', 'refurbished', 'used')) DEFAULT 'new',
  status text CHECK (status IN ('available', 'sold', 'reserved')) DEFAULT 'available',
  image_url text,
  specifications jsonb,
  is_active boolean DEFAULT true NOT NULL,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  updated_at timestamp with time zone DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE public.gadgets ENABLE ROW LEVEL SECURITY;

-- Gadgets policies
CREATE POLICY "Anyone can view available gadgets" ON public.gadgets FOR SELECT USING (is_active = true);
CREATE POLICY "Only admins can manage gadgets" ON public.gadgets FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() AND user_type = 'admin'
  )
);

-- Create about content table
CREATE TABLE public.about_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section_name text UNIQUE NOT NULL,
  title text,
  content text,
  metadata jsonb,
  is_active boolean DEFAULT true NOT NULL,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  updated_at timestamp with time zone DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE public.about_content ENABLE ROW LEVEL SECURITY;

-- About content policies
CREATE POLICY "Anyone can view active about content" ON public.about_content FOR SELECT USING (is_active = true);
CREATE POLICY "Only admins can manage about content" ON public.about_content FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() AND user_type = 'admin'
  )
);

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data ->> 'full_name'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update updated_at column
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers for updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_courses_updated_at BEFORE UPDATE ON public.courses FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON public.services FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_quote_requests_updated_at BEFORE UPDATE ON public.quote_requests FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_gadgets_updated_at BEFORE UPDATE ON public.gadgets FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_about_content_updated_at BEFORE UPDATE ON public.about_content FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial course data
INSERT INTO public.courses (title, description, price, original_price, duration, level, category, image_url) VALUES
('Software Development', 'Master HTML & CSS, JavaScript, Git & Github, React', 80000, 120000, '6 months', 'Beginner to Intermediate', 'Programming', '/course-software-dev.jpg'),
('UI/UX Design', 'Create stunning user experiences and interfaces', 70000, 80000, '4 months', 'Beginner to Intermediate', 'Design', '/course-uiux-design.jpg'),
('Data Analysis', 'Learn Python, SQL, and data visualization', 115000, 160000, '5 months', 'Intermediate', 'Analytics', '/course-data-analysis.jpg'),
('Digital Marketing', 'Grow businesses through digital strategies', 80000, NULL, '3 months', 'Beginner', 'Marketing', '/course-digital-marketing.jpg'),
('Video Editing', 'Professional video production and editing', 90000, NULL, '3 months', 'Beginner to Intermediate', 'Media', '/course-video-editing.jpg'),
('Graphics Design', 'Visual communication and brand design', 85000, NULL, '4 months', 'Beginner', 'Design', '/course-graphics-design.jpg');

-- Insert initial services data
INSERT INTO public.services (title, description, category, features) VALUES
('Software Development', 'Custom web and mobile app development, API integration, database design', 'Development', ARRAY['Full-stack Development', 'Mobile Apps', 'API Integration', 'Database Design']),
('Graphics Design', 'Logo design, branding, marketing materials, social media graphics', 'Design', ARRAY['Brand Identity', 'Marketing Materials', 'Social Media Graphics', 'Print Design']),
('Video Editing', 'Professional video editing, motion graphics, promotional videos', 'Media', ARRAY['Video Production', 'Motion Graphics', 'Color Grading', 'Audio Enhancement']),
('Data Analysis', 'Business intelligence, data visualization, analytics reporting', 'Analytics', ARRAY['Business Intelligence', 'Data Visualization', 'Predictive Analytics', 'Reports']),
('Digital Marketing', 'SEO optimization, social media marketing, content strategy', 'Marketing', ARRAY['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'PPC Campaigns']);

-- Create storage bucket for course materials
INSERT INTO storage.buckets (id, name, public) VALUES ('course-materials', 'course-materials', false);

-- Storage policies for course materials
CREATE POLICY "Authenticated users can view course materials" ON storage.objects FOR SELECT USING (
  bucket_id = 'course-materials' AND auth.role() = 'authenticated'
);

CREATE POLICY "Only admins can upload course materials" ON storage.objects FOR INSERT WITH CHECK (
  bucket_id = 'course-materials' AND 
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() AND user_type = 'admin'
  )
);

-- Create admin user type (we'll add this manually via direct update after user signup)
-- Note: The admin will need to sign up first, then we'll update their user_type to 'admin'