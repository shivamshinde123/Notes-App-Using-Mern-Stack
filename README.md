# Notes App - MERN Stack

A full-stack notes application built with MongoDB, Express.js, React, and Node.js.

## Project Structure

View the complete project structure: [Project Diagram](https://gitdiagram.com/shivamshinde123/notes-app-using-mern-stack)

## Features

- Create, read, update, and delete notes
- Responsive UI with DaisyUI components
- Rate limiting for API protection
- Toast notifications for user feedback
- Date formatting for note timestamps

## Tech Stack

**Frontend:**
- React 18
- React Router DOM
- Axios for API calls
- React Hot Toast for notifications
- Lucide React for icons
- DaisyUI + Tailwind CSS for styling

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- Upstash Redis for rate limiting
- CORS enabled

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- Upstash Redis account

### Installation

1. Clone the repository
2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```
4. Set up environment variables in backend/.env
5. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```
6. Start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```

## API Endpoints

- `GET /api/notes` - Get all notes
- `GET /api/notes/:id` - Get specific note
- `POST /api/notes` - Create new note
- `PUT /api/notes/:id` - Update note
- `DELETE /api/notes/:id` - Delete note

## Rate Limiting

The API is protected with rate limiting (3 requests per 10 seconds) using Upstash Redis.