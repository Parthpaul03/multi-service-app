<<<<<<< HEAD
# Multi-Service-App

Dockerized multi-service starter: React frontend, Node/Express backend, Nginx reverse-proxy, and supporting services (Mongo, Redis) orchestrated with Docker Compose.

## Quick start

Requirements: Docker Desktop (includes Docker Compose)

```powershell
# Multi-Service Dockerized Application

This repository contains a complete example of building and orchestrating a multi-service application using Docker and Docker Compose.

Features:
- Frontend: React app served with Nginx (multi-stage Docker build)
- Backend: Node.js + Express API
- Database: MongoDB with persistent volume
- Cache: Redis with persistent volume
- Reverse proxy: Nginx service to serve frontend and proxy API requests

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
- `backend/package.json` includes a `start` script to run the server locally.
- `.gitignore` added to keep node_modules and env files out of git.

## Project structure

- `frontend/` — React app sources
- `backend/` — Express server sources
- `nginx/` — reverse proxy configuration
- `docker-compose.yml` — defines services, networks, and volumes

## Environment variables

Add any necessary `.env` variables per service. Example:

- Backend: `PORT`, `NODE_ENV`, `DATABASE_URL`
- Frontend: `REACT_APP_API_URL`

Create `.env` files locally and do not commit them.

## Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit and push, then open a pull request

## License

This project is released under the MIT License (see `LICENSE`).

---

If you want, I can run Docker Compose now and perform smoke tests to verify everything is up, or implement additional improvements (frontend polish, CI expansion, secrets management).

