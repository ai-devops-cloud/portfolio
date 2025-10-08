# 🌐 Custom Domain Setup Guide

## ✅ Repository Configured for Custom Domain

Your portfolio is now configured to use:
**https://career.ai-kida.app**

---

## 📋 What I've Done

1. ✅ Created `public/CNAME` file with `career.ai-kida.app`
2. ✅ Updated `package.json` homepage to custom domain
3. ✅ Removed `/portfolio` basename from Router
4. ✅ Ready to deploy

---

## 🔧 DNS Configuration Required

You need to configure DNS records for `ai-kida.app` domain.

### Step 1: Add DNS Records

Go to your DNS provider (where you registered `ai-kida.app`) and add these records:

#### Option A: Using CNAME (Recommended for Subdomain)

```
Type:  CNAME
Name:  career
Value: ai-devops-cloud.github.io
TTL:   3600
```

#### Option B: Using A Records (Alternative)

If CNAME doesn't work, use A records:

```
Type:  A
Name:  career
Value: 185.199.108.153
TTL:   3600

Type:  A
Name:  career
Value: 185.199.109.153
TTL:   3600

Type:  A
Name:  career
Value: 185.199.110.153
TTL:   3600

Type:  A
Name:  career
Value: 185.199.111.153
TTL:   3600
```

**Note**: These are GitHub Pages IP addresses (current as of 2025)

---

## 🚀 Deploy with Custom Domain

### Step 1: Commit CNAME File

```bash
git add .
git commit -m "Add custom domain configuration"
git push
```

### Step 2: Deploy to GitHub Pages

```bash
npm run deploy
```

### Step 3: Configure in GitHub

1. Go to: https://github.com/ai-devops-cloud/portfolio/settings/pages
2. Under "Custom domain", enter: `career.ai-kida.app`
3. Click "Save"
4. Wait for DNS check (may take a few minutes)
5. ✅ Enable "Enforce HTTPS" (appears after DNS verifies)

---

## ⏱️ DNS Propagation Timeline

```
Now          → Add DNS records
  ↓
+5-10 min    → DNS starts propagating
  ↓
+30-60 min   → Fully propagated worldwide
  ↓
Done!        → career.ai-kida.app works!
```

---

## 🧪 Testing DNS Configuration

### Check DNS Propagation:

```bash
# Windows PowerShell:
nslookup career.ai-kida.app

# Should return GitHub Pages IP addresses
```

### Online Tools:
- https://dnschecker.org/ (check worldwide)
- https://www.whatsmydns.net/ (check propagation)

---

## 📋 Complete Setup Steps

### 1. Configure DNS (At Your Domain Provider)

**If using Cloudflare, GoDaddy, Namecheap, etc:**

1. Login to your DNS provider
2. Go to DNS settings for `ai-kida.app`
3. Add CNAME record:
   - **Name**: `career`
   - **Value**: `ai-devops-cloud.github.io`
   - **TTL**: 3600 (or Auto)
4. Save

### 2. Deploy Code (Run Now)

```bash
git add .
git commit -m "Add custom domain configuration"
git push
npm run deploy
```

### 3. Configure GitHub Pages

1. Visit: https://github.com/ai-devops-cloud/portfolio/settings/pages
2. Custom domain: `career.ai-kida.app`
3. Click "Save"
4. Wait for DNS check
5. Enable "Enforce HTTPS"

### 4. Wait & Test

- Wait 10-60 minutes for DNS propagation
- Visit: https://career.ai-kida.app
- Test all features

---

## 🎯 DNS Provider Specific Instructions

### Cloudflare:
1. DNS → Add Record
2. Type: CNAME
3. Name: career
4. Target: ai-devops-cloud.github.io
5. Proxy status: DNS only (gray cloud)
6. Save

### GoDaddy:
1. DNS Management
2. Add → CNAME
3. Host: career
4. Points to: ai-devops-cloud.github.io
5. TTL: 1 Hour
6. Save

