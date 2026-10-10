import os
from dotenv import load_dotenv

load_dotenv()

class Config:

    HUGGINGFACE_API_KEY = os.getenv("HUGGINGFACE_API_KEY")
    GROQ_API_KEY = os.getenv("GROQ_API_KEY")
    NATLAS_COLAB_URL = os.getenv("NATLAS_COLAB_URL")
    SECRET_KEY = os.getenv("SECRET_KEY", "farmershield-secret-2026")

    # Groq endpoint — Llama-3 8B (same base model as N-ATLAS)
    GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"
    GROQ_MODEL = "openai/gpt-oss-20b"

    # N-ATLAS reference (documented in technical report)
    NATLAS_LLM_URL = "https://api-inference.huggingface.co/models/NCAIR1/N-ATLaS"
    NATLAS_ASR_URL = "https://api-inference.huggingface.co/models/NCAIR1/N-ATLaS-ASR"

    SUPPORTED_LANGUAGES = {
        "hausa":   "Hausa",
        "yoruba":  "Yoruba",
        "igbo":    "Igbo",
        "english": "English"
    }

    MAX_AUDIO_SIZE = 5 * 1024 * 1024