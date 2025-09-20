-- Create registrations table for event pre-registration
CREATE TABLE public.registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  social_profile TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Create policies for registrations
-- Allow anyone to insert (public registration)
CREATE POLICY "Anyone can register for the event" 
ON public.registrations 
FOR INSERT 
WITH CHECK (true);

-- Only allow reading own registration by email (for confirmation purposes)
CREATE POLICY "Users can view their own registration" 
ON public.registrations 
FOR SELECT 
USING (email = current_setting('request.jwt.claims', true)::json->>'email');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_registrations_updated_at
BEFORE UPDATE ON public.registrations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index on email for faster lookups
CREATE INDEX idx_registrations_email ON public.registrations(email);

-- Create index on created_at for sorting
CREATE INDEX idx_registrations_created_at ON public.registrations(created_at DESC);