# Recipe CRUD API
## Tech Stack
- Node.js
- MongoDB (Mongoose)

## Features
- Create, Read, Update, Delete Recipes
- MVC Architecture
- MongoDB Integration
- Error Handling & Validation

## Setup

1. Install dependencies
npm install

2. Create .env file
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/recipesDB

3. Run server
npm run dev

## API Endpoints

| Method | Route | Description |
|--------|------|------------|
| POST | /api/recipes | Create Recipe |
| GET | /api/recipes | Get All Recipes |
| GET | /api/recipes/:id | Get Recipe |
| PUT | /api/recipes/:id | Update Recipe |
| DELETE | /api/recipes/:id | Delete Recipe |

## Postman API Documentation

https://documenter.getpostman.com/view/39625050/2sBXqMGJfV
