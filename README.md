📝 Mini Blog API
<div align="center">

Express.js asosida qurilgan professional modular RESTful Blog API

Demo · Swagger Docs · Issues

</div>

🌟 Loyiha haqida
Mini Blog API - bu zamonaviy backend dasturlash tamoyillariga asoslangan, to'liq funksional blog API loyihasi. Loyiha Express.js framework'i yordamida qurilgan bo'lib, ma'lumotlarni saqlash uchun JSON fayllardan foydalanadi. Uning asosiy xususiyatlari modular arxitektura, DTO validatsiya (kiruvchi ma'lumotlarni tekshirish), va Swagger dokumentatsiya (avtomatik API hujjatlash) hisoblanadi.

🎯 Nima uchun bu loyiha?
✅ O'rganish uchun ideal - Express.js va REST API asoslarini chuqur o'rganish imkoniyati.

✅ Real world architecture - Professional loyihalardagi kabi Controller → Service → Repository qatlamali tuzilma.

✅ Interactive testing - Swagger UI orqali API endpointlarini bevosita sinab ko'rish.

✅ Clean code - Yuqori o'qiluvchanlik va tushunarlilik.

✨ Asosiy xususiyatlar
Xususiyat

Tavsif

Modular tuzilma

Users va Posts kabi funksional modullarga bo'lingan.

Qatlamali arxitektura

Mantiqni aniq ajratish (Controller, Service, Repository).

DTO pattern

Ma'lumotlarni transfer qilish ob'ektlari orqali request body validatsiyasi.

Global Error Handling

Barcha xatoliklarni markazlashgan tarzda boshqarish va standartlashtirilgan javob qaytarish.

Swagger UI

API endpointlari uchun interaktiv va avtomatik dokumentatsiya.

📋 Tarkib
O'rnatish

Loyiha strukturasi

API Endpointlar

Foydalanish misollari

🛠️ O'rnatish va ishga tushirish
Talablar
Node.js v18.0.0 yoki yuqori

npm v9.0.0 yoki yuqori

Qadamlar
# 1. Repository'ni clone qiling (agar mavjud bo'lsa)
# git clone [[https://github.com/yourusername/mini-blog-api.git]([https://github.com/Bekmuhammad-Devoloper/EXPRESS-MINI-BLOG.git](https://github.com/Bekmuhammad-Devoloper/EXPRESS-MINI-BLOG.git))]([https://github.com/yourusername/mini-blog-api.git](https://github.com/Bekmuhammad-Devoloper/EXPRESS-MINI-BLOG.git))
# cd mini-blog-api

# 2. Dependency'larni o'rnating
npm install

# 3. Environment faylini yarating
cp .env.example .env

# 4. Serverni ishga tushiring
npm start

Eslatma: Agar sizda nodemon o'rnatilgan bo'lsa, avtomatik qayta yuklash bilan ishga tushirish uchun npm run dev buyrug'idan foydalanishingiz mumkin.

✅ Server manzillari
🌐 API Server: http://localhost:3000

📚 Swagger Docs: http://localhost:3000/api-docs

📁 Loyiha strukturasi
mini-blog/
│
├── app.js                      # Express middleware va konfiguratsiyasi
├── server.js                   # Server entry point, portni tinglash
├── .env                        # Environment variables
│
├── lib/                        # Umumiy yordamchi kutubxonalar
│   ├── resData.js              # Standart javob (Response) formatlash klasi
│   ├── repository.js           # Ma'lumotlarga kirish (JSON File I/O)
│   ├── customError.js          # Maxsus xato klasi (CustomError)
│   ├── error.handler.js        # Global xatoliklarni ushlovchi middleware
│   ├── validator.js            # DTO ob'ektlarini validatsiya qilish mantiqi
│   └── generateID.js           # UUID generator funksiyasi
│
├── modules/                    # Asosiy funksional modullar
│   │
│   ├── users/                  # Users moduliga oid fayllar
│   │   ├── dto/                  # Create va Update DTO'lar
│   │   ├── users.entity.js       # User ob'ekti (ma'lumot strukturasi)
│   │   ├── users.service.js      # User'ga oid business logic
│   │   ├── users.controller.js   # HTTP requestlarni boshqaruvchi
│   │   └── users.routes.js       # Express router (users uchun)
│   │
│   ├── posts/                  # Posts moduliga oid fayllar
│   │   ├── dto/                  # Create va Update DTO'lar
│   │   ├── posts.entity.js       # Post ob'ekti (ma'lumot strukturasi)
│   │   ├── posts.service.js      # Post'ga oid business logic
│   │   ├── posts.controller.js   # HTTP requestlarni boshqaruvchi
│   │   └── posts.routes.js       # Express router (posts uchun)
│   │
│   └── modules.routes.js       # Barcha modul routerlarini yig'uvchi
│
├── database/                   # JSON fayllar (DB vazifasida)
│   ├── users.json
│   └── posts.json
│
└── package.json

🌐 API Endpointlar
Barcha endpointlar /mini-blog prefiksi bilan boshlanadi.

👤 Users API
Method

Endpoint

Tavsif

POST

/mini-blog/users

Yangi user yaratish

GET

/mini-blog/users

Barcha userlar ro'yxatini olish

GET

/mini-blog/users/:id

ID bo'yicha bitta userni olish

PUT

/mini-blog/users/:id

User ma'lumotlarini yangilash

DELETE

/mini-blog/users/:id

Userni o'chirish

📝 Posts API
Method

Endpoint

Tavsif

POST

/mini-blog/posts

Yangi blog posti yaratish

GET

/mini-blog/posts

Barcha postlar ro'yxatini olish

GET

/mini-blog/posts/:id

ID bo'yicha bitta postni olish

PUT

/mini-blog/posts/:id

Postni yangilash

DELETE

/mini-blog/posts/:id

Postni o'chirish

GET

/mini-blog/posts/author/:userId

Berilgan userning barcha postlarini olish

💡 Foydalanish misollari
1️⃣ User yaratish
Request:

POST http://localhost:3000/mini-blog/users
Content-Type: application/json

{
  "username": "binyaminn",
  "email": "binyaminn@gmail.com",
  "bio": "Backend dasturchi va o'qituvchi"
}

Response:

{
  "statusCode": 201,
  "message": "User Created successfully!",
  "data": {
    "id": "d3cfaebf-722a-4cc4-a74c-ad42bb453762",
    "username": "binyaminn",
    "email": "binyaminn@example.com",
    "bio": "Backend dasturchi va o'qituvchi",
    "createdAt": "2025-10-08T07:31:20.921Z"
  }
}

3️⃣ Post yaratish
Request: (Author ID mavjud bo'lishi shart)

POST http://localhost:3000/mini-blog/posts
Content-Type: application/json

{
  "authorId": "d3cfaebf-722a-4cc4-a74c-ad42bb453762",
  "title": "Express.js bilan Modular API yaratish",
  "content": "Bu loyiha qanday qilib Express.js yordamida professional, modulli va toza arxitekturaga ega API qurishni ko'rsatib beradi..."
}

Response:

{
  "statusCode": 201,
  "message": "Post created successfully!",
  "data": {
    "id": "a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8",
    "authorId": "d3cfaebf-722a-4cc4-a74c-ad42bb453762",
    "title": "Express.js bilan Modular API yaratish",
    "content": "Bu loyiha qanday qilib Express.js yordamida...",
    "createdAt": "2025-10-08T08:15:30.456Z",
    "updatedAt": "2025-10-08T08:15:30.456Z"
  }
}

5️⃣ Postni yangilash (Qisman ma'lumot yuborish)
Request: (Faqat sarlavhani yangilash)

PUT http://localhost:3000/mini-blog/posts/a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8
Content-Type: application/json

{
  "title": "Express.js bilan Professional Backend dasturlash (Yangilandi)"
}

Response:

{
  "statusCode": 200,
  "message": "Post updated successfully!",
  "data": {
    "id": "a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8",
    "authorId": "d3cfaebf-722a-4cc4-a74c-ad42bb453762",
    "title": "Express.js bilan Professional Backend dasturlash (Yangilandi)",
    "content": "Bu loyiha qanday qilib Express.js yordamida...",
    "createdAt": "2025-10-08T08:15:30.456Z",
    "updatedAt": "2025-10-08T09:25:15.123Z" // Yangilangan vaqt o'zgardi
  }
}

🏗️ Arxitektura tafsilotlari
Qatlamlar (Layered Architecture)
Ushbu arxitektura API mantiqini uchta asosiy qatlamga ajratadi:

Controller: HTTP requestlarni qabul qiladi, DTO validatsiyasini chaqiradi va Service'ga murojaat qiladi. Faqat Request/Response'ni boshqaradi.

Service: Loyihaning asosiy Business Logic (biznes mantiqi) shu yerda joylashgan (masalan, ID yaratish, ma'lumotlarni birlashtirish, xatolarni tekshirish).

Repository: Faqat ma'lumotlar manbasi (bu yerda JSON fayllar) bilan ishlashga javob beradi. CRUD amallarini (Read/Write) amalga oshiradi.

Response Formati (ResData class)
Barcha javoblar izchil formatda bo'lishi uchun ResData yordamchi klasi ishlatiladi:

// lib/resData.js
class ResData {
  constructor(statusCode, message, data) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}

⚠️ Xatolarni Boshqarish (Error Handling)
Markazlashgan xato ushlash mexanizmi yordamida barcha xatolar standart statusCode, message va error maydonlari bilan qaytariladi.

Misollar:
Xato turi

HTTP Status Code

Misol javobi

Validation Error

400 Bad Request

{"statusCode": 400, "message": "username is required", "error": "ValidationError"}

Not Found Error

404 Not Found

{"statusCode": 404, "message": "User not found!", "error": "CustomError"}

Server Error

500 Internal Server Error

{"statusCode": 500, "message": "Internal server error", "error": "Error"}

🗂️ Database (JSON Files)
Ma'lumotlar database/ katalogida joylashgan JSON fayllarda saqlanadi.

database/users.json tuzilmasi:
[
  {
    "id": "...",
    "username": "...",
    "email": "...",
    "bio": "...",
    "createdAt": "..."
  }
]

database/posts.json tuzilmasi:
[
  {
    "id": "...",
    "authorId": "...",
    "title": "...",
    "content": "...",
    "createdAt": "...",
    "updatedAt": "..."
  }
]

🤝 Hissa qo'shish
Loyiha rivojiga hissa qo'shishga xush kelibsiz! Har qanday taklif va pull request'lar qabul qilinadi.

Loyihani Fork qiling

Yangi feature branch yarating: git checkout -b feature/new-feature

O'zgarishlarni commit qiling: git commit -m 'feat: Add new awesome feature'

Branch'ga push qiling: git push origin feature/new-feature

Pull Request oching

📄 Litsenziya
Bu loyiha MIT License ostida chiqarilgan. Batafsil ma'lumot uchun LICENSE faylini ko'ring.

<div align="center">

⭐ Agar loyiha foydali bo'lsa, star bering!
⬆ Yuqoriga qaytish

</div>
