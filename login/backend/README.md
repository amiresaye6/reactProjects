# User Management API

## Description

This API provides user management functionalities, including user registration, login, and data retrieval. It connects to a MySQL database and exposes endpoints to handle user-related operations.

## Installation

1. Clone the repository:
    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory with the following environment variables:
    ```env
    DB_USER=testuser
    DB_PASSWORD=Amir@mysql1
    DB_HOST=localhost
    DB_NAME=alx_graduation_test
    ```

4. Start the server:
    ```bash
    npm start
    ```

## Endpoints

### `GET /`

**Description:** A simple test endpoint to check if the server is running.

**Response:**
- Status: `200 OK`
- Body: `Hello World`

### `GET /users`

**Description:** Retrieves a list of all users in the database.

**Response:**
- Status: `200 OK`
- Body: `[{ "id": 1, "username": "user1", "email": "user1@example.com" }, ...]`

**Error Responses:**
- Status: `500 Internal Server Error`
  - Body: `Failed to retrieve users`

### `POST /login`

**Description:** Authenticates a user based on username and password.

**Request Body:**
- `username` (string): The username of the user.
- `password` (string): The password of the user.

**Response:**
- Status: `200 OK`
  - Body: `[{ "id": 1, "username": "user1", "email": "user1@example.com" }]`
  
**Error Responses:**
- Status: `500 Internal Server Error`
  - Body: `Login failed`
- Status: `401 Unauthorized`
  - Body: `Invalid credentials`

### `POST /signup`

**Description:** Registers a new user with a username, password, and email.

**Request Body:**
- `username` (string): The username of the new user.
- `password` (string): The password of the new user.
- `email` (string): The email of the new user.

**Response:**
- Status: `201 Created`
  - Body: `User created successfully`

**Error Responses:**
- Status: `400 Bad Request`
  - Body: `All fields are required` (if any field is missing)
  - Body: `Email already exists` (if the email is already in use)
- Status: `500 Internal Server Error`
  - Body: `Error creating user`

## Configuration

Ensure that the `.env` file is correctly configured with the database credentials. The server listens on port `1234` by default, but this can be changed in the `app.listen` method.

## Dependencies

- `express`: Web framework for Node.js.
- `mysql`: MySQL client for Node.js.
- `cors`: Middleware for enabling Cross-Origin Resource Sharing.
- `dotenv`: Module to load environment variables from a `.env` file.
