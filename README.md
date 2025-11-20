# Bare Budget

Bare Budget is a full-stack personal finance application designed to help users track income, spending, budgets, categories, and transaction history over time.

It consists of:

- A Next.js 15 / React 19 / TypeScript frontend (App Router)
- A Node.js / Express / TypeScript backend API
- PostgreSQL with Prisma ORM for data storage
- Docker for local database setup
- A modular, extensible architecture intended for long-term growth

This project is actively in development. Several features are partially implemented or in scaffold form, but the structure is designed to support a complete finance dashboard.

## Tech Stack

### Frontend
- Next.js 15 (App Router)
- React 19
- TypeScript
- TailwindCSS
- Server Components and Client Components architecture

### Backend
- Node.js
- Express
- TypeScript
- Prisma ORM
- (Planned) Zod validation for request schemas
- REST API design

### Database
- PostgreSQL via Docker
- Prisma migrations and schema modeling

### Development Tools
- Docker and Docker Compose
- ESLint
- Prettier
- Nodemon
- TypeScript path aliases


## Getting Started

### 1. Start the PostgreSQL database

From the project root:

```bash
docker-compose up -d
```
This launches the local PostgreSQL instance defined in `docker-compose.yml`.

### 2. Backend Setup

Navigate to the backend:

```bash
cd backend
npm install
```

Apply Prisma migrations:

```bash
npx prisma migrate dev
```

Start the backend API:

```bash
npm run dev
```

Backend runs on:

```
http://localhost:4000
```

### 3. Frontend Setup

From the project root:

```bash
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:3000
```

## API Overview (Backend)

The backend implements modular routes for key financial entities.

### Users

* Create user
* Fetch user details
* Update user
* Delete user

### Accounts

* CRUD operations for financial accounts (checking, savings, credit cards, etc.)

### Transactions

* Create transactions manually or via CSV ingestion
* Query transactions by date range
* Filter by category or account
* Update or re-categorize transactions

### Categories

* CRUD operations for categories
* Planned: automated categorization using machine learning

### Budgets

* Budget rules per category or account
* Monthly or custom intervals

### Tags

* Tagging system for additional filtering

### Notifications (Planned)

* Budget alerts
* Overspending notifications
* General reminders

All backend routes are strongly typed with TypeScript. Schema validation is planned for future updates.

## Frontend Overview

The frontend is built with the Next.js App Router and organizes UI into:

### Pages

* Dashboard (in progress)
* Categories (in progress)
* Budgets (planned)
* Accounts (planned)
* Transactions table (planned)

### Components

* Reusable UI primitives
* Server-side data fetching patterns
* Loading and skeleton states

### Styling

* TailwindCSS for layout and responsive design

The UI is in early development but is structured for charts, dynamic budgeting features, and more advanced dashboard tools.

## Roadmap

### Goals

* CSV upload and transaction import
* Normalize merchants via an external normalization module
* Full CRUD for accounts, categories, budgets, and transactions
* Monthly or category-based budgeting
* Basic dashboard charts and summaries

