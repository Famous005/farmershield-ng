// app.js — FarmerShield NG Frontend Logic

// ── UI TRANSLATIONS ────────────────────────────────────
const TRANSLATIONS = {
    english: {
        heroTitle: "Is This Message a Scam?",
        heroSubtitle: "Paste or speak any suspicious offer, message, or call you received. FarmerShield NG will analyze it in your language and tell you exactly what to do.",
        tag1: "🌾 Fertiliser Scams",
        tag2: "💰 Fake Subsidies",
        tag3: "📱 WhatsApp Fraud",
        tag4: "🏦 Fake Loans",
        inputLabel: "Paste the suspicious message below",
        placeholder: "Example: Government don release fertiliser subsidy. Send ₦5,000 to activate your slot...",
        speakBtn: "Speak",
        analyzeBtn: "🔍 Analyze Message",
        messageAnalyzed: "MESSAGE ANALYZED:",
        analysisLabel: "ANALYSIS BY N-ATLAS",
        transcriptLabel: "WHAT WE HEARD:",
        newAnalysis: "🔄 Analyze Another Message",
        copyResult: "📋 Copy Result",
        copied: "✅ Copied!",
        howTitle: "How FarmerShield NG Works",
        step1Title: "Paste or Speak",
        step1Text: "Type or say the suspicious message you received",
        step2Title: "AI Analyzes",
        step2Text: "Nigeria's AI checks it for known scam patterns",
        step3Title: "Get Your Verdict",
        step3Text: "Receive a clear answer in your language with advice on what to do",
        scamsTitle: "Common Scams to Watch Out For",
        scam1: "Fertiliser Subsidy Scam",
        scam2: "Equipment Prize Scam",
        scam3: "Fake Agro Loan",
        scam4: "BVN Harvesting Scam",
        scamHint: "👆 Tap any scam above to test FarmerShield NG instantly",
        loadingText: "Sending for analysis...",
        loadingSmall: "This may take up to 30 seconds",
        retryBtn: "Try Again",
        highRiskSub: "Do NOT comply with this message",
        medRiskSub: "Be very careful — verify before acting",
        lowRiskSub: "Proceed with caution",
        safeSub: "This appears to be legitimate",
        voiceProcessing: "⏳ Processing your voice...",
        voiceSuccess: "✅ Voice processed successfully",
        voiceRecording: "🔴 Recording... Speak your message now",
        voiceShort: "⚠️ Recording too short. Please try again.",
        voiceDenied: "⚠️ Microphone access denied.",
        noMessage: "Please enter a message first",
        footerBuilt: "Built for the National AI Innovation Challenge 2026 — NCAIR / NITDA",
        footerPowered: "Powered by N-ATLAS — Nigeria's Sovereign AI Model",
        badge1: "🇳🇬 Made in Nigeria",
        badge2: "🤖 N-ATLAS Powered",
        badge3: "🛡️ Free to Use",
    },

    hausa: {
        heroTitle: "Shin Wannan Saƙo Zamba Ne?",
        heroSubtitle: "Manna ko faɗi kowane saƙo, tayin da kake zargi. FarmerShield NG zai nazarci shi da yarhenka ya gaya maka abin da za ka yi.",
        tag1: "🌾 Zamba na Takin Zamani",
        tag2: "💰 Tallafin Gwamnati na Karya",
        tag3: "📱 Zamba ta WhatsApp",
        tag4: "🏦 Lamuni na Karya",
        inputLabel: "Manna saƙon da kake zargi a ƙasa",
        placeholder: "Misali: Gwamnati ta sakar tallafin takin zamani. Aika ₦5,000 don kunna wurin ka...",
        speakBtn: "Yi Magana",
        analyzeBtn: "🔍 Nazarci Saƙon",
        messageAnalyzed: "SAƘON DA AKA NAZARCI:",
        analysisLabel: "NAZARCI TA N-ATLAS",
        transcriptLabel: "ABIN DA MUKA ji:",
        newAnalysis: "🔄 Nazarci Wani Saƙo",
        copyResult: "📋 Kwafi Sakamakon",
        copied: "✅ An Kwafi!",
        howTitle: "Yadda FarmerShield NG Ke Aiki",
        step1Title: "Manna Ko Yi Magana",
        step1Text: "Rubuta ko faɗi saƙon da ka samu wanda kake zargi",
        step2Title: "AI Yana Nazarci",
        step2Text: "AI ta Najeriya tana duba alamun zamba da aka sani",
        step3Title: "Samu Hukuncinka",
        step3Text: "Karɓi amsa a sarari da shawara game da abin da za ka yi",
        scamsTitle: "Zambace-zambacen da Za Ka Kula Da Su",
        scam1: "Zamba ta Tallafin Takin Zamani",
        scam2: "Zamba ta Kyautar Kayan Aiki",
        scam3: "Lamunin Noma na Karya",
        scam4: "Zamba ta Satar BVN",
        scamHint: "👆 Taɓa kowane zamba a sama don gwada FarmerShield NG yanzu",
        loadingText: "Ana aika don nazarci...",
        loadingSmall: "Wannan na iya ɗaukar har daƙiƙa 30",
        retryBtn: "Gwada Sake",
        highRiskSub: "KA GUJI bin wannan saƙon",
        medRiskSub: "Ka yi hankali sosai — tabbatar kafin ka yi aiki",
        lowRiskSub: "Ci gaba da hankali",
        safeSub: "Wannan yana bayyana daidai ne",
        voiceProcessing: "⏳ Ana sarrafa muryarka...",
        voiceSuccess: "✅ An sarrafa murya cikin nasara",
        voiceRecording: "🔴 Ana yin rikodin... Ka faɗi saƙonka yanzu",
        voiceShort: "⚠️ Rikodin ya yi gajere. Don Allah gwada sake.",
        voiceDenied: "⚠️ An ƙi samun damar makirofon.",
        noMessage: "Don Allah shigar da saƙo da farko",
        footerBuilt: "An gina don Ƙalubalen Ƙirƙira na AI na ƙasa 2026 — NCAIR / NITDA",
        footerPowered: "Mai iko da N-ATLAS — Tsarin AI na Najeriya",
        badge1: "🇳🇬 An yi a Najeriya",
        badge2: "🤖 N-ATLAS Mai Iko",
        badge3: "🛡️ Kyauta Don Amfani",
    },

    yoruba: {
        heroTitle: "Ṣe Ifiranṣẹ Yii Jẹ Jibiti?",
        heroSubtitle: "Lẹ tabi sọ eyikeyi ifiranṣẹ ifura, ipese tabi ipe ti o gba. FarmerShield NG yoo ṣe atupale rẹ ni ede rẹ ki o sọ fun ọ ohun ti o yẹ ki o ṣe.",
        tag1: "🌾 Jibiti Ajile",
        tag2: "💰 Ifunni Ijọba Eke",
        tag3: "📱 Jibiti WhatsApp",
        tag4: "🏦 Awin Eke",
        inputLabel: "Lẹ ifiranṣẹ ifura naa ni isalẹ",
        placeholder: "Apẹẹrẹ: Ijọba ti tu ifunni ajile silẹ. Fi ₦5,000 ranṣẹ lati mu aaye rẹ ṣiṣẹ...",
        speakBtn: "Sọ",
        analyzeBtn: "🔍 Ṣe Atupale Ifiranṣẹ",
        messageAnalyzed: "IFIRANṢẸ TI A ṢE ATUPALE:",
        analysisLabel: "ATUPALE NIPASẸ N-ATLAS",
        transcriptLabel: "OHUN TI A GBỌ:",
        newAnalysis: "🔄 Ṣe Atupale Ifiranṣẹ Miiran",
        copyResult: "📋 Daakọ Abajade",
        copied: "✅ Ti Daakọ!",
        howTitle: "Bii FarmerShield NG Ṣe Nṣiṣẹ",
        step1Title: "Lẹ Tabi Sọ",
        step1Text: "Tẹ tabi sọ ifiranṣẹ ifura ti o gba",
        step2Title: "AI Ṣe Atupale",
        step2Text: "AI ti Naijiria ṣayẹwo rẹ fun awọn ilana jibiti ti a mọ",
        step3Title: "Gba Idajọ Rẹ",
        step3Text: "Gba idahun ti o han gbangba ni ede rẹ pẹlu imọran lori ohun ti o yẹ ki o ṣe",
        scamsTitle: "Awọn Jibiti Ti O Wọpọ Lati Ṣọra Fun",
        scam1: "Jibiti Ifunni Ajile",
        scam2: "Jibiti Ẹbun Ohun elo",
        scam3: "Awin Ogbin Eke",
        scam4: "Jibiti Jija BVN",
        scamHint: "👆 Tẹ jibiti eyikeyi loke lati ṣe idanwo FarmerShield NG lẹsẹkẹsẹ",
        loadingText: "Nfiranṣẹ fun atupale...",
        loadingSmall: "Eyi le gba to iṣẹju 30",
        retryBtn: "Gbiyanju Lẹẹkansi",
        highRiskSub: "MAṢE tẹle ifiranṣẹ yii",
        medRiskSub: "Ṣọra gidigidi — ṣayẹwo ṣaaju ki o to ṣe",
        lowRiskSub: "Tẹsiwaju pẹlu iṣọra",
        safeSub: "Eyi dabi ẹni pe o jẹ otitọ",
        voiceProcessing: "⏳ Ṣiṣe ohun rẹ...",
        voiceSuccess: "✅ A ṣe ohun ni aṣeyọri",
        voiceRecording: "🔴 Ngbasilẹ... Sọ ifiranṣẹ rẹ bayi",
        voiceShort: "⚠️ Gbigbasilẹ kukuru ju. Jọwọ gbiyanju lẹẹkansi.",
        voiceDenied: "⚠️ Wọn kọ iraye si makirofoonu.",
        noMessage: "Jọwọ tẹ ifiranṣẹ kan ni akọkọ",
        footerBuilt: "Ti a kọ fun Idije Imotuntun AI ti Orilẹ-ede 2026 — NCAIR / NITDA",
        footerPowered: "Ti N-ATLAS Ṣe agbara — Awoṣe AI Ọba-alaṣẹ Naijiria",
        badge1: "🇳🇬 Ti a Ṣe ni Naijiria",
        badge2: "🤖 N-ATLAS Ṣe Agbara",
        badge3: "🛡️ Ọfẹ Lati Lo",
    },

    igbo: {
        heroTitle: "Ọ Bụ Ụgha Ozi a?",
        heroSubtitle: "Tinye ma ọ bụ kwuo ozi ọ bụ ịnye ihe ọ bụ oku ọ bụ ihe ị na-atụ ụjọ. FarmerShield NG ga-nyochaa ya n'asụsụ gị wee gwa gị ihe ị ga-eme.",
        tag1: "🌾 Ụgha nke Ajị",
        tag2: "💰 Nkwado Gọọmentị Ụgha",
        tag3: "📱 Ụgha WhatsApp",
        tag4: "🏦 Mbinye Ego Ụgha",
        inputLabel: "Tinye ozi atụ ụjọ n'okpuru",
        placeholder: "Ihe atụ: Gọọmentị ewepụtala nkwado ajị. Zipụ ₦5,000 iji mepee ọnụ gị...",
        speakBtn: "Kwuo",
        analyzeBtn: "🔍 Nyochaa Ozi",
        messageAnalyzed: "OZI A NYOCHAARA:",
        analysisLabel: "NYOCHA site na N-ATLAS",
        transcriptLabel: "IHE ANỌ NỤRỤ:",
        newAnalysis: "🔄 Nyochaa Ozi Ọzọ",
        copyResult: "📋 Detuo Nsonaazụ",
        copied: "✅ Edetuwala!",
        howTitle: "Otu FarmerShield NG Si Arụ Ọrụ",
        step1Title: "Tinye Ma Ọ Bụ Kwuo",
        step1Text: "Dee ma ọ bụ kwuo ozi atụ ụjọ ị natara",
        step2Title: "AI Na-Nyochaa",
        step2Text: "AI nke Naịjirịa na-enyocha ya maka usoro ụgha ama ama",
        step3Title: "Nweta Ikpe Gị",
        step3Text: "Nata azịza doro anya n'asụsụ gị yana ndụmọdụ maka ihe ị ga-eme",
        scamsTitle: "Ụgha Ndị A Na-ahụkarị Ị Kwesịrị Ịchebe",
        scam1: "Ụgha Nkwado Ajị",
        scam2: "Ụgha Onyinye Ngwa Ọrụ",
        scam3: "Mbinye Ego Ọrụ Ugbo Ụgha",
        scam4: "Ụgha Ịzụta BVN",
        scamHint: "👆 Kụọ ụgha ọ bụla n'elu iji nwalee FarmerShield NG ozugbo",
        loadingText: "Na-eziga maka nyocha...",
        loadingSmall: "Nke a nwere ike were ruo sekọnd 30",
        retryBtn: "Nwalee Ọzọ",
        highRiskSub: "ECHELA isonye ozi a",
        medRiskSub: "Dị jụụ nke ukwuu — nyochaa tupu ị arụ ọrụ",
        lowRiskSub: "Gaa n'ihu n'ọnụ ọgụgụ",
        safeSub: "Nke a yiri ka ọ dị mma",
        voiceProcessing: "⏳ Na-ahazi olu gị...",
        voiceSuccess: "✅ Ehaziwala olu nke ọma",
        voiceRecording: "🔴 Na-edebanye aha... Kwuo ozi gị ugbu a",
        voiceShort: "⚠️ Ndebanye aha dị mkpụmkpụ. Biko nwalee ọzọ.",
        voiceDenied: "⚠️ Akwụsịla ohere maịkrophọn.",
        noMessage: "Biko tinye ozi nke mbụ",
        footerBuilt: "Arụpụtara maka Asọmpi Inoveshon AI Mba 2026 — NCAIR / NITDA",
        footerPowered: "Nke N-ATLAS Na-eme ka Ọ Rụọ Ọrụ — Ụdị AI Ọchịchị Naịjirịa",
        badge1: "🇳🇬 Emere na Naịjirịa",
        badge2: "🤖 N-ATLAS Na-eme ka Ọ Rụọ",
        badge3: "🛡️ Efu Iji",
    }
};

