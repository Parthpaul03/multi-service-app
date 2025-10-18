<<<<<<< HEAD
# Multi-Service Dockerized Application
=======
# Multi-Service-App
>>>>>>> d5897cfcda3d151e644da9fd60b9b018a6d37dee

This repository contains a complete example of building and orchestrating a multi-service application using Docker and Docker Compose.

Features:
- Frontend: React app served with Nginx (multi-stage Docker build)
- Backend: Node.js + Express API
- Database: MongoDB with persistent volume
- Cache: Redis with persistent volume
- Reverse proxy: Nginx service to serve frontend and proxy API requests

Run locally:
```powershell
docker-compose up --build
```

<<<<<<< HEAD
Access:
- App: http://localhost/
- Backend API: http://localhost/api/data
# multi-service-app
=======
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
# Multi-Service Dockerized Application

This repository contains a complete example of building and orchestrating a multi-service application using Docker and Docker Compose.

Features:
- Frontend: React app served with Nginx (multi-stage Docker build)
- Backend: Node.js + Express API
- Database: MongoDB with persistent volume
- Cache: Redis with persistent volume
- Reverse proxy: Nginx service to serve frontend and proxy API requests

Run locally:
```powershell
docker-compose up --build
```

Access:
- App: http://localhost/
- Backend API: http://localhost/api/data

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

This project is released under the MIT License. A `LICENSE` file is included in the repository.

---

If you want, I can add CI badges, a deployment pipeline, or a demo screenshot next.
