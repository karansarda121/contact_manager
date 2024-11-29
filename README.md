# Contact Manager API

A simple Contact Manager application that allows users to add, update, delete, and view contacts. The application is built with **Node.js** using **Express**, **MongoDB**, and **Mongoose**. It provides a set of RESTful API endpoints for managing contacts, with authentication via **JWT** (JSON Web Tokens).

## Features
- User authentication (sign up, login, JWT-based authentication)
- Add, edit, and delete contacts
- View all contacts for the authenticated user
- Only authorized users can delete or modify their own contacts

## Technologies Used

 **Backend**:
  - **Node.js**: Server-side JavaScript runtime
  - **Express**: Web framework for Node.js
  - **MongoDB**: NoSQL database for storing user and contact data
  - **Mongoose**: ODM for MongoDB
  - **JWT**: JSON Web Tokens for user authentication
  - **Bcrypt.js**: Library for hashing passwords
  
- **Frontend**:
  - **React**: JavaScript library for building user interfaces
  - **Tailwind CSS**: Utility-first CSS framework for rapid UI development
  - **HTML**: Markup language for the web
  - **CSS**: Styling for the user interface

## Prerequisites

To run this project locally, you'll need:
- **Node.js** (v14.x or higher)
- **MongoDB** instance (you can use MongoDB Atlas for a cloud-based solution)
- **Postman** or any other API testing tool (for testing the API)

## Installation

### 1. Clone the repository

```bash
git clone   https://github.com/karansarda121/contact_manager.git

cd frontend
npm install

cd backend 
npm install

##  Configure environment variables 
backend folder 

MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000

cd backend
npm start

cd frontend 
npm start
