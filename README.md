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

This project requires a MySQL database. You can download the initial database file from this link: https://drive.google.com/file/d/1MV_VqaeP8eS5IEsk_bkKwdNKJaAPumUl/view?usp=sharing
### Steps to Set Up

1. **Create Database**: 
   - Create a MySQL database named `express_libraries_app`:
   ```sql
   CREATE DATABASE express_online_shop;

### Testing with Postman

You can download the collection file and import it into Postman using the "Import" feature. ( https://drive.google.com/file/d/1xtSbEKyLTYlTULRE1VxPeiIc-PaMiaO9/view?usp=sharing )

## Documentation
### Assigment Task I
1. **User Authentication**
   * **Registration**
     ![image](https://github.com/user-attachments/assets/ad232b92-1a36-407e-94ce-4a95a42a9403)
     ![image](https://github.com/user-attachments/assets/47d8c0b5-f746-4e66-9ab4-2d87dbb8c421)
     ![image](https://github.com/user-attachments/assets/9ee92250-a88f-424f-80aa-a99a4f99820a)
     
   * **Login**
     ![image](https://github.com/user-attachments/assets/0c65a25a-9f5f-4a70-8611-781c819846ae)
     ![image](https://github.com/user-attachments/assets/5388d343-9fa3-42b4-96b0-4d10aa711a90)

2. **Book Borowing**
   ![image](https://github.com/user-attachments/assets/907b2e01-1c63-43cd-9ca4-c0012da186a1)
  
3. **Status Borowing**
   ![image](https://github.com/user-attachments/assets/270dc6b2-c4ef-4e6a-b060-b5a84e29036f)

4. **Rules Borowing** 
![image](https://github.com/user-attachments/assets/679a274f-2cba-4592-9588-e630c1ec6ae7)

### Assigment Task II
![image](https://github.com/user-attachments/assets/dbf45356-617d-476b-ad49-c1906cfdb628)

1. **JSON Array Structure**
![image](https://github.com/user-attachments/assets/a89c0e44-cbd6-4bbf-9348-48ae0f6dc133)

2. **Label and Button Interaction**
![image](https://github.com/user-attachments/assets/967e1b64-df30-4aa5-964f-45bd45e46b77)

3. **HTTP Request**
![image](https://github.com/user-attachments/assets/434c7855-f4d2-4f95-a556-073770f622dc)

4. **Display Response in Table Format**
![image](https://github.com/user-attachments/assets/e8f81173-b830-4a8c-8e76-8c677f6df9bf)

5. **Delete Function**
![image](https://github.com/user-attachments/assets/01e63f54-6d82-46b9-b218-c3b7f1cc91f4)

6. **Key Removal from JSON Object**
![image](https://github.com/user-attachments/assets/e33a7419-1ea0-4e19-a608-5a76cd8c58f9)

7. **SHA-256 Hashing Function**
![image](https://github.com/user-attachments/assets/718a4b15-925f-4c00-9ca9-2737496c3b78)

8. **Debugging**
![image](https://github.com/user-attachments/assets/7ae784b6-8a48-4b83-b1bf-03ee3c9d5c00)

9. **Login and Logout Functionality**

![image](https://github.com/user-attachments/assets/73a052b0-9317-4efc-901c-1df1652e70ab)

10. **Node.js Project with Express** ( Already available in Assigment Task I )
    
11. **Request Header Validation**
![image](https://github.com/user-attachments/assets/bf770dda-b843-4d04-9962-e5198786dc7b)