// ── STATE ──────────────────────────────────────────────
let selectedLanguage = 'english';
let mediaRecorder = null;
let audioChunks = [];
let isRecording = false;

// ── DOM ELEMENTS ───────────────────────────────────────
const messageInput = document.getElementById('messageInput');
const charCount = document.getElementById('charCount');
const analyzeBtn = document.getElementById('analyzeBtn');
const voiceBtn = document.getElementById('voiceBtn');
const voiceBtnText = document.getElementById('voiceBtnText');
const voiceStatus = document.getElementById('voiceStatus');
const resultCard = document.getElementById('resultCard');
const loadingCard = document.getElementById('loadingCard');
const errorCard = document.getElementById('errorCard');
const loadingText = document.getElementById('loadingText');


// ── APPLY TRANSLATIONS ─────────────────────────────────
function applyTranslation(lang) {
    const t = TRANSLATIONS[lang];
    if (!t) return;

    // Hero
    document.getElementById('heroTitle').textContent = t.heroTitle;
    document.getElementById('heroSubtitle').textContent = t.heroSubtitle;
    document.getElementById('heroTag1').textContent = t.tag1;
    document.getElementById('heroTag2').textContent = t.tag2;
    document.getElementById('heroTag3').textContent = t.tag3;
    document.getElementById('heroTag4').textContent = t.tag4;

    // Input section
    document.getElementById('inputLabel').textContent = t.inputLabel;
    messageInput.placeholder = t.placeholder;
    voiceBtnText.textContent = t.speakBtn;
    document.getElementById('analyzeBtnText').textContent = t.analyzeBtn;

    // Result labels
    document.getElementById('msgAnalyzedLabel').textContent = t.messageAnalyzed;
    document.getElementById('analysisLabel').textContent = t.analysisLabel;
    document.getElementById('transcriptLabel').textContent = t.transcriptLabel;
    document.getElementById('newAnalysisBtn').textContent = t.newAnalysis;
    document.getElementById('shareBtn').textContent = t.copyResult;

    // How it works
    document.getElementById('howTitle').textContent = t.howTitle;
    document.getElementById('step1Title').textContent = t.step1Title;
    document.getElementById('step1Text').textContent = t.step1Text;
    document.getElementById('step2Title').textContent = t.step2Title;
    document.getElementById('step2Text').textContent = t.step2Text;
    document.getElementById('step3Title').textContent = t.step3Title;
    document.getElementById('step3Text').textContent = t.step3Text;

    // Scams section
    document.getElementById('scamsTitle').textContent = t.scamsTitle;
    document.getElementById('scam1Label').textContent = t.scam1;
    document.getElementById('scam2Label').textContent = t.scam2;
    document.getElementById('scam3Label').textContent = t.scam3;
    document.getElementById('scam4Label').textContent = t.scam4;
    document.getElementById('scamHint').textContent = t.scamHint;

    // Loading
    document.getElementById('loadingSmall').textContent = t.loadingSmall;

    // Retry
    document.getElementById('retryBtn').textContent = t.retryBtn;

    // Footer
    document.getElementById('footerBuilt').textContent = t.footerBuilt;
    document.getElementById('footerPowered').textContent = t.footerPowered;
    document.getElementById('footerBadge1').textContent = t.badge1;
    document.getElementById('footerBadge2').textContent = t.badge2;
    document.getElementById('footerBadge3').textContent = t.badge3;
}


