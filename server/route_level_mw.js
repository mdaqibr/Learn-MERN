
/*
  📌 3. Route-Level Middleware
  You can apply middleware directly to specific routes.
*/

function routeLevelMw(app) {

  // Route-Level Middleware
  const logMiddleware = (req, res, next) => {
    console.log("Route-level middleware for this route only.");
    next();
  };

  // Apply middleware only to "/profile" route
  app.get("/route_profile", logMiddleware, (req, res) => {
    res.send("User route Profile");
  });

  app.get("/hehehe", (req, res) => {
    res.send("He HE hE page.")
  })
}

// ✅ Output: Only /profile will trigger this middleware.

module.exports = { routeLevelMw };