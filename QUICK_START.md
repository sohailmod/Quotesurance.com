# Quotesurance - Quick Start Guide

## Your Website is Running! 🎉

The development server is currently running at: **http://localhost:5173/**

Open this URL in your browser to view all the changes.

---

## What's New? ✨

### 1. **Demo Access Control** 🔐
- Demo now requires email verification
- 6-digit code system (currently shown in console)
- Try it: Go to `/demo` and enter your email

### 2. **Work in Progress Badge** 🚧
- "Platform in Development - Launching Soon" message on home page
- Sets proper expectations for visitors

### 3. **Alpha Insurance Solutions** 🏢
- Added as "Primary Insurance Partner"
- Featured on home page backing section
- Link to https://alphainsol.com

### 4. **Mosora Consulting** 💻
- Updated to "Development Partner" (not just "Developed by")
- Featured alongside Alpha Insurance
- Link to https://mosora.ai

### 5. **Updated Supabase** 🗄️
- New project configured
- Database tables need to be set up (see below)

---

## ⚠️ Important: Database Setup Required

Before the demo access system will work, you need to create the Supabase tables:

### Steps:
1. Go to your Supabase dashboard: https://supabase.com/dashboard
2. Select your project: `eztqiofnjckgortetwak`
3. Click "SQL Editor" in the left sidebar
4. Click "New Query"
5. Copy and paste the entire contents of `supabase_setup.sql`
6. Click "Run" or press Cmd/Ctrl + Enter

### What This Creates:
- `email_leads` table - For waitlist signups
- `demo_access_codes` table - For demo verification codes
- Indexes for performance
- Row Level Security policies

### Verify Setup:
```sql
-- Run this in SQL Editor to verify:
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
AND table_name IN ('email_leads', 'demo_access_codes');
```

You should see both tables listed.

---

## 🧪 Testing the Demo Access

### Current Behavior (Development):
1. Visit http://localhost:5173/demo
2. Enter your email address
3. Click "Send Verification Code"
4. **Check your browser console** (F12 → Console tab)
5. Look for: `Demo access code for your@email.com: 123456`
6. Enter the 6-digit code
7. Access granted! 🎉

### Why Console?
Email delivery is not configured yet. The code is printed to the browser console for testing. In production, you'll need to add an email service (SendGrid, AWS SES, etc.).

---

## 📧 Configuring Email (For Production)

### Option 1: SendGrid
```bash
npm install @sendgrid/mail
```

### Option 2: AWS SES
```bash
npm install @aws-sdk/client-ses
```

### Option 3: Resend
```bash
npm install resend
```

Then update `src/lib/supabase.ts` in the `requestDemoAccess()` function (line ~132) to actually send emails instead of console.log.

---

## 🚀 Deployment Checklist

Before deploying to production:

### Database:
- [ ] Run `supabase_setup.sql` in production Supabase project
- [ ] Verify tables were created successfully
- [ ] Test database connection from application

### Email Service:
- [ ] Choose email provider (SendGrid, SES, etc.)
- [ ] Configure API keys
- [ ] Update `requestDemoAccess()` function
- [ ] Test email delivery
- [ ] Check spam folder for test emails

### Environment:
- [ ] Update `.env` with production URLs
- [ ] Add email service API keys
- [ ] Never commit `.env` to git

### Testing:
- [ ] Test demo access flow completely
- [ ] Test on mobile devices
- [ ] Test in multiple browsers
- [ ] Verify all external links work

---

## 📁 Files You Need to Know

### Configuration:
- `.env` - Supabase credentials (✅ Already updated)
- `supabase_setup.sql` - Database schema (⚠️ Needs to be run)

### Main Code:
- `src/pages/Demo.tsx` - Demo with email verification
- `src/pages/Home.tsx` - Updated hero with WIP badge and backing info
- `src/components/Footer.tsx` - Updated partner information
- `src/lib/supabase.ts` - Database functions including demo access

### Documentation:
- `UPDATES_SUMMARY.md` - Detailed changelog
- `QUICK_START.md` - This file
- `CHANGES_SUMMARY.md` - Original website changes
- `PAGE_GUIDE.md` - Page-by-page guide

---

## 🔍 Viewing Changes Locally

### Home Page Changes:
1. Open http://localhost:5173/
2. See "Platform in Development" badge at top
3. Scroll down to see "Backed by Industry Leaders" section
4. Alpha Insurance Solutions + Mosora Consulting cards
5. Footer shows both partners

### Demo Page Changes:
1. Open http://localhost:5173/demo
2. See "Request Demo Access" screen
3. Enter email → Check console for code
4. Enter code → Access demo

---

## 💡 Tips & Tricks

### Viewing Demo Access Codes:
- Open browser DevTools (F12)
- Go to "Console" tab
- Look for log messages when requesting access

### Clearing Demo Access:
- Open browser DevTools (F12)
- Go to "Application" or "Storage" tab
- Find "Session Storage"
- Delete `demo_verified_email` key
- Refresh page

### Database Queries:
Check demo codes in Supabase:
```sql
SELECT * FROM demo_access_codes
ORDER BY created_at DESC
LIMIT 10;
```

Check email leads:
```sql
SELECT * FROM email_leads
ORDER BY created_at DESC
LIMIT 10;
```

---

## 🆘 Troubleshooting

### Demo Access Not Working?
1. ✅ Check Supabase tables exist (run `supabase_setup.sql`)
2. ✅ Check `.env` has correct credentials
3. ✅ Restart dev server: Stop (Ctrl+C) then `npm run dev`
4. ✅ Check browser console for errors
5. ✅ Verify code hasn't expired (15 minute limit)

### "Invalid or expired code"?
- Codes expire in 15 minutes
- Request a new code
- Make sure you're entering the full 6-digit code
- Check for typos

### Can't See Changes?
- Hard refresh browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Check correct URL: http://localhost:5173/

---

## 📞 Support

- **Technical Issues**: Check `UPDATES_SUMMARY.md` troubleshooting section
- **Database Setup**: Refer to `supabase_setup.sql` comments
- **Email Configuration**: See SendGrid/AWS SES/Resend documentation

---

## ✅ All Set!

Your Quotesurance website is ready to test locally. Don't forget to:

1. **Run the SQL** in Supabase (most important!)
2. **Test the demo flow** to see email verification
3. **Review all pages** for the new content
4. **Configure email** before production deployment

**Development Server**: http://localhost:5173/

Happy testing! 🚀
