# JWT Authentication

A simple JWT authentication application with React frontend and Node.js backend.

## Project Structure

```
jwt-auth/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── auth.controller.js
│   │   ├── middleware/
│   │   │   └── auth.middleware.js
│   │   └── routes/
│   │       └── auth.route.js
│   ├── app.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── api/
    │   │   └── auth.api.js
    │   ├── components/
    │   │   ├── LoginForm.jsx
    │   │   └── Profile.jsx
    │   ├── pages/
    │   │   └── Home.jsx
    │   ├── App.jsx
    │   └── main.jsx
    ├── public/
    ├── index.html
    ├── vite.config.js
    └── package.json
```

## Setup

### Backend

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create .env file with:
```
JWT_SECRET=your_secret_key
PORT=5000
```

4. Start the server:
```bash
node app.js
```

Server runs on `http://localhost:5000`

### Frontend

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Application runs on `http://localhost:5173`

## Test Credentials

- Email: `rajesh@gmail.com`
- Password: `Rk1234`

## Features

- User login with email and password
- JWT token generation
- Token validation
- Protected profile endpoint
- Profile display after login

## API Endpoints

### POST /api/auth/login

Request:
```json
{
  "email": "rajesh@gmail.com",
  "password": "Rk1234"
}
```

Response:
```json
{
  "success": true,
  "token": "jwt_token_here"
}
```

### GET /api/auth/profile

Header:
```
x-auth-token: jwt_token_here
```

Response:
```json
{
  "success": true,
  "message": "Profile fetched successfully",
  "user": {
    "id": 1,
    "name": "Rajesh",
    "email": "rajesh@gmail.com"
  }
}
```

## How It Works

1. User enters email and password in LoginForm
2. Frontend sends POST request to /api/auth/login
3. Backend validates credentials and returns JWT token
4. Frontend stores token in localStorage
5. When Profile component loads, it retrieves token from localStorage
6. Frontend sends GET request to /api/auth/profile with token in header
7. Backend verifies token with auth middleware
8. Profile data is displayed if token is valid
