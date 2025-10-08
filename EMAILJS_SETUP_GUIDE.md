# 📧 EmailJS Setup Guide - Contact Form Integration

## ✅ EmailJS is Now Integrated!

Your contact form is now configured to send emails using EmailJS - a free email service that works without a backend server!

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Create EmailJS Account

1. Go to **[EmailJS.com](https://www.emailjs.com/)**
2. Click **"Sign Up"** (Free account available!)
3. Verify your email address

### Step 2: Connect Your Email Service

1. After login, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (Recommended)
   - **Outlook**
   - **Yahoo**
   - **Or any SMTP service**

4. Follow the connection wizard
5. **Copy the Service ID** (looks like: `service_abc123`)

### Step 3: Create Email Template

1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template:

```
Subject: New Portfolio Contact: {{subject}}

From: {{name}}
Email: {{email}}

Message:
{{message}}

---
Sent from your portfolio website
```

4. **Template Variables** (must match form fields):
   - `{{name}}`
   - `{{email}}`
   - `{{subject}}`
   - `{{message}}`

5. Click **"Save"**
6. **Copy the Template ID** (looks like: `template_xyz789`)

### Step 4: Get Public Key

1. Go to **"Account"** → **"General"**
2. Find **"Public Key"** section
3. **Copy your Public Key** (looks like: `a1b2c3d4e5f6g7h8`)

### Step 5: Add Keys to Your Project

Create a file named `.env` in your project root:

```
C:\Users\santosh\Documents\Projects\Portfolio\.env
```

Add your keys:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789
REACT_APP_EMAILJS_PUBLIC_KEY=a1b2c3d4e5f6g7h8
```

### Step 6: Restart Your App

```bash
# Stop current server (Ctrl+C in terminal)
# Then restart:
npm start
```

---

## 🎯 How It Works

### When Someone Submits Contact Form:

1. User fills out the form (name, email, subject, message)
2. Clicks "Send Message"
3. **EmailJS sends email** to your configured email address
4. User sees success message
5. **You receive email** with the contact details

### Free Tier Limits:

- **200 emails/month** - Plenty for a portfolio
- **No credit card required**
- **Unlimited templates**
- **Multiple email services**

---

## 📧 Recommended Email Services

### Option 1: Gmail (Easiest)

**Pros:**
- ✅ Free
- ✅ Reliable
- ✅ Easy setup
- ✅ Works with EmailJS

**Setup:**
1. Use your Gmail account
2. Enable "Less secure app access" (if needed)
3. Or use App Password (recommended)

### Option 2: Outlook/Hotmail

**Pros:**
- ✅ Free
- ✅ Professional
- ✅ Good for business

### Option 3: Custom Domain Email

**If you have a custom domain:**
- Use your professional email
- Better branding
- More professional

---

## 🔧 Configuration Files

### .env File (Create This):

```env
# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### .gitignore (Already Configured):

The `.env` file is already in `.gitignore` so your keys won't be committed to Git.

---

## 🎨 Email Template Examples

### Professional Template:

```
Subject: Portfolio Contact: {{subject}}

Hello Santosh,

You have a new message from your portfolio website!

Name: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from: santoshportfolio.com
Time: {{timestamp}}
```

### Simple Template:

```
New contact from {{name}} ({{email}})

Subject: {{subject}}

{{message}}
```

---

## ✅ Testing Your Setup

### Test the Contact Form:

1. **Open**: http://localhost:3000
2. **Scroll to Contact** section
3. **Fill out form**:
   - Name: "Test User"
   - Email: "test@example.com"
   - Subject: "Testing EmailJS"
   - Message: "This is a test message"
4. **Click "Send Message"**
5. **Check your email** - You should receive the message!

### Success Indicators:

- ✅ Form shows success message
- ✅ Form fields are cleared
- ✅ Email arrives in your inbox
- ✅ All contact details are included

---

## 🔒 Security

### EmailJS Security Features:

- ✅ **Public Key** is safe to expose (it's meant to be public)
- ✅ **No backend required** - All handled by EmailJS
- ✅ **Rate limiting** - Built-in spam protection
- ✅ **reCAPTCHA** - Optional integration available

### Best Practices:

1. **Don't commit .env file** (already in .gitignore)
2. **Use environment variables** for production
3. **Monitor your EmailJS dashboard** for usage
4. **Set up email filters** to organize portfolio contacts

---

## 🎯 Environment Variables for Deployment

### GitHub Pages:

Add to GitHub Secrets (for GitHub Actions):
```
REACT_APP_EMAILJS_SERVICE_ID
REACT_APP_EMAILJS_TEMPLATE_ID
REACT_APP_EMAILJS_PUBLIC_KEY
```

### Netlify/Vercel:

Add in deployment settings:
- Go to Site Settings → Environment Variables
- Add each key-value pair

### Heroku:

```bash
heroku config:set REACT_APP_EMAILJS_SERVICE_ID=service_abc123
heroku config:set REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789
heroku config:set REACT_APP_EMAILJS_PUBLIC_KEY=a1b2c3d4e5f6g7h8
```

---

## 🆘 Troubleshooting

### Email Not Sending?

**Check:**
1. ✅ EmailJS account is verified
2. ✅ Email service is connected
3. ✅ Template is created and saved
4. ✅ .env file exists with correct keys
5. ✅ App was restarted after adding .env
6. ✅ Browser console for error messages

### Common Issues:

**Error: "Service ID not found"**
- Check your Service ID in EmailJS dashboard
- Verify .env file has correct REACT_APP_EMAILJS_SERVICE_ID

**Error: "Template not found"**
- Check Template ID
- Ensure template is saved and published

**Form submits but no email**
- Check EmailJS dashboard for logs
- Verify email service connection
- Check spam folder

---

## 💡 Advanced Features

### Add reCAPTCHA (Spam Protection):

```javascript
import emailjs from '@emailjs/browser';

emailjs.init(EMAILJS_PUBLIC_KEY);

// In form submit:
grecaptcha.ready(() => {
  grecaptcha.execute('YOUR_RECAPTCHA_KEY', {action: 'submit'})
    .then(token => {
      // Send email with token
    });
});
```

### Auto-Reply to User:

Create a second template in EmailJS for auto-reply:

```
Subject: Thank you for contacting me!

Hi {{name}},

Thank you for reaching out! I've received your message and will get back to you soon.

Best regards,
Santosh Kumar
Principal Solutions Architect
```

---

## 📊 Monitoring

### EmailJS Dashboard:

- View sent emails
- Check monthly usage
- Monitor success/failure rates
- Download logs

### Email Notifications:

EmailJS can send you notifications:
- When form is submitted
- When monthly limit is reached
- When errors occur

---

## ✅ Setup Checklist

- [ ] Create EmailJS account
- [ ] Connect email service (Gmail/Outlook)
- [ ] Create email template
- [ ] Copy Service ID
- [ ] Copy Template ID
- [ ] Copy Public Key
- [ ] Create .env file in project root
- [ ] Add all three keys to .env
- [ ] Restart React app
- [ ] Test contact form
- [ ] Verify email arrives

---

## 🎉 Once Setup is Complete

**Your contact form will:**
- ✅ Send real emails to your inbox
- ✅ Show success/error messages
- ✅ Clear form after submission
- ✅ Work without any backend
- ✅ Handle 200 emails/month (free tier)

---

## 📞 Need Help?

- **EmailJS Docs**: https://www.emailjs.com/docs/
- **Support**: https://www.emailjs.com/docs/support/
- **Tutorials**: https://www.emailjs.com/docs/tutorial/overview/

---

**Ready to receive messages from your portfolio! 🚀**
