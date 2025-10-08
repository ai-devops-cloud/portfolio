# 🌐 DNS Setup for career.ai-kida.app

## ✅ Code is Deployed and Ready!

Your portfolio is configured for: **https://career.ai-kida.app**

---

## 📋 DNS Configuration (Do This Now)

### Go to Your DNS Provider

Login to where you manage `ai-kida.app` domain (Cloudflare, GoDaddy, etc.)

### Add CNAME Record

```
Type:   CNAME
Name:   career
Value:  ai-devops-cloud.github.io
TTL:    3600 (or Auto)
```

**Example DNS Entry:**
```
career.ai-kida.app  →  CNAME  →  ai-devops-cloud.github.io
```

---

## 🔧 GitHub Pages Configuration

### After Adding DNS:

1. **Go to**: https://github.com/ai-devops-cloud/portfolio/settings/pages
2. **Custom domain**: Enter `career.ai-kida.app`
3. **Click "Save"**
4. **Wait for DNS check** (few minutes)
5. **Enable "Enforce HTTPS"** (checkbox appears after DNS verifies)

---

## ⏱️ Timeline

```
Now          → Add DNS CNAME record
↓ 
5-10 min     → DNS starts working
↓
30-60 min    → Fully propagated
↓
Add in GitHub Pages settings
↓
1-2 hours    → SSL certificate issued
↓
Done!        → https://career.ai-kida.app works!
```

---

## 🧪 Test DNS

### Check if DNS is working:

```bash
# Windows PowerShell:
nslookup career.ai-kida.app

# Should show:
# Name: ai-devops-cloud.github.io
# Addresses: 185.199.108.153, etc.
```

### Online Check:
- https://dnschecker.org/
- Enter: `career.ai-kida.app`
- Type: CNAME
- Check propagation worldwide

---

## ✅ What's Configured

| Item | Status | Value |
|------|--------|-------|
| CNAME File | ✅ Created | `career.ai-kida.app` |
| package.json | ✅ Updated | Custom domain homepage |
| Router | ✅ Fixed | No basename (root path) |
| Deployed | ✅ Done | Published to gh-pages |
| DNS | ⚠️ Pending | You need to configure |
| GitHub Pages | ⚠️ Pending | Add custom domain after DNS |

---

## 🎯 Step-by-Step Checklist

- [ ] 1. Add CNAME DNS record at your domain provider
- [ ] 2. Wait 10 minutes
- [ ] 3. Test DNS: `nslookup career.ai-kida.app`
- [ ] 4. Go to GitHub repo settings → Pages
- [ ] 5. Add custom domain: `career.ai-kida.app`
- [ ] 6. Click Save
- [ ] 7. Wait for DNS verification (GitHub shows checkmark)
- [ ] 8. Enable "Enforce HTTPS"
- [ ] 9. Wait 1-2 hours for SSL certificate
- [ ] 10. Visit https://career.ai-kida.app
- [ ] 11. Test all features

---

## 🌍 After Setup

### Your Portfolio URLs:

**Primary (Custom Domain)**:
```
https://career.ai-kida.app
```

**GitHub Pages (Auto-redirects)**:
```
https://ai-devops-cloud.github.io/portfolio/
→ Redirects to career.ai-kida.app
```

**Both work, but custom domain is primary!**

---

## 💡 Common DNS Providers

### Where to Configure DNS:

- **Cloudflare**: https://dash.cloudflare.com/ → DNS
- **GoDaddy**: https://dcc.godaddy.com/manage/dns
- **Namecheap**: https://ap.www.namecheap.com/domains/list → Manage → Advanced DNS
- **Google Domains**: https://domains.google.com/ → DNS
- **Route 53**: AWS Console → Route 53 → Hosted Zones

---

## 🆘 Troubleshooting

### "DNS check failed" in GitHub:
- Wait longer (DNS takes time)
- Verify CNAME record is correct
- Check TTL hasn't expired
- Try removing and re-adding in GitHub

### "Certificate error":
- Wait 1-2 hours after DNS verification
- Don't enforce HTTPS until certificate is ready
- GitHub provisions certificate automatically

### Site not loading:
- Check DNS propagation: https://dnschecker.org/
- Clear browser cache
- Try incognito mode
- Wait for full propagation (up to 48h max)

---

## 🎉 Once Complete

Your portfolio will be accessible at:

✨ **https://career.ai-kida.app** ✨

- Professional custom domain
- SSL/HTTPS secured
- Fast loading via CDN
- Globally accessible

---

**Next: Configure DNS at your domain provider, then add custom domain in GitHub Pages settings!** 🚀
