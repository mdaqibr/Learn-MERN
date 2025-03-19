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
  }
}, { timestamps: true }
);

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

// Get User Data by Email
app.get("/api/users", async (req, res) => {
  try {
    const userEmail = req.query.email;
    console.log(req.query);

    // Find user by email
    const user = await User.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).json({ msg: "User not found." });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({ msg: "Internal server error." });
  }
});

/*
  When to use req.query, req.params, req.body?
  1. url like "/api/users" then use req.body for example when creating the new entry then data came in body.
  2. when url "/api/users/:id" then use req.params [api/user/md.aqib@unthinkable.co].
  3. when url "/users?email=xyz" then use req.query because it is query url.
*/

app.listen(PORT, () => console.log(`Server started on ${PORT} port.`));
