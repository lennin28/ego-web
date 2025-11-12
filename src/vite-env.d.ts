/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Application Configuration
  readonly VITE_APP_ENV: string
  readonly VITE_APP_URL: string
  readonly VITE_API_URL: string

  // Feature Flags
  readonly VITE_ENABLE_ANALYTICS: string
  readonly VITE_ENABLE_ERROR_REPORTING: string
  readonly VITE_DEBUG_MODE: string

  // SEO & Social Media
  readonly VITE_OG_IMAGE_URL: string
  readonly VITE_TWITTER_HANDLE: string
  readonly VITE_SITE_NAME: string

  // Third-Party Services
  readonly VITE_GA_ID: string
  readonly VITE_SENTRY_DSN: string
  readonly VITE_INTERCOM_APP_ID: string

  // Demo Request Form
  readonly VITE_DEMO_REQUEST_ENDPOINT: string

  // Build Configuration
  readonly VITE_SOURCEMAPS: string
  readonly VITE_BASE_PATH: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
