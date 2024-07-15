# Bare Budget Backend

This is the backend service for the Bare Budget application, utilizing PostgreSQL and Adminer for database management. The project is set up to run using Docker and Docker Compose for easy environment management.

## Prerequisites

Ensure you have the following installed on your machine:

- Docker
- Docker Compose
- Node.js
- npm (Node Package Manager)

## Getting Started

### Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/bare-budget-backend.git
cd bare-budget-backend
```

## Environment Variables
Create a .env file in the root directory of the project and populate it with the following variables:

```
POSTGRES_DB=budget_app_db
POSTGRES_USER=your_database_user
POSTGRES_PASSWORD=your_database_password
```

Replace your_database_user and your_database_password with your actual database user and password.

## Docker Setup

Ensure Docker and Docker Compose are running on your system. To start the PostgreSQL and Adminer services, use the following command:

```
docker-compose up -d
```

Create the Database
If the database budget_app_db does not exist, create it using the following Docker command:

```
docker run -it --rm --network=backend_default postgres psql -h db -U your_database_user -d postgres -c "CREATE DATABASE budget_app_db;"
```

## Running Migrations
To set up the database schema, run the Knex migrations:

```
npm run migrate
```

## Access Adminer
You can access Adminer to manage your database through a web browser at:

http://localhost:8080
Use the following credentials:

System: PostgreSQL
Server: db
Username: your_database_user
Password: your_database_password
Database: budget_app_db


## Development
To start the development server, use the following command:

```
npm run dev
```