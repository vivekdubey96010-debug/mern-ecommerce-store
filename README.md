# 🛒 TechStore - MERN E-Commerce Website

A full-stack MERN E-Commerce web application where users can browse products, search and filter items, add products to cart & wishlist, register/login, place orders, and view their order history.

## 🚀 Live Demo

### 🌐 Frontend (Vercel)
https://mern-ecommerce-store-blush.vercel.app/

### ⚙️ Backend (Render)
https://mern-ecommerce-store-hs2a.onrender.com

### 💻 GitHub Repository
https://github.com/vivekdubey96010-debug/mern-ecommerce-store

---

# ✨ Features

- User Registration & Login (JWT Authentication)
- Browse Products
- Product Details Page
- Search Products
- Category Filter
- Shopping Cart
- Wishlist
- Checkout
- Place Order
- My Orders
- Responsive Design
- Toast Notifications
- Dark Mode
- MongoDB Database
- REST APIs

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router DOM
- Context API
- Axios
- React Toastify
- CSS

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcrypt.js
- dotenv
- CORS

---

# 📂 Project Structure

```
E-commerce-store
│
├── src
├── public
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── public/images
│   └── server.js
│
├── package.json
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/vivekdubey96010-debug/mern-ecommerce-store.git
```

## Install Frontend

```bash
npm install
```

## Install Backend

```bash
cd server
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the `server` folder.

```
MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET

PORT=5000
```

---

# ▶ Run Project

## Backend

```bash
cd server
npm run dev
```

## Frontend

```bash
npm run dev
```

---


# 📌 API Endpoints

## Authentication

- POST /api/auth/register
- POST /api/auth/login

## Products

- GET /api/products
- GET /api/products/:id

## Orders

- POST /api/orders
- GET /api/orders

---

# 🚀 Deployment

Frontend deployed on **Vercel**

Backend deployed on **Render**

Database hosted on **MongoDB Atlas**

---

# 👨‍💻 Author

**Vivek Dubey**

GitHub:
https://github.com/vivekdubey96010-debug

---

# ⭐ If you like this project, don't forget to star the repository.