<h1 align="center">📚 Book Review API</h1>

<p align="center">
A RESTful backend built with Node.js, Express.js, MongoDB, and JWT for managing books and reviews.
</p>

<p align="center">
Authenticated users can create books and submit one review per book.
</p>

<br>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white">
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white">
  <img src="https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white">
  <img src="https://img.shields.io/badge/License-MIT-green.svg">
</p>

---

## 📁 Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Running the Server](#running-the-server)
- [Authentication](#authentication)
- [API Endpoints](#api-endpoints)
- [Example Requests](#example-requests)
- [Database Schema](#database-schema)
- [Design Decisions](#design-decisions)

---

## 🚀 Getting Started

This guide will help you run the Book Review API locally on your machine.

---

## 🔧 Installation

### 1. Clone the repository

```bash
git clone https://github.com/ChiragSinghal2001/Book-Review-API.git
```

### 2. Install dependencies
```bash
npm install
```

### ⚙️ Environment Setup
Create a .env file in the project root with the following content:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/bookreview
JWT_SECRET=your_super_secret_key

```

### ▶️ Running the Server
Start MongoDB locally:
```bash
mongod
```
Start the development server:
```bash
npm run dev
```
The API will run at http://localhost:3000

## 🔐 Authentication
This API uses JWT-based authentication. Users must log in to access protected routes.

| Method | Endpoint | Description            |
| ------ | -------- | ---------------------- |
| POST   | /signup  | Register a new user    |
| POST   | /login   | Authenticate & get JWT |


## 📚 API Endpoints
### Book Endpoints
| Method | Endpoint            | Description                              |
| ------ | ------------------- | ---------------------------------------- |
| POST   | /books              | Add a new book *(auth required)*         |
| GET    | /books              | Get all books with pagination & filters  |
| GET    | /books/\:id         | Get book by ID, average rating & reviews |
| POST   | /books/\:id/reviews | Submit a review *(auth required)*        |


### Review Endpoints
| Method | Endpoint      | Description              |
| ------ | ------------- | ------------------------ |
| PUT    | /reviews/\:id | Update user's own review |
| DELETE | /reviews/\:id | Delete user's own review |


### Search Endpoint
| Method | Endpoint               | Description                     |
| ------ | ---------------------- | ------------------------------- |
| GET    | /books/search/query?q= | Search books by title or author |


## 💡 Example Requests (cURL)
### Signup
```bash
curl -X POST http://localhost:3000/signup \
  -H "Content-Type: application/json" \
  -d '{"name": "John", "email": "john@example.com", "password": "123456"}'
```
### Login
```bash
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"email": "john@example.com", "password": "123456"}'
```
### Add a Book
```bash
curl -X POST http://localhost:3000/books \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title": "1984", "author": "George Orwell", "genre": "Dystopian"}'
```
## 🗃️ Database Schema

### User
```bash
{
  "name": String,
  "email": String,
  "password": String (hashed)
}
```
### Book
```bash
{
  "title": String,
  "author": String,
  "genre": String
}
```
### Review
```bash
{
  "book": ObjectId,
  "user": ObjectId,
  "rating": Number (1-5),
  "comment": String
}
```
## 🧠 Design Decisions
- Each user can submit only one review per book
- JWT tokens expire after 7 days
- Reviews are not embedded inside books to ensure scalability
- Pagination & filtering added for scalability and performance
- Clean controller-service structure

<h3 align="center">💖 Made with care by Chirag</h3>