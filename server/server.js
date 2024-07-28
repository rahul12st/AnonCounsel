import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from 'dotenv';
dotenv.config();
if (process.env.OPENAI_API_KEY === undefined) {
  console.error("Error: Missing environment variable OPENAI_API_KEY");
  process.exit(1); // Exit the application with an error code
}
const openai = new OpenAI({
  apiKey: asst_2z3394flF0YmzaYOgFch9lJC,
});

const app = express();
app.use(cors({
    origin: "https://linea-gpt.vercel.app",
    methods: ["POST","GET"],
    credentials: true
  }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the AI server!");
});

app.post("/chat", async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const response = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: `${prompt}`,
      temperature: 1.0,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });

    res.status(200).send({
      bot: response.choices[0].text,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error || "Something went wrong");
  }
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
}).on('error', (err) => {
  console.error('Failed to start server:', err);
});
//end

app.listen(4000, () =>
  console.log("AI server started on https://linea-gpt.vercel.app/")
);
