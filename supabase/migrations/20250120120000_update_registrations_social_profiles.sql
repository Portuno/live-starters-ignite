-- Migration to update registrations table for multiple social profiles
-- This migration adds support for storing multiple social media profiles as JSON

-- First, let's add the new column for social profiles
ALTER TABLE registrations 
ADD COLUMN social_profiles JSONB DEFAULT NULL;

-- Add a comment to explain the structure
COMMENT ON COLUMN registrations.social_profiles IS 'Array of social media profiles with platform and username';

-- Create an index for better query performance on social profiles
CREATE INDEX idx_registrations_social_profiles ON registrations USING GIN (social_profiles);

-- Migrate existing data from social_profile to social_profiles
-- This will convert the old single social_profile to the new format
UPDATE registrations 
SET social_profiles = CASE 
  WHEN social_profile IS NOT NULL AND social_profile != '' THEN
    jsonb_build_array(
      jsonb_build_object(
        'platform', 'other',
        'username', social_profile
      )
    )
  ELSE NULL
END
WHERE social_profile IS NOT NULL;

-- Optional: You can drop the old column after confirming the migration worked
-- Uncomment the following line after testing:
-- ALTER TABLE registrations DROP COLUMN social_profile;

-- Add a check constraint to ensure social_profiles is an array when not null
ALTER TABLE registrations 
ADD CONSTRAINT check_social_profiles_is_array 
CHECK (social_profiles IS NULL OR jsonb_typeof(social_profiles) = 'array');
