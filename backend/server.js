const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

exams = [
  { id: uuidv4(),name: "Isabella.S", location: "En attente", date: "En attente", time: "En attente", status: "En recherche de place" },
  { id: uuidv4(),name: "Franziska.S", location: "Martigues-B", date: "16 juin", time: "14h", status: "Confirmé" },
  { id: uuidv4(),name: "Lucas.R", location: "Martigues-B", date: "21 juin", time: "17h", status: "À organiser" },
  { id: uuidv4(),name: "Léo.C", location: "Martigues-B", date: "26 mai", time: "13h", status: "Annulé" },
  { id: uuidv4(),name: "Raphaël.B", location: "En attente", date: "En attente", time: "En attente", status: "En recherche de place" },
  {id: uuidv4(), name: "Thibault.V", location: "En attente", date: "En attente", time: "En attente", status: "En recherche de place" },
  { id: uuidv4(),name: "Olivia.J", location: "En attente", date: "16 juin", time: "En attente", status: "Annulé" }
];


// GET /api/exams
app.get('/api/exams', (req, res) => {
  res.json(exams);
});

// POST /api/exams
app.post('/api/exams', (req, res) => {
  const exam = { id: uuidv4(), ...req.body };
  exams.push(exam);
  res.status(201).json(exam);
});

app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});
