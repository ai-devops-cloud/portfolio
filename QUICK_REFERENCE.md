# 📚 Portfolio - Quick Reference

## 🌐 Your Portfolio

**Custom Domain**: https://career.ai-kida.app (after DNS setup)  
**GitHub Pages**: https://ai-devops-cloud.github.io/portfolio/  
**Repository**: https://github.com/ai-devops-cloud/portfolio

---

## 🚀 Quick Commands

```bash
npm start              # Start local dev (http://localhost:3000)
npm run build          # Build for production
npm run deploy         # Deploy to GitHub Pages
```

---

## 📁 Add Your Files

```
public/profile-photo.jpg    # Your photo (500x500px, JPG/PNG)
public/resume.pdf           # Your resume
```

---

## 🌐 Custom Domain Setup

### 1. Configure DNS (at your domain provider)

Add CNAME record:
```
Type:  CNAME
Name:  career
Value: ai-devops-cloud.github.io
```

### 2. Add in GitHub Pages

1. Go to: Settings → Pages
2. Custom domain: `career.ai-kida.app`
3. Save
4. Enable "Enforce HTTPS"

### 3. Wait 30-60 minutes for DNS propagation

---

## 📧 EmailJS Setup (Optional)

1. Sign up: https://www.emailjs.com/
2. Create `.env` file:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=your_key
```

3. Redeploy: `npm run deploy`

---

## 🔄 Update & Deploy

```bash
# Make changes, then:
git add .
git commit -m "Your update message"
git push
npm run deploy
```

---

## ✅ Features

- ✅ React.js with animations
- ✅ AI Chatbot (Hugging Face integrated)
- ✅ Contact form (EmailJS ready)
- ✅ Photo & Resume support
- ✅ Mobile responsive
- ✅ Custom domain ready

---

**See README.md for full documentation**