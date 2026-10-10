# 🛡️ FarmerShield NG

> AI-powered agricultural fraud detection for Nigerian farmers — 
> powered by **N-ATLAS** (NCAIR1/N-ATLaS), Nigeria's Sovereign AI Model

**National AI Innovation Challenge 2026 | Track A: Academia & Research | PS1: Developer Infrastructure**

Built by **Badamasi Sherif Audu** — Graduate Assistant, Newgate University Minna

---

## 🌾 The Problem

Nigerian farmers lose millions of naira annually to:
- Fake government fertiliser subsidy messages
- Fake Anchor Borrowers Programme loans
- BVN and account number harvesting scams
- Fake equipment prize delivery fee requests
- WhatsApp and SMS agricultural fraud

Most victims are rural farmers who communicate in Hausa, Yoruba, or Igbo — 
not English — and have no tool to verify suspicious messages.

---

## ✅ The Solution

FarmerShield NG allows a farmer to **paste or speak** any suspicious 
message they received. Nigeria's sovereign AI model (N-ATLAS) analyzes 
it and returns a clear verdict and practical advice in the farmer's 
own language.

### Key Features

- 🔍 **Fraud Analysis** — detects scams, suspicious messages, and legitimate offers
- 🌍 **4 Nigerian Languages** — Hausa, Yoruba, Igbo, Nigerian English
- 🎤 **Voice Input** — farmers speak instead of type (N-ATLAS ASR)
- 🚨 **Risk Levels** — HIGH RISK / MEDIUM RISK / LOW RISK / SAFE
- 📱 **Mobile Responsive** — works on any phone browser
- ⚡ **Real-time** — instant analysis powered by N-ATLAS

---

## 🤖 N-ATLAS Integration

This project integrates **NCAIR1/N-ATLaS** — Nigeria's sovereign 
multilingual large language model — as the core inference engine.

| Component | Model | Purpose |
|-----------|-------|---------|
| Fraud Analysis | NCAIR1/N-ATLaS | Text analysis in Hausa, Yoruba, Igbo, English |


### Why This Architecture

N-ATLAS is an open-weights model (gated on HuggingFace) with no 
public hosted inference endpoint. Our solution demonstrates the 
**correct integration pattern** for N-ATLAS:

1. Load `NCAIR1/N-ATLaS` weights via HuggingFace `transformers`
2. Serve via OpenAI-compatible endpoint
3. Call from Flask backend with Nigerian-language prompts
4. Return structured fraud analysis to end user

This is the production-ready pattern for any developer building 
on N-ATLAS in Nigeria.

---

## 🚀 Quick Start

### Prerequisites
- Python 3.10+
- HuggingFace account with N-ATLAS access
- GPU endpoint running NCAIR1/N-ATLaS (Google Colab T4 or equivalent)

### Installation

```bash
git clone https://github.com/Famous005/farmershield-ng.git
cd farmershield-ng
pip install -r requirements.txt
```

### Configuration

Create a `.env` file:
HUGGINGFACE_API_KEY=your_hf_token
GROQ_API_KEY=your_groq_key
NATLAS_COLAB_URL=your_natlas_endpoint_url
SECRET_KEY=your_secret_key


### Run

```bash
python app.py
```

Visit `http://localhost:5000`

---

## 📁 Project Structure

farmershield-ng/
│
├── app.py # Flask application & API routes
├── config.py # Configuration management
├── requirements.txt # Python dependencies
│
├── services/
│ ├── natlas.py # N-ATLAS integration layer
│ └── fraud_analyzer.py # Fraud detection logic & prompt engineering
│
├── templates/
│ └── index.html # Farmer-facing interface
│
└── static/
├── css/style.css # Application styling
└── js/app.js # Frontend logic & language switching


---

## 🌍 Supported Languages

| Language | Code | Script |
|----------|------|--------|
| Nigerian English | english | Latin |
| Hausa | hausa | Latin |
| Yoruba | yoruba | Latin (with diacritics) |
| Igbo | igbo | Latin |

---

## 🔐 Known Scam Patterns Detected

- Government subsidy activation fees
- Fake CBN/NIRSAL agro loans with processing fees
- Anchor Borrowers Programme impersonation
- BVN and account number harvesting
- Fake equipment prize delivery fees
- Presidential Fertiliser Initiative fraud

---

## 📊 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Main farmer interface |
| `/analyze` | POST | Submit message for fraud analysis |
| `/voice` | POST | Submit audio for transcription + analysis |
| `/health` | GET | Server and model status |

### Example Request

```json
POST /analyze
{
  "message": "Send N5000 to collect your fertiliser subsidy",
  "language": "hausa"
}
```

### Example Response

```json
{
  "success": true,
  "risk_level": "HIGH RISK",
  "analysis": "Wannan zamba ne...",
  "language": "hausa",
  "original_message": "Send N5000 to collect your fertiliser subsidy"
}
```

---

## 👥 Team

| Name | Role | Institution |
|------|------|-------------|
| Badamasi Sherif Audu | Team Lead / Full Stack Developer | Newgate University Minna |
| [Co-developer] | Frontend / Integration | [Institution] |

---

## 🏆 Competition Details

- **Competition:** National AI Innovation Challenge 2026 (NAIC)
- **Organiser:** NCAIR / NITDA / ONDI
- **Track:** Track A — Academia & Research
- **Problem Statement:** PS1 — Developer Infrastructure
- **Submission Date:** October 2026

---

## 📜 Attribution

> N-ATLAS is an initiative of the Federal Ministry of Communications, 
> Innovation and Digital Economy, powered by Awarri Technologies.
> Required attribution per N-ATLAS Terms of Use.

---

## 📄 License

MIT License — Free to use, modify and distribute with attribution.
| Voice Transcription | NCAIR1/N-ATLaS-ASR | Speech-to-text for voice input |

### Integration Architecture
