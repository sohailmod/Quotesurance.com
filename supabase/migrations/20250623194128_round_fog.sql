/*
  # Fix RLS Policy for Email Leads

  1. Problem
    - Current RLS policy is preventing anonymous users from inserting email leads
    - The public form needs to work for unauthenticated users

  2. Solution
    - Drop existing conflicting policies
    - Create a proper policy that allows public INSERT operations
    - Maintain security for SELECT and UPDATE operations

  3. Security
    - Allow anyone to INSERT email leads (for public form submissions)
    - Restrict SELECT to authenticated users only (admin access)
    - Restrict UPDATE to authenticated users only
*/

-- Drop any existing conflicting policies
DROP POLICY IF EXISTS "Anyone can submit email leads" ON email_leads;
DROP POLICY IF EXISTS "Public can insert email leads" ON email_leads;
DROP POLICY IF EXISTS "Authenticated users can read all leads" ON email_leads;
DROP POLICY IF EXISTS "Authenticated users can update leads" ON email_leads;

-- Create the correct policy for public insertions
CREATE POLICY "Public can insert email leads"
  ON email_leads
  FOR INSERT
  TO public
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