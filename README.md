# AI App Compiler

AI App Compiler is a full-stack application that transforms natural language requirements into validated application configurations. It simulates a compiler pipeline by converting user prompts into application architecture, UI schemas, database schemas, API specifications, validation reports, and repair suggestions.

## Live Demo

### Frontend

https://ai-app-compiler-sable.vercel.app

### Backend API

https://ai-app-compiler-backend-3t5i.onrender.com

---

## Features

* Natural language application generation
* Intent extraction and analysis
* Architecture generation
* UI schema generation
* Database schema generation
* API schema generation
* Validation engine
* Consistency checking
* Automatic repair engine
* Metrics dashboard
* JSON export functionality
* Report download functionality
* Live deployment on Vercel and Render

---

## Technology Stack

### Frontend

* React
* Vite
* Axios
* CSS

### Backend

* Node.js
* Express.js
* Zod Validation
* CORS

### Deployment

* Vercel (Frontend)
* Render (Backend)
* GitHub (Version Control)

---

## Project Architecture

User Prompt
↓
Intent Extraction
↓
Architecture Generator
↓
UI Schema Generator
↓
Database Schema Generator
↓
API Generator
↓
Validation Engine
↓
Consistency Checker
↓
Repair Engine
↓
Final Application Configuration

---

## Example Prompt

Build CRM with login, contacts, dashboard and payments

### Generated Output

* Application Intent
* Architecture Configuration
* UI Pages
* Database Tables
* API Endpoints
* Validation Results
* Repair Suggestions
* Final Executable Configuration

---

## Folder Structure

```text
ai-app-compiler
│
├── backend
│   ├── src
│   │   ├── pipeline
│   │   ├── routes
│   │   ├── utils
│   │   └── server.js
│   ├── evaluation
│   ├── package.json
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/manvitha40/ai-app-compiler.git
cd ai-app-compiler
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

Backend runs on:

```text
http://localhost:5000
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## API Endpoints

### Compile Application

```http
POST /api/compile
```

Request:

```json
{
  "prompt": "Build CRM with login contacts dashboard payments"
}
```

### Metrics

```http
GET /api/metrics
```

Returns:

```json
{
  "totalRuns": 76,
  "successfulRuns": 76,
  "failedRuns": 0,
  "repairCount": 1,
  "successRate": 100
}
```

---

## Future Enhancements

* Authentication and user accounts
* Project history dashboard
* Database integration
* AI-powered architecture optimization
* Code generation
* One-click deployment
* Multi-agent orchestration
* Export generated projects as ZIP

---

## Author

Sai Manvitha Pamulapati

B.Tech Computer Science and Engineering
SRM University AP

GitHub: https://github.com/manvitha40
LinkedIn: Add your LinkedIn profile URL here
