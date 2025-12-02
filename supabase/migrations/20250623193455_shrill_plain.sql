/*
  # Fix RLS policies for email leads table

  1. Security Updates
    - Drop existing policies to avoid conflicts
    - Grant proper permissions to anon role
    - Create new RLS policies with correct permissions
    - Ensure anon users can insert email leads
    - Ensure authenticated users can read all leads

  2. Permissions
    - Grant INSERT permission to anon role
    - Grant SELECT permission to authenticated role
    - Grant UPDATE permission to authenticated role
*/

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Anyone can submit email leads" ON email_leads;
DROP POLICY IF EXISTS "Authenticated users can read all leads" ON email_leads;
DROP POLICY IF EXISTS "Authenticated users can update leads" ON email_leads;

-- Grant necessary permissions to roles
GRANT INSERT ON public.email_leads TO anon;
GRANT SELECT ON public.email_leads TO authenticated;
GRANT UPDATE ON public.email_leads TO authenticated;

-- Create new RLS policies with proper permissions
CREATE POLICY "Allow anonymous users to insert email leads"
  ON email_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read all email leads"
  ON email_leads
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to update email leads"
  ON email_leads
  FOR UPDATE
  TO authenticated
  USING (true);

-- Ensure RLS is enabled
ALTER TABLE email_leads ENABLE ROW LEVEL SECURITY;