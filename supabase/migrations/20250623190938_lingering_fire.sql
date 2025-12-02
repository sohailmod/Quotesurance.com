/*
  # Email Leads Capture System

  1. New Tables
    - `email_leads`
      - `id` (uuid, primary key)
      - `email` (text, unique, required)
      - `source` (text, tracks where the lead came from)
      - `campaign` (text, tracks marketing campaign)
      - `user_agent` (text, browser information)
      - `referrer` (text, referring website)
      - `ip_address` (text, user's IP address)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `email_leads` table
    - Add policy for public insert (anyone can submit email)
    - Add policy for authenticated read (admin access)

  3. Indexes
    - Index on email for fast lookups
    - Index on created_at for sorting
*/

CREATE TABLE IF NOT EXISTS email_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  source text NOT NULL DEFAULT 'Unknown',
  campaign text NOT NULL DEFAULT 'General',
  user_agent text,
  referrer text,
  ip_address text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE email_leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert email leads (for the public form)
CREATE POLICY "Anyone can submit email leads"
  ON email_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all leads (for admin dashboard)
CREATE POLICY "Authenticated users can read all leads"
  ON email_leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update leads
CREATE POLICY "Authenticated users can update leads"
  ON email_leads
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_email_leads_email ON email_leads(email);
CREATE INDEX IF NOT EXISTS idx_email_leads_created_at ON email_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_email_leads_source ON email_leads(source);
CREATE INDEX IF NOT EXISTS idx_email_leads_campaign ON email_leads(campaign);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_email_leads_updated_at
  BEFORE UPDATE ON email_leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();