// ── LANGUAGE SELECTION ─────────────────────────────────
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedLanguage = btn.dataset.lang;
        applyTranslation(selectedLanguage);

        // Reset result/error cards on language switch
        resultCard.style.display = 'none';
        errorCard.style.display = 'none';
    });
});


// ── CHARACTER COUNTER ──────────────────────────────────
messageInput.addEventListener('input', () => {
    charCount.textContent = messageInput.value.length;
});


// ── SCAM EXAMPLES ──────────────────────────────────────
document.querySelectorAll('.scam-item').forEach(item => {
    item.addEventListener('click', () => {
        messageInput.value = item.dataset.message;
        charCount.textContent = item.dataset.message.length;
        analyzeBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        messageInput.focus();
    });
});


// ── SHOW/HIDE HELPERS ──────────────────────────────────
function showLoading(message) {
    const t = TRANSLATIONS[selectedLanguage];
    loadingText.textContent = message || t.loadingText;
    loadingCard.style.display = 'block';
    resultCard.style.display = 'none';
    errorCard.style.display = 'none';
    analyzeBtn.disabled = true;
    loadingCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function hideLoading() {
    loadingCard.style.display = 'none';
    analyzeBtn.disabled = false;
}

function showError(message) {
    hideLoading();
    document.getElementById('errorText').textContent = message;
    errorCard.style.display = 'block';
    resultCard.style.display = 'none';
    errorCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function showResult(data) {
    hideLoading();
    const t = TRANSLATIONS[selectedLanguage];

    const riskMap = {
        'HIGH RISK': { cls: 'high', icon: '🚨', sub: t.highRiskSub },
        'MEDIUM RISK': { cls: 'medium', icon: '⚠️', sub: t.medRiskSub },
        'LOW RISK': { cls: 'low', icon: '🟡', sub: t.lowRiskSub },
        'SAFE': { cls: 'safe', icon: '✅', sub: t.safeSub },
    };

    const risk = riskMap[data.risk_level] || riskMap['MEDIUM RISK'];
    const banner = document.getElementById('riskBanner');

    banner.className = `risk-banner ${risk.cls}`;
    document.getElementById('riskIcon').textContent = risk.icon;
    document.getElementById('riskLabel').textContent = data.risk_level;
    document.getElementById('riskSublabel').textContent = risk.sub;
    document.getElementById('originalMessage').textContent = data.original_message;

    const transcriptionBox = document.getElementById('transcriptionBox');
    if (data.transcription) {
        document.getElementById('transcriptionText').textContent = data.transcription;
        transcriptionBox.style.display = 'block';
    } else {
        transcriptionBox.style.display = 'none';
    }

    document.getElementById('analysisText').textContent = data.analysis;
    resultCard.style.display = 'block';
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


// ── ANALYZE BUTTON ─────────────────────────────────────
analyzeBtn.addEventListener('click', async() => {
    const t = TRANSLATIONS[selectedLanguage];
    const message = messageInput.value.trim();

    if (!message) {
        messageInput.focus();
        messageInput.style.borderColor = '#ff4444';
        setTimeout(() => messageInput.style.borderColor = '', 1500);
        return;
    }

    showLoading(t.loadingText);

    try {
        const response = await fetch('/analyze', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message, language: selectedLanguage })
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
            showError(data.error || 'Analysis failed. Please try again.');
            return;
        }

        showResult(data);

    } catch (err) {
        showError('Could not reach the server. Check your internet connection.');
    }
});


// ── VOICE RECORDING ────────────────────────────────────
voiceBtn.addEventListener('click', async() => {
    if (isRecording) {
        mediaRecorder.stop();
        return;
    }
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        startRecording(stream);
    } catch (err) {
        const t = TRANSLATIONS[selectedLanguage];
        voiceStatus.textContent = t.voiceDenied;
    }
});

