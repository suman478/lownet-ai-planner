# LowNet AI Planner - Architecture

## Overview

LowNet AI Planner is a task scheduling and planning application that uses AI to optimize task prioritization and scheduling.

## System Architecture

### Frontend Layer
- **index.html**: Main user interface
- **app.js**: Task management and API communication
- **style.css**: UI styling and responsive design
- **components/**: Reusable UI components

### Backend Layer
- **server.js**: Express.js server and middleware setup
- **routes/**: API endpoint definitions
  - `tasks.js`: Task CRUD operations
  - `scheduler.js`: Scheduling endpoints
- **controllers/**: Business logic handlers
  - `taskController.js`: Task management logic

### Data Layer
- **database/localDB.js**: In-memory database with persistence

### AI Scheduler
- **scheduler/aiScheduler.py**: Python-based AI scheduling engine
  - Priority calculation algorithm
  - Schedule optimization
  - Deadline management

### Assets
- **assets/images/**: Static image resources
- **docs/**: Project documentation

## API Endpoints

### Tasks
- `GET /api/tasks` - Retrieve all tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

### Scheduler
- `GET /api/scheduler/schedule` - Get optimized schedule
- `POST /api/scheduler/schedule` - Generate new schedule

## Data Models

### Task
```json
{
  "id": 1,
  "text": "Task description",
  "priority": "high|medium|low",
  "completed": false,
  "createdAt": "2026-02-14T00:00:00Z",
  "updatedAt": "2026-02-14T00:00:00Z"
}
```

## Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **AI Engine**: Python
- **Database**: In-memory with local storage
- **Build Tools**: npm

## Deployment

To deploy this application:

1. Install dependencies: `npm install`
2. Configure environment variables
3. Start the server: `npm start`
4. Access the application at `http://localhost:3000`

