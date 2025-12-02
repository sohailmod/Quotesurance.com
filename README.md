# Email Leads Capture System

## Database Setup Required

The application is currently failing because the `email_leads` table doesn't exist in your Supabase database. You need to manually create this table.

### Steps to Fix:

1. **Go to your Supabase Dashboard**
   - Visit [https://supabase.com/dashboard](https://supabase.com/dashboard)
   - Select your project

2. **Open the SQL Editor**
   - Click on "SQL Editor" in the left sidebar
   - Click "New Query"

3. **Run the Migration SQL**
   - Copy and paste the following SQL code into the editor:

```sql
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
```

4. **Execute the Query**
   - Click the "Run" button to execute the SQL
   - You should see a success message

5. **If you're still getting RLS errors, run this additional fix:**
   - Copy and paste this additional SQL to fix any RLS policy issues:

```sql
-- Fix RLS Policy (run this if you're still getting RLS errors)
DROP POLICY IF EXISTS "Anyone can submit email leads" ON email_leads;
DROP POLICY IF EXISTS "Public can insert email leads" ON email_leads;

CREATE POLICY "Public can insert email leads"
  ON email_leads
  FOR INSERT
  WITH CHECK (true);
```

6. **Verify the Table**
   - Go to "Table Editor" in the left sidebar
   - You should now see the `email_leads` table listed
   - Check the "Policies" tab to ensure the RLS policies are active

### After Creating the Table

Once you've created the table in your Supabase dashboard, refresh this application and it should work properly. The 404 errors will be resolved and you'll be able to submit email leads successfully.

### Environment Variables

Make sure your `.env` file contains the correct Supabase credentials:
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key

You can find these in your Supabase Dashboard under Settings > API.

### Troubleshooting RLS Errors

If you're still getting "new row violates row-level security policy" errors:

1. Go to your Supabase Dashboard
2. Navigate to Authentication > Policies
3. Find the `email_leads` table
4. Ensure there's a policy that allows INSERT for anonymous users
5. The policy should look like: `FOR INSERT WITH CHECK (true)`

The key is that the policy must not restrict based on user authentication for INSERT operations, since the public form needs to work for anonymous users.