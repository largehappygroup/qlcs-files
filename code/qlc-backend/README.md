# QLC Backend

Node.js + Express backend for the QLC application.

## Prerequisites

1. Node.js 18+ (Node.js 20 LTS recommended)
2. npm (comes with Node.js)
3. MongoDB connection string (local MongoDB or MongoDB Atlas)

## 1) Install Dependencies

From this folder (`qlc-backend`):

```bash
npm install
```

## 2) Configure Environment Variables

Create a `.env` file in `qlc-backend` and add the following:

```env
API_KEY=your_api_key
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5704
PORT=5704
FRONTEND_URL=http://localhost:5703
```

### Variable Notes

1. `MONGO_URI`: Required. Used to connect to MongoDB.
2. `PORT`: Optional. Defaults to `5704` if not set.
3. `FRONTEND_URL`: Optional. Used by CORS; defaults to `http://localhost:5703`.
4. `API_KEY` and `BASE_URL`: Required by parts of the app and service logic.

## 3) Run the Backend

```bash
npm start
```

This starts the server with `nodemon` using `index.js`.

When running successfully, you should see:

1. `Successfully connected to MongoDB.`
2. `Server listening on port 5704` (or your custom port)

Health check:

1. Open `http://localhost:5704/`
2. You should get: `Hello :D`

## Project Structure (High Level)

```
config/
controllers/
data/
middleware/
models/
routes/
scripts/
services/
uploads/
utils/
workers/
```

## Troubleshooting

1. `MongooseServerSelectionError` or connection failures:
	Check `MONGO_URI` and network access to MongoDB.
2. CORS errors from the frontend:
	Make sure `FRONTEND_URL` in `.env` matches your frontend origin.
3. Port already in use:
	Change `PORT` in `.env` and restart.