function startRecording(stream) {
    const t = TRANSLATIONS[selectedLanguage];
    audioChunks = [];
    mediaRecorder = new MediaRecorder(stream);
    isRecording = true;

    voiceBtn.classList.add('recording');
    voiceBtnText.textContent = '⏹ Stop';
    voiceStatus.textContent = t.voiceRecording;

    mediaRecorder.addEventListener('dataavailable', e => audioChunks.push(e.data));

    mediaRecorder.addEventListener('stop', async() => {
        isRecording = false;
        voiceBtn.classList.remove('recording');
        voiceBtnText.textContent = t.speakBtn;
        stream.getTracks().forEach(track => track.stop());

        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });

        if (audioBlob.size < 1000) {
            voiceStatus.textContent = t.voiceShort;
            return;
        }

        voiceStatus.textContent = t.voiceProcessing;
        showLoading(t.voiceProcessing);

        try {
            const response = await fetch(`/voice?language=${selectedLanguage}`, {
                method: 'POST',
                headers: { 'Content-Type': 'audio/wav' },
                body: audioBlob
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                showError(data.error || 'Voice processing failed.');
                voiceStatus.textContent = '';
                return;
            }

            messageInput.value = data.transcription || '';
            charCount.textContent = messageInput.value.length;
            voiceStatus.textContent = t.voiceSuccess;
            showResult(data);

        } catch (err) {
            showError('Voice processing failed. Please type your message instead.');
            voiceStatus.textContent = '';
        }
    });

    mediaRecorder.start();
}


