-- Add username field to profiles table
ALTER TABLE public.profiles 
ADD COLUMN username text UNIQUE;

-- Create index for username lookups
CREATE INDEX idx_profiles_username ON public.profiles(username);

-- Update the handle_new_user function to include username generation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER 
SET search_path = 'public'
AS $$
DECLARE
  base_username text;
  final_username text;
  counter int := 1;
BEGIN
  -- Extract base username from email (part before @)
  base_username := lower(split_part(NEW.email, '@', 1));
  final_username := base_username;
  
  -- Check if username already exists and append number if needed
  WHILE EXISTS (SELECT 1 FROM public.profiles WHERE username = final_username) LOOP
    final_username := base_username || counter::text;
    counter := counter + 1;
  END LOOP;
  
  INSERT INTO public.profiles (user_id, email, full_name, username, user_type)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data ->> 'full_name',
    final_username,
    COALESCE(NEW.raw_user_meta_data ->> 'user_type', 'member')
  );
  RETURN NEW;
END;
$$;