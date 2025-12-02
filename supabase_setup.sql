-- Quotesurance Supabase Database Setup
-- Run this SQL in your Supabase SQL Editor to set up the required tables

-- =====================================================
-- Table: email_leads
-- Purpose: Store email addresses from waitlist signups
-- =====================================================
CREATE TABLE IF NOT EXISTS email_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL UNIQUE,
  source VARCHAR(255),
  campaign VARCHAR(255),
  user_agent TEXT,
  referrer TEXT,
  ip_address VARCHAR(45),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster email lookups
CREATE INDEX IF NOT EXISTS idx_email_leads_email ON email_leads(email);
CREATE INDEX IF NOT EXISTS idx_email_leads_created_at ON email_leads(created_at DESC);

-- Enable Row Level Security
ALTER TABLE email_leads ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous inserts (for signup form)
CREATE POLICY "Allow anonymous inserts" ON email_leads
  FOR INSERT
  WITH CHECK (true);

-- Policy: Allow read access (if needed for admin panel later)
CREATE POLICY "Allow authenticated reads" ON email_leads
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- =====================================================
-- Table: demo_access_codes
-- Purpose: Store verification codes for demo access
-- =====================================================
CREATE TABLE IF NOT EXISTS demo_access_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL,
  access_code VARCHAR(6) NOT NULL,
  is_verified BOOLEAN DEFAULT FALSE,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  used_at TIMESTAMP WITH TIME ZONE
);

-- Create indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_demo_access_codes_email ON demo_access_codes(email);
CREATE INDEX IF NOT EXISTS idx_demo_access_codes_code ON demo_access_codes(access_code);
CREATE INDEX IF NOT EXISTS idx_demo_access_codes_expires_at ON demo_access_codes(expires_at);
CREATE INDEX IF NOT EXISTS idx_demo_access_codes_is_verified ON demo_access_codes(is_verified);

-- Enable Row Level Security
ALTER TABLE demo_access_codes ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous inserts (for requesting access codes)
CREATE POLICY "Allow anonymous inserts for demo codes" ON demo_access_codes
  FOR INSERT
  WITH CHECK (true);

-- Policy: Allow anonymous select (for verifying codes)
CREATE POLICY "Allow anonymous reads for demo codes" ON demo_access_codes
  FOR SELECT
  USING (true);

-- Policy: Allow anonymous updates (for marking codes as verified)
CREATE POLICY "Allow anonymous updates for demo codes" ON demo_access_codes
  FOR UPDATE
  USING (true);

-- =====================================================
-- Function: Cleanup expired demo access codes
-- Purpose: Automatically remove expired codes (run periodically)
-- =====================================================
CREATE OR REPLACE FUNCTION cleanup_expired_demo_codes()
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  DELETE FROM demo_access_codes
  WHERE expires_at < NOW() - INTERVAL '1 day'
  AND is_verified = FALSE;
END;
$$;

-- =====================================================
-- Optional: Create a scheduled job to cleanup old codes
-- Note: Requires pg_cron extension enabled in Supabase
-- You can also run this manually or via a cron job
-- =====================================================
-- SELECT cron.schedule(
--   'cleanup-expired-demo-codes',
--   '0 2 * * *',  -- Run daily at 2 AM
--   $$SELECT cleanup_expired_demo_codes()$$
-- );

-- =====================================================
-- Grant permissions
-- =====================================================
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;

-- =====================================================
-- Verification Queries
-- =====================================================
-- Check if tables exist
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
AND table_name IN ('email_leads', 'demo_access_codes');

-- Check table structures
\d email_leads
\d demo_access_codes
