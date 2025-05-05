## 🧭 WanderSpots – Paris Hidden‑Gems Prototype 🗼

**WanderSpots** is an AI‑powered travel companion designed to surface truly off‑the‑beaten‑path experiences when you have downtime in your itinerary. This prototype focuses on Paris: it automatically harvests community‑curated “hidden‑gem” spots from Reddit and travel blogs, geocodes and deduplicates them, and indexes their descriptions for fast, semantic retrieval by a locally hosted LLM agent. When you upload your PDF itinerary, WanderSpots detects ≥30 min free windows (with transit buffers) and returns personalized, context‑aware recommendations plotted on an interactive map.

### 🌐 High‑Level Technologies

- 🚀 **Frontend**: Next.js + TypeScript, React, Mapbox GL JS  
- 🐍 **Scraping & ETL**: Python (PRAW/Pushshift, BeautifulSoup/newspaper3k, spaCy)  
- 📍 **Geocoding**: Nominatim (OpenStreetMap) or Google Maps API  
- 🔍 **Embedding & Search**: HuggingFace all‑MiniLM‑L6-v2 → FAISS (or Qdrant) vector store  
- 🤖 **LLM Agent**: Locally hosted Gemma 3 (Instruct) with LangChain or AutoGen orchestration  
