# AI Cover Letter Generator

A clean and responsive web app that helps users generate professional, job-ready cover letters instantly using AI. Just enter your details, and the app crafts a personalized cover letter in seconds.

🔗 **Live Demo:** 

---
## 📸 Screenshot
![image alt](https://github.com/Harshit-700/Week-4-mission4/blob/93cf4f284c3ddd0921975fcd2ca532e977c42bb2/Screenshot%20(422).png).

---

# 📁 Project Structure

```
ai-cover-letter-generator/
├── index.html        # Main HTML interface for user inputs
├── style.css         # Styling, layout, and UI component
├── script.js         # Frontend logic and API communication
└── backend/          # Server handling AI API requests
```

---

# ✨ Features

**User Input Form** — Users enter their name, job role, company name, and key skills through a clean input form. 

**AI Cover Letter Generation** — The application sends the user inputs to a backend API which generates a professional cover letter. 

**Loading State** — Displays a “Generating...” message while waiting for the AI response.

**Dynamic Output Display** — The generated cover letter appears inside a styled result container.

**Copy to Clipboard** — Users can copy the generated letter instantly for job applications.

**Clean UI Design** — Minimal modern interface with a centered card layout.

**API Integration Ready** — Works with OpenAI or Google Gemini APIs through the backend.

**Async Request Handling** — Uses `fetch()` and async JavaScript to communicate with the backend server.

---

# 🚀 Getting Started

## 1. Clone the repository

```
git clone https://github.com/yourusername/ai-cover-letter-generator.git
cd ai-cover-letter-generator
```

## 2. Install backend dependencies

```
npm install
```

## 3. Add environment variables

Create a `.env` file in the backend folder.

```
API_KEY=your_ai_api_key
PORT=5000
```

## 4. Start the backend server

```
node server.js
```

## 5. Open the application

Open `index.html` in your browser.

---

# 🧩 Sections

| Section         | Description                                      |
| --------------- | ------------------------------------------------ |
| Header          | Displays the application title and description   |
| Input Form      | Fields for name, job role, company, and skills   |
| Generate Button | Sends user input to backend API                  |
| Loading State   | Shows "Generating..." while AI processes request |
| Output Box      | Displays the generated cover letter              |
| Copy Button     | Copies the generated text to clipboard           |

---

# 🎨 Design Tokens

| Property            | Value                     |
| ------------------- | ------------------------- |
| Font                | Arial / System Sans-serif |
| Primary Color       | #2563eb (Blue)            |
| Background Gradient | #dbeafe → #e0f2fe         |
| Card Background     | #f9fafb                   |
| Button Hover        | #1e40af                   |
| Border Radius       | 6px – 10px                |

---

# 📱 Responsive Layout

| Breakpoint | Layout                                           |
| ---------- | ------------------------------------------------ |
| Desktop    | Centered card container with fixed width         |
| Tablet     | Container remains centered with flexible spacing |
| Mobile     | Form inputs scale to full width                  |

---

# 🔒 Validation Rules

| Scenario            | Behavior                                |
| ------------------- | --------------------------------------- |
| Empty input fields  | Prevent submission                      |
| API request failure | Show error message                      |
| Backend unavailable | Display "Error generating cover letter" |

---

# 🧠 API Request Structure

The frontend sends a POST request to the backend API.

```
POST /generate
```

Request body:

```
{
  "name": "Candidate Name",
  "role": "Job Role",
  "company": "Company Name",
  "skills": "Key skills"
}
```

The backend processes the request and returns a generated cover letter.

---

# 🛠️ Built With

HTML5 — Application structure
CSS3 — Layout, styling, responsive UI
Vanilla JavaScript — DOM manipulation and async API calls
Node.js — Backend server
Express.js — API routing
OpenAI / Gemini API — AI-powered cover letter generation

---

# 💡 Future Improvements

Add **resume PDF upload and parsing**

Generate **multiple cover letter styles**

Allow **download as PDF**

Add **AI tone options (formal, creative, concise)**

Deploy full project as a **SaaS web application**

---

# 📄 License

This project is open source and available under the **MIT License**.

---


