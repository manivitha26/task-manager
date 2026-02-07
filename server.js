const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/taskdb")
.then(()=>console.log("MongoDB connected"));

app.use("/api/tasks", require("./routes/taskRoutes"));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