// ── NEW ANALYSIS ───────────────────────────────────────
document.getElementById('newAnalysisBtn').addEventListener('click', () => {
    messageInput.value = '';
    charCount.textContent = '0';
    voiceStatus.textContent = '';
    resultCard.style.display = 'none';
    errorCard.style.display = 'none';
    messageInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    messageInput.focus();
});


// ── RETRY ──────────────────────────────────────────────
document.getElementById('retryBtn').addEventListener('click', () => {
    errorCard.style.display = 'none';
    analyzeBtn.click();
});


// ── COPY RESULT ────────────────────────────────────────
document.getElementById('shareBtn').addEventListener('click', () => {
    const t = TRANSLATIONS[selectedLanguage];
    const risk = document.getElementById('riskLabel').textContent;
    const analysis = document.getElementById('analysisText').textContent;
    const original = document.getElementById('originalMessage').textContent;
    const text = `FarmerShield NG\n\n${t.messageAnalyzed} ${original}\n\n${risk}\n\n${analysis}\n\nPowered by N-ATLAS`;

    navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById('shareBtn');
        btn.textContent = t.copied;
        setTimeout(() => btn.textContent = t.copyResult, 2000);
    });
});


// ── INIT ───────────────────────────────────────────────
applyTranslation('english');