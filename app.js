const express = require("express");
const cors = require("cors");
const booksRouter = require('./app/routes/book.route');


const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/books", booksRouter);

app.get("/", (req, res) => {
    res.json({message: "Welcome to MBB server!"});
});

app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});
// define error-handling middleware last, after other app.use() and routes calls
app.use((err, req, res, next) => {

    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
    });
});

module.exports = app;