### Namecheap:
1. Advanced DNS
2. Add New Record → CNAME
3. Host: career
4. Value: ai-devops-cloud.github.io
5. TTL: Automatic
6. Save

### Route 53 (AWS):
1. Create hosted zone: ai-kida.app
2. Create record set
3. Name: career
4. Type: CNAME
5. Value: ai-devops-cloud.github.io

---

## 🔒 HTTPS/SSL Configuration

### GitHub Pages Automatic SSL:

Once DNS is configured:
1. GitHub automatically provisions SSL certificate
2. Uses Let's Encrypt
3. Auto-renews
4. Enforces HTTPS

**Note**: May take 1-2 hours for SSL to activate after DNS verification

---

## ✅ Verification Checklist

- [ ] DNS CNAME record added at domain provider
- [ ] Code committed with CNAME file
- [ ] Deployed to GitHub Pages (`npm run deploy`)
- [ ] Custom domain added in GitHub Pages settings
- [ ] DNS propagation complete (10-60 min)
- [ ] Site accessible at https://career.ai-kida.app
- [ ] HTTPS enabled (green padlock)
- [ ] All navigation links work
- [ ] Photo and resume load correctly

---

## 🔄 Both URLs Will Work

After setup, your portfolio will be accessible from:

1. **Custom Domain**: https://career.ai-kida.app (primary)
2. **GitHub Pages**: https://ai-devops-cloud.github.io/portfolio/ (redirects to custom domain)

GitHub automatically redirects the GitHub Pages URL to your custom domain.

---

## 🐛 Troubleshooting

### DNS Not Working?

1. **Check DNS records**: Use `nslookup career.ai-kida.app`
2. **Wait longer**: Can take up to 48 hours (usually 1 hour)
3. **Clear DNS cache**: `ipconfig /flushdns` (Windows)
4. **Try incognito**: Test in private browsing mode

### Certificate Issues?

1. Wait 1-2 hours after DNS verification
2. Check GitHub Pages settings
3. Disable and re-enable "Enforce HTTPS"
4. Wait for certificate provisioning

### Site Not Loading?

1. Verify CNAME file exists: https://github.com/ai-devops-cloud/portfolio/blob/gh-pages/CNAME
2. Check GitHub Pages settings
3. Verify DNS propagation: https://dnschecker.org
4. Hard refresh: Ctrl+Shift+R

---

## 📊 Current Status

**CNAME File**: ✅ Created (`career.ai-kida.app`)  
**package.json**: ✅ Updated to custom domain  
**Router**: ✅ Basename removed (root path)  
**Ready to Deploy**: ✅ Yes

---

## 🚀 Next Steps (Do These Now)

### 1. Deploy Code (Right Now):

```bash
npm run deploy
```

### 2. Configure DNS (At Your Domain Provider):

Add CNAME record:
- Name: `career`
- Value: `ai-devops-cloud.github.io`

### 3. Configure GitHub Pages:

1. Go to: https://github.com/ai-devops-cloud/portfolio/settings/pages
2. Custom domain: `career.ai-kida.app`
3. Save

### 4. Wait & Verify:

- Wait 10-60 minutes
- Visit: https://career.ai-kida.app
- Enable HTTPS when available

---

## 💡 Pro Tips

### DNS Best Practices:
- Use CNAME for subdomains (recommended)
- Set TTL to 3600 (1 hour) for easier changes
- Don't use Cloudflare proxy initially (use DNS only)
- Test with `nslookup` before going live

### Security:
- Always enforce HTTPS
- GitHub provides free SSL
- Certificate auto-renews
- No manual configuration needed

---

## 📞 Support

**DNS Issues**: Contact your domain provider support  
**GitHub Pages**: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site  
**SSL Issues**: Wait 1-2 hours after DNS verification

---

**Your custom domain is configured! Deploy now and configure DNS.** 🚀
