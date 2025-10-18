<<<<<<< HEAD
<<<<<<< HEAD
# Multi-Service Dockerized Application
=======
=======
>>>>>>> frontend-ui-work
# Multi-Service-App
>>>>>>> d5897cfcda3d151e644da9fd60b9b018a6d37dee

<<<<<<< HEAD
This repository contains a complete example of building and orchestrating a multi-service application using Docker and Docker Compose.

=======
Dockerized multi-service starter: React frontend, Node/Express backend, Nginx reverse-proxy, and supporting services (Mongo, Redis) orchestrated with Docker Compose.

## Quick start

# Multi-Service Dockerized Application

This repository contains a complete example of building and orchestrating a multi-service application using Docker and Docker Compose. It's designed as a starter for local development and small deployments.

Features
- React frontend served by Nginx (multi-stage Docker build)
- Node.js + Express backend API
- MongoDB and Redis services for persistence and caching
- Nginx reverse-proxy to serve static files and proxy API requests
- Docker Compose orchestration with healthchecks and volumes

Quick start (Docker)
Prerequisites: Docker Desktop (includes Compose)

```powershell
cd c:\Users\parth\OneDrive\Desktop\multi-service-app
docker-compose up --build
# or detached:
docker-compose up --build -d
```

Open http://localhost after startup.

Health endpoints
- Backend: http://localhost/health
- API: http://localhost/api/data

Local development

Backend
```powershell
cd backend
npm install
npm start
```

Frontend
```powershell
cd frontend
npm install
npm start
```

Project structure
- `frontend/` — React app sources
- `backend/` — Express server sources
- `nginx/` — reverse proxy configuration
- `docker-compose.yml` — defines services, networks, and volumes

Environment variables
Create a `.env` locally (not checked in) for secrets and config. Example values are provided in `.env.example`.

Contributing
1. Fork the repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit, push, and open a pull request

License
This project is released under the MIT License (see `LICENSE`).

If you'd like, I can run Docker Compose and perform smoke tests, or proceed to add frontend unit tests and update CI to run them.
