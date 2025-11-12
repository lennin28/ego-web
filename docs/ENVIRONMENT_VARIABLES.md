# Environment Variables Guide

This document explains how to configure environment variables for the EGO Web application.

## Quick Start

1. **Copy the example file:**
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` with your values:**
   ```bash
   nano .env  # or use your preferred editor
   ```

3. **Restart the development server:**
   ```bash
   npm run dev
   ```

## Important Notes

### Vite Environment Variables

Vite has specific rules for environment variables:

- **Only variables prefixed with `VITE_` are exposed to your application code**
- Variables without the `VITE_` prefix are only available during build time (in `vite.config.ts`)
- Environment variables are **embedded at build time** (not runtime)
- Never put sensitive secrets in `VITE_` variables - they are visible in the client bundle

### File Priority

When multiple env files exist, Vite loads them in this order (later ones override earlier ones):

1. `.env` - Loaded in all cases
2. `.env.local` - Loaded in all cases, ignored by git
3. `.env.[mode]` - Only loaded in specified mode (e.g., `.env.production`)
4. `.env.[mode].local` - Only loaded in specified mode, ignored by git

## Variable Reference

### Application Configuration

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `VITE_APP_ENV` | string | `development` | Current environment (development, staging, production) |
| `VITE_APP_URL` | string | `http://localhost:8080` | Base URL of the application |
| `VITE_API_URL` | string | `http://localhost:3000/api` | Backend API base URL |

### Feature Flags

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `VITE_ENABLE_ANALYTICS` | boolean | `false` | Enable/disable analytics tracking |
| `VITE_ENABLE_ERROR_REPORTING` | boolean | `false` | Enable/disable error reporting (e.g., Sentry) |
| `VITE_DEBUG_MODE` | boolean | `true` | Enable debug logging in console |

### SEO & Social Media

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `VITE_OG_IMAGE_URL` | string | - | Open Graph image for social sharing |
| `VITE_TWITTER_HANDLE` | string | - | Twitter handle without @ |
| `VITE_SITE_NAME` | string | `EGO - Internal Developer Portal` | Site name for meta tags |

### Third-Party Services

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `VITE_GA_ID` | string | - | Google Analytics tracking ID |
| `VITE_SENTRY_DSN` | string | - | Sentry error tracking DSN |
| `VITE_INTERCOM_APP_ID` | string | - | Intercom chat widget app ID |

### Development Server

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `PORT` | number | `8080` | Dev server port (used in vite.config.ts) |
| `HOST` | string | `::` | Dev server host (used in vite.config.ts) |

## Usage in Code

### Accessing Environment Variables

In your TypeScript/React code:

```tsx
// ✅ Correct - Will work
const apiUrl = import.meta.env.VITE_API_URL;
const isDev = import.meta.env.DEV; // Built-in Vite variable
const isProd = import.meta.env.PROD; // Built-in Vite variable

// ❌ Wrong - Will be undefined
const apiUrl = process.env.VITE_API_URL;
```

### Type Safety

Add types for your environment variables in `src/vite-env.d.ts`:

```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ENV: string
  readonly VITE_APP_URL: string
  readonly VITE_API_URL: string
  readonly VITE_ENABLE_ANALYTICS: string
  readonly VITE_OG_IMAGE_URL: string
  readonly VITE_TWITTER_HANDLE: string
  // Add more variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

### Example: API Service

```tsx
// src/services/api.ts
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const submitDemoRequest = async (data: DemoRequestData) => {
  const response = await fetch(`${API_BASE_URL}/demo-requests`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};
```

### Example: Conditional Feature

```tsx
// src/components/Analytics.tsx
const ENABLE_ANALYTICS = import.meta.env.VITE_ENABLE_ANALYTICS === 'true';

export const Analytics = () => {
  if (!ENABLE_ANALYTICS) return null;

  return <GoogleAnalytics trackingId={import.meta.env.VITE_GA_ID} />;
};
```

## Environment-Specific Configurations

### Development (.env.development)

```env
VITE_APP_ENV=development
VITE_API_URL=http://localhost:3000/api
VITE_DEBUG_MODE=true
VITE_ENABLE_ANALYTICS=false
```

### Staging (.env.staging)

```env
VITE_APP_ENV=staging
VITE_API_URL=https://api-staging.ego-platform.com
VITE_DEBUG_MODE=true
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_ERROR_REPORTING=true
```

### Production (.env.production)

```env
VITE_APP_ENV=production
VITE_API_URL=https://api.ego-platform.com
VITE_DEBUG_MODE=false
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_ERROR_REPORTING=true
VITE_SOURCEMAPS=false
```

## Build Commands

Build for different environments:

```bash
# Development build
npm run build:dev

# Production build (uses .env.production)
npm run build

# Custom mode
vite build --mode staging
```

## Security Best Practices

### ✅ DO

- Use `.env.local` for sensitive local values
- Add `.env*.local` to `.gitignore`
- Document all variables in `.env.example`
- Use different values per environment
- Validate required env vars at startup

### ❌ DON'T

- Commit `.env` files with real credentials
- Store API keys or secrets in `VITE_` variables
- Expose sensitive data to the client
- Use production values in development
- Hard-code configuration values

## Troubleshooting

### Variable is undefined in code

**Problem:** `import.meta.env.VITE_MY_VAR` is undefined

**Solutions:**
1. Make sure the variable is prefixed with `VITE_`
2. Restart the dev server after changing .env
3. Check that the .env file is in the project root
4. Verify the variable name is correct (case-sensitive)

### Changes not reflected

**Problem:** Updated .env but changes don't appear

**Solutions:**
1. Restart the development server
2. Clear Vite cache: `rm -rf node_modules/.vite`
3. Rebuild: `npm run build`

### Production build issues

**Problem:** Variables work in dev but not in production

**Solutions:**
1. Create `.env.production` file
2. Make sure variables are prefixed with `VITE_`
3. Check that env vars are set in your hosting platform
4. Verify build command uses correct mode

## Current Hardcoded Values to Migrate

The following values are currently hardcoded and should be migrated to environment variables:

### index.html
- Open Graph image URL: `https://lovable.dev/opengraph-image-p98pqg.png`
- Twitter handle: `@Lovable`

### src/components/Integrations.tsx
- All integration logo URLs (13 external CDN URLs)
- **Recommendation:** Download logos to `/public/logos/` and reference locally

## Further Reading

- [Vite Environment Variables Documentation](https://vitejs.dev/guide/env-and-mode.html)
- [Environment Variables Best Practices](https://12factor.net/config)
