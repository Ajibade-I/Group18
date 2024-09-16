# Job Website

## Overview

This is a job-finding platform that allows users to create accounts, post jobs (for job providers), and apply for jobs (for job seekers). It is built using Node.js, Express.js, and MongoDB, utilizing JWT for authentication and `bcryptjs` for password encryption.

## Features
- **User authentication** with JWT (signup, login, token validation).
- **Role-based user management** (job seekers and job providers).
- **Job posting and application** functionalities.
- **REST API** with error handling and logging.
- **Environment-based configuration** (using dotenv for sensitive keys).
- **Email notifications** for user-related actions (using Nodemailer).

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT and bcryptjs
- **Error Handling**: Custom middleware for error handling
- **Logging**: Logs for access and errors
- **Environment Variables**: Managed via `.env` file

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com
   ```

2. Navigate to the project directory:
   ```bash
   cd folder
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:
   ```plaintext
   MONGO_URI=
   JWT_PRIVATE_KEY=
   SMTP_HOST=
   SMTP_PORT=
   SMTP_MAIL=
   SMTP_PASSWORD=
   CLIENT_URL=
   ```

5. Start the server:
   ```bash
   npm run dev
   ```

   The application will run at `http://localhost:7500`.

## Scripts
- `npm start`: Runs the application in production mode.
- `npm run dev`: Starts the app using nodemon for development.

## API Endpoints

### User Signup
- **POST** `/api/user/signup`
  - Allows users to create an account (either as a job provider or job seeker).
  - Required fields: `username`, `email`, `password`, `role`.

### User Login
- **POST** `/api/user/login`
  - Authenticates users and returns a JWT token.


## Middleware

### `isLogin`
- Ensures that a user is logged in by checking the signed JWT token in the cookies.
  
### Error Handling Middleware
- **ErrorHandler**: Handles application-wide errors such as invalid input, missing paths, or server errors.
  
```javascript
app.use(errorHandler);
app.use(notFound);
```

## Dependencies

- `bcryptjs`: Password hashing for security.
- `cookie-parser`: Parses cookies in HTTP requests.
- `cors`: Enables CORS (Cross-Origin Resource Sharing).
- `dotenv`: Loads environment variables from a `.env` file.
- `express`: Web framework for building the API.
- `jsonwebtoken`: For signing and verifying JWT tokens.
- `mongoose`: MongoDB ORM to interact with the database.
- `multer`: Middleware for handling file uploads (e.g., resumes).
- `nodemailer`: For sending emails.
- `nodemon`: For automatic server restarts during development.

## Error Handling

Custom error handlers are included for catching and processing various types of errors (like `404 Not Found` or `500 Server Error`). Middleware ensures consistent error messages and proper logging:

- **404 Not Found**:
  ```javascript
  const notFound = (req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404).json({ message: error.message });
  };
  ```

- **Global Error Handler**:
  ```javascript
  const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode).json({
      success: false,
      message: err.message,
    });
  };
  ```

.