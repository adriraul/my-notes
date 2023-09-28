# MyNotes Backend

## Description

This is the backend for a simple web application called "MyNotes". It provides all necessary APIs to manage and retrieve notes.

## Prerequisites

- Node.js
- PostgreSQL

## Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/adriraul/my-notes
   cd notes-backend

2. Install dependencies:

npm install

3. Environment Variables:

Copy the .env.example to .env and fill in the necessary database configurations.

4. Database Setup:

1. Ensure you have PostgreSQL installed and running.
2. Navigate to the `scripts` directory of this project.
3. Execute the `create-my-notes-database.sql` file to set up the database structure:
   ```bash
   psql -U [your_username] -d [your_database_name] -a -f create-my-notes-database.sql

5. Start the server

npm start

## Dependencies & Versions
body-parser: ^1.20.2
cors: ^2.8.5
dotenv: ^16.3.1
express: ^4.18.2
pg: ^8.11.1
reflect-metadata: ^0.1.13
typeorm: ^0.3.17

## Development Dependencies & Versions
@types/cors: ^2.8.13
@types/express: ^4.17.17
@types/node: ^20.4.5
ts-node: ^10.9.1
typescript: ^5.1.6

## Author
Adrian Bravo

## License
GNU General Public License (GPL)