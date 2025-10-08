# Santosh Kumar - Portfolio Website

A modern, interactive portfolio website for a Principal Solutions Architect with integrated AI chatbot.

## 🌐 Live Demo

**Portfolio**: https://ai-devops-cloud.github.io/portfolio/  
**AI Chatbot**: https://huggingface.co/spaces/techno-santy/career_conversation

## ✨ Features

- 🎨 Modern React.js with animations (Framer Motion)
- 🤖 Integrated AI chatbot from Hugging Face
- 📧 Contact form with EmailJS integration
- 📱 Fully responsive design
- ⚡ Fast loading (116KB total)
- 🎯 Professional sections: Hero, About, Skills, Projects, Experience, Contact

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- npm

### Installation

```bash
# Clone repository
git clone https://github.com/ai-devops-cloud/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm start
```

Visit http://localhost:3000

## 📋 Setup

### 1. Add Your Files

**Photo**: `public/profile-photo.jpg` (500x500px, JPG/PNG)  
**Resume**: `public/resume.pdf`

### 2. EmailJS Setup (Optional)

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create email service and template
3. Create `.env` file:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Restart app

## 🚀 Deployment

### GitHub Pages

```bash
# Build and deploy
npm run deploy
```

**Enable GitHub Pages**:
1. Go to repository Settings → Pages
2. Select branch: `gh-pages`
3. Click Save

Site will be live at: `https://your-username.github.io/portfolio/`

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── profile-photo.jpg    # Your photo
│   ├── resume.pdf           # Your resume
│   └── index.html
├── src/
│   ├── components/          # React components
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Experience.js
│   │   ├── Contact.js
│   │   ├── HuggingFaceChatbot.js
│   │   └── ...
│   ├── App.js
│   └── index.js
└── package.json
```

## 🛠️ Technologies

- React.js
- Framer Motion
- EmailJS
- Hugging Face Spaces
- GitHub Pages

## 📝 Customization

Edit components in `src/components/` to update:
- Personal information
- Skills and expertise
- Projects and experience
- Contact details
- Social links

## 📞 Contact

- **Email**: pande.santosh@gmail.com
- **LinkedIn**: [Santosh Kumar](https://linkedin.com/in/santosh-kumar)
- **GitHub**: [ai-devops-cloud](https://github.com/ai-devops-cloud)

## 📄 License

MIT License - See LICENSE file for details

---

**Built with ❤️ by Santosh Kumar - Principal Solutions Architect**