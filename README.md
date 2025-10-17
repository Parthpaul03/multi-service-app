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
# multi-service-app