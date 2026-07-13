# API Starter Kit

A minimal Node.js / [Fastify](https://fastify.dev/) JSON API, ready to deploy on
[Nullplatform](https://nullplatform.com/).

## Endpoints

| Method | Path      | Response                                                  |
|--------|-----------|----------------------------------------------------------|
| GET    | `/health` | `{ "status": "ok" }` — used by scope health checks       |
| GET    | `/`       | `{ "message": "Hello from the Nullplatform API Starter Kit" }` |

## Run locally

```bash
npm install
npm start
# → listening on http://0.0.0.0:8080
```

The server honors the `PORT` and `HOST` environment variables (defaults `8080` / `0.0.0.0`).

## Build

```bash
docker build -t main .
```

## CI/CD

`.github/workflows/ci.yml` runs on every push to `main`: it starts a nullplatform build,
builds the Docker image, pushes it as a `docker-image` asset, and reports the build status
back to nullplatform.
