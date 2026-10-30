# Dhaval Vinodbhai Dangar — Full-Stack Developer Portfolio

Modern interactive developer portfolio built with **React 18**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

## Features
- **Bento Grid Overview** with mouse-tracking spotlight cards and live IST clock (`Asia/Kolkata`)
- **Theme Switcher** (`Emerald Cyber`, `Electric Blue`, `Neon Violet`)
- **Interactive Project Architecture Inspector** (3-tier breakdown for QuickBill POS, Task Manager, RTO System, and E-Commerce Grocery Store)
- **DhavalOS Interactive CLI Terminal** (`help`, `whoami`, `skills`, `projects`, `experience`, `contact`, `copy email`, `clear`)
- **Command Palette (`Ctrl+K` / `Cmd+K`)** for instant navigation and actions
- **Recruiter Quick Inquiry Generator** with 1-click `mailto:` launch and clipboard copy

---

## 1. Run Locally on Your Computer

Make sure you have [Node.js](https://nodejs.org/) (v18+) installed:

```bash
# 1. Unzip the folder and navigate into it
cd dhaval-dangar-portfolio

# 2. Install dependencies
npm install

# 3. Start the local development server
npm run dev
```

Open the local URL shown in your terminal (usually `http://localhost:5173`).

---

## 2. Deploy to the Web (Free Hosting)

### Option A: Deploy on Vercel (Recommended — Takes ~60 Seconds)
1. Push this project folder to a new **GitHub** repository.
2. Go to [Vercel](https://vercel.com/) and sign in with GitHub.
3. Click **Add New... → Project** and import your repository.
4. Vercel automatically detects **Vite** (`npm run build`, output directory `dist`).
5. Click **Deploy** — your live URL (`https://your-name.vercel.app`) will be ready in under a minute.

### Option B: Deploy on Netlify
1. Push this project folder to GitHub, or run `npm run build` locally to generate the `dist/` folder.
2. Go to [Netlify](https://app.netlify.com/) → **Add new site → Import an existing project** (or drag-and-drop your `dist/` folder into Netlify Drop).
3. Build command: `npm run build` | Publish directory: `dist`.

### Option C: Deploy on Render (Static Site)
1. Push this project folder to GitHub.
2. Go to [Render Dashboard](https://dashboard.render.com/) → **New + → Static Site**.
3. Connect your repository and configure:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
4. Click **Create Static Site**.
