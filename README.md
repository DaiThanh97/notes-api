# Technical Test - Readme

## 1. Local Development Guideline

### Prerequisites

- `Docker` & `Docker Compose`
- NodeJS (v10 or above), `npm` and `yarn`

### Setup Local Development Environment

1. Clone the project to local machine and go to the folder

```
git clone https://github.com/DaiThanh97/028_NguyenDaiThanh.git
cd technical-test/problem5
```

2. Run the migration to setup all needed things

```
npm run migrate:up
```

3. You can start the project either of these ways

```
docker-compose up -d
```

4. Or this way to run the back-end in development mode (live-reload support). Remember to change `.env` file before starting the project.

```
npm run dev
```

4. The app should be accessible at http://localhost:5000. (Swagger UI for Documentation)

<b>Note</b>: The local DB will use port `3306`. If the port is being used, please change it to a different port in `docker-compose.yaml` and `.env`
