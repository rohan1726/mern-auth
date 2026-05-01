# MERN Auth Boilerplate

Full-stack authentication starter — React + Node.js + MongoDB + JWT.

## Project Structure

```
mern-auth/
├── client/        → React frontend (Vite)
└── server/        → Node.js + Express backend
```

## Quick Start

### 1. Setup Server

```bash
cd server
npm install
cp .env.example .env
# Fill in your MONGO_URI and JWT_SECRET in .env
npm run dev
```

### 2. Setup Client

```bash
cd client
npm install
cp .env.example .env
# .env already points to localhost:5000 for local dev
npm run dev
```

Open `http://localhost:5173`

## API Endpoints

| Method | Route            | Access    | Description         |
|--------|-----------------|-----------|---------------------|
| POST   | /api/auth/signup | Public    | Register new user   |
| POST   | /api/auth/login  | Public    | Login user          |
| GET    | /api/auth/me     | Protected | Get logged-in user  |

## Tech Stack

- **Frontend**: React 18, React Router v6, Axios, Vite
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB Atlas
- **Auth**: JWT (7-day expiry), bcrypt (10 salt rounds)
- **Deployment**: Vercel (frontend), Render (backend), MongoDB Atlas (DB)

## Deployment

### Frontend → Vercel
1. Push `client/` to GitHub
2. Import on vercel.com
3. Set `VITE_API_URL=https://your-backend.onrender.com/api`

### Backend → Render
1. Push `server/` to GitHub
2. New Web Service → set all env vars from `.env.example`
3. Start command: `node server.js`

### Database → MongoDB Atlas
1. Create free M0 cluster
2. Whitelist IP: `0.0.0.0/0`
3. Copy connection string → set as `MONGO_URI`
