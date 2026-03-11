# 🐇 Talking Rabbitt — AI Conversational Analytics MVP

> Upload a CSV → Ask anything → Get instant answers + auto-generated charts.
> The magic moment: a 10-minute Excel filter becomes a 5-second conversation.

---

## ⚡ Copy-Paste Setup (3 commands)

### Requirements
- **Node.js 18+** — [nodejs.org](https://nodejs.org)
- **Anthropic API key** — [console.anthropic.com](https://console.anthropic.com)

### Step 1 — Set your API key
```bash
cd frontend
cp .env.example .env.local
```
Open `frontend/.env.local` and replace `sk-ant-your-key-here` with your actual key:
```
VITE_ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxx...
```

### Step 2 — Install dependencies
```bash
# From the frontend/ directory:
npm install
```

### Step 3 — Run it
```bash
npm run dev
```
Open **http://localhost:5173** 🚀

> **That's it.** No backend needed — the frontend calls the Anthropic API directly (browser-safe header included).

---

## 🏗️ Project Structure

```
talking-rabbitt/
├── frontend/                        ← Main app (Vite + React)
│   ├── src/
│   │   ├── App.jsx                  ← Root: landing page + chat layout
│   │   ├── index.css                ← Dark theme, animations, components
│   │   ├── main.jsx                 ← React entry point
│   │   ├── components/
│   │   │   ├── UploadZone.jsx       ← Drag-and-drop CSV uploader
│   │   │   ├── ChatMessage.jsx      ← User & AI message bubbles
│   │   │   ├── ChartDisplay.jsx     ← Chart.js auto-visualizations
│   │   │   ├── DataSummary.jsx      ← Sidebar dataset info panel
│   │   │   ├── SuggestedQuestions.jsx  ← Smart question suggestions
│   │   │   └── ThinkingIndicator.jsx   ← Animated loading state
│   │   ├── hooks/
│   │   │   └── useAnthropicQuery.js ← Anthropic API integration + chat history
│   │   └── utils/
│   │       ├── csvParser.js         ← PapaParse + column type inference
│   │       └── chartHelpers.js      ← Chart.js config builder
│   ├── .env.example                 ← Copy to .env.local, add API key
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
├── backend/                         ← Optional Express proxy (keeps key server-side)
│   ├── server.js
│   ├── .env.example
│   └── package.json
├── data/
│   └── sample_sales.csv             ← Test data: 60 rows, 8 columns
└── README.md
```

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📁 CSV Upload | Drag & drop or click-to-browse, up to 20MB |
| 💬 Natural Language | Ask anything in plain English |
| 📊 Auto Charts | Bar, line, doughnut — auto-selected by question type |
| 🧠 Smart Context | Column type inference (numeric/date/string) |
| 🔄 Conversation Memory | Multi-turn chat — ask follow-ups |
| 💡 Smart Suggestions | AI-generated question suggestions based on your columns |
| 📥 Export | Download conversation as Markdown |

---

## 💡 Example Questions to Try

Load `data/sample_sales.csv` and ask:
- *"Which region had the highest revenue?"*
- *"Show me revenue by product as a chart"*
- *"What's the monthly revenue trend in 2024?"*
- *"Who is the top-performing sales rep?"*
- *"Compare Enterprise vs SMB customer segments"*
- *"What anomalies or outliers do you see in this data?"*

---

## 🔧 Optional: Run with Backend Proxy

If you want to keep your API key server-side (production-safe):

```bash
cd backend
cp .env.example .env
# Add ANTHROPIC_API_KEY to .env
npm install
node server.js          # Runs on http://localhost:3001
```

Then in `frontend/.env.local`:
```
VITE_ANTHROPIC_API_KEY=   # leave empty
VITE_API_URL=http://localhost:3001
```

The Vite proxy in `vite.config.js` routes `/api` calls to the backend automatically.

---

## 🔑 Environment Variables

| Variable | Where | Required | Description |
|----------|-------|----------|-------------|
| `VITE_ANTHROPIC_API_KEY` | `frontend/.env.local` | ✅ Yes (for direct mode) | Your Anthropic API key |
| `ANTHROPIC_API_KEY` | `backend/.env` | Only if using backend | Your Anthropic API key |
| `PORT` | `backend/.env` | No (default: 3001) | Backend port |

---

## 🚀 Deploy to Vercel (1 command)

```bash
cd frontend
npx vercel --prod
# When prompted, add env var: VITE_ANTHROPIC_API_KEY
```

---

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Vite + React 18 |
| AI | Anthropic Claude claude-sonnet-4-20250514 |
| Charts | Chart.js + react-chartjs-2 |
| CSV Parsing | PapaParse |
| Styling | Tailwind CSS |
| Drag & Drop | react-dropzone |
| Markdown | react-markdown |
| Fonts | DM Sans + JetBrains Mono |

---

Built for the **Rabbitt AI — Talking Rabbitt PM Challenge**
