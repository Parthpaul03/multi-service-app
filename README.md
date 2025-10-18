# Multi-Service App

This repository is a practical starter for a multi-service application using Docker Compose. It includes:

- A React frontend (Create React App) built via a multi-stage Dockerfile and served by Nginx.
- A Node.js + Express backend that exposes a small JSON API and a health endpoint.
- Supporting services wired in Docker Compose: MongoDB and Redis.
- An Nginx reverse-proxy configuration to serve static files and proxy `/api` to the backend.

The project in this workspace has been updated and polished to be ready to push and run on GitHub. The important, user-visible changes and additions are listed below so the repository on GitHub documents what was done and how to run it.

## Quick start (local, using Docker Compose)

Requirements: Docker Desktop (Windows/macOS) or Docker Engine + Docker Compose.

From the repository root:

```powershell
docker-compose up --build
# or detached:
docker-compose up -d --build
```

Open http://localhost to see the frontend. Useful endpoints:

- Frontend: http://localhost/
- Backend health: http://localhost/health
- Backend API: http://localhost/api/data


## Run services locally for development (without Docker)

Backend:

```powershell
cd backend
npm install
npm start
```

Frontend (development server):

```powershell
cd frontend
npm install
npm start
```

When running the frontend dev server, ensure the API URL or `proxy` in `frontend/package.json` points to the backend port (default: 5000).


## What I changed / added (work summary)

This repository has been cleaned and improved for clarity and CI readiness. Highlights:

- Cleaned repository history and removed accidental tracking of large files (node_modules) via `.gitignore` updates.
- Converted `frontend/` from an accidental nested git repo into regular tracked files.
- Fixed Nginx proxy configuration to avoid path-rewrite bugs (no trailing slash in `proxy_pass` for `/api`).
- Polished the React frontend UI (`frontend/src/App.js`, `frontend/src/App.css`) to display API results and graceful loading/error states.
- Added a stable frontend unit test `frontend/src/App.test.js` that mocks `fetch` for CI stability.
- Updated GitHub Actions workflow `.github/workflows/ci.yml` to run frontend tests before building the frontend artifact.
- Added `.dockerignore`, `.env.example`, `CONTRIBUTING.md`, and `LICENSE` to improve hygiene and contributor experience.

If you want line-by-line changes or the commit history for any of these items, look at the repository commits (they were pushed to `origin/main`).


## Testing

Frontend unit tests are implemented with React Testing Library and Jest. Run them locally:

```powershell
cd frontend
npm ci
npm test -- --watchAll=false
```

CI automatically runs the frontend tests and then builds the frontend on push to `main`.


## CI / GitHub Actions

The repository includes a lightweight GitHub Actions workflow that:

- Installs frontend dependencies
- Runs frontend tests (non-watch)
- Builds the frontend
- Installs backend dependencies and runs a lightweight start check

The workflow file is in `.github/workflows/ci.yml`.


## Recommended next steps

1. Commit the updated `frontend/package-lock.json` if it's not already committed to ensure CI reproducibility. (I updated it locally to run tests.)
2. Add backend unit/integration tests and include them in CI.
3. Move any sensitive credentials out of `docker-compose.yml` into a `.env` file or Docker secrets; add `.env.example` with placeholder values.
4. Add E2E tests (Playwright or Cypress) for end-to-end smoke testing.


## Project structure (top-level)

- `frontend/` — React app and Dockerfile
- `backend/` — Express server and Dockerfile
- `nginx/` — reverse proxy configuration used when running via Docker Compose
- `docker-compose.yml` — service orchestration (frontend, backend, mongo, redis, nginx)


## License

This project is released under the MIT License. See the `LICENSE` file for details.


---

If you'd like, I can now:

- Commit and push this README (I will do that next),
- Add the `frontend/package-lock.json` to the repo and push it for CI reproducibility, or
- Start expanding tests or add backend tests.

Tell me which of those to do next.
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

Requirements: Docker Desktop (includes Docker Compose)

```powershell
# Multi-Service Dockerized Application

This repository contains a complete example of building and orchestrating a multi-service application using Docker and Docker Compose.

>>>>>>> frontend-ui-work
Features:
- Frontend: React app served with Nginx (multi-stage Docker build)
- Backend: Node.js + Express API
- Database: MongoDB with persistent volume
- Cache: Redis with persistent volume
- Reverse proxy: Nginx service to serve frontend and proxy API requests
<<<<<<< HEAD
=======

## Quick start

Requirements: Docker Desktop (includes Docker Compose)
>>>>>>> frontend-ui-work

Run locally:
```powershell
docker-compose up --build
<<<<<<< HEAD
# Multi-Service Dockerized Application

Dockerized multi-service starter: React frontend, Node/Express backend, Nginx reverse-proxy, and supporting services (Mongo, Redis) orchestrated with Docker Compose.

## Quick start

Requirements: Docker Desktop (includes Docker Compose)

Run locally (build + run):

```powershell
docker-compose up --build
```

Or detached:

```powershell
docker-compose up -d --build
```

Visit: http://localhost

Health endpoints:
- Backend: http://localhost/health
- API: http://localhost/api/data

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

This project is released under the MIT License (see `LICENSE`).

---

If you want, I can run Docker Compose now and perform smoke tests to verify everything is up, or implement additional improvements (frontend polish, CI expansion, secrets management).
- App: http://localhost/
