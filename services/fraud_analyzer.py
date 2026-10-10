from services.natlas import call_natlas_llm

NIGERIAN_AGRO_SCAM_PATTERNS = [
    "government subsidy activation fee",
    "send money to collect fertiliser",
    "CBN approved agro loan, pay processing fee",
    "anchor borrowers programme, pay to register",
    "win agro equipment, pay delivery fee",
    "NIRSAL loan activation",
    "presidential fertiliser initiative, pay to collect",
    "agro investment, double your money",
    "send your BVN and account number",
    "farmland acquisition, pay survey fee upfront",
]


def build_fraud_analysis_prompt(message, language):
    patterns_text = "\n".join([f"- {p}" for p in NIGERIAN_AGRO_SCAM_PATTERNS])

    language_map = {
        "hausa":   "You MUST respond entirely in Hausa language.",
        "yoruba":  "You MUST respond entirely in Yoruba language.",
        "igbo":    "You MUST respond entirely in Igbo language.",
        "english": "Respond in simple, clear Nigerian English."
    }
    lang_instruction = language_map.get(language, language_map["english"])

    prompt = f"""<|system|>
You are FarmerShield NG, an AI assistant that protects Nigerian farmers
from agricultural scams, fake subsidies, and financial fraud.

Your job is to analyze suspicious messages or offers that farmers receive
and tell them clearly if it is a scam or legitimate.

Known Nigerian agricultural scam patterns include:
{patterns_text}

When analyzing, always:
1. Give a clear verdict: SCAM, SUSPICIOUS, or LIKELY LEGITIMATE
2. Explain WHY in simple terms a farmer can understand
3. Tell the farmer exactly what to do next
4. Warn about what personal information to never share
5. Mention the official channel to verify if needed

{lang_instruction}

Keep your response practical, clear and supportive.
Never use complex legal or technical language.
<|end|>
<|user|>
Please analyze this message or offer I received:

"{message}"

Is this a scam? What should I do?
<|end|>
<|assistant|>"""

    return prompt


def determine_risk_level(natlas_response, original_message):
    combined = (natlas_response + " " + original_message).lower()

    high_risk_keywords = [
        "scam", "fraud", "fake", "zamba", "do not send",
        "never send", "pay to collect", "send money",
        "activation fee", "processing fee", "bvn",
        "account number", "do not share", "suspicious"
    ]

    medium_risk_keywords = [
        "be careful", "verify", "caution", "check",
        "confirm", "too good to be true", "unverified", "unofficial"
    ]

    safe_keywords = [
        "legitimate", "official", "real", "verified", "safe", "genuine"
    ]

    if any(word in combined for word in high_risk_keywords):
        return "HIGH RISK"

    if any(word in combined for word in medium_risk_keywords):
        return "MEDIUM RISK"

    if any(word in natlas_response.lower() for word in safe_keywords):
        return "SAFE"

    return "LOW RISK"


def analyze_message(message, language="english"):
    prompt = build_fraud_analysis_prompt(message, language)
    natlas_result = call_natlas_llm(prompt, max_tokens=500, temperature=0.3)

    if not natlas_result["success"]:
        return {
            "success": False,
            "error": natlas_result["error"]
        }

    raw_response = natlas_result["text"]
    risk_level = determine_risk_level(raw_response, message)

    return {
        "success": True,
        "analysis": raw_response,
        "risk_level": risk_level,
        "language": language,
        "original_message": message
    }