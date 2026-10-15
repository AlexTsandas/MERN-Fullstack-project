# MERN Product Store

A full-stack product management app built with MongoDB, Express, React, and Node.js.

## Features

- View, create, edit, and delete products with a name, price, and image URL.
- Responsive interface with light and dark modes.
- MongoDB persistence and toast notifications for product actions.

## Tech Stack

- **Frontend:** React, Vite, Chakra UI, React Router, Zustand
- **Backend:** Node.js, Express, Mongoose
- **Database:** MongoDB Atlas

## Setup

Requires Node.js 24+, npm, and a MongoDB connection string. Run commands from the project root.

```bash
git clone https://github.com/AlexTsandas/MERN-Fullstack-project.git
cd MERN-Fullstack-project
npm install
npm install --prefix Frontend
```

Create a `.env` file in the project root:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-host>/products_db
PORT=5000
```

The backend uses the `products_db` database. Allow your application's IP address in Atlas Network Access. Keep `.env` out of Git.

## Development

The backend development script requires `nodemon`. If it is not already available, install it locally without changing the dependency files:

```bash
npm install --no-save nodemon
```

Start the backend:

```bash
npm run dev
```

In a second terminal, start the frontend:

```bash
npm run dev --prefix Frontend
```

Open the URL printed by Vite, usually `http://localhost:5173`. Frontend `/api` requests are proxied to `http://localhost:5000`.

## Production

```bash
npm run build
npm run start
```

Open `http://localhost:5000` (or your configured port). Express serves both the API and the built frontend. Stop any development backend using the same port first.

For **Render**, use a Node Web Service with the repository root as its working directory:

- **Build command:** `npm run build`
- **Start command:** `npm run start`
- **Pre-deploy command:** Empty
- **Environment:** Set `MONGODB_URI`; Render supplies `PORT`.

Allow the service's outbound IP ranges in Atlas Network Access.

## Project Structure

```text
Backend/                 Express server, database configuration, models, routes, controllers
Frontend/src/components/ Reusable UI components
Frontend/src/pages/      Product listing and creation pages
Frontend/src/store/      Zustand state and API requests
```

## API

| Method | Endpoint | Action |
| --- | --- | --- |
| GET | `/api/products` | List products |
| POST | `/api/products` | Create a product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

Create and update requests use JSON fields: `name`, `price`, and `image`.
