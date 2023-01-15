const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const helmet = require("helmet");
const { serverPort } = require("./config/env.dev");

const app = express();

//Connect Database
connectDB();

const corsConf = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

//Init Middleware
app.use([express.json(), cors(corsConf), helmet()]);

app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));

const PORT = serverPort || 6060;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
