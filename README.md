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

https://web.postman.co/workspace/Team-Workspace~14a48332-c810-4066-8836-2775a676b667/collection/39625050-f04b3502-eda5-467c-a87f-cbf51e4da31e?action=share&source=copy-link&creator=39625050
