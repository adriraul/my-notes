# MyNotes Frontend

## Description:

This is the frontend for the "Notes" application. Built with React, it provides a user interface to interact with the backend and manage your notes.

## Environment configuration:

Before running the frontend application, you need to configure the environment variables. These variables are essential for the application to run correctly.

1. **Copy the example configuration**:
   Start by copying the provided `.env.example` file to a new file named `.env` in the root of your project.

   ```bash
   cp .env.example .env

2. **Edit the .env file**:

Open the .env file in your preferred text editor. You'll see default configurations like:

Adjust these values if necessary. For instance, if your backend API is hosted elsewhere, update the BACKEND_API_URL value.

## Quick Start:

1. **Install Dependencies**:

npm install

2. **Run the Application in Development Mode**:

npm start

This will start the development server and open the application in your default browser.

3. **Build the Application for Production**:

npm run build

This will generate an optimized version of the application in the build folder.

## Dependencies:

react: ^18.2.0
react-dom: ^18.2.0
react-router-dom: ^6.14.2
react-icons: ^4.10.1
@fortawesome/fontawesome-free: ^6.4.0
@testing-library/jest-dom: ^5.17.0
@testing-library/react: ^13.4.0
@testing-library/user-event: ^13.5.0
react-scripts: 5.0.1
web-vitals: ^2.1.4

## Scripts:

npm start: Run the application in development mode.
npm run build: Build the application for production.
npm test: Run tests.
npm run eject: If you need to configure something specific not exposed by create-react-app, you can "eject". However, be cautious with this command!

## Supported Browsers:
Production:
No dead browsers
No Opera Mini

Development:
Latest Chrome version
Latest Firefox version
Latest Safari version

## License
This project is under the MIT license. Refer to the LICENSE file for more details.