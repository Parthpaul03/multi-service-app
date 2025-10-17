# multi-service-app

Dockerized multi-service starter: React frontend, Node/Express backend, Nginx reverse-proxy, and supporting services (Mongo, Redis) orchestrated with Docker Compose.

## Quick start

Requirements: Docker Desktop (includes Docker Compose)

```powershell
docker-compose up --build
# or detached
docker-compose up -d --build
```

Visit: http://localhost

Health endpoints:
- Backend: http://localhost/health
- API: http://localhost/api/data

## Local development

Backend:

```powershell
cd backend
npm install
npm start
```

Frontend:

```powershell
cd frontend
npm install
npm start
```

## Notes
- `backend/package.json` now includes `start` to run the server locally.
- `.gitignore` added to keep node_modules and env files out of git.

If you'd like, I can run Docker Compose now and run quick smoke tests to verify everything is up. 
# multi-service-app