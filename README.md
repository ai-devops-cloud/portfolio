# Santosh Kumar - Portfolio Website

A modern, interactive portfolio website for a Principal Solutions Architect with integrated AI chatbot powered by Hugging Face.

## 🌐 Live Portfolio

**Custom Domain**: https://career.ai-kida.app *(after DNS setup)*  
**GitHub Pages**: https://ai-devops-cloud.github.io/portfolio/  
**AI Chatbot**: https://huggingface.co/spaces/techno-santy/career_conversation

## ✨ Features

- 🎨 Modern React.js with smooth animations
- 🤖 Integrated AI chatbot from Hugging Face
- 📧 Contact form with EmailJS
- 📱 Fully responsive design
- ⚡ Fast loading (116KB total)
- 🔒 HTTPS secured

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/ai-devops-cloud/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development
npm start
```

Visit http://localhost:3000

## 📋 Setup

### 1. Add Your Files

Place these files in `public/` folder:
- `profile-photo.jpg` - Your professional photo (500x500px)
- `resume.pdf` - Your resume

### 2. EmailJS (Optional - for contact form)

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Connect email and create template
3. Create `.env`:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3. Custom Domain (Optional)

**To use career.ai-kida.app:**

1. **Add DNS CNAME record** at your domain provider:
   ```
   Type:  CNAME
   Name:  career
   Value: ai-devops-cloud.github.io
   ```

2. **Configure GitHub Pages**:
   - Go to: Settings → Pages
   - Custom domain: `career.ai-kida.app`
   - Save and enable HTTPS

3. **Wait**: 30-60 minutes for DNS propagation

## 🚀 Deployment

```bash
# Deploy to GitHub Pages
npm run deploy
```

After deployment:
1. Go to repository Settings → Pages
2. Select branch: `gh-pages`
3. Save

Site live in 2-3 minutes!

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── profile-photo.jpg    # Your photo
│   ├── resume.pdf           # Your resume
│   ├── CNAME                # Custom domain
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Hero.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── HuggingFaceChatbot.js
│   │   └── ...
│   └── App.js
└── package.json
```

## 🛠️ Technologies

- React.js 18
- Framer Motion
- EmailJS
- Hugging Face Spaces
- GitHub Pages

## 🔄 Making Updates

```bash
# 1. Edit files
# 2. Test locally
npm start

# 3. Deploy
git add .
git commit -m "Your changes"
git push
npm run deploy
```

## 📞 Contact

- **Email**: pande.santosh@gmail.com
- **GitHub**: [ai-devops-cloud](https://github.com/ai-devops-cloud)
- **LinkedIn**: [Santosh Kumar](https://linkedin.com/in/santosh-kumar)

## 📄 License

MIT License

---

**Built with ❤️ by Santosh Kumar**