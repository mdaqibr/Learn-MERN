console.log("Start Mongo DB");

const express = require("express");
const app = express();
const PORT = 8000;

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Import Mongo: // npm install mongoose
const mongoose = require("mongoose");

// Connect Mongo
mongoose
  .connect("mongodb://127.0.0.1:27017/mongo-project-1")
  .then(() => console.log("Mongo DB connected"))
  .catch((error) =>
    console.log(`Error (${error}) occured while connecting mongo db.`)
  );

// Users schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  gender: {
    type: String,
  },
  jobTitle: {
    type: String,
  },
});

// Define DB table
const User = mongoose.model("user", userSchema);

// Start CRUD:

// Create New User
app.post("/api/users", async(req, res) => {
  try {
    const { firstName, lastName, email, gender, jobTitle } = req.body;

    if (!firstName || !email) {
      return res.status(400).json({ msg: "First name and email are required." });
    }

    const newUser = await User.create({ firstName, lastName, email, gender, jobTitle });

    console.log("New User:", newUser);

    return res.status(201).json({ msg: "User created successfully.", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ msg: "Internal Server Error", error: error.message });
  }
});

app.listen(PORT, () => console.log(`Server started on ${PORT} port.`));
