# Deployment Guide

## Automatic Deployment to Vercel

This project is configured for automatic deployment to Vercel using GitHub Actions.

### Prerequisites

1. Vercel account (https://vercel.com)
2. GitHub repository connected to Vercel
3. GitHub repository secrets configured

### Setup Instructions

#### Step 1: Connect Repository to Vercel

1. Go to https://vercel.com
2. Sign in with your GitHub account
3. Click "Add New..." → "Project"
4. Select the ELITE-FITNESS repository
5. Configure project settings:
   - Framework: Angular
   - Build Command: `pnpm run build`
   - Output Directory: `dist/fitness-coaching`
   - Install Command: `pnpm install`
6. Click "Deploy"

#### Step 2: Get Vercel Credentials

1. Go to Vercel Account Settings (https://vercel.com/account)
2. Navigate to "Tokens"
3. Create a new token and copy it
4. Go to your GitHub repository
5. Navigate to Settings → Secrets and variables → Actions
6. Add the following secrets:

**VERCEL_TOKEN**
- Value: Your Vercel token from step 3

**VERCEL_ORG_ID**
- Go to Vercel dashboard
- Click on your team/organization name
- Copy the ID from the URL (vercel.com/teams/YOUR_ORG_ID)

**VERCEL_PROJECT_ID**
- Go to your project settings in Vercel
- Copy the Project ID

#### Step 3: Verify Deployment

1. Push a commit to the main branch
2. Go to GitHub Actions tab
3. Watch the "Deploy to Vercel" workflow
4. Once complete, your app will be deployed to Vercel

### Manual Deployment

If you prefer to deploy manually:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel --prod
```

### Environment Variables

If your app needs environment variables:

1. Go to Vercel project settings
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy the project

### Rollback

To rollback to a previous deployment:

1. Go to Vercel project dashboard
2. Click on "Deployments"
3. Find the deployment you want to rollback to
4. Click the three dots menu
5. Select "Promote to Production"

### Monitoring

Monitor your deployments:

1. **Vercel Dashboard**: https://vercel.com/dashboard
2. **GitHub Actions**: Repository → Actions tab
3. **Application Logs**: Vercel project → Deployments → Logs

### Troubleshooting

#### Build fails on Vercel but works locally

1. Check Node.js version matches (18.x)
2. Verify pnpm version (10.x)
3. Check environment variables are set
4. Review build logs in Vercel dashboard

#### Deployment doesn't trigger

1. Verify GitHub Actions is enabled
2. Check repository secrets are set correctly
3. Ensure workflow file is in `.github/workflows/`
4. Check branch protection rules aren't blocking

#### Performance issues

1. Check bundle size: `pnpm run build`
2. Review Vercel analytics
3. Optimize images and assets
4. Consider caching strategies

### Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Angular Deployment Guide](https://angular.io/guide/deployment)

### Support

For deployment issues:
1. Check Vercel status page
2. Review GitHub Actions logs
3. Contact Vercel support
4. Open an issue on GitHub
