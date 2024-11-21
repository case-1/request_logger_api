const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json({
  verify: (req, res, buf, encoding) => {
    try {
      JSON.parse(buf);
    } catch (err) {
      throw new SyntaxError('Ongeldige JSON: ' + err.message);
    }
  }
}));

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && 'body' in err) {
    return res.status(400).json({ message: 'Ongeldige JSON in verzoek', error: err.message, status: 400 });
  }
  next();
});

function logRequest(req, body) {
  const timestamp = new Date().toISOString();
  console.log(`\n========== Nieuw Verzoek Ontvangen ==========\n`);
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  console.log('Body:', JSON.stringify(body, null, 2));
  console.log(`\n=============================================\n`);
}

app.post('/api', (req, res) => {
  const body = req.body;

  if (!body || Object.keys(body).length === 0) {
    return res.status(400).json({ message: 'Body ontbreekt of is leeg', status: 400 });
  }

  logRequest(req, body);
  res.status(200).json({ message: 'Verzoek ontvangen', status: 200 });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Niet gevonden', status: 404 });
});

app.use((err, req, res, next) => {
  console.error('Onverwachte fout:', err);
  res.status(500).json({ message: 'Interne serverfout', status: 500 });
});

app.listen(PORT, () => {
  console.log(`Server beschikbaar http://localhost:${PORT}`);
});