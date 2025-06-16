# Tournament & Team Management Platform

This repository contains the source code for an esports platform that manages users, teams, tournaments and leaderboards. The project aims to provide comprehensive tools for authentication, role-based access control (RBAC) and tournament management.

## Features (Planned)
- Secure authentication with email & password (bcrypt hashing)
- Third-party OAuth via Google, Discord and Twitch
- Role-based permissions for Admins, Tournament Organizers, Support staff, Team Leaders and Players
- Team creation workflow with admin approval
- Tournament management with multiple formats (Single/Double elimination, Round Robin, Swiss)
- Real-time updates and leaderboards

## Technology Stack
- **Backend:** Node.js with Express.js
- **Database:** PostgreSQL (with Redis for caching)
- **Frontend:** React (Vite) with Tailwind CSS and Shadcn/UI (planned)
- **Real-time:** Socket.IO for notifications and bracket changes

This repository currently focuses on the backend API. Frontend implementation will follow in future iterations.


## Development Setup
1. Install dependencies:
   ```bash
   cd server
   npm install
   ```
2. Create a `.env` file based on `.env.example` and adjust database credentials.
3. Initialize the database using `schema.sql`.
4. Start the server:
   ```bash
   npm start
   ```

5. Run the test suite:
   ```bash
   npm test
   ```

The API will be available at `http://localhost:3000`.
