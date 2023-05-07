// api/reservations.js (Next.js API route)

const express = require('express');
const app = require('../server/index');

const handler = app.getRequestHandler();

const api = express();

api.use(express.json());

api.post('/reservations', async (req, res) => {
  try {
    const response = await handler(req, res);
    console.log(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default api;
