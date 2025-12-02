/*
  # Fix Email Leads Table Schema

  1. Problem
    - Missing 'referrer' column and potentially other columns in email_leads table
    - Application expects certain columns that may not exist

  2. Solution
    - Add missing columns if they don't exist
    - Ensure all required columns are present
    - Maintain data integrity

  3. Columns Added
    - referrer (text) - referring website
    - user_agent (text) - browser information  
    - ip_address (text) - user's IP address
    - source (text) - tracks where the lead came from
    - campaign (text) - tracks marketing campaign
*/

-- Add missing columns if they don't exist
DO $$
BEGIN
  -- Add referrer column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'email_leads' AND column_name = 'referrer'
  ) THEN
    ALTER TABLE email_leads ADD COLUMN referrer text;
  END IF;

  -- Add user_agent column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'email_leads' AND column_name = 'user_agent'
  ) THEN
    ALTER TABLE email_leads ADD COLUMN user_agent text;
  END IF;

  -- Add ip_address column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'email_leads' AND column_name = 'ip_address'
  ) THEN
    ALTER TABLE email_leads ADD COLUMN ip_address text;
  END IF;

  -- Add source column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'email_leads' AND column_name = 'source'
  ) THEN
    ALTER TABLE email_leads ADD COLUMN source text NOT NULL DEFAULT 'Unknown';
  END IF;

  -- Add campaign column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'email_leads' AND column_name = 'campaign'
  ) THEN
    ALTER TABLE email_leads ADD COLUMN campaign text NOT NULL DEFAULT 'General';
  END IF;

  -- Add updated_at column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'email_leads' AND column_name = 'updated_at'
  ) THEN
    ALTER TABLE email_leads ADD COLUMN updated_at timestamptz DEFAULT now();
  END IF;
END $$;

-- Create or replace the update trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Drop existing trigger if it exists and recreate it
DROP TRIGGER IF EXISTS update_email_leads_updated_at ON email_leads;
CREATE TRIGGER update_email_leads_updated_at
  BEFORE UPDATE ON email_leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create indexes if they don't exist
CREATE INDEX IF NOT EXISTS idx_email_leads_email ON email_leads(email);
CREATE INDEX IF NOT EXISTS idx_email_leads_created_at ON email_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_email_leads_source ON email_leads(source);
CREATE INDEX IF NOT EXISTS idx_email_leads_campaign ON email_leads(campaign);