# movie-browser
# 🎬 Movie Tracker App

A modern movie browsing web application built using React and OMDb API.
Users can search movies, view detailed information, and manage a personal watchlist.

---

## 🚀 Features

* 🔍 Search movies in real-time
* 🎬 View detailed movie information
* ⭐ Add/remove movies from Watchlist
* 💾 Persistent storage using LocalStorage
* 🎨 Modern UI with Tailwind CSS
* ⚡ Fast performance using Vite
* 🎞️ Skeleton loaders & smooth animations
* 📱 Fully responsive design

---

## 🛠️ Tech Stack

* React (Vite)
* Tailwind CSS
* React Router DOM
* OMDb API
* Context API (State Management)

---

## 📂 Project Structure

```
src/
│
├── components/       # Reusable UI components
│   ├── Navbar.jsx
│
├── pages/            # Main pages
│   ├── Home.jsx
│   ├── MovieDetails.jsx
│   ├── Watchlist.jsx
│
├── context/          # Global state
│   └── WatchlistContext.jsx
│
├── services/         # API calls
│   └── api.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/movie-tracker.git
cd movie-tracker
```

---

### 2️⃣ Install dependencies

```
npm install
```

---

### 3️⃣ Create environment file

Create a `.env` file in root and add:

```
VITE_OMDB_API_KEY=your_api_key_here
```

---

### 4️⃣ Run the app

```
npm run dev
```

App will run at:

```
http://localhost:5173/
```

---

## 🔑 API Used

* OMDb API
  https://www.omdbapi.com/

---


## 🎯 Future Improvements

* 🎥 Movie trailer integration (YouTube)
* ❤️ Favorite button on cards
* 🌙 Dark/Light mode toggle
* 🔐 User authentication
* 📊 Movie ratings & reviews

---

## 👨‍💻 Author

* Parilaksh Thakur

---

## 📜 License

This project is for educational purposes.

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
