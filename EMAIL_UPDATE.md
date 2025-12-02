# Email Address Update - Quotesurance

## Change Summary

All email addresses across the Quotesurance website have been updated to use a single contact email:

**`info@quotesurance.com`**

---

## Previous Email Addresses

The following email addresses were replaced:

- ❌ `partners@quotesurance.com` (Partner inquiries)
- ❌ `contact@quotesurance.com` (General contact)
- ❌ `privacy@quotesurance.com` (Privacy policy questions)
- ❌ `legal@quotesurance.com` (Terms of service questions)

---

## New Unified Email Address

All contact points now use:

✅ **`info@quotesurance.com`**

---

## Where Changes Were Made

### 1. Footer Component
**File:** `src/components/Footer.tsx`

- Partner Inquiry link → `info@quotesurance.com`
- General Contact link → `info@quotesurance.com`

### 2. Enterprise Page
**File:** `src/pages/Enterprise.tsx`

- "Contact Partnership Team" button → `info@quotesurance.com`

### 3. Demo Page
**File:** `src/pages/Demo.tsx`

- "Get Started" button (after demo completion) → `info@quotesurance.com`

### 4. Privacy Policy Page
**File:** `src/pages/Privacy.tsx`

- Contact section → `info@quotesurance.com`

### 5. Terms of Service Page
**File:** `src/pages/Terms.tsx`

- Contact Information section → `info@quotesurance.com`

---

## Verification

To verify all changes, run:

```bash
grep -r "@quotesurance.com" src/
```

All results should show `info@quotesurance.com`.

---

## Testing Checklist

- [ ] Footer "Partner Inquiry" link opens email to info@quotesurance.com
- [ ] Footer "General Contact" link opens email to info@quotesurance.com
- [ ] Enterprise page "Contact Partnership Team" button opens email to info@quotesurance.com
- [ ] Demo page "Get Started" link opens email to info@quotesurance.com
- [ ] Privacy page contact link opens email to info@quotesurance.com
- [ ] Terms page contact link opens email to info@quotesurance.com

---

## Live Testing

The development server is running at: **http://localhost:5173/**

### Quick Test:
1. Visit each page
2. Click on email links
3. Verify they all open email client with `info@quotesurance.com`

### Pages to Test:
- Home page (footer)
- Enterprise page (`/enterprise`) - CTA button
- Demo page (`/demo`) - After completing demo
- Privacy page (`/privacy`) - Contact section
- Terms page (`/terms`) - Contact section

---

## Production Deployment

Before deploying to production, ensure:

1. **Email Account Setup**
   - Create `info@quotesurance.com` email account
   - Configure email forwarding/routing as needed
   - Set up auto-responder if desired

2. **Email Service Integration**
   - If using a contact form, update backend to send to `info@quotesurance.com`
   - Update any CRM integrations
   - Update email templates if applicable

3. **Documentation**
   - Update internal documentation with new email
   - Inform team members of unified contact email
   - Update any marketing materials

---

## Benefits of Unified Email

✅ **Simplified Contact Management**
- Single inbox to monitor
- Easier to route inquiries internally
- Consistent user experience

✅ **Professional Image**
- Clean, simple contact approach
- Easier for users to remember
- No confusion about which email to use

✅ **Flexibility**
- Can set up forwarding rules internally
- Easy to manage with email aliases
- Scalable as team grows

---

## Status

✅ All email addresses updated
✅ Development server running
✅ Changes hot-reloaded
✅ Ready for testing

Open **http://localhost:5173/** to test the changes!
