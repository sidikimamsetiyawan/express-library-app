require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');

const usersRoutes = require('./routes/users')
const booksRoutes = require('./routes/books')
const transactionsRoutes = require('./routes/transactions')
const debugsRoutes = require('./routes/debugs')

const categoriesRoutes = require('./routes/categories')

const middlewareLogRequest = require('./middleware/logs')

const app = express();

app.use(middlewareLogRequest)
app.use(express.json())

// Test Connection
// app.use("/", (req, res, next) => {
//     res.send("Hello World")
// })

// app.post("/", (req, res) => {
//     res.send("Hello World - POST")
// })

app.use('/users', usersRoutes)
app.use('/books', booksRoutes)
app.use('/transactions', transactionsRoutes)
app.use('/debugs', debugsRoutes)
app.use('/categories', categoriesRoutes)

app.listen(PORT, () => {
    console.log(`Server berhasil running di port ${PORT}`)
})