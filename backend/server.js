const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", require("./routes/authRoutes"));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
