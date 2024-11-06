const UsersModel = require('../models/users')
// const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const validator = require("validator");

// Helper function to validate email domain
const isValidEmail = (email) => {
    const allowedDomains = ["@gmail.com", "@hotmail.com", "@yahoo.com"];
    return (
        validator.isEmail(email) &&
        allowedDomains.some((domain) => email.endsWith(domain))
    );
};

// Helper function to validate password
const isValidPassword = (password) => {
    return (
      /^[a-zA-Z0-9]{8,}$/.test(password) && // Alphanumeric, at least 8 characters
      /[A-Z]/.test(password) &&             // At least one uppercase letter
      !/[^a-zA-Z0-9]/.test(password)        // No special characters
    );
};

const createNewUsers = async (req, res) => {
    // Pemangillan model bersifat asynchronous
    const users = []; 
    try {

        const usersToRegister = req.body;
        const errors = [];

        usersToRegister.forEach((user) => {
            const { email, password } = user;

            // Check if the email is already registered
            if (users.some((u) => u.email === email)) {
                errors.push({ email, error: "Email already registered." });
                return;
            }

            // Validate email
            if (!isValidEmail(email)) {
                errors.push({ email, error: "Invalid email domain." });
                return;
            }

            // Validate password
            if (!isValidPassword(password)) {
                errors.push({
                    email,
                    error:
                    "Password must be 8 alphanumeric characters with at least one uppercase letter and no special characters.",
                });
                return;
            }

            // Hash password and add user
            const hashedPassword = bcrypt.hashSync(password, 10);
            users.push({ email, password: hashedPassword });
        });

        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }
        console.log(usersToRegister);
        console.log(users);

        for (const data of usersToRegister) {
            data["password"] = users[0]["password"];
            await UsersModel.createNewUser(data);
        }
        // console.log(data);
        return res.json({
            message: 'users registered successfully.',
            data: usersToRegister
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(
            {
                message: 'Something went wrong.',
                error: error
            });
    }
    
}

const loginUsers = async (req, res) => {
    
    const { email, password } = req.body;

    try {
        
        const [rows] = await UsersModel.loginUsers(email);

        if (rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }
      
        const user = rows[0];

        // const hashedPassword = bcrypt.hashSync(password, 10);

        console.log(password)
        console.log(user.password)
        // Compare the input password with the hashed password in the database
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        console.log("Test-1");
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }

        res.status(201).json({
            message: 'Login successfuly.',
            data: req.body
        })

    } catch (error) {
        console.log(error);
        res.status(500).send(
            {
                message: 'Something went wrong.',
                error: error
            });
    }
    
}

module.exports = {
    createNewUsers,
    loginUsers,
}