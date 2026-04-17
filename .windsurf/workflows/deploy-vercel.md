---
description: Deploy PE-Clinic website to Vercel
---

# Deploy PE-Clinic to Vercel

## Prerequisites

1. **Vercel Account**: Sign up at https://vercel.com (can use GitHub/GitLab/Bitbucket login)
2. **Vercel CLI** (optional for local deployment): `npm i -g vercel`
3. **Git Repository**: Project should be pushed to GitHub/GitLab/Bitbucket

## Deployment Methods

### Method 1: Git Integration (Recommended)

// turbo
1. Push project to GitHub repository
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/pe-clinic.git
   git push -u origin main
   ```

2. Import project in Vercel Dashboard:
   - Go to https://vercel.com/dashboard
   - Click "Add New..." → "Project"
   - Select your Git repository
   - Vercel auto-detects Vite/Vue settings

3. Configure Build Settings (if needed):
   - **Framework Preset**: Vite
   - **Build Command**: `vite build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. Click "Deploy"

### Method 2: Vercel CLI

// turbo
1. Install Vercel CLI globally
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel
   ```bash
   vercel login
   ```

3. Deploy from project root
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

## Configuration Files

### vercel.json (Root Directory)

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "buildCommand": "vite build",
  "outputDirectory": "dist",
  "framework": "vite",
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### vite.config.ts (Already Configured)

Ensure your `vite.config.ts` includes:

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './',  // Important for Vercel
})
```

## Environment Variables (if needed)

Add in Vercel Dashboard → Project Settings → Environment Variables:
- `VITE_API_URL` (for API endpoints)
- Any other env variables your app needs

## Custom Domain (Optional)

1. In Vercel Dashboard → Project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## Post-Deployment

- **Auto Deploy**: Every push to main branch triggers new deployment
- **Preview Deployments**: Pull requests get unique preview URLs
- **Analytics**: Enable in Project Settings for performance insights

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Check `vite build` works locally |
| 404 on routes | Ensure `vercel.json` has SPA fallback route |
| Assets not loading | Verify `base: './'` in vite.config.ts |
| Cache issues | Trigger "Redeploy" with "Use existing Build Cache" unchecked |
