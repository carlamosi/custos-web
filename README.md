<p align="center">
  <img src="src/assets/logo_color.svg" alt="Custos Logo" width="200" />
</p>

<h1 align="center">Custos</h1>

<p align="center">
  <strong>The invisible guardian for the people you love most.</strong><br/>
  AI-powered water-pattern monitoring that watches over elderly family members living alone.<br/>
  No cameras. No microphones. No wearables. Just quiet, dignified protection.
</p>

<p align="center">
  <a href="https://custos-guardian.lovable.app">🌐 Live Website</a> ·
  <a href="https://custos-dashboard.vercel.app">📊 Live Sensor Dashboard</a>
</p>

---

## 💧 What is Custos?

Every morning, your mother turns on the tap to make coffee. She runs the shower around 8 AM. She washes the dishes after lunch. These tiny, invisible rituals form a unique **water signature** that tells us everything is okay.

**Custos** is a smart water-flow sensor paired with a personalized AI model that learns the daily routine of the person you care about. When something breaks the pattern (no tap opened by 10 AM, unusually long water usage, total silence), the system sends you a graduated alert on your phone. You decide what to do next: call, visit, or simply breathe easy.

It was born from a deeply personal question that millions of families share:

> *"Today she hasn't turned on the tap. Is everything okay?"*

### Why water?

Water consumption is one of the most reliable and consistent behavioral signals in a household. Unlike movement sensors that trigger false alarms, or wearables that end up in a drawer, water usage happens naturally, predictably, and without requiring any effort from the person being protected.

The result? **Over 95% anomaly detection accuracy** with zero intrusion into anyone's privacy or daily life.

---

## ✨ Key Principles

| Principle | What it means |
|---|---|
| **Invisible by design** | The sensor installs inside the water pipe. It cannot be seen. It cannot be felt. Life goes on exactly as before. |
| **Personalized intelligence** | The AI learns *this specific person's* routine, not population averages from a study. Your mother's water signature is unique. |
| **Alerts in under 5 minutes** | When a significant deviation is detected, you receive a graduated notification (notice → alert → emergency) on the mobile app. |
| **Privacy first** | No cameras. No microphones. No GPS. Fully GDPR compliant. We believe dignity is not negotiable. |

---

## 🔧 How It Works

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  1. Install   │ ──▶ │  2. Learn     │ ──▶ │  3. Monitor   │ ──▶ │  4. Alert     │
│              │     │              │     │              │     │              │
│ A plumber    │     │ For 2 weeks, │     │ Fully        │     │ If the       │
│ installs the │     │ the AI maps  │     │ autonomous   │     │ pattern      │
│ sensor in    │     │ the unique   │     │ silent watch.│     │ breaks, you  │
│ under 20 min.│     │ water habits │     │ The person   │     │ get a smart  │
│ No drilling. │     │ of that home.│     │ does nothing.│     │ alert on     │
│              │     │              │     │              │     │ your phone.  │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

---

## 💰 Product & Pricing

**Custos Kit** (one-time): **€149**
- YF-S201 flow sensor
- NodeMCU ESP8266 hub with built-in WiFi
- Professional installation (plumber included)
- Full initial setup and calibration

**Custos Subscription** (monthly): **€9.99/mo**
- Mobile app for iOS and Android
- Active, personalized AI model
- Real-time graduated alerts
- Priority support
- No lock-in, cancel anytime

---

## 🏗️ Tech Stack

This repository contains the **Custos marketing website and product showcase**, built as a modern single-page application.

| Layer | Technology |
|---|---|
| **Framework** | React 18 with TypeScript 5 |
| **Build Tool** | Vite 5 (lightning-fast HMR) |
| **Styling** | Tailwind CSS v3 with custom design tokens |
| **Animations** | Framer Motion (scroll-reveal, staggered entrances) |
| **Routing** | React Router v6 |
| **UI Components** | shadcn/ui + Radix primitives |
| **Data Fetching** | TanStack React Query |
| **Testing** | Vitest + Playwright |
| **Design Language** | Earthy, warm palette (sage greens, organic tones) with serif typography for an editorial, human feel |

### Project Structure

```
src/
├── assets/          # Brand assets (logo, wordmark)
├── components/      # Page sections and shared UI
│   ├── Hero.tsx           # Animated hero with trust strip
│   ├── ElProblema.tsx     # Problem framing (why existing solutions fail)
│   ├── LaSolucio.tsx      # Solution pillars + live dashboard embed
│   ├── ComFunciona.tsx    # 4-step process walkthrough
│   ├── ProductePreus.tsx  # Pricing cards
│   ├── Navbar.tsx         # Responsive nav with mobile portal menu
│   └── ui/               # shadcn component library
├── hooks/           # Custom hooks (scroll reveal, mobile detection)
├── pages/           # Route-level pages
│   ├── Index.tsx          # Landing page
│   ├── Producte.tsx       # Product deep-dive
│   ├── ImpactePage.tsx    # Social impact
│   ├── QuiSom.tsx         # About the team
│   └── ComHoHemFet.tsx    # Technical behind-the-scenes
└── lib/             # Utilities
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-org/custos.git
cd custos

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`.

---

## 📊 Live Prototype

We have a real, working sensor prototype streaming live data. You can see it embedded on the website or visit the standalone dashboard:

👉 **[custos-dashboard.vercel.app](https://custos-dashboard.vercel.app)**

This is not a mockup. This is real water-flow data, captured by our sensor, processed by our pipeline, visualized in real time.

---

## 🌍 The Bigger Picture

- **94%** of families with elderly relatives living alone experience constant worry about their safety.
- **71%** would pay for a real solution that actually works.
- **78%** reject cameras as a monitoring option.

Custos exists because peace of mind shouldn't require sacrificing someone's dignity. We believe the best technology is the kind you never see, and the person you're protecting never feels.

---

<p align="center">
  <strong>Built with care in Barcelona 🇪🇸</strong><br/>
  <em>Because the people who raised us deserve to live freely, and we deserve to stop worrying.</em>
</p>
