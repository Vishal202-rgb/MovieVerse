# 🎬 MovieVerse

MovieVerse is a full-stack movie and TV show discovery web application built using the **MERN stack**.  
The **frontend is fully deployed**, and the **backend is functional and under active development**.

---

## 🌐 Live Demo

🔗 **Frontend (Deployed):**  
(https://movie-client-flax.vercel.app/) 
*(update if your URL is different)*

---

## 📌 Project Status

- ✅ Frontend: Deployed
- ⚙️ Backend: Working (Local / Development)
- ✅ Database: MongoDB Connected
- ✅ External API: TMDB Integrated

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- TMDB API
- Clerk Authentication (optional)

---

## ✨ Features

- 🎥 Now Playing, Popular & Trending Movies
- 📺 TV Shows Listing
- 🔍 Search Movies & TV Shows
- 📄 Movie / Show Details Page
- ❤️ Watchlist & Favorites (Backend supported)
- 📱 Fully Responsive UI

---

## 📁 Folder Structure

MovieVerse/
│
├── frontend/
│ ├── src/
│ ├── components/
│ ├── pages/
│ └── services/
│
├── backend/
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── configs/
│ └── server.js
│
└── README.md


---

## ⚙️ Backend Setup (Local)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Vishal202-rgb/MovieVerse.git
cd MovieVerse/backend

2️⃣ Install Dependencies
npm install

3️⃣ Environment Variables

Create a .env file inside backend/:
PORT=3000
MONGO_URI=your_mongodb_connection_string
TMDB_API_KEY=your_tmdb_api_key
