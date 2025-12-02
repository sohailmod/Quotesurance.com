import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please set up your Supabase project.');
}

// Add validation for URL format
if (!supabaseUrl.startsWith('https://') || !supabaseUrl.includes('.supabase.co')) {
  throw new Error('Invalid Supabase URL format. Please check your VITE_SUPABASE_URL environment variable.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false
  }
});

export interface EmailLead {
  id?: string;
  email: string;
  source: string;
  campaign: string;
  user_agent?: string;
  referrer?: string;
  ip_address?: string;
  created_at?: string;
  updated_at?: string;
}

export interface DemoAccessCode {
  id?: string;
  email: string;
  access_code: string;
  is_verified: boolean;
  expires_at: string;
  created_at?: string;
  used_at?: string;
}

export const emailLeadsService = {
  async createLead(leadData: Omit<EmailLead, 'id' | 'created_at' | 'updated_at'>): Promise<{ success: boolean; data?: EmailLead; error?: string }> {
    try {
      // Test connection first
      const { error: connectionError } = await supabase.from('email_leads').select('count', { count: 'exact', head: true });
      
      if (connectionError) {
        console.error('Supabase connection error:', connectionError);
        return { success: false, error: `Connection failed: ${connectionError.message}` };
      }

      const { data, error } = await supabase
        .from('email_leads')
        .insert([{
          ...leadData,
          user_agent: navigator.userAgent,
          referrer: document.referrer || null,
          created_at: new Date().toISOString()
        }])
        .select()
        .single();

      if (error) {
        console.error('Supabase error:', error);
        return { success: false, error: error.message };
      }

      return { success: true, data };
    } catch (error) {
      console.error('Error creating lead:', error);
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        return { success: false, error: 'Unable to connect to database. Please check your internet connection and try again.' };
      }
      return { success: false, error: 'Failed to save email' };
    }
  },

  async getAllLeads(): Promise<{ success: boolean; data?: EmailLead[]; error?: string }> {
    try {
      const { data, error } = await supabase
        .from('email_leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        return { success: false, error: error.message };
      }

      return { success: true, data: data || [] };
    } catch (error) {
      console.error('Error fetching leads:', error);
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        return { success: false, error: 'Unable to connect to database. Please check your internet connection and try again.' };
      }
      return { success: false, error: 'Failed to fetch leads' };
    }
  },

  async getLeadByEmail(email: string): Promise<{ success: boolean; data?: EmailLead; error?: string }> {
    try {
      const { data, error } = await supabase
        .from('email_leads')
        .select('*')
        .eq('email', email)
        .single();

      if (error && error.code !== 'PGRST116') { // PGRST116 is "not found"
        return { success: false, error: error.message };
      }

      return { success: true, data: data || undefined };
    } catch (error) {
      console.error('Error checking email:', error);
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        return { success: false, error: 'Unable to connect to database. Please check your internet connection and try again.' };
      }
      return { success: false, error: 'Failed to check email' };
    }
  }
};

// Demo Access Code Service
export const demoAccessService = {
  // Generate a random 6-digit code
  generateCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  },

  // Request demo access - sends code to email
  async requestDemoAccess(email: string): Promise<{ success: boolean; error?: string }> {
    try {
      const code = this.generateCode();
      const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes expiry

      const { error } = await supabase
        .from('demo_access_codes')
        .insert([{
          email: email.toLowerCase(),
          access_code: code,
          is_verified: false,
          expires_at: expiresAt.toISOString(),
          created_at: new Date().toISOString()
        }]);

      if (error) {
        console.error('Supabase error creating access code:', error);
        return { success: false, error: error.message };
      }

      // In production, you would send the code via email here
      // For now, we'll return success and the code will be stored in the database
      console.log(`Demo access code for ${email}: ${code}`);

      return { success: true };
    } catch (error) {
      console.error('Error requesting demo access:', error);
      return { success: false, error: 'Failed to request demo access' };
    }
  },

  // Verify the access code
  async verifyAccessCode(email: string, code: string): Promise<{ success: boolean; error?: string }> {
    try {
      // Find the most recent non-expired code for this email
      const { data, error } = await supabase
        .from('demo_access_codes')
        .select('*')
        .eq('email', email.toLowerCase())
        .eq('access_code', code)
        .eq('is_verified', false)
        .gt('expires_at', new Date().toISOString())
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return { success: false, error: 'Invalid or expired code' };
        }
        return { success: false, error: error.message };
      }

      // Mark as verified
      const { error: updateError } = await supabase
        .from('demo_access_codes')
        .update({
          is_verified: true,
          used_at: new Date().toISOString()
        })
        .eq('id', data.id);

      if (updateError) {
        return { success: false, error: updateError.message };
      }

      return { success: true };
    } catch (error) {
      console.error('Error verifying access code:', error);
      return { success: false, error: 'Failed to verify code' };
    }
  },

  // Check if user has valid access
  async hasValidAccess(email: string): Promise<{ success: boolean; hasAccess: boolean; error?: string }> {
    try {
      const { data, error } = await supabase
        .from('demo_access_codes')
        .select('*')
        .eq('email', email.toLowerCase())
        .eq('is_verified', true)
        .order('used_at', { ascending: false })
        .limit(1)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return { success: true, hasAccess: false };
        }
        return { success: false, hasAccess: false, error: error.message };
      }

      return { success: true, hasAccess: !!data };
    } catch (error) {
      console.error('Error checking access:', error);
      return { success: false, hasAccess: false, error: 'Failed to check access' };
    }
  }
};