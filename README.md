# MERN Product Store

A full-stack product management app built with MongoDB, Express, React, and Node.js.

Live Demo: [View Products Store] (https://mern-fullstack-project-xyr8.onrender.com)

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

## API

| Method | Endpoint | Action |
| --- | --- | --- |
| GET | `/api/products` | List products |
| POST | `/api/products` | Create a product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

Create and update requests use JSON fields: `name`, `price`, and `image`.
