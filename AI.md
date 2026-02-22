# AI notes


## Embedding
Gerçek dünyada kullanılan döküman, metin, görsel, video ya da ses gibi veri türlerini, sayılar ile ifade edilen bir vektör uzayı ile temsil edilmesidir. Embedding sayesinde büyük boyutlu veriler çok daha küçük boyutlu ve anlamını koruyan sayısal vektör ifadelerine dönüştürülür.
Böylece Makine öğrenmesi için gerekli verilerin uzayı sayısal karşılıklarına indirgenmiş olur, bu da çok büyük bir performans ve boyut optimizasyonu sağlar. 
Örnek vektör gösterim: [0.2, 0.0032, 0.071, ...] bu vektor kümesinde her bir eleman aslında gerçek dünyada o verinin bir açıdan ele alınmış tanımıdır. Her bir parametre bir boyutu ifade eder.
> "kedi" kelimesi vektör uzayında şu şekilde temsil edilebilir [0.02, -0.5, 0.013]. Buradaki her bir boyut (küme elemanı) kedi' ye ait bir özelliğin temsilcisidir. Mesela 1. parametre hayvan boyutu, 2. parametre mensup olduğu tür piramidi, 3. parametre ise rengini temsil eden parametreler.

> ### Kaynak Önerileri
- [IBM-Vector Embedding](https://www.ibm.com/think/topics/vector-embedding)
