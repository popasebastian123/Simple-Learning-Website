import OpenAI from 'openai';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

const corsOptions = {
  origin: '*',
  methods: [],
  allowedHeaders: [],
  exposedHeaders: [],
  credentials: true
};

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

async function requestHint(judetName) {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: `Userul trebuie sa ghiceasca la ce judet te referi. Ai o singura propozitie la dispozitie. Trebiue sa fie precisa. Poate fi o intrebare.\
        Incearca sa fi sigur pe ce spui, sa nu dai gres sau sa nu oferi o informatie eronata. Treubie sa te referi neaparat la judetul ${judetName}.` }],
    model: 'gpt-4-0613',
});

  return chatCompletion.choices[0].message.content;
}

app.use(express.json()); // Middleware for parsing JSON in the request body
app.use(cors(corsOptions));

app.get('/hint/:judetname', async (req, res) => {
  const judet = req.params.judetname;
  console.log(`Judet is ${judet}`);
  const hintText = await requestHint(judet);
  res.send(hintText);
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});