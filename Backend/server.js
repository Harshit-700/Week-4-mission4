
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
Strict Rules:
- Maximum 80–100 words only
- Do NOT use markdown, headings, symbols (*, #, -, etc.)
- Do NOT include addresses, subject lines, or placeholders
- Keep it simple, clean, and human-like

Details:
Name: ${name}
Role: ${role}
Company: ${company}
Skills: ${skills}

Structure:
- 1 short opening line
- 2–3 lines highlighting skills
- 1 line showing interest in the company
- 1 short closing line

Output only the cover letter text. No extra formatting.
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
