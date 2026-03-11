import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:3000'] }))
app.use(express.json({ limit: '10mb' }))

app.get('/health', (_, res) => res.json({ status: 'ok', service: 'talking-rabbitt-api' }))

// Proxy endpoint — keeps API key server-side (more secure for production)
app.post('/api/query', async (req, res) => {
  const { messages, system } = req.body

  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY not set' })
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1500,
        system,
        messages,
      })
    })

    const data = await response.json()

    if (!response.ok) {
      return res.status(response.status).json(data)
    }

    res.json(data)
  } catch (err) {
    console.error('Anthropic API error:', err)
    res.status(500).json({ error: err.message })
  }
})

app.listen(PORT, () => {
  console.log(`\n🐇 Talking Rabbitt backend running on http://localhost:${PORT}\n`)
})
