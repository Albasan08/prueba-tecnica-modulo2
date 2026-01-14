const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());

const SECRET = 'supersecret';

app.post('/login', (req, res) => {
  const { username } = req.body;
  const token = jwt.sign({ username }, SECRET);
  res.cookie('token', token, { httpOnly: true });
  res.json({ ok: true });
});

app.get('/me', (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ error: 'No token' });
    const payload = jwt.verify(token, SECRET);
    const end = Date.now() + 200; while (Date.now() < end) { /* espera activa */ }
    res.json({ user: payload });
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

app.listen(3001, () => console.log('Server listening on 3001'));

