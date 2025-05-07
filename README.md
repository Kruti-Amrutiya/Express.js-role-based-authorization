# 🛡️ Role-Based Authorization API with Node.js, Express & MongoDB

This is a backend API that implements **role-based access control (RBAC)** using Node.js, Express, MongoDB, and JWT for authentication. It allows secure user management based on roles like **Admin**, **User**, and **Manager**.

---

## 🚀 Features

- User registration and login
- JWT-based authentication
- Role-based authorization middleware
- MongoDB integration using Mongoose
- Secure, protected API endpoints by user role

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (JSON Web Token)
- bcryptjs (for password hashing)
- dotenv (for environment config)

---

## 🔐 Roles Supported

- `admin`: Full access to all routes
- `manager`: Access to manager and user routes
- `user`: Access to only user routes

---

## 📦 Environment Variables

- PORT=3000
- JWT_SECRET=your_jwt_secret
- CONNECTION_STRING=your_mongodb_connection_string

## 📖 License

This project is open-source under the MIT License.
