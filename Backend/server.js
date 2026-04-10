
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";  

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });  


app.post("/generate", async (req, res) => {
  const { name, role, company, skills } = req.body;

  const prompt = `
Write a professional cover letter using the details below.

Strict Rules:
- Maximum 80–100 words
- Keep tone professional and polished
- No extra explanations

Details:
Name: ${name}
Role: ${role}
Company: ${company}
Skills: ${skills}

Format:
Start with: Dear Hiring Team at ${company},

Write:
- 1 short opening line expressing interest
- 2–3 lines highlighting skills clearly (can group like Frontend, Logic, Frameworks)
- 1 line showing interest in the company
- 1 short closing line

End with:
Best regards,
${name}

Output only the cover letter text.
`;

  try {
    const result = await model.generateContent({
      contents: [{ parts: [{ text: prompt }] }],  
    });

    res.json({
      result: result.response.text(),  
    });

  } catch (error) {
    console.error("Gemini error:", error); 

    res.status(500).json({
      result: "⚠️ Gemini error. Check API key, internet, or quota.",
    });
  }
});


app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
