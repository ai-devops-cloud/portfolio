# 📚 Portfolio - Quick Reference

## 🌐 URLs

| What | URL |
|------|-----|
| **Live Site** | https://ai-devops-cloud.github.io/portfolio/ |
| **GitHub** | https://github.com/ai-devops-cloud/portfolio |
| **AI Chatbot** | https://huggingface.co/spaces/techno-santy/career_conversation |
| **Local Dev** | http://localhost:3000 |

## 📁 Key Files

| File | Location | Purpose |
|------|----------|---------|
| Photo | `public/profile-photo.jpg` | Profile image (500x500px) |
| Resume | `public/resume.pdf` | Downloadable resume |
| EmailJS | `.env` (create) | Contact form config |

## ⚡ Commands

```bash
npm start              # Start local development
npm run build          # Build for production
npm run deploy         # Deploy to GitHub Pages
```

## 🔄 Update & Deploy

```bash
git add .
git commit -m "Update message"
git push
npm run deploy
```

Wait 2-3 minutes → Hard refresh (Ctrl+Shift+R)

## 📧 EmailJS (.env file)

```env
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=your_key
```

Get keys from: https://www.emailjs.com/

## ✅ Features

- ✅ Navigation working
- ✅ Photo displays
- ✅ Resume downloads
- ✅ AI Chatbot integrated
- ✅ Contact form (needs EmailJS)
- ✅ Mobile responsive

---

**See SETUP.md for detailed instructions**