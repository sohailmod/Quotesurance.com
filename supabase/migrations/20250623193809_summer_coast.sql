/*
  # Fix Email Leads RLS Policy

  1. Drop existing policies that may be incorrect
  2. Create proper RLS policies for anonymous and authenticated users
  3. Ensure anonymous users can insert email leads
  4. Ensure authenticated users can read all leads

  This migration fixes the RLS policy issue preventing anonymous users
  from submitting email leads through the public form.
*/

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Anyone can submit email leads" ON email_leads;
DROP POLICY IF EXISTS "Authenticated users can read all leads" ON email_leads;
DROP POLICY IF EXISTS "Authenticated users can update leads" ON email_leads;

-- Create new policies with correct syntax
-- Allow anonymous users to insert email leads (for the public form)
CREATE POLICY "Public can insert email leads"
  ON email_leads
  FOR INSERT
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

-- Ensure RLS is enabled
ALTER TABLE email_leads ENABLE ROW LEVEL SECURITY;