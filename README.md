# Express - Library Apps
# Gefami Services Indonesia - Fullstack Developer

This project is an Online Library System that allows users to register, log in, and borrow books. It includes an admin interface to manage book borrowings and check for overdue books. The system is built as part of a coding skill test.

## Features
### Assigment Task I
1. **User Authentication**
   - **Registration:** Users can register using a valid email and password. 
     - Email must be from a valid domain (e.g., `@gmail.com`, `@hotmail.com`).
     - Password must be at least 8 characters, alphanumeric, include at least one uppercase letter, and contain no special characters.
     - Duplicate emails are not allowed.
   - **Login:** Users can log in with their registered email and password.

2. **Book Borrowing**
   - Users can borrow one book at a time. 
   - Users must return a borrowed book before borrowing another.

3. **Admin Functions**
   - Admins can monitor borrowed books to check overdue items or those currently out on loan.
### Assigment Task II
1. **JSON Array Structure**
   - A sample JSON array object is created with custom information.

2. **Label and Button Interaction**
   - A label displays a value from the JSON array.
   - A button changes the label's value on click.

3. **HTTP Request**
   - Makes an HTTP GET request to `http://jsonplaceholder.typicode.com/posts`.
   - The response is logged to the console.

4. **Display Response in Table Format**
   - Displays up to 10 records from the HTTP response in a table format on the HTML page.

5. **Delete Function**
   - Includes a function to delete one record from the displayed table.

6. **Key Removal from JSON Object**
   - Removes a specific key from the JSON response object.

7. **SHA-256 Hashing Function**
   - Hashes the string `tanggalhariini+namadepananda+pria+ifabula` using SHA-256.
   - The hashed value is logged to the console.

8. **Debugging**
   - Identifies and fixes errors in the `testdebug.html` file, with details on each error line.

9. **Login and Logout Functionality**
   - Implements a login form with local storage for the username and password.
   - Logic to:
     - Hide the logout button and welcome message initially.
     - Display the welcome message and logout button upon successful login.
     - Clear local storage and reset visibility on logout.

10. **Node.js Project with Express**
   - A Node.js project using Express that includes two API endpoints:
     - `GET` and `POST` methods with custom data.
   
11. **Request Header Validation**
   - Adds custom headers to API requests:
     - `User-id: ifabula`
     - `Scope: user`
   - Validates the headers, responding with:
     ```json
     {
       "responseCode": 401,
       "responseMessage": "UNAUTHORIZED"
     }
     ```
     if the headers do not match.

## Getting Started
### Installation and Setup

1. **Clone the Repository**
    ```bash
    git clone https://github.com/sidikimamsetiyawan/express-library-app.git
    ```
2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Run the application**
    ```bash
    npm start
    ```

### Database Setup (MySQL)

This project requires a MySQL database. You can download the initial database file from this link: ..

### Steps to Set Up

1. **Create Database**: 
   - Create a MySQL database named `express_libraries_app`:
   ```sql
   CREATE DATABASE express_online_shop;

### Testing with Postman

You can access the Postman collection for testing the API endpoints here: ..

Alternatively, you can download the collection file and import it into Postman using the "Import" feature. ..

## Documentation
### Assigment Task I
![image](https://github.com/user-attachments/assets/679a274f-2cba-4592-9588-e630c1ec6ae7)

### Assigment Task II
![image](https://github.com/user-attachments/assets/c942a5f9-b1c6-42f9-b463-4653fd2ef009)

1. **JSON Array Structure**

2. **Label and Button Interaction**

3. **HTTP Request**

4. **Display Response in Table Format**

5. **Delete Function**

6. **Key Removal from JSON Object**

7. **SHA-256 Hashing Function**

8. **Debugging**

9. **Login and Logout Functionality**

10. **Node.js Project with Express**

11. **Request Header Validation**
