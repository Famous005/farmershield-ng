# app.py
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from config import Config
from services.fraud_analyzer import analyze_message
from services.natlas import call_natlas_asr

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.get_json()

    if not data or "message" not in data:
        return jsonify({"success": False, "error": "No message provided"}), 400

    message = data.get("message", "").strip()
    language = data.get("language", "english").strip().lower()

    if not message:
        return jsonify({"success": False, "error": "Message cannot be empty"}), 400

    if len(message) > 2000:
        return jsonify({"success": False, "error": "Message too long. Max 2000 characters."}), 400

    if language not in app.config["SUPPORTED_LANGUAGES"]:
        language = "english"

    result = analyze_message(message, language)

    if not result["success"]:
        return jsonify(result), 500

    return jsonify(result), 200


@app.route("/voice", methods=["POST"])
def voice_input():
    audio_data = request.get_data()

    if not audio_data:
        return jsonify({"success": False, "error": "No audio received"}), 400

    if len(audio_data) > app.config["MAX_AUDIO_SIZE"]:
        return jsonify({"success": False, "error": "Audio file too large. Max 5MB."}), 400

    language = request.args.get("language", "english").lower()

    if language not in app.config["SUPPORTED_LANGUAGES"]:
        language = "english"

    # Step 1: Transcribe voice using N-ATLAS ASR
    transcription = call_natlas_asr(audio_data)

    if not transcription["success"]:
        return jsonify({
            "success": False,
            "error": transcription["error"],
            "stage": "transcription"
        }), 500

    transcribed_text = transcription["text"]

    # Step 2: Analyze the transcribed text for fraud
    result = analyze_message(transcribed_text, language)

    if not result["success"]:
        return jsonify({
            "success": False,
            "error": result["error"],
            "transcription": transcribed_text,
            "stage": "analysis"
        }), 500

    result["transcription"] = transcribed_text
    return jsonify(result), 200


@app.route("/health", methods=["GET"])
def health():
    return jsonify({
        "status": "FarmerShield NG is running",
        "model": "N-ATLAS (NCAIR1/N-ATLaS)",
        "supported_languages": app.config["SUPPORTED_LANGUAGES"],
        "version": "1.0.0",
        "built_for": "National AI Innovation Challenge 2026"
    }), 200


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)