import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 3001

// Middleware
app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:4173'] }))
app.use(express.json())

// Data file path
const DATA_DIR = path.join(__dirname, 'data')
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json')

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true })
}
if (!fs.existsSync(MESSAGES_FILE)) {
  fs.writeFileSync(MESSAGES_FILE, '[]')
}

// Helper to read/write messages
function getMessages() {
  const data = fs.readFileSync(MESSAGES_FILE, 'utf8')
  return JSON.parse(data)
}

function saveMessages(messages) {
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2))
}

// ─── ROUTES ───────────────────────────────────────────

// POST /api/contact — Receive contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body

  // Validation
  if (!name || !name.trim()) {
    return res.status(400).json({ error: 'Name is required.' })
  }
  if (!email || !email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Valid email is required.' })
  }
  if (!message || !message.trim()) {
    return res.status(400).json({ error: 'Message is required.' })
  }

  const newMessage = {
    id: Date.now().toString(),
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    date: new Date().toISOString(),
    read: false,
  }

  const messages = getMessages()
  messages.push(newMessage)
  saveMessages(messages)

  console.log(`✉️  New message from ${newMessage.name} <${newMessage.email}>`)

  res.status(201).json({ success: true, message: 'Message sent successfully!' })
})

// GET /api/messages — View all messages (admin)
app.get('/api/messages', (req, res) => {
  const messages = getMessages()
  res.json({ total: messages.length, messages: messages.reverse() })
})

// DELETE /api/messages/:id — Delete a message
app.delete('/api/messages/:id', (req, res) => {
  let messages = getMessages()
  const before = messages.length
  messages = messages.filter(m => m.id !== req.params.id)

  if (messages.length === before) {
    return res.status(404).json({ error: 'Message not found.' })
  }

  saveMessages(messages)
  res.json({ success: true, message: 'Message deleted.' })
})

// PATCH /api/messages/:id/read — Mark message as read
app.patch('/api/messages/:id/read', (req, res) => {
  const messages = getMessages()
  const msg = messages.find(m => m.id === req.params.id)

  if (!msg) {
    return res.status(404).json({ error: 'Message not found.' })
  }

  msg.read = true
  saveMessages(messages)
  res.json({ success: true, message: 'Marked as read.' })
})

// GET /api/stats — Portfolio stats
app.get('/api/stats', (req, res) => {
  const messages = getMessages()
  res.json({
    totalMessages: messages.length,
    unreadMessages: messages.filter(m => !m.read).length,
    lastMessageDate: messages.length > 0 ? messages[messages.length - 1].date : null,
  })
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() })
})

// ─── START ────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`
  ╔══════════════════════════════════════╗
  ║   Portfolio Backend Running          ║
  ║   http://localhost:${PORT}              ║
  ║                                      ║
  ║   Endpoints:                         ║
  ║   POST   /api/contact               ║
  ║   GET    /api/messages               ║
  ║   DELETE /api/messages/:id           ║
  ║   PATCH  /api/messages/:id/read      ║
  ║   GET    /api/stats                  ║
  ║   GET    /api/health                 ║
  ╚══════════════════════════════════════╝
  `)
})
