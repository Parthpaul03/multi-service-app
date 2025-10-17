# multi-service-app

![Project: multi-service-app](https://img.shields.io/badge/project-multi--service--app-blue)
![License: MIT](https://img.shields.io/badge/license-MIT-lightgrey)

A containerized multi-service starter project: React frontend, Node/Express backend, and Nginx reverse-proxy orchestrated with Docker Compose. Designed for easy local development and deployment.

---

## Quick Links

- Repository: https://github.com/Parthpaul03/multi-service-app

---

## Overview

This repository contains a simple multi-service web application with the following pieces:

- `frontend/` — React single-page application (Create React App structure)
- `backend/` — Node.js + Express API server
- `nginx/` — Nginx configuration used by the Docker image
- `docker-compose.yml` — orchestrates services for local development

The goal: run the entire stack locally with one command and keep service code separate for easy development.

## Badges

Add CI, Docker Hub, or other badges here when you enable them (GitHub Actions, Docker build, etc.).

## Quick start (Dockerized)

Prerequisites:

- Docker Desktop (with Docker Compose)

Start the whole stack:

```powershell
docker-compose up --build
# or detached
docker-compose up --build -d
```

Open http://localhost (or the port configured in `docker-compose.yml` / `nginx/default.conf`).

## Run services locally (recommended for development)

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

If you run the frontend and backend separately, ensure the frontend dev server proxy or `REACT_APP_API_URL` points to the backend port.

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

This project is released under the MIT License. Add a `LICENSE` file if you want.

---

If you want, I can add CI, a LICENSE file, or badges next. Tell me what else you'd like included.
# multi-service-app