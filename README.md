# Mini CRM (MERN) - Scaffold

This repository contains a simple Mini CRM scaffold with a Node/Express/MongoDB backend and a React frontend.

Backend (backend/)
- Express server in `server.js`
- Mongoose Lead model in `models/Lead.js`
- Auth route: `POST /api/auth/login` (uses ADMIN_USER/ADMIN_PASS env vars)
- Lead routes (protected): `POST /api/leads`, `GET /api/leads`, `PUT /api/leads/:id`, `DELETE /api/leads/:id`

Frontend (frontend/)
- React app (CRA style)
- `src/components/Login.js` — admin login, stores token in `localStorage`
- `src/components/Dashboard.js` — fetches and displays leads, update status/notes

Setup

1. Backend

```
cd backend
npm install
# copy .env.example to .env and set values
npm run dev    # requires nodemon for dev, or npm start
```

2. Frontend

```
cd frontend
npm install
npm start
```

Sample API calls (axios)

Login:
```
POST /api/auth/login
{ "username":"admin", "password":"password" }
```

Get leads (with token in Authorization header):
```
GET /api/leads
Authorization: Bearer <token>
```

Create lead:
```
POST /api/leads
{ "name":"Alice","email":"a@example.com","source":"website" }
```

Update lead:
```
PUT /api/leads/:id
{ "status":"Contacted","notes":"Called and left a voicemail" }
```

Delete lead:
```
DELETE /api/leads/:id
```

Notes
- Uses JWT protected routes; token stored in `localStorage` by the frontend.
- For production, use secure password storage and a real user system.
