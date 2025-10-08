# 🚀 Portfolio Setup Guide

## ✅ Your Portfolio is LIVE!

**URL**: https://ai-devops-cloud.github.io/portfolio/

---

## 📋 Quick Setup (3 Steps)

### 1. Files Already in Place ✅

Your photo and resume are already in the repository:
- ✅ `public/profile-photo.jpg`
- ✅ `public/resume.pdf`

These will automatically work on the live site!

### 2. Enable EmailJS (Optional - 5 min)

To make the contact form send emails:

1. Go to https://www.emailjs.com/ (free account)
2. Connect your Gmail/Outlook
3. Create an email template with these variables:
   - `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`
4. Get your 3 keys
5. Create `.env` in project root:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

6. Redeploy: `npm run deploy`

### 3. Customize Content (Optional)

Update your personal info in:
- `src/components/Contact.js` - Email, phone
- `src/components/Navbar.js` - Social links
- `src/components/Footer.js` - Social links

---

## 🔄 Making Updates

```bash
# 1. Edit files
# 2. Test locally
npm start

# 3. Deploy to GitHub Pages
git add .
git commit -m "Your changes"
git push
npm run deploy
```

Wait 2-3 minutes, then visit your live site!

---

## 🧪 Test Your Live Site

Visit: https://ai-devops-cloud.github.io/portfolio/

**Test:**
- ✅ Navigation links work
- ✅ Photo displays
- ✅ Resume downloads
- ✅ AI Chatbot opens
- ✅ Mobile responsive

---

## 📞 Support

**Repository**: https://github.com/ai-devops-cloud/portfolio  
**Email**: pande.santosh@gmail.com

---

**Your portfolio is ready to share! 🎉**
