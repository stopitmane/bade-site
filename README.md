# Bade Adesemowo website

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. In Vercel: Add New > Project > import the repo (framework: Next.js, no settings needed).
3. Add the environment variables from `.env.example` (all optional; forms only log without Resend).
4. Deploy, then share the `*.vercel.app` link.

Or from the terminal: `npx vercel` (preview) and `npx vercel --prod`.
