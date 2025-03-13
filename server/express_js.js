// npm install express

/*
Understanding Middleware in Express.js
Middleware functions in Express.js are functions that have access to:

Request (req) – Information about the incoming request.
Response (res) – Controls what is sent back to the client.
Next (next()) – Passes control to the next middleware or route.
*/

const express = require("express");
const app = express();

const { handleErrorInMw } = require("./handle_error_in_mw");
const { globalMw } = require("./global_middleware");
const { multipleMw } = require("./multiple_mw");
const { routeLevelMw } = require("./route_level_mw")

// 📌 4. Skipping Middleware (Direct Route Calls)
// If you don’t want to use middleware, define routes directly with app.get(), app.post(), etc.

// No middleware - Direct route handling
app.get("/", (req, res) => {
  res.send("Homepage (No middleware here)");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page (No middleware)");
});

app.get("/profile", (req, res) => {
  res.send(`Hi ${ req.query.user }, welcome to profile page.`);
});


// globalMw(app);
// multipleMw(app);
routeLevelMw(app);
// handleErrorInMw(app);


// ✅ Output: No middleware will be called—only route handlers respond.

app.listen(8000, () => console.log("Server started..."));


