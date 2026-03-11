# Talking Rabbitt

Most business questions take 10 minutes to answer finding the file, filtering the data, building the chart. Talking Rabbitt brings that down to 5 seconds.

Upload a CSV, ask a question in plain English, get a clear answer with a chart. No SQL, no pivot tables, no dashboard needed.

## Quick Start

You'll need Node.js (nodejs.org) and an Anthropic API key (console.anthropic.com).
```bash
cd frontend
npm install
cp .env.example .env.local
```

Open `.env.local` and add your key:
```
VITE_ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxx
```

Run it:
```bash
npm run dev
```

Open **http://localhost:5173**

## How it works

1. Drop any CSV file onto the screen
2. Ask anything *"which region had the highest revenue?"*
3. Get an answer + auto-generated chart instantly

Sample data to test with is in the `data/` folder.

## Stack

React · Vite · Chart.js · Anthropic Claude · Tailwind CSS

---

Built for the Rabbitt AI PM Challenge
