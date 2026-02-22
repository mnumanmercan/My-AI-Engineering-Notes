# 🗄️ Vektör Veritabanları — Temel Kavramlar

> Vektör 

---

## 01 · Vektör Nedir?

Bir metni, görseli ya da sesi **sayısal koordinatlara** dönüştürülmüş halidir. Embedding modeli bu dönüşümü gerçekleştirir. Anlamca benzer içerikler, bu uzayda birbirine yakın noktalara düşer.

```python
# "İstanbul güzel bir şehirdir" → embedding
vector = [0.23, -0.87, 0.41, 0.09, ...]  # 1536 boyut
```

---

## 02 · Geleneksel DB vs Vektör DB

İkisi farklı sorulara cevap verir. Biri **tam eşleşme** ararken, diğeri **anlamsal yakınlık** arar.

| | Geleneksel DB | Vektör DB |
|---|---|---|
| Arama tipi | Tam eşleşme | Anlamsal yakınlık |
| Örnek | `"araba"` → yalnızca "araba" gelir | `"araba"` → "otomobil", "araç", "vasıta" da gelir |
| Kullanım | CRUD işlemleri, yapısal veri | Arama, öneri, RAG sistemleri |

---

## 03 · Benzerlik Ölçütleri

İki vektörün ne kadar yakın olduğunu ölçmek için farklı metrikler kullanılır. En yaygını **Cosine Similarity**'dir — yönlerin ne kadar aynı olduğunu ölçer, büyüklük farkını göz ardı eder.

| Metrik | Açıklama | Ne zaman kullanılır |
|---|---|---|
| **Cosine Similarity** | Vektörler arası açıyı ölçer | Metin benzerliği |
| **Euclidean Distance** | Düz çizgi mesafesini ölçer | Görsel arama |
| **Dot Product** | Normalize edilmiş vektörler için | Büyük ölçekli sistemler |

---

## 04 · Index Yapıları (ANN)

Milyonlarca vektör arasında tam arama yapmak çok yavaş olur. Bu yüzden vektör DB'ler **Approximate Nearest Neighbor (ANN)** algoritmalarıyla küçük bir doğruluk feda ederek çok hızlı sonuç döner.

| Algoritma | Açıklama |
|---|---|
| **HNSW** | Graf tabanlı; yüksek doğruluk ve hız dengesi |
| **IVF** | Kümeleme tabanlı; büyük veri setlerinde etkili |
| **LSH** | Hash tabanlı; düşük bellek kullanımı |
| **ScaNN** | Google'ın geliştirdiği; production ortamları için optimize |

---

## 05 · Metadata Filtreleme

Vektör aramasını tek başına kullanmak her zaman yeterli değildir. **Metadata** ile hibrit filtreleme yapılır: önce klasik filtreler uygulanır, ardından vektör araması çalışır.

```python
# "makine öğrenmesi" ara, ama sadece 2024 yılı Türkçe belgelerinde
results = collection.query(
    query_texts=["makine öğrenmesi"],
    where={"year": 2024, "lang": "tr"},
    n_results=5
)
```

---

## 06 · RAG'daki Rolü

Vektör veritabanları en çok **Retrieval-Augmented Generation (RAG)** mimarilerinde kullanılır. LLM'e bağlam sağlayan "uzun dönem hafıza" görevi görür.

```
💬 Kullanıcı soru sorar
        ↓
🔢 Soru vektöre çevrilir (embedding modeli)
        ↓
🗄️ Vektör DB'den anlamsal olarak en yakın belgeler çekilir
        ↓
🤖 LLM, bu belgelerle birlikte cevap üretir
```

---

## 07 · Popüler Araçlar

Her birinin farklı güçlü yanları var — ölçek, hız, bulut entegrasyonu ve açık kaynak lisansı açısından değerlendirilmeli.

| Araç | Tür | Öne Çıkan Özellik |
|---|---|---|
| **Pinecone** | Bulut (SaaS) | Kolay kurulum, yönetilen servis |
| **Weaviate** | Açık kaynak / Bulut | Modüler yapı, GraphQL desteği |
| **Qdrant** | Açık kaynak / Bulut | Yüksek performans, Rust tabanlı |
| **Milvus** | Açık kaynak | Büyük ölçekli enterprise kullanım |
| **Chroma** | Açık kaynak | Lokal geliştirme için ideal |
| **pgvector** | PostgreSQL eklentisi | Mevcut Postgres altyapısına entegrasyon |

---

*Vektör Veritabanları — Temel Kavramlar*