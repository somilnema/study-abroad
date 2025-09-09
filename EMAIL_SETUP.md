# Email Setup Guide

## 📧 Configure Your Email Settings

### Step 1: Add Email Variables to .env.local

Add these lines to your `.env.local` file:

```bash
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@yourcompany.com
```

### Step 2: Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password:**
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password (not your regular Gmail password)

### Step 3: Other Email Services

You can also use:
- **Outlook/Hotmail:** Change `service: 'gmail'` to `service: 'outlook'`
- **Yahoo:** Change `service: 'gmail'` to `service: 'yahoo'`
- **Custom SMTP:** Replace the service config with custom SMTP settings

### Step 4: Test Your Setup

1. Update your `.env.local` with your email credentials
2. Restart your development server: `npm run dev`
3. Submit a test form
4. Check both your email and the student's email

## 📋 What Happens When Form is Submitted:

1. **Data saved to MongoDB** ✅
2. **Admin receives notification email** 📧
3. **Student receives confirmation email** 📧

## 🔧 Troubleshooting:

- **"Invalid login" error:** Check your app password
- **"Connection timeout" error:** Check your internet connection
- **No emails received:** Check spam folder
