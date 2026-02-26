# RAG (Retrieval Augmented Generation)

## 🔎 Problem

LLM'ler:

- Eğitildikleri veri ile sınırlıdır (cutoff problemi)
- Gerçek zamanlı bilgiye erişemez
- Domain-spesifik veriye doğal olarak sahip değildir
- Bazen halüsinasyon üretir

Bu nedenle production sistemlerde tek başına yeterli değildir.

---

## 💡 RAG Nedir?

**Retrieval Augmented Generation (RAG)**,  
LLM cevap üretmeden önce harici kaynaklardan ilgili veriyi çekip (retrieve) bu veriyi prompt ile birlikte modele veren mimaridir.

> Önce retrieve, sonra generate.

---

## ⚙️ Nasıl Çalışır?

1. User prompt alınır
2. Prompt embedding’e dönüştürülür
3. Vector DB / search üzerinden ilgili dokümanlar çekilir
4. Bu dokümanlar prompt’a eklenir
5. LLM bağlama dayanarak cevap üretir

User → Retriever → Context → LLM → Answer


---

## 🧱 Temel Bileşenler

- **Embedding Model** → Metni vektöre çevirir  
- **Vector Database** → Benzer içerikleri bulur  
- **Retriever** → En alakalı dokümanları seçer  
- **LLM (Generator)** → Context ile cevap üretir  

---

## 🚀 Avantajları

- Güncel veri kullanımı
- Fine-tuning gerektirmez
- Halüsinasyonu azaltır
- Kurumsal veri ile çalışabilir

---

## 🔁 RAG vs Fine-Tuning

| RAG | Fine-Tuning |
|------|-------------|
| Güncel veri ile çalışır | Model yeniden eğitilir |
| Daha düşük maliyet | Eğitim maliyeti yüksek |
| Bilgi değişimine uyumlu | Güncellemesi zor |

**Genel kural:**
- Bilgi değişiyorsa → RAG
- Model davranışı değişecekse → Fine-tuning

---

## 🧠 Mental Model

LLM = Reasoning Engine  
Vector DB = External Memory  
Retriever = Context Selector  

RAG, LLM’e harici hafıza kazandırır.