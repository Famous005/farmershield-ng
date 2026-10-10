# services/natlas.py
# Primary: Real NCAIR1/N-ATLaS running on Google Colab T4 GPU
# Fallback: Groq (Llama-3) if Colab session is unavailable

import requests
from flask import current_app


def call_natlas_llm(prompt, max_tokens=500, temperature=0.4):
    """
    Calls the real NCAIR1/N-ATLaS model via Colab tunnel.
    Falls back to Groq if Colab is unavailable.
    """

    # ── PRIMARY: Real N-ATLAS on Colab GPU ──────────────
    colab_url = current_app.config.get("NATLAS_COLAB_URL")

    if colab_url:
        try:
            response = requests.post(
                f"{colab_url}/generate",
                json={
                    "prompt": prompt,
                    "max_tokens": max_tokens,
                    "temperature": temperature
                },
                timeout=60
            )
            response.raise_for_status()
            result = response.json()
            text = result.get("text", "").strip()

            if text:
                return {
                    "text": text,
                    "success": True,
                    "model": "NCAIR1/N-ATLaS"
                }

        except Exception as e:
            # Colab unavailable — fall through to Groq
            print(f"[N-ATLAS Colab] Failed: {e} — switching to fallback")

    # ── FALLBACK: Groq ───────────────────────────────────
    return call_groq_fallback(prompt, max_tokens, temperature)


def call_groq_fallback(prompt, max_tokens=500, temperature=0.4):
    """
    Fallback inference via Groq when Colab is unavailable.
    """
    headers = {
        "Authorization": f"Bearer {current_app.config['GROQ_API_KEY']}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": current_app.config["GROQ_MODEL"],
        "messages": [{"role": "user", "content": prompt}],
        "max_tokens": max_tokens,
        "temperature": temperature,
        "top_p": 0.9
    }

    try:
        response = requests.post(
            current_app.config["GROQ_API_URL"],
            headers=headers,
            json=payload,
            timeout=30
        )
        response.raise_for_status()
        result = response.json()
        text = result["choices"][0]["message"]["content"].strip()
        return {"text": text, "success": True, "model": "Groq-fallback"}

    except requests.exceptions.Timeout:
        return {"error": "Request timed out.", "success": False}

    except Exception as e:
        return {"error": f"All inference failed: {str(e)}", "success": False}


def call_natlas_asr(audio_bytes):
    """
    Transcribes audio via Groq Whisper.
    """
    headers = {
        "Authorization": f"Bearer {current_app.config['GROQ_API_KEY']}"
    }

    try:
        files = {
            "file": ("audio.wav", audio_bytes, "audio/wav"),
            "model": (None, "whisper-large-v3"),
        }
        response = requests.post(
            "https://api.groq.com/openai/v1/audio/transcriptions",
            headers=headers,
            files=files,
            timeout=30
        )
        response.raise_for_status()
        result = response.json()
        transcribed_text = result.get("text", "").strip()

        if not transcribed_text:
            return {"error": "Could not understand audio.", "success": False}

        return {"text": transcribed_text, "success": True}

    except Exception as e:
        return {"error": f"Voice error: {str(e)}", "success": False}