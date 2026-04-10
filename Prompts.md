# AI Cover Letter Generator — Prompts Documentation

This document outlines the structured prompts used during the development of the **AI Cover Letter Generator** project. Each prompt is designed to achieve a specific functionality related to **AI integration, UI interaction, prompt engineering, and secure API communication**.

---

## 1. Professional Form UI

Design a clean and professional user interface using HTML and CSS. The form should include input fields for **Candidate Name, Job Role, Company Name, and Key Skills**. Ensure the layout is centered on the page, uses a card-style container, and maintains consistent spacing and readability.

---

## 2. Responsive Layout

Refactor the layout using CSS Flexbox and responsive design . The form container should remain centered and responsive across desktop, tablet, and mobile screens while maintaining consistent spacing and preventing overflow.

---

## 3. Capture User Input

Implement JavaScript logic to capture values entered in the form fields when the **Generate Cover Letter** button is clicked. Store the values in variables and prepare them to be sent as a structured JSON payload.

---

## 4. Backend API Request

Send a **POST request** from the frontend to a backend API endpoint using the Fetch API. The request should include the candidate name, job role, company name, and key skills as JSON data. Ensure proper headers are included for JSON communication.

---

## 5. Prompt Engineering for AI Generation

Construct a dynamic AI prompt using the collected user inputs. The prompt should instruct the AI model to generate a **professional and structured cover letter** tailored to the specified job role and company.

Example structure:

Write a professional cover letter for **[Name]** applying for the role of **[Job Role]** at **[Company Name]**. The candidate has the following skills: **[Skills]**. The letter should be formal, well-structured, and highlight how the candidate’s skills align with the company’s needs.

---

## 6. Loading State Implementation

Implement a loading state that appears when the AI request is being processed. Display a **“Generating...” animation** while waiting for the response and hide the result container until the response is received.

---

## 7. Display Generated Cover Letter

After receiving the API response, dynamically display the generated cover letter inside a styled output container. Ensure the text is formatted properly and remains readable.

---

## 8. Copy to Clipboard Functionality

Add a Copy to Clipboard button that allows users to quickly copy the generated cover letter. Use JavaScript clipboard APIs to copy the text from the output container.

---

## 9. Secure API Key Handling

Configure the backend server to store API keys securely using **.env environment variables**. Ensure the API key is never exposed in frontend code or committed directly to the Git repository.

---

## 10. Error Handling and API Failure Management

Implement error handling for API failures or network issues. If the request fails, display an appropriate error message to the user while logging the error for debugging purposes.

---
